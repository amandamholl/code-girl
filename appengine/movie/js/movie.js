/**
 * Blockly Games: Movie
 *
 * Copyright 2014 Google Inc.
 * https://github.com/google/blockly-games
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Movie application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Movie');

goog.require('Scrubber');
goog.require('Movie.soy');
goog.require('Movie.Blocks');
goog.require('Movie.Answers');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');

/*
//Draw the superhero
	var ctx = canvas.getContext('2d');
	var img = new Image;      // First create the image...
    img.onload = function(){  // ...then set the onload handler...
    	ctx.drawImage(img,-15,0, 450, 600);
    };
  img.src = "./movie/superhero.jpg";      // *then* set the .src and start it loading.
*/

BlocklyGames.NAME = 'movie';

/**
 * Go to the next level.
 */
BlocklyInterface.nextLevel = function() {
  if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname +
        '?lang=' + BlocklyGames.LANG + '&level=' + (BlocklyGames.LEVEL + 1);
  } else {
    BlocklyInterface.indexPage();
  }
};

Movie.HEIGHT = 600;
Movie.WIDTH = 400;

/**
 * Number of frames in the animation.
 * First level has only one frame (#0).  The rest have 101 (#0-#100).
 * @type number
 */
Movie.FRAMES = 0;

/**
 * Array of pixel errors, one per frame.
 */
Movie.pixelErrors = new Array(Movie.FRAMES);

/**
 * Has the level been solved once?
 */
Movie.success = false;

/**
 * Current frame being shown.
 */
Movie.frameNumber = 0;

/**
 * Initialize Blockly and the movie.  Called on page load.
 */
Movie.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Movie.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       level: BlocklyGames.LEVEL,
       maxLevel: BlocklyGames.MAX_LEVEL,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
    blocklyDiv.style.top = Math.max(10, top - window.pageYOffset) + 'px';
    //blocklyDiv.style.left = rtl ? '10px' : '420px';
    blocklyDiv.style.width = (window.innerWidth - 440) + 'px';
  };
  window.addEventListener('scroll', function() {
      onresize();
      Blockly.fireUiEvent(window, 'resize');
    });
  window.addEventListener('resize', onresize);
  onresize();

  if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
    Blockly.FieldColour.COLUMNS = 3;
    Blockly.FieldColour.COLOURS =
        ['#dd3858', '#ff9559', '#fcd6ad',
         '#000000', '#43949b', '#cc33cc',
         '#fae5e2', '#999999', '#f8b9a7'];
  }

  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {'media': 'media/',
       'rtl': rtl,
       'toolbox': toolbox,
       'trashcan': true});
  // Prevent collisions with user-defined functions or variables.
  Blockly.JavaScript.addReservedWords('circle,rect,line,penColour,time');

  if (document.getElementById('submitButton')) {
    BlocklyGames.bindClick('submitButton', Movie.submitToReddit);
  }

  var defaultXml = '<xml></xml>';
  BlocklyInterface.loadBlocks(defaultXml, false);

  Movie.ctxDisplay = document.getElementById('display').getContext('2d');
  Movie.ctxDisplay.globalCompositeOperation = 'source-over';
  Movie.ctxScratch = document.getElementById('scratch').getContext('2d');
  //Movie.renderHatching_();
  
  Movie.renderSuperhero_();
  // Render the frame zero answer because we need it right now.
  /*Movie.renderAnswer_(0);
  // Remaining answers may be computed later without slowing down page load.
  function renderRemainingAnswers() {
    for (var f = 1; f <= Movie.FRAMES; f++) {
      Movie.renderAnswer_(f);
    }
  }
  setTimeout(renderRemainingAnswers, 1);*/
  Movie.renderAxies_();
  Movie.display();
  Blockly.addChangeListener(Movie.display);

  // Initialize the scrubber.
  var scrubberSvg = document.getElementById('scrubber');
  Movie.frameScrubber = new Scrubber(scrubberSvg, Movie.display);
  if (BlocklyGames.LEVEL == 1) {
    scrubberSvg.style.display = 'none';
  }

  // Preload the win sound.
  Blockly.loadAudio_(['movie/win.mp3', 'movie/win.ogg'], 'win');
  // Lazy-load the syntax-highlighting.
  setTimeout(BlocklyInterface.importPrettify, 1);

  BlocklyGames.bindClick('helpButton', Movie.showHelp);
  if (location.hash.length < 2 &&
      !BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME,
                                         BlocklyGames.LEVEL)) {
    setTimeout(Movie.showHelp, 1000);
    if (BlocklyGames.LEVEL == 9) {
      setTimeout(BlocklyDialogs.abortOffer, 5 * 60 * 1000);
    }
  }
};

if (window.location.pathname.match(/readonly.html$/)) {
  window.addEventListener('load', function() {
    BlocklyInterface.initReadonly(Movie.soy.readonly());
  });
} else {
  window.addEventListener('load', Movie.init);
}

/**
 * Show the help pop-up.
 */
Movie.showHelp = function() {
  var help = document.getElementById('help');
  var button = document.getElementById('helpButton');
  var style = {
    width: '50%',
    left: '25%',
    top: '5em'
  };

  BlocklyDialogs.showDialog(help, button, true, true, style, Movie.hideHelp);
  BlocklyDialogs.startDialogKeyDown();
};

/**
 * Hide the help pop-up.
 */
Movie.hideHelp = function() {
  BlocklyDialogs.stopDialogKeyDown();
};

/**
 * On startup draw the expected answers and save it to answer canvases.
 * @param {number} f Frame number (0-100).
 * @private
 */
Movie.renderAnswer_ = function(f) {
  var div = document.getElementById('visualization');
 	alert('Rendering answer');
  // <canvas id="answer1" width="400" height="400" style="display: none">
  // </canvas>
  
  for(var i = BlocklyGames.LEVEL; i > 0; i -= 1){
	var canvas = document.createElement('canvas');
  canvas.id = 'answer' + i;
  canvas.width = Movie.WIDTH;
  canvas.height = Movie.HEIGHT;
  canvas.style.display = 'none';
  div.appendChild(canvas);

  // Clear the scratch canvas.
  Movie.ctxScratch.canvas.width = Movie.ctxScratch.canvas.width;
  // Render the answer.
  
  Movie.answer(i);
  
  // Copy the scratch canvas to the answer canvas.
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'copy';
  ctx.drawImage(Movie.ctxScratch.canvas, 0, 0);
  alert(i);
  }
};

/**
 * On startup draw superhero that will be displayed behind
 * @private
 */
Movie.renderSuperhero_ = function() {
	//alert('here');
  var ctx = document.getElementById('superhero').getContext('2d');
  ctx.save();
  ctx.scale(.55,.55);
  ctx.translate(0,30);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#a3550b";
  ctx.beginPath();
  ctx.moveTo(529.4,305.3);
  ctx.bezierCurveTo(528.5,267.8,507.4,243.4,489.2,193.3);
  ctx.bezierCurveTo(484.3,179.8,495.2,158.10000000000002,480.5,110.10000000000001);
  ctx.bezierCurveTo(463.1,52.900000000000006,412.1,38.60000000000001,376.3,38.60000000000001);
  ctx.bezierCurveTo(329.1,38.60000000000001,281.9,62.60000000000001,270.5,109.50000000000001);
  ctx.bezierCurveTo(258.1,160.60000000000002,265,179.40000000000003,260.7,195.10000000000002);
  ctx.bezierCurveTo(255.29999999999998,215.00000000000003,216.2,276.70000000000005,221.1,314.1);
  ctx.bezierCurveTo(225.4,347.5,237.4,357.5,237.4,357.5);
  ctx.bezierCurveTo(237.4,357.5,239,315.3,250.4,298.3);
  ctx.bezierCurveTo(252.3,295.5,248.70000000000002,320.2,252,342.3);
  ctx.bezierCurveTo(256.3,371,278.6,371.6,278.6,371.6);
  ctx.bezierCurveTo(278.6,371.6,274.20000000000005,363.20000000000005,274,357.6);
  ctx.bezierCurveTo(273.7,343.5,279.3,335.8,279.3,335.8);
  ctx.bezierCurveTo(279.3,335.8,284.5,350.3,286.1,353.40000000000003);
  ctx.bezierCurveTo(299.1,377.50000000000006,304,372.20000000000005,304,372.20000000000005);
  ctx.bezierCurveTo(304,372.20000000000005,298.6,349.90000000000003,304,348.70000000000005);
  ctx.bezierCurveTo(309.4,347.50000000000006,444.6,350.50000000000006,444.6,350.50000000000006);
  ctx.bezierCurveTo(444.6,350.50000000000006,450.6,366.50000000000006,447.3,373.50000000000006);
  ctx.bezierCurveTo(445.6,377.1000000000001,455.8,371.50000000000006,462.7,361.90000000000003);
  ctx.bezierCurveTo(469.09999999999997,353.20000000000005,472.2,340.6,472.2,340.6);
  ctx.bezierCurveTo(472.2,340.6,476.59999999999997,352.40000000000003,477,356.3);
  ctx.bezierCurveTo(477.4,360.8,475.5,374.3,475.5,374.3);
  ctx.bezierCurveTo(475.5,374.3,495,367.5,498.8,342.90000000000003);
  ctx.bezierCurveTo(501.1,327.90000000000003,499.90000000000003,297.20000000000005,499.90000000000003,297.20000000000005);
  ctx.bezierCurveTo(512.4000000000001,320.1,512.9000000000001,358.80000000000007,512.9000000000001,358.80000000000007);
  ctx.bezierCurveTo(512.9000000000001,358.80000000000007,530.2,336.3,529.4,305.3);
  ctx.closePath();
  ctx.moveTo(464.8,205.8);
  ctx.bezierCurveTo(448.7,246.3,398.1,265.2,375.5,265.2);
  ctx.bezierCurveTo(344.8,265.2,294.8,237.39999999999998,285.1,205.1);
  ctx.bezierCurveTo(285.1,205.1,265.70000000000005,202.6,265.70000000000005,184.2);
  ctx.bezierCurveTo(265.70000000000005,162.7,280.80000000000007,162.1,280.80000000000007,162.1);
  ctx.bezierCurveTo(280.30000000000007,176,285.6000000000001,180.4,285.6000000000001,180.4);
  ctx.bezierCurveTo(285.6000000000001,180.4,284.7000000000001,174.70000000000002,290.4000000000001,168.4);
  ctx.bezierCurveTo(297.0000000000001,161.1,308.1000000000001,158.3,322.7000000000001,146.3);
  ctx.bezierCurveTo(337.2000000000001,134.3,343.7000000000001,109.00000000000001,343.7000000000001,109.00000000000001);
  ctx.bezierCurveTo(343.7000000000001,109.00000000000001,346.9000000000001,122.90000000000002,369.0000000000001,143.10000000000002);
  ctx.bezierCurveTo(391.10000000000014,163.3,414.2000000000001,152.00000000000003,414.2000000000001,152.00000000000003);
  ctx.bezierCurveTo(414.2000000000001,152.00000000000003,406.7000000000001,151.40000000000003,398.6000000000001,145.00000000000003);
  ctx.bezierCurveTo(390.50000000000006,138.70000000000002,388.9000000000001,128.60000000000002,388.9000000000001,128.60000000000002);
  ctx.bezierCurveTo(388.9000000000001,128.60000000000002,391.1000000000001,140.00000000000003,411.5000000000001,146.90000000000003);
  ctx.bezierCurveTo(431.90000000000015,153.80000000000004,443.2000000000001,152.60000000000002,451.3000000000001,158.30000000000004);
  ctx.bezierCurveTo(459.40000000000015,164.00000000000003,459.40000000000015,187.10000000000005,459.40000000000015,187.10000000000005);
  ctx.bezierCurveTo(459.40000000000015,187.10000000000005,464.10000000000014,181.00000000000006,467.10000000000014,175.20000000000005);
  ctx.bezierCurveTo(468.40000000000015,172.70000000000005,470.10000000000014,162.80000000000004,470.10000000000014,162.80000000000004);
  ctx.bezierCurveTo(470.10000000000014,162.80000000000004,483.0000000000001,164.70000000000005,483.0000000000001,185.20000000000005);
  ctx.bezierCurveTo(483.1,202.1,464.8,205.8,464.8,205.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(470.2,162.8);
  ctx.bezierCurveTo(470.2,162.8,468.5,172.70000000000002,467.2,175.20000000000002);
  ctx.bezierCurveTo(464.09999999999997,181.00000000000003,459.5,187.10000000000002,459.5,187.10000000000002);
  ctx.bezierCurveTo(459.5,187.10000000000002,459.5,164.00000000000003,451.4,158.3);
  ctx.bezierCurveTo(443.29999999999995,152.60000000000002,432,153.9,411.59999999999997,146.9);
  ctx.bezierCurveTo(391.19999999999993,139.9,389,128.7,389,128.7);
  ctx.bezierCurveTo(389,128.7,390.6,138.79999999999998,398.7,145.1);
  ctx.bezierCurveTo(406.8,151.4,414.3,152.1,414.3,152.1);
  ctx.bezierCurveTo(414.3,152.1,391.2,163.5,369.1,143.2);
  ctx.bezierCurveTo(347,122.99999999999999,343.8,109.1,343.8,109.1);
  ctx.bezierCurveTo(343.8,109.1,337.3,134.4,322.8,146.39999999999998);
  ctx.bezierCurveTo(308.3,158.39999999999998,297.1,161.2,290.5,168.49999999999997);
  ctx.bezierCurveTo(284.8,174.79999999999998,285.7,180.49999999999997,285.7,180.49999999999997);
  ctx.bezierCurveTo(285.7,180.49999999999997,280.3,176.09999999999997,280.9,162.19999999999996);
  ctx.bezierCurveTo(280.9,162.19999999999996,265.79999999999995,162.79999999999995,265.79999999999995,184.29999999999995);
  ctx.bezierCurveTo(265.79999999999995,202.59999999999997,285.19999999999993,205.19999999999996,285.19999999999993,205.19999999999996);
  ctx.bezierCurveTo(294.8999999999999,237.39999999999998,344.8999999999999,265.29999999999995,375.5999999999999,265.29999999999995);
  ctx.bezierCurveTo(398.19999999999993,265.29999999999995,448.7999999999999,246.29999999999995,464.8999999999999,205.89999999999995);
  ctx.bezierCurveTo(464.8999999999999,205.89999999999995,483.19999999999993,202.09999999999994,483.19999999999993,185.29999999999995);
  ctx.bezierCurveTo(483.1,164.7,470.2,162.8,470.2,162.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 0.25;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(424,173.2);
  ctx.bezierCurveTo(424,173.2,415.3,183.1,404.1,181.2);
  ctx.bezierCurveTo(393,179.29999999999998,389.70000000000005,168.2,389.70000000000005,168.2);
  ctx.bezierCurveTo(389.70000000000005,168.2,393.70000000000005,152.7,406.90000000000003,152.79999999999998);
  ctx.bezierCurveTo(417.1,152.8,424.1,161.2,424,173.2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#29abe2";
  ctx.strokeStyle = "#29abe2";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(406.9,177.6);
  ctx.lineTo(406.9,177.6);
  ctx.bezierCurveTo(413.7,177.6,419.29999999999995,172.1,419.29999999999995,165.2);
  ctx.lineTo(419.29999999999995,165.2);
  ctx.bezierCurveTo(419.29999999999995,158.39999999999998,413.79999999999995,152.79999999999998,406.9,152.79999999999998);
  ctx.lineTo(406.9,152.79999999999998);
  ctx.bezierCurveTo(400.09999999999997,152.79999999999998,394.5,158.29999999999998,394.5,165.2);
  ctx.lineTo(394.5,165.2);
  ctx.bezierCurveTo(394.5,172,400,177.6,406.9,177.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(406.4,170.9);
  ctx.lineTo(406.4,170.9);
  ctx.bezierCurveTo(410.9,170.9,414.59999999999997,167.20000000000002,414.59999999999997,162.70000000000002);
  ctx.lineTo(414.59999999999997,162.70000000000002);
  ctx.bezierCurveTo(414.59999999999997,158.20000000000002,410.9,154.50000000000003,406.4,154.50000000000003);
  ctx.lineTo(406.4,154.50000000000003);
  ctx.bezierCurveTo(401.9,154.50000000000003,398.2,158.20000000000002,398.2,162.70000000000002);
  ctx.lineTo(398.2,162.70000000000002);
  ctx.bezierCurveTo(398.2,167.3,401.9,170.9,406.4,170.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(412.4,171.8);
  ctx.lineTo(412.4,171.8);
  ctx.bezierCurveTo(413.7,171.8,414.79999999999995,170.70000000000002,414.79999999999995,169.4);
  ctx.lineTo(414.79999999999995,169.4);
  ctx.bezierCurveTo(414.79999999999995,168.1,413.69999999999993,167,412.4,167);
  ctx.lineTo(412.4,167);
  ctx.bezierCurveTo(411.09999999999997,167,410,168.1,410,169.4);
  ctx.lineTo(410,169.4);
  ctx.bezierCurveTo(410.1,170.8,411.1,171.8,412.4,171.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(431.7,163.9);
  ctx.bezierCurveTo(431.59999999999997,163.9,426.59999999999997,165,423.5,161.8);
  ctx.bezierCurveTo(422.8,161.10000000000002,422.1,160.20000000000002,421.4,159.3);
  ctx.bezierCurveTo(418.5,155.60000000000002,414.9,151.10000000000002,406.9,151.10000000000002);
  ctx.bezierCurveTo(397,151.10000000000002,392.9,159.70000000000002,390.2,165.40000000000003);
  ctx.lineTo(389.8,166.70000000000005);
  ctx.lineTo(390,166.30000000000004);
  ctx.bezierCurveTo(392.6,160.70000000000005,398.2,153.10000000000005,406.9,153.10000000000005);
  ctx.bezierCurveTo(414,153.10000000000005,417.09999999999997,157.10000000000005,419.9,160.60000000000005);
  ctx.bezierCurveTo(420.7,161.60000000000005,421.4,162.50000000000006,422.09999999999997,163.30000000000004);
  ctx.bezierCurveTo(425.99999999999994,167.30000000000004,431.9,163.90000000000003,432.09999999999997,163.90000000000003);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 0.25;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(326.8,173.2);
  ctx.bezierCurveTo(326.8,173.2,335.5,183.1,346.7,181.2);
  ctx.bezierCurveTo(357.8,179.29999999999998,361.09999999999997,168.2,361.09999999999997,168.2);
  ctx.bezierCurveTo(361.09999999999997,168.2,357.09999999999997,152.7,343.9,152.79999999999998);
  ctx.bezierCurveTo(333.7,152.8,326.8,161.2,326.8,173.2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#29abe2";
  ctx.strokeStyle = "#29abe2";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(344,177.6);
  ctx.lineTo(344,177.6);
  ctx.bezierCurveTo(337.2,177.6,331.6,172.1,331.6,165.2);
  ctx.lineTo(331.6,165.2);
  ctx.bezierCurveTo(331.6,158.39999999999998,337.1,152.79999999999998,344,152.79999999999998);
  ctx.lineTo(344,152.79999999999998);
  ctx.bezierCurveTo(350.8,152.79999999999998,356.4,158.29999999999998,356.4,165.2);
  ctx.lineTo(356.4,165.2);
  ctx.bezierCurveTo(356.4,172,350.9,177.6,344,177.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(344.5,170.9);
  ctx.lineTo(344.5,170.9);
  ctx.bezierCurveTo(340,170.9,336.3,167.20000000000002,336.3,162.70000000000002);
  ctx.lineTo(336.3,162.70000000000002);
  ctx.bezierCurveTo(336.3,158.20000000000002,340,154.50000000000003,344.5,154.50000000000003);
  ctx.lineTo(344.5,154.50000000000003);
  ctx.bezierCurveTo(349,154.50000000000003,352.7,158.20000000000002,352.7,162.70000000000002);
  ctx.lineTo(352.7,162.70000000000002);
  ctx.bezierCurveTo(352.6,167.3,349,170.9,344.5,170.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(338.5,171.8);
  ctx.lineTo(338.5,171.8);
  ctx.bezierCurveTo(337.2,171.8,336.1,170.70000000000002,336.1,169.4);
  ctx.lineTo(336.1,169.4);
  ctx.bezierCurveTo(336.1,168.1,337.20000000000005,167,338.5,167);
  ctx.lineTo(338.5,167);
  ctx.bezierCurveTo(339.8,167,340.9,168.1,340.9,169.4);
  ctx.lineTo(340.9,169.4);
  ctx.bezierCurveTo(340.8,170.8,339.8,171.8,338.5,171.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(319.1,163.9);
  ctx.bezierCurveTo(319.20000000000005,163.9,324.20000000000005,165,327.3,161.8);
  ctx.bezierCurveTo(328,161.10000000000002,328.7,160.20000000000002,329.40000000000003,159.3);
  ctx.bezierCurveTo(332.3,155.60000000000002,335.90000000000003,151.10000000000002,343.90000000000003,151.10000000000002);
  ctx.bezierCurveTo(353.8,151.10000000000002,357.90000000000003,159.70000000000002,360.6,165.40000000000003);
  ctx.lineTo(361,166.70000000000005);
  ctx.lineTo(360.8,166.30000000000004);
  ctx.bezierCurveTo(358.2,160.70000000000005,352.6,153.10000000000005,343.90000000000003,153.10000000000005);
  ctx.bezierCurveTo(336.8,153.10000000000005,333.70000000000005,157.10000000000005,330.90000000000003,160.60000000000005);
  ctx.bezierCurveTo(330.1,161.60000000000005,329.40000000000003,162.50000000000006,328.70000000000005,163.30000000000004);
  ctx.bezierCurveTo(324.80000000000007,167.30000000000004,318.90000000000003,163.90000000000003,318.70000000000005,163.90000000000003);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(381.2,349.6);
  ctx.bezierCurveTo(380.9,349.6,380.59999999999997,349.70000000000005,380.3,349.70000000000005);
  ctx.bezierCurveTo(380.6,349.6,380.9,349.6,381.2,349.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(379.9,349.7);
  ctx.bezierCurveTo(378.9,349.8,377.9,349.8,376.9,349.8);
  ctx.bezierCurveTo(377.9,349.8,378.9,349.8,379.9,349.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(387.8,348.2);
  ctx.bezierCurveTo(394.90000000000003,346.2,401.3,342.3,406.6,336.3);
  ctx.bezierCurveTo(401.4,341.6,395.2,346,387.8,348.2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(373.4,349.6);
  ctx.bezierCurveTo(373.4,349.6,373.29999999999995,349.6,373.29999999999995,349.6);
  ctx.bezierCurveTo(373.4,349.6,373.4,349.6,373.4,349.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(372.1,349.4);
  ctx.bezierCurveTo(344,344.29999999999995,338.40000000000003,294,338.40000000000003,294);
  ctx.bezierCurveTo(341.00000000000006,322.9,349.8,333.8,356.3,340.8);
  ctx.bezierCurveTo(360.6,345.5,366.1,348.4,372.1,349.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(296,829.8);
  ctx.bezierCurveTo(298.7,827.6999999999999,303.6,826,306.5,825.3);
  ctx.bezierCurveTo(311.2,824.1999999999999,332.7,823.8,340.3,824.9);
  ctx.bezierCurveTo(346.1,825.6999999999999,352.40000000000003,828.8,355.5,832.6);
  ctx.bezierCurveTo(357.4,810.7,360.9,758.9,360.2,677.1);
  ctx.bezierCurveTo(335.59999999999997,674.6,307.8,662.8000000000001,295.1,654.9);
  ctx.bezierCurveTo(292.2,709.8,294.8,795.2,296,829.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(355.9,823.8);
  ctx.bezierCurveTo(355.79999999999995,823,355.09999999999997,822.0999999999999,354.09999999999997,821.4);
  ctx.bezierCurveTo(351.09999999999997,819.1,344.99999999999994,817.1,339.29999999999995,816.6);
  ctx.bezierCurveTo(331.4,815.9,311.49999999999994,816.2,306.29999999999995,817);
  ctx.bezierCurveTo(303.4,817.5,298.69999999999993,818.5,295.99999999999994,819.9);
  ctx.bezierCurveTo(294.99999999999994,820.4,294.19999999999993,821,293.99999999999994,821.5);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(385.7,674.5);
  ctx.bezierCurveTo(386.59999999999997,757.6,391.09999999999997,810.1,393.4,832.2);
  ctx.bezierCurveTo(396.29999999999995,828.4000000000001,402.4,825.1,408.09999999999997,824.2);
  ctx.bezierCurveTo(415.59999999999997,823,436.49999999999994,822.9000000000001,441.09999999999997,824);
  ctx.bezierCurveTo(443.99999999999994,824.6,448.7,826.2,451.49999999999994,828.3);
  ctx.bezierCurveTo(451.99999999999994,795.3,452.69999999999993,716.4,449.49999999999994,661.0999999999999);
  ctx.bezierCurveTo(437.69999999999993,664.8,426.3999999999999,665.9999999999999,421.59999999999997,666.0999999999999);
  ctx.bezierCurveTo(415.3,666.1,404.1,671.5,385.7,674.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(380.3,349.7);
  ctx.bezierCurveTo(380.2,349.7,380.1,349.7,380,349.7);
  ctx.bezierCurveTo(380.1,349.7,380.2,349.7,380.3,349.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(373.3,349.6);
  ctx.bezierCurveTo(372.90000000000003,349.5,372.5,349.5,372.1,349.40000000000003);
  ctx.bezierCurveTo(372.5,349.5,372.9,349.5,373.3,349.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(381.2,349.6);
  ctx.bezierCurveTo(383.5,349.3,385.7,348.90000000000003,387.8,348.20000000000005);
  ctx.bezierCurveTo(386.1,348.70000000000005,384.5,349.1,382.7,349.30000000000007);
  ctx.bezierCurveTo(382.2,349.4,381.7,349.5,381.2,349.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(376.9,349.8);
  ctx.bezierCurveTo(376.9,349.8,376.9,349.8,376.9,349.8);
  ctx.bezierCurveTo(375.79999999999995,349.8,374.59999999999997,349.7,373.5,349.6);
  ctx.bezierCurveTo(374.6,349.7,375.7,349.8,376.9,349.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(406.6,336.3);
  ctx.bezierCurveTo(420.8,322,427,301.5,427,301.5);
  ctx.bezierCurveTo(427,301.5,426.9,301.4,426.7,301.3);
  ctx.bezierCurveTo(425,304.8,415.3,324.6,409.09999999999997,333.1);
  ctx.bezierCurveTo(408.3,334.3,407.5,335.4,406.6,336.3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f5d6cb";
  ctx.strokeStyle = "#f5d6cb";
  ctx.lineWidth = 3;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(436.7,506);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(650.1,376.1);
  ctx.bezierCurveTo(650.1,376.1,645.6,379.40000000000003,645.6,379.40000000000003);
  ctx.bezierCurveTo(585.5,442.8,566,441.3,562.8000000000001,441.20000000000005);
  ctx.lineTo(562.8000000000001,441.20000000000005);
  ctx.bezierCurveTo(547.9000000000001,441.50000000000006,493.9000000000001,399.80000000000007,479.70000000000005,379.00000000000006);
  ctx.bezierCurveTo(470.90000000000003,366.1000000000001,446.00000000000006,330.80000000000007,452.90000000000003,318.20000000000005);
  ctx.lineTo(458.90000000000003,320.1);
  ctx.bezierCurveTo(468.70000000000005,325.70000000000005,486.6,337.3,492.90000000000003,343.5);
  ctx.bezierCurveTo(499.3,349.7,506.40000000000003,356.1,512.3000000000001,358);
  ctx.bezierCurveTo(514.0000000000001,358.6,515.9000000000001,359,517.7,359.3);
  ctx.bezierCurveTo(539,384.8,557.6,410.90000000000003,561.3000000000001,407.40000000000003);
  ctx.bezierCurveTo(567.0000000000001,405.3,608.9000000000001,379.6,627.6,364.1);
  ctx.bezierCurveTo(630.4,361.8,632.8000000000001,359.8,634.7,358.20000000000005);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(623.7,366.7);
  ctx.lineTo(634.3,393.5);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(394.2,262.5);
  ctx.bezierCurveTo(394.3,262.4,394.5,262.4,394.59999999999997,262.4);
  ctx.lineTo(394.59999999999997,262.4);
  ctx.lineTo(363.7,263.7);
  ctx.lineTo(363.7,264);
  ctx.bezierCurveTo(366.4,264.4,372.5,265.1,378.5,265.1);
  ctx.bezierCurveTo(387,265.2,394.1,262.6,394.2,262.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(394.3,284);
  ctx.lineTo(394.3,265);
  ctx.bezierCurveTo(392.6,265.6,386.1,267.7,378.40000000000003,267.7);
  ctx.bezierCurveTo(378.3,267.7,378.20000000000005,267.7,378.20000000000005,267.7);
  ctx.bezierCurveTo(372.30000000000007,267.7,366.6,267,363.80000000000007,266.59999999999997);
  ctx.lineTo(363.80000000000007,283.4);
  ctx.bezierCurveTo(356.9000000000001,285,336.70000000000005,293.79999999999995,336.1000000000001,294);
  ctx.bezierCurveTo(333.4000000000001,295.2,339.9000000000001,312.2,340.6000000000001,314.2);
  ctx.bezierCurveTo(344.7000000000001,326.5,351.2000000000001,340.4,363.1000000000001,346.8);
  ctx.bezierCurveTo(393.9000000000001,363.40000000000003,416.00000000000006,323.5,426.00000000000006,297.1);
  ctx.bezierCurveTo(423.7,295.5,405.1,288.2,394.3,284);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#efd0b4";
  ctx.beginPath();
  ctx.moveTo(378.4,268);
  ctx.bezierCurveTo(386.09999999999997,268,392,265.6,394,265);
  ctx.lineTo(394,262.4);
  ctx.bezierCurveTo(394,262.4,393.9,262.4,393.7,262.5);
  ctx.bezierCurveTo(393.59999999999997,262.5,386.8,265.1,378.4,265.2);
  ctx.bezierCurveTo(372.4,265.2,365.9,264.5,363.9,264.09999999999997);
  ctx.lineTo(363.9,266.59999999999997);
  ctx.bezierCurveTo(366.9,266.99999999999994,372.2,267.99999999999994,378.09999999999997,267.99999999999994);
  ctx.bezierCurveTo(378.3,268,378.4,268,378.4,268);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(101.3,370);
  ctx.bezierCurveTo(101.3,370,105.7,373.5,105.7,373.5);
  ctx.bezierCurveTo(164.1,438.9,183.8,438.1,187.10000000000002,438.1);
  ctx.lineTo(187.10000000000002,438.1);
  ctx.bezierCurveTo(202.10000000000002,438.90000000000003,258.40000000000003,399,273.5,378.70000000000005);
  ctx.bezierCurveTo(282.9,366.1,309.4,331.6,302.9,318.80000000000007);
  ctx.lineTo(296.79999999999995,320.50000000000006);
  ctx.bezierCurveTo(286.69999999999993,325.80000000000007,268.19999999999993,336.70000000000005,261.49999999999994,342.70000000000005);
  ctx.bezierCurveTo(254.79999999999995,348.6,247.39999999999995,354.80000000000007,241.29999999999995,356.6);
  ctx.bezierCurveTo(239.49999999999994,357.1,237.69999999999996,357.5,235.69999999999996,357.70000000000005);
  ctx.bezierCurveTo(213.19999999999996,382.50000000000006,193.39999999999998,408.00000000000006,189.79999999999995,404.30000000000007);
  ctx.bezierCurveTo(184.19999999999996,402.00000000000006,142.69999999999996,374.9000000000001,124.29999999999995,358.80000000000007);
  ctx.bezierCurveTo(121.59999999999995,356.4000000000001,119.19999999999996,354.30000000000007,117.29999999999995,352.70000000000005);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(128.4,361.4);
  ctx.lineTo(116.6,387.9);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.beginPath();
  ctx.moveTo(467,307.9);
  ctx.bezierCurveTo(461.6,303.09999999999997,458,300.5,446.1,297);
  ctx.bezierCurveTo(443.90000000000003,296.4,440.90000000000003,293.9,420.90000000000003,293.8);
  ctx.lineTo(420.90000000000003,295);
  ctx.bezierCurveTo(420.90000000000003,295,418.8,306.6,414.3,311.6);
  ctx.bezierCurveTo(408,318.70000000000005,397,324.3,384.90000000000003,325);
  ctx.bezierCurveTo(370.20000000000005,325.8,361.00000000000006,320.7,355.3,316.7);
  ctx.bezierCurveTo(345.90000000000003,310.09999999999997,337.5,296.9,335.90000000000003,294.2);
  ctx.lineTo(336.1,293.9);
  ctx.bezierCurveTo(336,293.9,335.8,293.9,335.70000000000005,293.9);
  ctx.bezierCurveTo(335.6,293.79999999999995,335.6,293.7,335.6,293.7);
  ctx.bezierCurveTo(335.6,293.7,335.20000000000005,293.8,334.40000000000003,293.9);
  ctx.bezierCurveTo(318.6,293.79999999999995,316.00000000000006,293.9,303.00000000000006,296.29999999999995);
  ctx.bezierCurveTo(292.70000000000005,298.19999999999993,285.50000000000006,301.9,280.40000000000003,307.09999999999997);
  ctx.bezierCurveTo(275.40000000000003,312.2,246.20000000000005,340.2,234.20000000000005,357.9);
  ctx.bezierCurveTo(239.70000000000005,370.7,257.20000000000005,379.59999999999997,272.00000000000006,383.29999999999995);
  ctx.lineTo(280.30000000000007,374.69999999999993);
  ctx.bezierCurveTo(282.4000000000001,404.5999999999999,291.70000000000005,419.49999999999994,293.1000000000001,425.79999999999995);
  ctx.bezierCurveTo(294.6000000000001,432.59999999999997,295.80000000000007,433.49999999999994,297.7000000000001,461.19999999999993);
  ctx.bezierCurveTo(298.2000000000001,467.99999999999994,296.1000000000001,512.6999999999999,293.1000000000001,521.8);
  ctx.bezierCurveTo(290.1000000000001,530.9,290.30000000000007,547.5,288.7000000000001,558.0999999999999);
  ctx.bezierCurveTo(287.2000000000001,568.6999999999999,283.4000000000001,607.9999999999999,283.4000000000001,607.9999999999999);
  ctx.bezierCurveTo(283.4000000000001,607.9999999999999,318.2000000000001,618.5999999999999,346.9000000000001,620.7999999999998);
  ctx.bezierCurveTo(375.6000000000001,623.0999999999998,441.5000000000001,618.5999999999998,452.80000000000007,616.2999999999998);
  ctx.bezierCurveTo(464.1000000000001,613.9999999999999,468.70000000000005,606.4999999999999,469.50000000000006,603.3999999999999);
  ctx.bezierCurveTo(470.30000000000007,592.7999999999998,461.90000000000003,529.9999999999999,456.70000000000005,516.3999999999999);
  ctx.bezierCurveTo(451.40000000000003,502.79999999999984,453.90000000000003,472.79999999999984,454.90000000000003,461.39999999999986);
  ctx.bezierCurveTo(456.6,441.79999999999984,457.90000000000003,438.39999999999986,461.3,427.89999999999986);
  ctx.bezierCurveTo(462.7,423.39999999999986,471.3,410.09999999999985,474.7,378.09999999999985);
  ctx.lineTo(480.4,383.29999999999984);
  ctx.bezierCurveTo(494.9,378.6999999999998,511.9,368.79999999999984,516.6,355.59999999999985);
  ctx.bezierCurveTo(503.2,338.9,472.4,312.7,467,307.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(431.6,355.8);
  ctx.lineTo(328.6,355.8);
  ctx.bezierCurveTo(319.3,365.3,310,374.7,300.6,384.2);
  ctx.bezierCurveTo(327.1,414.7,353.6,445.2,380.1,475.7);
  ctx.bezierCurveTo(406.6,445.2,433.1,414.7,459.6,384.2);
  ctx.bezierCurveTo(450.2,374.7,440.9,365.3,431.6,355.8);
  ctx.moveTo(304.7,384.3);
  ctx.bezierCurveTo(313.09999999999997,375.7,321.5,367.2,329.9,358.7);
  ctx.lineTo(430.4,358.7);
  ctx.bezierCurveTo(438.79999999999995,367.2,447.09999999999997,375.7,455.59999999999997,384.3);
  ctx.bezierCurveTo(430.49999999999994,413.2,405.4,442.1,380.19999999999993,471.1);
  ctx.bezierCurveTo(355,442.2,329.9,413.3,304.7,384.3);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(339.7,388.4);
  ctx.bezierCurveTo(339.7,385.29999999999995,340.5,383.4,342.7,381.2);
  ctx.lineTo(356.5,367.4);
  ctx.bezierCurveTo(357.9,366,359.2,365.2,360.7,364.7);
  ctx.lineTo(332.8,364.7);
  ctx.lineTo(313.7,384.09999999999997);
  ctx.lineTo(339.7,413.59999999999997);
  ctx.bezierCurveTo(339.7,413.4,339.7,413.09999999999997,339.7,412.9);
  ctx.lineTo(339.7,388.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(359.2,435.9);
  ctx.lineTo(380.2,459.7);
  ctx.lineTo(400.4,436.7);
  ctx.lineTo(363.7,436.7);
  ctx.bezierCurveTo(361.9,436.8,360.5,436.5,359.2,435.9);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(416.7,374.1);
  ctx.bezierCurveTo(418.9,376.3,418.9,377.90000000000003,416.7,380.1);
  ctx.lineTo(405.8,391);
  ctx.bezierCurveTo(403.6,393.2,402.1,393.3,399.90000000000003,391);
  ctx.lineTo(394.90000000000003,385.7);
  ctx.lineTo(370.1,385.7);
  ctx.lineTo(363.6,392.2);
  ctx.lineTo(363.6,409.2);
  ctx.lineTo(370.1,415.59999999999997);
  ctx.lineTo(395.20000000000005,415.59999999999997);
  ctx.lineTo(400.00000000000006,410.7);
  ctx.bezierCurveTo(402.30000000000007,408.4,403.70000000000005,408.3,405.90000000000003,410.5);
  ctx.lineTo(415.3,420);
  ctx.lineTo(446.7,384.3);
  ctx.lineTo(427.3,364.90000000000003);
  ctx.lineTo(405.90000000000003,364.90000000000003);
  ctx.bezierCurveTo(407.40000000000003,365.3,408.70000000000005,366.1,410.1,367.6);
  ctx.lineTo(416.7,374.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.beginPath();
  ctx.moveTo(496.7,666.8);
  ctx.bezierCurveTo(496,575.6999999999999,459,525.5,459,525.5);
  ctx.lineTo(376,530.1);
  ctx.lineTo(376,530);
  ctx.lineTo(375.8,530);
  ctx.lineTo(376,530);
  ctx.lineTo(376,530.1);
  ctx.lineTo(293.5,523.5);
  ctx.bezierCurveTo(293.5,523.5,256.3,575.7,255.6,666.8);
  ctx.bezierCurveTo(255.4,689.4,315,704.9,376,705.4);
  ctx.lineTo(376,705.4);
  ctx.bezierCurveTo(376,705.4,376.3,705.4,376.5,705.4);
  ctx.bezierCurveTo(376.7,705.4,377,705.4,377,705.4);
  ctx.lineTo(377,705.4);
  ctx.bezierCurveTo(437,704.9,496.9,689.4,496.7,666.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.beginPath();
  ctx.moveTo(292,525.5);
  ctx.lineTo(380.1,561.8);
  ctx.lineTo(459,525.5);
  ctx.lineTo(453.5,496.7);
  ctx.lineTo(380.7,531.9);
  ctx.lineTo(296.3,496.7);
  ctx.lineTo(292,525.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(119.1,353.7);
  ctx.bezierCurveTo(118.89999999999999,353.59999999999997,118.39999999999999,353.2,117.6,352.4);
  ctx.bezierCurveTo(117.19999999999999,352,116.8,351.5,116.39999999999999,351.09999999999997);
  ctx.bezierCurveTo(115.99999999999999,350.59999999999997,115.39999999999999,349.9,114.8,348.7);
  ctx.bezierCurveTo(111.5,342.7,109.2,338.8,107.8,336.8);
  ctx.bezierCurveTo(107.1,335.8,104.39999999999999,333.8,99.8,330.90000000000003);
  ctx.bezierCurveTo(95.7,328.3,93.2,326.90000000000003,92.3,326.6);
  ctx.bezierCurveTo(91.3,326.20000000000005,90.6,326.5,90.3,327.5);
  ctx.bezierCurveTo(90.2,327.9,90.1,328.4,90.2,329);
  ctx.bezierCurveTo(90.2,330.8,90.4,331.9,90.8,332.5);
  ctx.bezierCurveTo(91.7,333.6,93.3,335.1,95.5,337.1);
  ctx.bezierCurveTo(97.7,339.1,99.2,340.6,100.1,341.6);
  ctx.bezierCurveTo(100.39999999999999,342,100.5,342.3,100.39999999999999,342.5);
  ctx.bezierCurveTo(99.99999999999999,343.6,98.8,344.3,96.8,344.5);
  ctx.bezierCurveTo(95.1,344.7,93.7,344.6,92.5,344.1);
  ctx.lineTo(69.1,335.6);
  ctx.bezierCurveTo(68.6,335.40000000000003,68,335.6,67.3,336.1);
  ctx.bezierCurveTo(66.7,336.6,66.3,337.1,66.2,337.5);
  ctx.bezierCurveTo(66,338.1,66,338.7,66.2,339.5);
  ctx.bezierCurveTo(66.4,340.3,66.8,340.7,67.3,340.9);
  ctx.lineTo(87.6,348.29999999999995);
  ctx.bezierCurveTo(88.19999999999999,348.49999999999994,88.3,349.09999999999997,88,350.09999999999997);
  ctx.bezierCurveTo(87.6,350.99999999999994,87.2,351.4,86.8,351.2);
  ctx.lineTo(63.3,342.7);
  ctx.bezierCurveTo(62.8,342.5,62.099999999999994,342.7,61.4,343.2);
  ctx.bezierCurveTo(60.699999999999996,343.7,60.199999999999996,344.3,60,345);
  ctx.bezierCurveTo(59.8,345.6,59.8,346.3,59.9,347.2);
  ctx.bezierCurveTo(60,348.09999999999997,60.4,348.59999999999997,60.9,348.8);
  ctx.lineTo(85.1,357.5);
  ctx.bezierCurveTo(85.39999999999999,357.6,85.6,357.9,85.69999999999999,358.3);
  ctx.bezierCurveTo(85.79999999999998,358.7,85.79999999999998,359.1,85.79999999999998,359.3);
  ctx.bezierCurveTo(85.49999999999999,360.3,84.99999999999999,360.7,84.39999999999998,360.5);
  ctx.lineTo(63.4,353);
  ctx.bezierCurveTo(62.8,352.8,62.1,352.9,61.4,353.3);
  ctx.bezierCurveTo(60.699999999999996,353.7,60.199999999999996,354.2,60,354.8);
  ctx.bezierCurveTo(59.8,355.3,59.9,356,60.2,356.8);
  ctx.bezierCurveTo(60.5,357.6,60.900000000000006,358.1,61.5,358.3);
  ctx.lineTo(83.6,366.3);
  ctx.bezierCurveTo(84.1,366.5,84.3,367.1,84,368);
  ctx.bezierCurveTo(83.7,368.9,83.3,369.2,82.7,369);
  ctx.lineTo(68.7,363.9);
  ctx.bezierCurveTo(68.2,363.7,67.7,363.9,67,364.5);
  ctx.bezierCurveTo(66.3,365.1,66,365.5,65.8,365.9);
  ctx.bezierCurveTo(65.8,366,65.7,366.29999999999995,65.7,366.7);
  ctx.bezierCurveTo(65.7,366.9,65.8,367.3,66.10000000000001,368.09999999999997);
  ctx.bezierCurveTo(66.4,368.79999999999995,66.7,369.2,67.00000000000001,369.29999999999995);
  ctx.lineTo(98.70000000000002,380.79999999999995);
  ctx.bezierCurveTo(99.60000000000002,381.09999999999997,101.30000000000001,380.99999999999994,103.80000000000001,380.4);
  ctx.bezierCurveTo(105.9,379.9,107.60000000000001,379.29999999999995,108.80000000000001,378.7);
  ctx.bezierCurveTo(110.10000000000001,378,111.10000000000001,377.8,111.60000000000001,378);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(119.9,353.4);
  ctx.lineTo(107.3,381.1);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(633.1,359.3);
  ctx.bezierCurveTo(633.3000000000001,359.2,633.8000000000001,358.8,634.6,358);
  ctx.bezierCurveTo(635,357.6,635.4,357.2,635.9,356.7);
  ctx.bezierCurveTo(636.3,356.3,636.9,355.5,637.5,354.4);
  ctx.bezierCurveTo(641,348.59999999999997,643.4,344.7,644.9,342.7);
  ctx.bezierCurveTo(645.6999999999999,341.7,648.4,339.9,653,337.09999999999997);
  ctx.bezierCurveTo(657.2,334.7,659.7,333.29999999999995,660.5,332.99999999999994);
  ctx.bezierCurveTo(661.5,332.69999999999993,662.2,332.99999999999994,662.4,333.99999999999994);
  ctx.bezierCurveTo(662.5,334.3999999999999,662.5,334.8999999999999,662.5,335.49999999999994);
  ctx.bezierCurveTo(662.5,337.29999999999995,662.2,338.3999999999999,661.8,338.8999999999999);
  ctx.bezierCurveTo(660.8,339.99999999999994,659.1999999999999,341.3999999999999,657,343.2999999999999);
  ctx.bezierCurveTo(654.8,345.1999999999999,653.2,346.6999999999999,652.3,347.6999999999999);
  ctx.bezierCurveTo(652,347.9999999999999,651.9,348.39999999999986,651.9,348.59999999999985);
  ctx.bezierCurveTo(652.1999999999999,349.6999999999999,653.4,350.39999999999986,655.3,350.6999999999999);
  ctx.bezierCurveTo(657,350.89999999999986,658.4,350.89999999999986,659.5999999999999,350.4999999999999);
  ctx.lineTo(683,343);
  ctx.bezierCurveTo(683.5,342.8,684.1,343,684.7,343.6);
  ctx.bezierCurveTo(685.3000000000001,344.20000000000005,685.7,344.70000000000005,685.8000000000001,345.1);
  ctx.bezierCurveTo(686.0000000000001,345.70000000000005,685.9000000000001,346.40000000000003,685.7,347.1);
  ctx.bezierCurveTo(685.5,347.8,685.1,348.3,684.6,348.5);
  ctx.lineTo(664.2,355.2);
  ctx.bezierCurveTo(663.6,355.4,663.5,356,663.7,357);
  ctx.bezierCurveTo(664,357.9,664.4000000000001,358.3,664.9000000000001,358.2);
  ctx.lineTo(688.4000000000001,350.5);
  ctx.bezierCurveTo(688.9000000000001,350.3,689.6000000000001,350.5,690.2,351);
  ctx.bezierCurveTo(690.9000000000001,351.5,691.3000000000001,352.1,691.5,352.8);
  ctx.bezierCurveTo(691.7,353.40000000000003,691.7,354.1,691.5,355);
  ctx.bezierCurveTo(691.3,355.9,691,356.4,690.4,356.6);
  ctx.lineTo(666.1999999999999,364.5);
  ctx.bezierCurveTo(665.9,364.6,665.6999999999999,364.9,665.5999999999999,365.3);
  ctx.bezierCurveTo(665.4999999999999,365.7,665.3999999999999,366.1,665.4999999999999,366.3);
  ctx.bezierCurveTo(665.7999999999998,367.3,666.1999999999999,367.7,666.7999999999998,367.5);
  ctx.lineTo(687.9999999999999,360.5);
  ctx.bezierCurveTo(688.5999999999999,360.3,689.1999999999999,360.4,689.8999999999999,360.8);
  ctx.bezierCurveTo(690.5999999999999,361.2,691.0999999999999,361.7,691.1999999999998,362.40000000000003);
  ctx.bezierCurveTo(691.3999999999999,362.90000000000003,691.2999999999998,363.6,690.9999999999998,364.40000000000003);
  ctx.bezierCurveTo(690.6999999999998,365.20000000000005,690.1999999999998,365.70000000000005,689.6999999999998,365.90000000000003);
  ctx.lineTo(667.5999999999998,373.20000000000005);
  ctx.bezierCurveTo(667.0999999999998,373.40000000000003,666.8999999999997,373.90000000000003,667.1999999999998,374.90000000000003);
  ctx.bezierCurveTo(667.4999999999998,375.8,667.8999999999999,376.20000000000005,668.4999999999998,376.00000000000006);
  ctx.lineTo(682.4999999999998,371.40000000000003);
  ctx.bezierCurveTo(682.9999999999998,371.20000000000005,683.4999999999998,371.50000000000006,684.0999999999998,372.00000000000006);
  ctx.bezierCurveTo(684.6999999999998,372.6000000000001,685.0999999999998,373.1000000000001,685.1999999999998,373.40000000000003);
  ctx.bezierCurveTo(685.1999999999998,373.50000000000006,685.2999999999998,373.8,685.2999999999998,374.3);
  ctx.bezierCurveTo(685.2999999999998,374.5,685.0999999999998,374.90000000000003,684.7999999999998,375.6);
  ctx.bezierCurveTo(684.4999999999999,376.3,684.1999999999998,376.70000000000005,683.8999999999999,376.8);
  ctx.lineTo(652.1999999999998,387.2);
  ctx.bezierCurveTo(651.2999999999998,387.5,649.6999999999998,387.3,647.1999999999998,386.59999999999997);
  ctx.bezierCurveTo(645.0999999999998,385.99999999999994,643.4999999999998,385.4,642.2999999999998,384.7);
  ctx.bezierCurveTo(640.9999999999999,384,640.0999999999998,383.7,639.5999999999998,383.9);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(632.3,359);
  ctx.lineTo(643.7,387.1);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#efd0b4";
  ctx.lineWidth = 2;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(377.5,180.6);
  ctx.bezierCurveTo(381.4,196.1,385.8,200,377.8,200);
  ctx.bezierCurveTo(369.8,200,367,200,367,200);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(460.4,616.9);
  ctx.lineTo(424.6,634);
  ctx.lineTo(400.6,583.8);
  ctx.lineTo(445.20000000000005,562.5);
  ctx.lineTo(460.4,616.9);
  ctx.closePath();
  ctx.moveTo(426,630.3);
  ctx.lineTo(457.2,615.4);
  ctx.lineTo(443.5,566.4);
  ctx.lineTo(404.4,585.1);
  ctx.lineTo(426,630.3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(421.6,590.4,2.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(425.9,601.8,2.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(430.1,614.2,2.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(434.3,584.3,2.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(438.3,595.9,2.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(442,608.5,2.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.strokeStyle = "#dd3858";
  ctx.lineWidth = 5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(354,862.5);
  ctx.bezierCurveTo(356.6,850.6,355.9,831.2,355.9,831.2);
  ctx.bezierCurveTo(355.79999999999995,830.4000000000001,355.09999999999997,829.5,354.09999999999997,828.8000000000001);
  ctx.bezierCurveTo(351.09999999999997,826.5000000000001,344.99999999999994,824.5000000000001,339.29999999999995,824.0000000000001);
  ctx.bezierCurveTo(331.79999999999995,823.4000000000001,310.9,823.7000000000002,306.29999999999995,824.4000000000001);
  ctx.bezierCurveTo(303.4,824.9000000000001,298.69999999999993,825.9000000000001,295.99999999999994,827.3000000000001);
  ctx.bezierCurveTo(294.99999999999994,827.8000000000001,294.19999999999993,828.4000000000001,293.99999999999994,828.9000000000001);
  ctx.bezierCurveTo(293.29999999999995,831.0000000000001,294.49999999999994,837.4000000000001,295.29999999999995,841.8000000000001);
  ctx.bezierCurveTo(296.09999999999997,846.2,295.79999999999995,865.6,296.19999999999993,872.8000000000001);
  ctx.bezierCurveTo(296.5999999999999,879.9000000000001,294.49999999999994,912.8000000000001,293.49999999999994,920.7);
  ctx.bezierCurveTo(292.49999999999994,928.6,289.79999999999995,931.2,288.29999999999995,933.6);
  ctx.bezierCurveTo(286.69999999999993,936.1,277.09999999999997,952,273.4,956.7);
  ctx.bezierCurveTo(269.7,961.4000000000001,268.5,961.4000000000001,267.09999999999997,961.9000000000001);
  ctx.bezierCurveTo(265.7,962.3000000000001,258.7,964.1000000000001,256.49999999999994,965.0000000000001);
  ctx.bezierCurveTo(254.29999999999995,965.8000000000001,249.09999999999994,965.5000000000001,245.89999999999995,964.6000000000001);
  ctx.bezierCurveTo(242.69999999999996,963.8000000000002,239.49999999999994,967.9000000000001,238.79999999999995,970.0000000000001);
  ctx.bezierCurveTo(238.09999999999997,972.1000000000001,239.19999999999996,979.2000000000002,238.89999999999995,980.3000000000001);
  ctx.bezierCurveTo(238.49999999999994,981.6,238.99999999999994,982.7,239.89999999999995,983.3000000000001);
  ctx.bezierCurveTo(240.79999999999995,983.9000000000001,247.29999999999995,987.9000000000001,255.09999999999994,990.5000000000001);
  ctx.bezierCurveTo(262.8999999999999,993.1000000000001,276.0999999999999,995.0000000000001,282.3999999999999,995.3000000000001);
  ctx.bezierCurveTo(288.69999999999993,995.6,291.69999999999993,994.4000000000001,294.7999999999999,992.8000000000001);
  ctx.bezierCurveTo(297.7999999999999,991.2,303.1999999999999,983.5000000000001,304.9999999999999,981.2);
  ctx.bezierCurveTo(306.89999999999986,978.7,311.0999999999999,977.7,313.0999999999999,977.6);
  ctx.bezierCurveTo(316.7999999999999,977.5,316.5999999999999,979.8000000000001,316.5999999999999,979.8000000000001);
  ctx.bezierCurveTo(316.5999999999999,979.8000000000001,316.8999999999999,984.6,317.69999999999993,988.9000000000001);
  ctx.bezierCurveTo(330.8999999999999,995.6000000000001,346.5999999999999,987.9000000000001,351.8999999999999,985.5000000000001);
  ctx.bezierCurveTo(351.2999999999999,970.2000000000002,352.5999999999999,960.8000000000001,351.69999999999993,956.4000000000001);
  ctx.bezierCurveTo(349.99999999999994,948.2,348.19999999999993,938.6000000000001,348.19999999999993,938.6000000000001);
  ctx.bezierCurveTo(348.19999999999993,938.6000000000001,347.29999999999995,929.5000000000001,347.3999999999999,925.1000000000001);
  ctx.bezierCurveTo(347.49999999999994,920.7000000000002,346.2999999999999,904.7000000000002,346.69999999999993,899.3000000000002);
  ctx.bezierCurveTo(346.9,894.1,351.8,872.2,354,862.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(453.4,819.9);
  ctx.bezierCurveTo(453.2,819.3,452.4,818.8,451.4,818.3);
  ctx.bezierCurveTo(448.7,817,443.9,816,441,815.5999999999999);
  ctx.bezierCurveTo(436.4,814.9999999999999,415.4,815.0999999999999,408,815.8999999999999);
  ctx.bezierCurveTo(402.3,816.4999999999999,396.2,818.5999999999999,393.3,820.9999999999999);
  ctx.bezierCurveTo(392.3,821.7999999999998,391.7,822.5999999999999,391.6,823.4999999999999);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.strokeStyle = "#dd3858";
  ctx.lineWidth = 5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(511.6,967.3);
  ctx.bezierCurveTo(510.8,965.1999999999999,507.5,961.0999999999999,504.40000000000003,962);
  ctx.bezierCurveTo(501.20000000000005,962.9,496.1,963.3,493.90000000000003,962.6);
  ctx.bezierCurveTo(491.6,961.8000000000001,484.6,960.2,483.20000000000005,959.7);
  ctx.bezierCurveTo(481.80000000000007,959.3000000000001,480.70000000000005,959.3000000000001,476.80000000000007,954.7);
  ctx.bezierCurveTo(472.9000000000001,950.1,463.00000000000006,934.4000000000001,461.4000000000001,931.9000000000001);
  ctx.bezierCurveTo(459.80000000000007,929.4000000000001,457.0000000000001,926.9000000000001,455.9000000000001,919.1000000000001);
  ctx.bezierCurveTo(454.80000000000007,911.2000000000002,452.0000000000001,878.4000000000001,452.2000000000001,871.3000000000002);
  ctx.bezierCurveTo(452.5000000000001,864.2000000000002,451.7000000000001,844.7000000000002,452.5000000000001,840.3000000000002);
  ctx.bezierCurveTo(453.2000000000001,835.9000000000002,454.3000000000001,829.5000000000002,453.5000000000001,827.4000000000002);
  ctx.bezierCurveTo(453.3000000000001,826.8000000000002,452.5000000000001,826.3000000000002,451.5000000000001,825.8000000000002);
  ctx.bezierCurveTo(448.8000000000001,824.5000000000002,444.0000000000001,823.5000000000002,441.10000000000014,823.1000000000001);
  ctx.bezierCurveTo(436.5000000000001,822.5000000000001,415.5000000000001,822.6000000000001,408.10000000000014,823.4000000000001);
  ctx.bezierCurveTo(402.40000000000015,824.0000000000001,396.3000000000001,826.1000000000001,393.40000000000015,828.5000000000001);
  ctx.bezierCurveTo(392.40000000000015,829.3000000000001,391.8000000000001,830.1000000000001,391.70000000000016,831.0000000000001);
  ctx.bezierCurveTo(391.70000000000016,831.0000000000001,391.3000000000002,850.4000000000001,394.20000000000016,862.2000000000002);
  ctx.bezierCurveTo(396.60000000000014,871.9000000000002,401.90000000000015,893.6000000000001,402.40000000000015,898.9000000000002);
  ctx.bezierCurveTo(402.90000000000015,904.3000000000002,402.00000000000017,920.4000000000002,402.20000000000016,924.7000000000002);
  ctx.bezierCurveTo(402.40000000000015,929.1000000000001,401.70000000000016,938.2000000000002,401.70000000000016,938.2000000000002);
  ctx.bezierCurveTo(401.70000000000016,938.2000000000002,400.10000000000014,947.8000000000002,398.60000000000014,956.0000000000001);
  ctx.bezierCurveTo(397.8000000000001,960.5000000000001,399.20000000000016,969.8000000000001,398.90000000000015,985.1000000000001);
  ctx.bezierCurveTo(404.20000000000016,987.4000000000001,420.10000000000014,994.8000000000002,433.10000000000014,987.8000000000002);
  ctx.bezierCurveTo(433.8000000000001,983.4000000000002,434.0000000000001,978.6000000000001,434.0000000000001,978.6000000000001);
  ctx.bezierCurveTo(434.0000000000001,978.6000000000001,433.8000000000001,976.3000000000002,437.5000000000001,976.4000000000001);
  ctx.bezierCurveTo(439.5000000000001,976.4000000000001,443.60000000000014,977.3000000000001,445.60000000000014,979.8000000000001);
  ctx.bezierCurveTo(447.40000000000015,982.1,452.90000000000015,989.7,456.0000000000001,991.2);
  ctx.bezierCurveTo(459.10000000000014,992.7,462.2000000000001,993.8000000000001,468.4000000000001,993.4000000000001);
  ctx.bezierCurveTo(474.7000000000001,993.0000000000001,487.80000000000007,990.8000000000001,495.6000000000001,988.1000000000001);
  ctx.bezierCurveTo(503.4000000000001,985.4000000000001,509.80000000000007,981.2000000000002,510.7000000000001,980.6000000000001);
  ctx.bezierCurveTo(511.6000000000001,979.9000000000001,512.0000000000001,978.9000000000001,511.7000000000001,977.6000000000001);
  ctx.bezierCurveTo(511.4,976.5,512.4,969.4,511.6,967.3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#f26e7b";
  ctx.beginPath();
  ctx.moveTo(402.2,221.1);
  ctx.bezierCurveTo(402.2,221.1,389.4,241,375,239.79999999999998);
  ctx.bezierCurveTo(360.2,238.6,351.2,216.89999999999998,351.2,216.89999999999998);
  ctx.bezierCurveTo(351.2,216.89999999999998,365.09999999999997,223.79999999999998,376.2,224.7);
  ctx.bezierCurveTo(386.6,225.6,402.2,221.1,402.2,221.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

/**
 * On startup draw hatching that will be displayed across the answers.
 * @private
 */
Movie.renderHatching_ = function() {
  var ctx = document.getElementById('hatching').getContext('2d');
  
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  for (var i = -Movie.HEIGHT; i < Movie.HEIGHT; i += 4) {
    ctx.beginPath();
    ctx.moveTo(i, -i);
    ctx.lineTo(i + Movie.HEIGHT, -i + Movie.WIDTH);
    ctx.stroke();
  }
};

Movie.drawShirt = function(color){
  var ctx = document.getElementById('axies').getContext('2d');
  ctx.save();
  ctx.scale(.7,.7);
  ctx.translate(170,244);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  //ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  //ctx.moveTo(200.678,21.524);
  ctx.bezierCurveTo(196.209,17.549,192.954,15.385000000000002,183.124,12.496);
  ctx.bezierCurveTo(181.289,11.957,179,9.905,162,9.867);
  ctx.lineTo(162,10.903);
  ctx.bezierCurveTo(162,10.903,160.445,20.518,156.729,24.727);
  ctx.bezierCurveTo(151.52300000000002,30.625,142.423,35.274,132.41000000000003,35.834);
  ctx.bezierCurveTo(120.22800000000002,36.514,112.61300000000003,32.230000000000004,107.87200000000003,28.918000000000003);
  ctx.bezierCurveTo(100.06700000000004,23.465000000000003,93.10700000000003,12.449000000000002,91.74300000000002,10.212000000000003);
  ctx.lineTo(91.90200000000003,9.975000000000003);
  ctx.bezierCurveTo(91.79700000000003,9.974000000000004,91.69600000000003,9.974000000000004,91.59200000000003,9.973000000000003);
  ctx.bezierCurveTo(91.52700000000003,9.865000000000002,91.49000000000002,9.804000000000002,91.49000000000002,9.804000000000002);
  ctx.bezierCurveTo(91.49000000000002,9.804000000000002,91.12600000000002,9.856000000000002,90.50900000000003,9.966000000000003);
  ctx.bezierCurveTo(77.38600000000002,9.878000000000004,75.22400000000003,9.944000000000003,64.42600000000003,11.958000000000002);
  ctx.bezierCurveTo(55.82900000000003,13.561000000000002,49.84700000000003,16.649,45.63300000000003,20.895000000000003);
  ctx.bezierCurveTo(41.46,25.143,17.247,48.42,7.219,63.092);
  ctx.bezierCurveTo(11.774000000000001,73.738,26.352,81.096,38.634,84.168);
  ctx.lineTo(45.508,77.048);
  ctx.bezierCurveTo(47.219,101.88300000000001,54.978,114.231,56.13,119.488);
  ctx.bezierCurveTo(57.407000000000004,125.142,58.366,125.895,59.941,148.871);
  ctx.bezierCurveTo(61.455000000000005,170.99900000000002,58.355000000000004,190.63400000000001,54.562000000000005,212.38600000000002);
  ctx.bezierCurveTo(52.699000000000005,223.06900000000002,48.87800000000001,236.18900000000002,46.964000000000006,246.86200000000002);
  ctx.bezierCurveTo(45.90800000000001,252.74800000000002,43.239000000000004,266.06800000000004,48.08500000000001,270.824);
  ctx.bezierCurveTo(57.69000000000001,280.253,76.98500000000001,279.62100000000004,100.85300000000001,281.5);
  ctx.bezierCurveTo(124.703,283.402,179.42200000000003,279.651,188.81900000000002,277.767);
  ctx.bezierCurveTo(198.247,275.875,201.193,272.252,202.65500000000003,267.088);
  ctx.bezierCurveTo(204.22000000000003,245.39000000000001,197.28400000000002,224.45200000000003,192.86400000000003,203.49);
  ctx.bezierCurveTo(189.02500000000003,185.281,188.93100000000004,167.57500000000002,190.49000000000004,149.119);
  ctx.bezierCurveTo(191.86300000000003,132.858,192.94200000000004,129.992,195.76700000000002,121.292);
  ctx.bezierCurveTo(196.97000000000003,117.58800000000001,204.05100000000002,106.464,206.87000000000003,79.92);
  ctx.lineTo(211.59300000000005,84.24000000000001);
  ctx.bezierCurveTo(223.66000000000005,80.41100000000002,237.75300000000004,72.161,241.63700000000006,61.253000000000014);
  ctx.bezierCurveTo(230.72,47.232,205.107,25.504,200.678,21.524);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
Movie.drawBoots = function(color){
  var ctx = document.getElementById('axies').getContext('2d');
  ctx.save();
  ctx.scale(.56,.56);
  ctx.translate(205,809);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(327.692,0);
  ctx.lineTo(327.692,233.846);
  ctx.lineTo(0,233.846);
  ctx.closePath();
  ctx.clip();
  ctx.translate(0,0);
  ctx.translate(0,0);
  ctx.scale(1,1);
  ctx.translate(0,0);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(145.631,67.916);
  ctx.lineTo(145.341,69.216);
  ctx.bezierCurveTo(143.14100000000002,79.056,138.571,99.536,138.241,104.40599999999999);
  ctx.bezierCurveTo(138.031,107.386,138.341,114.04599999999999,138.621,119.916);
  ctx.bezierCurveTo(138.83100000000002,124.366,139.011,128.196,138.961,130.136);
  ctx.bezierCurveTo(138.851,134.076,139.601,142.236,139.70100000000002,143.256);
  ctx.bezierCurveTo(139.89100000000002,144.326,141.54100000000003,153.246,143.151,160.856);
  ctx.bezierCurveTo(143.691,163.396,143.591,167.066,143.45100000000002,172.156);
  ctx.bezierCurveTo(143.32100000000003,176.966,143.16100000000003,182.946,143.44100000000003,190.39600000000002);
  ctx.lineTo(143.50100000000003,192.07600000000002);
  ctx.lineTo(141.29100000000003,192.97100000000003);
  ctx.bezierCurveTo(137.03100000000003,194.91100000000003,128.17100000000002,198.84600000000003,118.55100000000003,198.84600000000003);
  ctx.bezierCurveTo(118.55100000000003,198.84600000000003,118.55100000000003,198.84600000000003,118.54100000000003,198.84600000000003);
  ctx.bezierCurveTo(113.83100000000003,198.84600000000003,109.49100000000003,197.97100000000003,105.65100000000002,196.03100000000003);
  ctx.lineTo(104.55100000000003,195.52800000000005);
  ctx.lineTo(104.33100000000003,194.34700000000004);
  ctx.bezierCurveTo(103.59100000000004,190.41700000000003,103.28100000000003,186.27100000000004,103.21100000000003,185.18100000000004);
  ctx.bezierCurveTo(103.05100000000003,185.14100000000005,102.79100000000003,185.09800000000004,102.38100000000003,185.09800000000004);
  ctx.lineTo(102.23100000000002,185.11200000000005);
  ctx.bezierCurveTo(100.75100000000002,185.14200000000005,97.44100000000002,185.95400000000006,96.08100000000002,187.71400000000006);
  ctx.bezierCurveTo(95.82100000000001,188.05400000000006,95.48100000000002,188.51500000000004,95.08100000000002,189.06500000000005);
  ctx.bezierCurveTo(91.58100000000002,193.78500000000005,87.94100000000002,198.51500000000004,85.07100000000001,199.97500000000005);
  ctx.bezierCurveTo(82.32100000000001,201.39500000000004,79.13100000000001,202.78500000000005,73.281,202.78500000000005);
  ctx.bezierCurveTo(72.70100000000001,202.78500000000005,72.081,202.76500000000004,71.441,202.74500000000006);
  ctx.bezierCurveTo(65.191,202.45500000000007,51.641000000000005,200.55500000000006,43.45100000000001,197.86500000000007);
  ctx.bezierCurveTo(35.54100000000001,195.27500000000006,28.931000000000008,191.26500000000007,27.601000000000006,190.33500000000006);
  ctx.bezierCurveTo(25.771000000000008,189.03500000000005,25.011000000000006,186.90500000000006,25.561000000000007,184.73500000000007);
  ctx.bezierCurveTo(25.591000000000008,184.27500000000006,25.491000000000007,182.90500000000006,25.41100000000001,181.89500000000007);
  ctx.bezierCurveTo(25.151000000000007,178.34500000000006,25.01100000000001,175.70500000000007,25.591000000000008,174.08500000000006);
  ctx.bezierCurveTo(26.46100000000001,171.58500000000006,29.91100000000001,166.87500000000006,34.24100000000001,166.87500000000006);
  ctx.bezierCurveTo(34.74100000000001,166.87500000000006,35.23100000000001,166.93500000000006,35.721000000000004,167.06500000000005);
  ctx.bezierCurveTo(37.441,167.51500000000004,39.871,167.80500000000006,41.901,167.80500000000006);
  ctx.bezierCurveTo(43.781000000000006,167.80500000000006,44.581,167.56500000000005,44.781000000000006,167.48500000000007);
  ctx.bezierCurveTo(46.38100000000001,166.89500000000007,49.941,165.92500000000007,52.801,165.14500000000007);
  ctx.bezierCurveTo(54.071000000000005,164.79500000000007,55.101,164.51500000000007,55.541000000000004,164.38500000000008);
  ctx.lineTo(55.88100000000001,164.27500000000006);
  ctx.bezierCurveTo(56.74100000000001,164.02500000000006,57.63100000000001,163.76500000000007,60.59100000000001,160.04500000000007);
  ctx.bezierCurveTo(63.55100000000001,156.32500000000007,70.74100000000001,144.66500000000008,73.811,139.67500000000007);
  ctx.bezierCurveTo(74.531,138.50500000000008,75.081,137.61500000000007,75.361,137.16500000000008);
  ctx.bezierCurveTo(75.641,136.72500000000008,75.95100000000001,136.2750000000001,76.29100000000001,135.79500000000007);
  ctx.bezierCurveTo(77.79100000000001,133.6550000000001,79.501,131.22500000000008,80.24100000000001,125.24500000000008);
  ctx.bezierCurveTo(81.24100000000001,117.21500000000007,83.33100000000002,84.50500000000008,82.95100000000001,77.79500000000007);
  ctx.bezierCurveTo(82.79100000000001,74.91500000000008,82.74100000000001,70.17500000000007,82.70100000000001,65.15500000000007);
  ctx.bezierCurveTo(82.63100000000001,58.215000000000074,82.551,49.575000000000074,82.09100000000001,47.135000000000076);
  ctx.lineTo(82.04100000000001,46.83500000000008);
  ctx.bezierCurveTo(80.861,40.50500000000008,80.031,35.45500000000008,80.91100000000002,32.97500000000008);
  ctx.bezierCurveTo(81.46100000000001,31.40500000000008,83.00100000000002,30.485000000000078,84.11100000000002,29.92500000000008);
  ctx.bezierCurveTo(87.27100000000002,28.345000000000077,92.53100000000002,27.22500000000008,95.14100000000002,26.81500000000008);
  ctx.bezierCurveTo(98.32100000000003,26.31500000000008,107.97100000000002,26.055000000000078,115.85100000000003,26.055000000000078);
  ctx.bezierCurveTo(121.47100000000003,26.055000000000078,126.05100000000003,26.185000000000077,128.76100000000002,26.40500000000008);
  ctx.bezierCurveTo(135.07100000000003,26.93500000000008,141.55100000000002,29.07500000000008,144.89100000000002,31.715000000000078);
  ctx.bezierCurveTo(146.431,32.93500000000008,147.32100000000003,34.27500000000008,147.561,35.70500000000008);
  ctx.lineTo(147.591,36.01500000000008);
  ctx.bezierCurveTo(147.621,36.826,148.311,55.866,145.631,67.916);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(303.381,181.916);
  ctx.bezierCurveTo(303.981,184.08599999999998,303.251,186.226,301.47099999999995,187.546);
  ctx.bezierCurveTo(301.40099999999995,187.606,294.6809999999999,192.27599999999998,285.76099999999997,195.406);
  ctx.bezierCurveTo(277.631,198.26600000000002,264.111,200.436,257.881,200.846);
  ctx.bezierCurveTo(256.981,200.89600000000002,256.121,200.92600000000002,255.30099999999996,200.92600000000002);
  ctx.bezierCurveTo(249.91099999999997,200.92600000000002,246.85099999999997,199.656,244.18099999999995,198.346);
  ctx.bezierCurveTo(241.29099999999997,196.946,237.55099999999996,192.296,233.97099999999995,187.64600000000002);
  ctx.bezierCurveTo(233.55099999999996,187.10600000000002,233.20099999999994,186.651,232.93099999999995,186.32100000000003);
  ctx.bezierCurveTo(231.54099999999997,184.58100000000002,228.21099999999996,183.84600000000003,226.74099999999996,183.84600000000003);
  ctx.bezierCurveTo(226.73099999999997,183.84600000000003,226.73099999999997,183.84600000000003,226.73099999999997,183.84600000000003);
  ctx.bezierCurveTo(226.27099999999996,183.84600000000003,225.93099999999995,183.89100000000002,225.76099999999997,183.93100000000004);
  ctx.bezierCurveTo(225.71099999999996,185.00100000000003,225.48099999999997,189.17800000000005,224.83099999999996,193.13900000000004);
  ctx.lineTo(224.62099999999995,194.35800000000003);
  ctx.lineTo(223.53099999999995,194.93700000000004);
  ctx.bezierCurveTo(219.55099999999996,197.05700000000004,215.00099999999995,198.12700000000004,210.01099999999994,198.12700000000004);
  ctx.bezierCurveTo(200.65099999999995,198.12700000000004,192.00099999999995,194.38700000000003,187.85099999999994,192.58700000000005);
  ctx.lineTo(185.61099999999993,191.62700000000004);
  ctx.lineTo(185.64099999999993,189.94700000000003);
  ctx.bezierCurveTo(185.77099999999993,182.48700000000002,185.49099999999993,176.50700000000003,185.27099999999993,171.70700000000002);
  ctx.bezierCurveTo(185.03099999999992,166.627,184.85099999999994,162.95700000000002,185.34099999999992,160.39700000000002);
  ctx.bezierCurveTo(186.7909999999999,152.76700000000002,188.2609999999999,143.80700000000002,188.44099999999992,142.73700000000002);
  ctx.bezierCurveTo(188.5109999999999,141.717,189.1009999999999,133.53700000000003,188.9209999999999,129.59700000000004);
  ctx.bezierCurveTo(188.8209999999999,127.66700000000003,188.9309999999999,123.82700000000004,189.0509999999999,119.38700000000003);
  ctx.bezierCurveTo(189.2109999999999,113.50700000000003,189.3909999999999,106.83700000000003,189.1209999999999,103.85700000000003);
  ctx.bezierCurveTo(188.6909999999999,98.99700000000003,183.7009999999999,78.60700000000003,181.3109999999999,68.80700000000003);
  ctx.lineTo(181.0009999999999,67.52700000000003);
  ctx.bezierCurveTo(178.07099999999988,55.53700000000003,178.3809999999999,36.48700000000003,178.4009999999999,35.67700000000003);
  ctx.lineTo(178.4209999999999,35.35700000000003);
  ctx.bezierCurveTo(178.63099999999991,33.92700000000003,179.50099999999992,32.56700000000003,181.0109999999999,31.327000000000027);
  ctx.bezierCurveTo(184.3009999999999,28.617000000000026,190.7409999999999,26.347000000000026,197.0409999999999,25.697000000000028);
  ctx.bezierCurveTo(201.6009999999999,25.217000000000027,210.7009999999999,25.007000000000026,217.7109999999999,25.007000000000026);
  ctx.bezierCurveTo(220.6709999999999,25.007000000000026,227.85099999999989,25.047000000000025,230.6509999999999,25.427000000000028);
  ctx.bezierCurveTo(233.2709999999999,25.787000000000027,238.5609999999999,26.79700000000003,241.7409999999999,28.31700000000003);
  ctx.bezierCurveTo(242.8609999999999,28.857000000000028,244.4209999999999,29.74700000000003,245.0109999999999,31.29700000000003);
  ctx.bezierCurveTo(245.9309999999999,33.76700000000003,245.2009999999999,38.82700000000003,244.1509999999999,45.187000000000026);
  ctx.lineTo(244.1109999999999,45.477000000000025);
  ctx.bezierCurveTo(243.7009999999999,47.92700000000003,243.7909999999999,56.56700000000002,243.8609999999999,63.517000000000024);
  ctx.bezierCurveTo(243.9209999999999,68.53700000000002,243.97099999999992,73.27700000000003,243.8709999999999,76.14700000000002);
  ctx.bezierCurveTo(243.6209999999999,82.86700000000002,246.3609999999999,115.52700000000002,247.5209999999999,123.53700000000002);
  ctx.bezierCurveTo(248.38099999999991,129.497,250.1409999999999,131.89700000000002,251.6909999999999,134.01700000000002);
  ctx.bezierCurveTo(252.0309999999999,134.47700000000003,252.35099999999989,134.92700000000002,252.64099999999988,135.36700000000002);
  ctx.bezierCurveTo(252.93099999999987,135.80700000000002,253.5009999999999,136.687,254.2509999999999,137.85700000000003);
  ctx.bezierCurveTo(257.4209999999999,142.77700000000002,264.8309999999999,154.28700000000003,267.8609999999999,157.937);
  ctx.bezierCurveTo(270.9009999999999,161.597,271.7909999999999,161.847,272.6609999999999,162.077);
  ctx.lineTo(273.00099999999986,162.177);
  ctx.bezierCurveTo(273.45099999999985,162.307,274.4909999999999,162.56699999999998,275.76099999999985,162.887);
  ctx.bezierCurveTo(278.64099999999985,163.607,282.21099999999984,164.507,283.83099999999985,165.067);
  ctx.bezierCurveTo(284.00099999999986,165.127,284.70099999999985,165.327,286.3009999999999,165.327);
  ctx.bezierCurveTo(288.39099999999985,165.327,291.0309999999999,164.977,292.88099999999986,164.457);
  ctx.bezierCurveTo(293.39099999999985,164.317,293.93099999999987,164.237,294.47099999999983,164.237);
  ctx.bezierCurveTo(298.7509999999998,164.237,302.2309999999998,168.827,303.15099999999984,171.287);
  ctx.bezierCurveTo(303.75099999999986,172.887,303.66099999999983,175.52700000000002,303.47099999999983,179.077);
  ctx.bezierCurveTo(303.421,180.096,303.351,181.466,303.381,181.916);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/**
 * On startup draw the axis scales and save it to the axies canvas.
 * @private
 */
Movie.renderAxies_ = function() {
	switch (BlocklyGames.LEVEL) {
    case 1:
      Movie.drawShirt('');
      break;
    case 2:
      Movie.drawBoots('');
      break;
	}
};

/**
 * Draw one frame of the movie.
 * @param {!Object} interpreter A JS interpreter loaded with user code.
 * @private
 */
Movie.drawFrame_ = function(interpreter) {
  // Clear the canvas.
  Movie.ctxScratch.canvas.width = Movie.ctxScratch.canvas.width;
  Movie.ctxScratch.strokeStyle = '#000';
  Movie.ctxScratch.fillStyle = '#000';
  // Levels 1-9 should be slightly transparent so eclipsed blocks may be seen.
  // Level 10 should be opaque so that the movie is clean.
  Movie.ctxScratch.globalAlpha =
      (BlocklyGames.LEVEL == BlocklyGames.MAX_LEVEL) ? 1 : 0.9;

  var go = true;
  for (var tick = 0; go && tick < 10000; tick++) {
    try {
      go = interpreter.step();
    } catch (e) {
      // User error, terminate in shame.
      alert(e);
      go = false;
    }
  }
};

/**
 * Copy the scratch canvas to the display canvas.
 * @param {number=} frameNumber Which frame to draw (0-100).
 */
Movie.display = function() {
  /*if (typeof frameNumber == 'number') {
    Movie.frameNumber = frameNumber;
  } else {
    frameNumber = Movie.frameNumber;
  }*/

  // Clear the display with white.
  Movie.ctxDisplay.beginPath();
  Movie.ctxDisplay.rect(0, 0,
      Movie.ctxDisplay.canvas.width, Movie.ctxDisplay.canvas.height);
  Movie.ctxDisplay.fillStyle = '#ffffff';
  Movie.ctxDisplay.fill();

  // Copy the answer.
  var answer = document.getElementById('answer' + BlocklyGames.LEVEL);
  if (answer) {
    Movie.ctxDisplay.globalAlpha = 0.2;
    Movie.ctxDisplay.drawImage(answer, 0, 0);
    Movie.ctxDisplay.globalAlpha = 1;
  }

  var superhero = document.getElementById('superhero');
  Movie.ctxDisplay.drawImage(superhero, 0, 0);
  
  // Draw and copy the user layer.
  var code = Blockly.JavaScript.workspaceToCode();
  var interpreter = new Interpreter(code, Movie.initInterpreter);
  Movie.drawFrame_(interpreter);
  Movie.ctxDisplay.drawImage(Movie.ctxScratch.canvas, 0, 0);

  // Copy the axies.
  //Movie.ctxDisplay.drawImage(document.getElementById('axies'), 0, 0);
  Movie.checkFrameAnswer();
  //if (BlocklyGames.LEVEL == 1 || BlocklyGames.LEVEL == 2) {
    setTimeout(Movie.checkAnswers, 1000);
  //}
};

/**
 * Inject the Movie API into a JavaScript interpreter.
 * @param {!Object} scope Global scope.
 * @param {!Interpreter} interpreter The JS interpreter.
 */
Movie.initInterpreter = function(interpreter, scope) {
  // API
  var wrapper;
  
  wrapper = function() {
    Movie.tshirt();
  };
  interpreter.setProperty(scope, 'tshirt',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Movie.longsleeve();
  };
  interpreter.setProperty(scope, 'longsleeve',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    Movie.boots();
  };
  interpreter.setProperty(scope, 'boots',
      interpreter.createNativeFunction(wrapper));
	  

  wrapper = function(colour) {
    Movie.penColour(colour.toString());
  };
  interpreter.setProperty(scope, 'penColour',
      interpreter.createNativeFunction(wrapper));

};

/**
 * Convert from ideal 0-100 coordinates to canvas's 0-400 coordinates.
 */
Movie.SCALE = 400 / 100;

Movie.longsleeve = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.scale(.67,.65);
  Movie.ctxScratch.translate(540,125);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-5.5,197.5);
  Movie.ctxScratch.bezierCurveTo(-7.2,199,-9.4,200.8,-12,202.9);
  Movie.ctxScratch.bezierCurveTo(-29.1,217.1,-67.3,240.5,-72.5,242.4);
  Movie.ctxScratch.bezierCurveTo(-75.9,245.6,-93.9,220.8,-113.3,197.5);
  Movie.ctxScratch.bezierCurveTo(-113.39999999999999,197.5,-113.39999999999999,197.5,-113.5,197.5);
  Movie.ctxScratch.bezierCurveTo(-124.5,183.5,-149.8,162,-154.2,158);
  Movie.ctxScratch.bezierCurveTo(-158.7,154,-161.89999999999998,151.9,-171.79999999999998,149);
  Movie.ctxScratch.bezierCurveTo(-177.7,147.3,-190.7,146,-194.49999999999997,147.3);
  Movie.ctxScratch.bezierCurveTo(-198.19999999999996,148.5,-201.09999999999997,152.20000000000002,-204.19999999999996,154.5);
  Movie.ctxScratch.bezierCurveTo(-211.79999999999995,160.1,-219.29999999999995,165.6,-226.89999999999995,171.2);
  Movie.ctxScratch.bezierCurveTo(-227.19999999999996,171.39999999999998,-227.69999999999996,171.89999999999998,-227.99999999999994,172);
  Movie.ctxScratch.bezierCurveTo(-233.89999999999995,167.7,-239.69999999999993,163.4,-245.59999999999994,159);
  Movie.ctxScratch.bezierCurveTo(-249.59999999999994,156,-253.59999999999994,153.1,-257.69999999999993,150.1);
  Movie.ctxScratch.bezierCurveTo(-261.3999999999999,147.4,-262.3999999999999,146.2,-267.0999999999999,146.29999999999998);
  Movie.ctxScratch.bezierCurveTo(-275.0999999999999,146.39999999999998,-282.5999999999999,146.99999999999997,-290.3999999999999,148.39999999999998);
  Movie.ctxScratch.bezierCurveTo(-298.99999999999994,149.99999999999997,-304.99999999999994,153.09999999999997,-309.19999999999993,157.29999999999998);
  Movie.ctxScratch.bezierCurveTo(-313.19999999999993,161.39999999999998,-335.3999999999999,182.79999999999998,-346.19999999999993,197.5);
  Movie.ctxScratch.bezierCurveTo(-366.5999999999999,220,-385.3999999999999,243.9,-388.69999999999993,240.5);
  Movie.ctxScratch.bezierCurveTo(-393.79999999999995,238.4,-431.69999999999993,213.7,-448.49999999999994,199);
  Movie.ctxScratch.bezierCurveTo(-450.99999999999994,196.8,-453.19999999999993,194.9,-454.8999999999999,193.4);
  Movie.ctxScratch.lineTo(-469.49999999999994,209.20000000000002);
  Movie.ctxScratch.lineTo(-465.49999999999994,212.4);
  Movie.ctxScratch.bezierCurveTo(-412.19999999999993,272.1,-394.19999999999993,271.4,-391.19999999999993,271.4);
  Movie.ctxScratch.bezierCurveTo(-377.49999999999994,272.09999999999997,-326.0999999999999,235.7,-312.29999999999995,217.2);
  Movie.ctxScratch.bezierCurveTo(-311.59999999999997,216.29999999999998,-310.79999999999995,215.2,-309.99999999999994,214.1);
  Movie.ctxScratch.lineTo(-309.49999999999994,213.5);
  Movie.ctxScratch.bezierCurveTo(-307.79999999999995,238.3,-299.99999999999994,250.7,-298.8999999999999,255.9);
  Movie.ctxScratch.bezierCurveTo(-297.5999999999999,261.6,-296.69999999999993,262.3,-295.0999999999999,285.3);
  Movie.ctxScratch.bezierCurveTo(-293.5999999999999,307.40000000000003,-296.69999999999993,327.1,-300.4999999999999,348.8);
  Movie.ctxScratch.bezierCurveTo(-302.39999999999986,359.5,-306.1999999999999,372.6,-308.0999999999999,383.3);
  Movie.ctxScratch.bezierCurveTo(-309.19999999999993,389.2,-311.7999999999999,402.5,-306.9999999999999,407.3);
  Movie.ctxScratch.bezierCurveTo(-297.39999999999986,416.7,-278.0999999999999,416.1,-254.19999999999987,418);
  Movie.ctxScratch.bezierCurveTo(-230.39999999999986,419.9,-175.59999999999988,416.2,-166.19999999999987,414.3);
  Movie.ctxScratch.bezierCurveTo(-156.79999999999987,412.40000000000003,-153.79999999999987,408.8,-152.39999999999986,403.6);
  Movie.ctxScratch.bezierCurveTo(-150.79999999999987,381.90000000000003,-157.79999999999987,361,-162.19999999999987,340);
  Movie.ctxScratch.bezierCurveTo(-165.9999999999999,321.8,-166.09999999999988,304.1,-164.59999999999988,285.6);
  Movie.ctxScratch.bezierCurveTo(-163.19999999999987,269.3,-162.09999999999988,266.5,-159.29999999999987,257.8);
  Movie.ctxScratch.bezierCurveTo(-158.09999999999988,254.10000000000002,-150.99999999999986,243,-148.19999999999987,216.4);
  Movie.ctxScratch.lineTo(-145.09999999999988,219.20000000000002);
  Movie.ctxScratch.bezierCurveTo(-129.69999999999987,238.9,-84.29999999999988,273.5,-71.29999999999988,273.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-68.39999999999988,273.30000000000007,-50.59999999999988,274.70000000000005,4.300000000000111,216.80000000000004);
  Movie.ctxScratch.lineTo(8.40000000000011,213.80000000000004);
  Movie.ctxScratch.lineTo(-5.5,197.5);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
}

Movie.tshirt = function() {
Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.7,.7);
  Movie.ctxScratch.translate(170,244);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  //Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#f69126";
  Movie.ctxScratch.beginPath();
  //Movie.ctxScratch.moveTo(200.678,21.524);
  Movie.ctxScratch.bezierCurveTo(196.209,17.549,192.954,15.385000000000002,183.124,12.496);
  Movie.ctxScratch.bezierCurveTo(181.289,11.957,179,9.905,162,9.867);
  Movie.ctxScratch.lineTo(162,10.903);
  Movie.ctxScratch.bezierCurveTo(162,10.903,160.445,20.518,156.729,24.727);
  Movie.ctxScratch.bezierCurveTo(151.52300000000002,30.625,142.423,35.274,132.41000000000003,35.834);
  Movie.ctxScratch.bezierCurveTo(120.22800000000002,36.514,112.61300000000003,32.230000000000004,107.87200000000003,28.918000000000003);
  Movie.ctxScratch.bezierCurveTo(100.06700000000004,23.465000000000003,93.10700000000003,12.449000000000002,91.74300000000002,10.212000000000003);
  Movie.ctxScratch.lineTo(91.90200000000003,9.975000000000003);
  Movie.ctxScratch.bezierCurveTo(91.79700000000003,9.974000000000004,91.69600000000003,9.974000000000004,91.59200000000003,9.973000000000003);
  Movie.ctxScratch.bezierCurveTo(91.52700000000003,9.865000000000002,91.49000000000002,9.804000000000002,91.49000000000002,9.804000000000002);
  Movie.ctxScratch.bezierCurveTo(91.49000000000002,9.804000000000002,91.12600000000002,9.856000000000002,90.50900000000003,9.966000000000003);
  Movie.ctxScratch.bezierCurveTo(77.38600000000002,9.878000000000004,75.22400000000003,9.944000000000003,64.42600000000003,11.958000000000002);
  Movie.ctxScratch.bezierCurveTo(55.82900000000003,13.561000000000002,49.84700000000003,16.649,45.63300000000003,20.895000000000003);
  Movie.ctxScratch.bezierCurveTo(41.46,25.143,17.247,48.42,7.219,63.092);
  Movie.ctxScratch.bezierCurveTo(11.774000000000001,73.738,26.352,81.096,38.634,84.168);
  Movie.ctxScratch.lineTo(45.508,77.048);
  Movie.ctxScratch.bezierCurveTo(47.219,101.88300000000001,54.978,114.231,56.13,119.488);
  Movie.ctxScratch.bezierCurveTo(57.407000000000004,125.142,58.366,125.895,59.941,148.871);
  Movie.ctxScratch.bezierCurveTo(61.455000000000005,170.99900000000002,58.355000000000004,190.63400000000001,54.562000000000005,212.38600000000002);
  Movie.ctxScratch.bezierCurveTo(52.699000000000005,223.06900000000002,48.87800000000001,236.18900000000002,46.964000000000006,246.86200000000002);
  Movie.ctxScratch.bezierCurveTo(45.90800000000001,252.74800000000002,43.239000000000004,266.06800000000004,48.08500000000001,270.824);
  Movie.ctxScratch.bezierCurveTo(57.69000000000001,280.253,76.98500000000001,279.62100000000004,100.85300000000001,281.5);
  Movie.ctxScratch.bezierCurveTo(124.703,283.402,179.42200000000003,279.651,188.81900000000002,277.767);
  Movie.ctxScratch.bezierCurveTo(198.247,275.875,201.193,272.252,202.65500000000003,267.088);
  Movie.ctxScratch.bezierCurveTo(204.22000000000003,245.39000000000001,197.28400000000002,224.45200000000003,192.86400000000003,203.49);
  Movie.ctxScratch.bezierCurveTo(189.02500000000003,185.281,188.93100000000004,167.57500000000002,190.49000000000004,149.119);
  Movie.ctxScratch.bezierCurveTo(191.86300000000003,132.858,192.94200000000004,129.992,195.76700000000002,121.292);
  Movie.ctxScratch.bezierCurveTo(196.97000000000003,117.58800000000001,204.05100000000002,106.464,206.87000000000003,79.92);
  Movie.ctxScratch.lineTo(211.59300000000005,84.24000000000001);
  Movie.ctxScratch.bezierCurveTo(223.66000000000005,80.41100000000002,237.75300000000004,72.161,241.63700000000006,61.253000000000014);
  Movie.ctxScratch.bezierCurveTo(230.72,47.232,205.107,25.504,200.678,21.524);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
};

Movie.boots = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.56,.56);
  Movie.ctxScratch.translate(205,809);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(327.692,0);
  Movie.ctxScratch.lineTo(327.692,233.846);
  Movie.ctxScratch.lineTo(0,233.846);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.clip();
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.scale(1,1);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  //Movie.ctxScratch.fillStyle = "#dd3858";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(145.631,67.916);
  Movie.ctxScratch.lineTo(145.341,69.216);
  Movie.ctxScratch.bezierCurveTo(143.14100000000002,79.056,138.571,99.536,138.241,104.40599999999999);
  Movie.ctxScratch.bezierCurveTo(138.031,107.386,138.341,114.04599999999999,138.621,119.916);
  Movie.ctxScratch.bezierCurveTo(138.83100000000002,124.366,139.011,128.196,138.961,130.136);
  Movie.ctxScratch.bezierCurveTo(138.851,134.076,139.601,142.236,139.70100000000002,143.256);
  Movie.ctxScratch.bezierCurveTo(139.89100000000002,144.326,141.54100000000003,153.246,143.151,160.856);
  Movie.ctxScratch.bezierCurveTo(143.691,163.396,143.591,167.066,143.45100000000002,172.156);
  Movie.ctxScratch.bezierCurveTo(143.32100000000003,176.966,143.16100000000003,182.946,143.44100000000003,190.39600000000002);
  Movie.ctxScratch.lineTo(143.50100000000003,192.07600000000002);
  Movie.ctxScratch.lineTo(141.29100000000003,192.97100000000003);
  Movie.ctxScratch.bezierCurveTo(137.03100000000003,194.91100000000003,128.17100000000002,198.84600000000003,118.55100000000003,198.84600000000003);
  Movie.ctxScratch.bezierCurveTo(118.55100000000003,198.84600000000003,118.55100000000003,198.84600000000003,118.54100000000003,198.84600000000003);
  Movie.ctxScratch.bezierCurveTo(113.83100000000003,198.84600000000003,109.49100000000003,197.97100000000003,105.65100000000002,196.03100000000003);
  Movie.ctxScratch.lineTo(104.55100000000003,195.52800000000005);
  Movie.ctxScratch.lineTo(104.33100000000003,194.34700000000004);
  Movie.ctxScratch.bezierCurveTo(103.59100000000004,190.41700000000003,103.28100000000003,186.27100000000004,103.21100000000003,185.18100000000004);
  Movie.ctxScratch.bezierCurveTo(103.05100000000003,185.14100000000005,102.79100000000003,185.09800000000004,102.38100000000003,185.09800000000004);
  Movie.ctxScratch.lineTo(102.23100000000002,185.11200000000005);
  Movie.ctxScratch.bezierCurveTo(100.75100000000002,185.14200000000005,97.44100000000002,185.95400000000006,96.08100000000002,187.71400000000006);
  Movie.ctxScratch.bezierCurveTo(95.82100000000001,188.05400000000006,95.48100000000002,188.51500000000004,95.08100000000002,189.06500000000005);
  Movie.ctxScratch.bezierCurveTo(91.58100000000002,193.78500000000005,87.94100000000002,198.51500000000004,85.07100000000001,199.97500000000005);
  Movie.ctxScratch.bezierCurveTo(82.32100000000001,201.39500000000004,79.13100000000001,202.78500000000005,73.281,202.78500000000005);
  Movie.ctxScratch.bezierCurveTo(72.70100000000001,202.78500000000005,72.081,202.76500000000004,71.441,202.74500000000006);
  Movie.ctxScratch.bezierCurveTo(65.191,202.45500000000007,51.641000000000005,200.55500000000006,43.45100000000001,197.86500000000007);
  Movie.ctxScratch.bezierCurveTo(35.54100000000001,195.27500000000006,28.931000000000008,191.26500000000007,27.601000000000006,190.33500000000006);
  Movie.ctxScratch.bezierCurveTo(25.771000000000008,189.03500000000005,25.011000000000006,186.90500000000006,25.561000000000007,184.73500000000007);
  Movie.ctxScratch.bezierCurveTo(25.591000000000008,184.27500000000006,25.491000000000007,182.90500000000006,25.41100000000001,181.89500000000007);
  Movie.ctxScratch.bezierCurveTo(25.151000000000007,178.34500000000006,25.01100000000001,175.70500000000007,25.591000000000008,174.08500000000006);
  Movie.ctxScratch.bezierCurveTo(26.46100000000001,171.58500000000006,29.91100000000001,166.87500000000006,34.24100000000001,166.87500000000006);
  Movie.ctxScratch.bezierCurveTo(34.74100000000001,166.87500000000006,35.23100000000001,166.93500000000006,35.721000000000004,167.06500000000005);
  Movie.ctxScratch.bezierCurveTo(37.441,167.51500000000004,39.871,167.80500000000006,41.901,167.80500000000006);
  Movie.ctxScratch.bezierCurveTo(43.781000000000006,167.80500000000006,44.581,167.56500000000005,44.781000000000006,167.48500000000007);
  Movie.ctxScratch.bezierCurveTo(46.38100000000001,166.89500000000007,49.941,165.92500000000007,52.801,165.14500000000007);
  Movie.ctxScratch.bezierCurveTo(54.071000000000005,164.79500000000007,55.101,164.51500000000007,55.541000000000004,164.38500000000008);
  Movie.ctxScratch.lineTo(55.88100000000001,164.27500000000006);
  Movie.ctxScratch.bezierCurveTo(56.74100000000001,164.02500000000006,57.63100000000001,163.76500000000007,60.59100000000001,160.04500000000007);
  Movie.ctxScratch.bezierCurveTo(63.55100000000001,156.32500000000007,70.74100000000001,144.66500000000008,73.811,139.67500000000007);
  Movie.ctxScratch.bezierCurveTo(74.531,138.50500000000008,75.081,137.61500000000007,75.361,137.16500000000008);
  Movie.ctxScratch.bezierCurveTo(75.641,136.72500000000008,75.95100000000001,136.2750000000001,76.29100000000001,135.79500000000007);
  Movie.ctxScratch.bezierCurveTo(77.79100000000001,133.6550000000001,79.501,131.22500000000008,80.24100000000001,125.24500000000008);
  Movie.ctxScratch.bezierCurveTo(81.24100000000001,117.21500000000007,83.33100000000002,84.50500000000008,82.95100000000001,77.79500000000007);
  Movie.ctxScratch.bezierCurveTo(82.79100000000001,74.91500000000008,82.74100000000001,70.17500000000007,82.70100000000001,65.15500000000007);
  Movie.ctxScratch.bezierCurveTo(82.63100000000001,58.215000000000074,82.551,49.575000000000074,82.09100000000001,47.135000000000076);
  Movie.ctxScratch.lineTo(82.04100000000001,46.83500000000008);
  Movie.ctxScratch.bezierCurveTo(80.861,40.50500000000008,80.031,35.45500000000008,80.91100000000002,32.97500000000008);
  Movie.ctxScratch.bezierCurveTo(81.46100000000001,31.40500000000008,83.00100000000002,30.485000000000078,84.11100000000002,29.92500000000008);
  Movie.ctxScratch.bezierCurveTo(87.27100000000002,28.345000000000077,92.53100000000002,27.22500000000008,95.14100000000002,26.81500000000008);
  Movie.ctxScratch.bezierCurveTo(98.32100000000003,26.31500000000008,107.97100000000002,26.055000000000078,115.85100000000003,26.055000000000078);
  Movie.ctxScratch.bezierCurveTo(121.47100000000003,26.055000000000078,126.05100000000003,26.185000000000077,128.76100000000002,26.40500000000008);
  Movie.ctxScratch.bezierCurveTo(135.07100000000003,26.93500000000008,141.55100000000002,29.07500000000008,144.89100000000002,31.715000000000078);
  Movie.ctxScratch.bezierCurveTo(146.431,32.93500000000008,147.32100000000003,34.27500000000008,147.561,35.70500000000008);
  Movie.ctxScratch.lineTo(147.591,36.01500000000008);
  Movie.ctxScratch.bezierCurveTo(147.621,36.826,148.311,55.866,145.631,67.916);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(303.381,181.916);
  Movie.ctxScratch.bezierCurveTo(303.981,184.08599999999998,303.251,186.226,301.47099999999995,187.546);
  Movie.ctxScratch.bezierCurveTo(301.40099999999995,187.606,294.6809999999999,192.27599999999998,285.76099999999997,195.406);
  Movie.ctxScratch.bezierCurveTo(277.631,198.26600000000002,264.111,200.436,257.881,200.846);
  Movie.ctxScratch.bezierCurveTo(256.981,200.89600000000002,256.121,200.92600000000002,255.30099999999996,200.92600000000002);
  Movie.ctxScratch.bezierCurveTo(249.91099999999997,200.92600000000002,246.85099999999997,199.656,244.18099999999995,198.346);
  Movie.ctxScratch.bezierCurveTo(241.29099999999997,196.946,237.55099999999996,192.296,233.97099999999995,187.64600000000002);
  Movie.ctxScratch.bezierCurveTo(233.55099999999996,187.10600000000002,233.20099999999994,186.651,232.93099999999995,186.32100000000003);
  Movie.ctxScratch.bezierCurveTo(231.54099999999997,184.58100000000002,228.21099999999996,183.84600000000003,226.74099999999996,183.84600000000003);
  Movie.ctxScratch.bezierCurveTo(226.73099999999997,183.84600000000003,226.73099999999997,183.84600000000003,226.73099999999997,183.84600000000003);
  Movie.ctxScratch.bezierCurveTo(226.27099999999996,183.84600000000003,225.93099999999995,183.89100000000002,225.76099999999997,183.93100000000004);
  Movie.ctxScratch.bezierCurveTo(225.71099999999996,185.00100000000003,225.48099999999997,189.17800000000005,224.83099999999996,193.13900000000004);
  Movie.ctxScratch.lineTo(224.62099999999995,194.35800000000003);
  Movie.ctxScratch.lineTo(223.53099999999995,194.93700000000004);
  Movie.ctxScratch.bezierCurveTo(219.55099999999996,197.05700000000004,215.00099999999995,198.12700000000004,210.01099999999994,198.12700000000004);
  Movie.ctxScratch.bezierCurveTo(200.65099999999995,198.12700000000004,192.00099999999995,194.38700000000003,187.85099999999994,192.58700000000005);
  Movie.ctxScratch.lineTo(185.61099999999993,191.62700000000004);
  Movie.ctxScratch.lineTo(185.64099999999993,189.94700000000003);
  Movie.ctxScratch.bezierCurveTo(185.77099999999993,182.48700000000002,185.49099999999993,176.50700000000003,185.27099999999993,171.70700000000002);
  Movie.ctxScratch.bezierCurveTo(185.03099999999992,166.627,184.85099999999994,162.95700000000002,185.34099999999992,160.39700000000002);
  Movie.ctxScratch.bezierCurveTo(186.7909999999999,152.76700000000002,188.2609999999999,143.80700000000002,188.44099999999992,142.73700000000002);
  Movie.ctxScratch.bezierCurveTo(188.5109999999999,141.717,189.1009999999999,133.53700000000003,188.9209999999999,129.59700000000004);
  Movie.ctxScratch.bezierCurveTo(188.8209999999999,127.66700000000003,188.9309999999999,123.82700000000004,189.0509999999999,119.38700000000003);
  Movie.ctxScratch.bezierCurveTo(189.2109999999999,113.50700000000003,189.3909999999999,106.83700000000003,189.1209999999999,103.85700000000003);
  Movie.ctxScratch.bezierCurveTo(188.6909999999999,98.99700000000003,183.7009999999999,78.60700000000003,181.3109999999999,68.80700000000003);
  Movie.ctxScratch.lineTo(181.0009999999999,67.52700000000003);
  Movie.ctxScratch.bezierCurveTo(178.07099999999988,55.53700000000003,178.3809999999999,36.48700000000003,178.4009999999999,35.67700000000003);
  Movie.ctxScratch.lineTo(178.4209999999999,35.35700000000003);
  Movie.ctxScratch.bezierCurveTo(178.63099999999991,33.92700000000003,179.50099999999992,32.56700000000003,181.0109999999999,31.327000000000027);
  Movie.ctxScratch.bezierCurveTo(184.3009999999999,28.617000000000026,190.7409999999999,26.347000000000026,197.0409999999999,25.697000000000028);
  Movie.ctxScratch.bezierCurveTo(201.6009999999999,25.217000000000027,210.7009999999999,25.007000000000026,217.7109999999999,25.007000000000026);
  Movie.ctxScratch.bezierCurveTo(220.6709999999999,25.007000000000026,227.85099999999989,25.047000000000025,230.6509999999999,25.427000000000028);
  Movie.ctxScratch.bezierCurveTo(233.2709999999999,25.787000000000027,238.5609999999999,26.79700000000003,241.7409999999999,28.31700000000003);
  Movie.ctxScratch.bezierCurveTo(242.8609999999999,28.857000000000028,244.4209999999999,29.74700000000003,245.0109999999999,31.29700000000003);
  Movie.ctxScratch.bezierCurveTo(245.9309999999999,33.76700000000003,245.2009999999999,38.82700000000003,244.1509999999999,45.187000000000026);
  Movie.ctxScratch.lineTo(244.1109999999999,45.477000000000025);
  Movie.ctxScratch.bezierCurveTo(243.7009999999999,47.92700000000003,243.7909999999999,56.56700000000002,243.8609999999999,63.517000000000024);
  Movie.ctxScratch.bezierCurveTo(243.9209999999999,68.53700000000002,243.97099999999992,73.27700000000003,243.8709999999999,76.14700000000002);
  Movie.ctxScratch.bezierCurveTo(243.6209999999999,82.86700000000002,246.3609999999999,115.52700000000002,247.5209999999999,123.53700000000002);
  Movie.ctxScratch.bezierCurveTo(248.38099999999991,129.497,250.1409999999999,131.89700000000002,251.6909999999999,134.01700000000002);
  Movie.ctxScratch.bezierCurveTo(252.0309999999999,134.47700000000003,252.35099999999989,134.92700000000002,252.64099999999988,135.36700000000002);
  Movie.ctxScratch.bezierCurveTo(252.93099999999987,135.80700000000002,253.5009999999999,136.687,254.2509999999999,137.85700000000003);
  Movie.ctxScratch.bezierCurveTo(257.4209999999999,142.77700000000002,264.8309999999999,154.28700000000003,267.8609999999999,157.937);
  Movie.ctxScratch.bezierCurveTo(270.9009999999999,161.597,271.7909999999999,161.847,272.6609999999999,162.077);
  Movie.ctxScratch.lineTo(273.00099999999986,162.177);
  Movie.ctxScratch.bezierCurveTo(273.45099999999985,162.307,274.4909999999999,162.56699999999998,275.76099999999985,162.887);
  Movie.ctxScratch.bezierCurveTo(278.64099999999985,163.607,282.21099999999984,164.507,283.83099999999985,165.067);
  Movie.ctxScratch.bezierCurveTo(284.00099999999986,165.127,284.70099999999985,165.327,286.3009999999999,165.327);
  Movie.ctxScratch.bezierCurveTo(288.39099999999985,165.327,291.0309999999999,164.977,292.88099999999986,164.457);
  Movie.ctxScratch.bezierCurveTo(293.39099999999985,164.317,293.93099999999987,164.237,294.47099999999983,164.237);
  Movie.ctxScratch.bezierCurveTo(298.7509999999998,164.237,302.2309999999998,168.827,303.15099999999984,171.287);
  Movie.ctxScratch.bezierCurveTo(303.75099999999986,172.887,303.66099999999983,175.52700000000002,303.47099999999983,179.077);
  Movie.ctxScratch.bezierCurveTo(303.421,180.096,303.351,181.466,303.381,181.916);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
}

/**
 * Change the colour of the pen.
 * @param {string} colour Hexadecimal #rrggbb colour string.
 */
Movie.penColour = function(colour) {
  Movie.ctxScratch.strokeStyle = colour;
  Movie.ctxScratch.fillStyle = colour;
};

/**
 * Verify if the answer to this frame is correct.
 */
Movie.checkFrameAnswer = function() {
  // Compare the Alpha (opacity) byte of each pixel in the user's image and
  // the sample answer image.
  var userImage =
      Movie.ctxScratch.getImageData(0, 0, Movie.WIDTH, Movie.HEIGHT);
  var answer = document.getElementById('axies');
  if (answer) {
    var ctxAnswer = answer.getContext('2d');
    var answerImage = ctxAnswer.getImageData(0, 0, Movie.WIDTH, Movie.HEIGHT);
    var len = Math.min(userImage.data.length, answerImage.data.length);
    var delta = 0;
    // Pixels are in RGBA format.  Only check the Alpha bytes.
    for (var i = 3; i < len; i += 4) {
      // Check the Alpha byte.
      if (Math.abs(userImage.data[i] - answerImage.data[i]) > 64) {
        delta++;
      }
    }
    Movie.pixelErrors[Movie.frameNumber] = delta;
  }
};

/**
 * Verify if all the answers are correct.
 * If so, move on to next level.
 */
Movie.checkAnswers = function() {
  //alert('Reached');
  /*if (BlocklyGames.LEVEL > 1 && Movie.frameNumber != Movie.FRAMES) {
    // Only check answers at the end of the run.
    return;
  }*/
  if (Movie.isCorrect() && !Movie.success) {
    Movie.success = true;
    BlocklyInterface.saveToLocalStorage();
    if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
      // No congrats for last level, it is open ended.
      Blockly.playAudio('win', 0.5);
      BlocklyDialogs.congratulations();
    }
  }
};
