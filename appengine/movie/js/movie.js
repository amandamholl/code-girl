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

'use strict';

goog.provide('Movie');

goog.require('Scrubber');
goog.require('Movie.soy');
goog.require('Movie.Blocks');
goog.require('Movie.Answers');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');


var color;
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

Movie.HEIGHT = 580;
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
       maxLevel: 4,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
	/* changed for style: blocklyDiv.style.top = Math.max(10, top - window.pageYOffset) + 'px'; */
    blocklyDiv.style.top = '0 px';
    //blocklyDiv.style.left = rtl ? '10px' : '420px';
    blocklyDiv.style.width = (window.innerWidth - 420) + 'px';
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
	   
 /* Code from puzzle.js -- saves blocks and reloads them if page reloads */
  var iterator = BlocklyGames.LEVEL;
  while(iterator >= (BlocklyGames.LEVEL - 1) && iterator != 0){
	var savedBlocks =
		BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME, iterator);
	try {
	  var loadOnce = window.sessionStorage.loadOnceBlocks;
	} catch (e) {
	  // Firefox sometimes throws a SecurityError when accessing sessionStorage.
	  // Restarting Firefox fixes this, so it looks like a bug.
	  var loadOnce = null;
	}
	if (loadOnce) {
	  delete window.sessionStorage.loadOnceBlocks;
	  var xml = Blockly.Xml.textToDom(loadOnce);
	  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
	} else if (savedBlocks) {
	  var xml = Blockly.Xml.textToDom(savedBlocks);
	  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
	} else {
	  //idk
	}
	iterator = iterator - 1;
  }
  
  // Prevent collisions with user-defined functions or variables.
  Blockly.JavaScript.addReservedWords('circle,rect,line,penColour,time');

  /*if (document.getElementById('submitButton')) {
    BlocklyGames.bindClick('submitButton', Movie.submitToReddit);
  }*/

  var defaultXml = '<xml></xml>';
  //BlocklyInterface.loadBlocks(defaultXml, false);
  
 

  Movie.ctxDisplay = document.getElementById('display').getContext('2d');
  Movie.ctxDisplay.globalCompositeOperation = 'source-over';
  Movie.ctxScratch = document.getElementById('scratch').getContext('2d');
  
  
  
  Movie.display();
  //Movie.renderAnswer_();
  //Movie.renderHatching_();
  
  Movie.renderSuperhero_();
  Blockly.addChangeListener(Movie.display);

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
  BlocklyGames.bindClick('unlock', Movie.unlock);
  //BlocklyGames.bindClick('save', Movie.unlock);
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

function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var bb = new BlobBuilder();
    bb.append(ab);
    return bb.getBlob(mimeString);
}

Movie.unlock = function() {
  Blockly.playAudio('win', 0.5);
  BlocklyInterface.saveToLocalStorage(); 
  if(BlocklyGames.LEVEL < 4){
	  BlocklyDialogs.levelup();
  }
  else{
	  BlocklyDialogs.done();
  }	  
};

/**
 * On startup draw superhero that will be displayed behind
 * @private
 */
Movie.renderSuperhero_ = function() {
  var ctx = document.getElementById('superhero').getContext('2d');
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.scale(.96,.96);
  ctx.translate(-505,10);
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#a3550b";
  ctx.beginPath();
  ctx.moveTo(801.8,171.7);
  ctx.bezierCurveTo(801.3,150.6,789.4,136.89999999999998,779.1999999999999,108.69999999999999);
  ctx.bezierCurveTo(776.4,101.1,782.5999999999999,88.89999999999999,774.3,61.89999999999999);
  ctx.bezierCurveTo(764.5,29.69999999999999,735.8,21.69999999999999,715.6999999999999,21.69999999999999);
  ctx.bezierCurveTo(689.0999999999999,21.69999999999999,662.5999999999999,35.19999999999999,656.1999999999999,61.59999999999999);
  ctx.bezierCurveTo(649.1999999999999,90.29999999999998,653.0999999999999,100.89999999999998,650.6999999999999,109.69999999999999);
  ctx.bezierCurveTo(647.6999999999999,120.89999999999999,625.6999999999999,155.6,628.4,176.6);
  ctx.bezierCurveTo(630.8,195.4,637.6,201,637.6,201);
  ctx.bezierCurveTo(637.6,201,638.5,177.3,644.9,167.7);
  ctx.bezierCurveTo(646,166.1,643.9,180,645.8,192.5);
  ctx.bezierCurveTo(648.1999999999999,208.6,660.8,209,660.8,209);
  ctx.bezierCurveTo(660.8,209,658.3,204.3,658.1999999999999,201.1);
  ctx.bezierCurveTo(657.9999999999999,193.2,661.1999999999999,188.79999999999998,661.1999999999999,188.79999999999998);
  ctx.bezierCurveTo(661.1999999999999,188.79999999999998,664.0999999999999,196.99999999999997,664.9999999999999,198.7);
  ctx.bezierCurveTo(672.2999999999998,212.29999999999998,675.0999999999999,209.29999999999998,675.0999999999999,209.29999999999998);
  ctx.bezierCurveTo(675.0999999999999,209.29999999999998,672.0999999999999,196.79999999999998,675.0999999999999,196.1);
  ctx.bezierCurveTo(678.0999999999999,195.4,754.1999999999999,197.1,754.1999999999999,197.1);
  ctx.bezierCurveTo(754.1999999999999,197.1,757.5999999999999,206.1,755.6999999999999,210);
  ctx.bezierCurveTo(754.6999999999999,212,760.4999999999999,208.9,764.4,203.5);
  ctx.bezierCurveTo(768,198.6,769.6999999999999,191.5,769.6999999999999,191.5);
  ctx.bezierCurveTo(769.6999999999999,191.5,772.1999999999999,198.1,772.4,200.3);
  ctx.bezierCurveTo(772.6,202.8,771.6,210.4,771.6,210.4);
  ctx.bezierCurveTo(771.6,210.4,782.6,206.6,784.7,192.70000000000002);
  ctx.bezierCurveTo(786,184.3,785.3000000000001,167.00000000000003,785.3000000000001,167.00000000000003);
  ctx.bezierCurveTo(792.3000000000001,179.90000000000003,792.6,201.70000000000005,792.6,201.70000000000005);
  ctx.bezierCurveTo(792.6,201.70000000000005,802.2,189.2,801.8,171.7);
  ctx.closePath();
  ctx.moveTo(765.5,115.8);
  ctx.bezierCurveTo(756.4,138.6,728,149.2,715.3,149.2);
  ctx.bezierCurveTo(698,149.2,669.9,133.6,664.5,115.39999999999999);
  ctx.bezierCurveTo(664.5,115.39999999999999,653.6,113.99999999999999,653.6,103.6);
  ctx.bezierCurveTo(653.6,91.5,662.1,91.19999999999999,662.1,91.19999999999999);
  ctx.bezierCurveTo(661.8000000000001,98.99999999999999,664.8000000000001,101.49999999999999,664.8000000000001,101.49999999999999);
  ctx.bezierCurveTo(664.8000000000001,101.49999999999999,664.3000000000001,98.29999999999998,667.5000000000001,94.69999999999999);
  ctx.bezierCurveTo(671.2000000000002,90.6,677.5000000000001,88.99999999999999,685.7000000000002,82.29999999999998);
  ctx.bezierCurveTo(693.9000000000002,75.49999999999999,697.5000000000001,61.29999999999998,697.5000000000001,61.29999999999998);
  ctx.bezierCurveTo(697.5000000000001,61.29999999999998,699.3000000000001,69.09999999999998,711.7000000000002,80.49999999999999);
  ctx.bezierCurveTo(724.1000000000003,91.89999999999999,737.1000000000001,85.49999999999999,737.1000000000001,85.49999999999999);
  ctx.bezierCurveTo(737.1000000000001,85.49999999999999,732.9000000000001,85.19999999999999,728.3000000000002,81.59999999999998);
  ctx.bezierCurveTo(723.7000000000002,78.09999999999998,722.8000000000002,72.39999999999998,722.8000000000002,72.39999999999998);
  ctx.bezierCurveTo(722.8000000000002,72.39999999999998,724.0000000000002,78.79999999999998,735.5000000000002,82.69999999999997);
  ctx.bezierCurveTo(747.0000000000002,86.59999999999997,753.3000000000002,85.89999999999998,757.9000000000002,89.09999999999998);
  ctx.bezierCurveTo(762.5000000000002,92.29999999999998,762.5000000000002,105.29999999999998,762.5000000000002,105.29999999999998);
  ctx.bezierCurveTo(762.5000000000002,105.29999999999998,765.1000000000003,101.89999999999998,766.8000000000002,98.59999999999998);
  ctx.bezierCurveTo(767.5000000000002,97.19999999999997,768.5000000000002,91.59999999999998,768.5000000000002,91.59999999999998);
  ctx.bezierCurveTo(768.5000000000002,91.59999999999998,775.8000000000002,92.69999999999997,775.8000000000002,104.19999999999997);
  ctx.bezierCurveTo(775.7,113.7,765.5,115.8,765.5,115.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(768.5,91.6);
  ctx.bezierCurveTo(768.5,91.6,767.5,97.19999999999999,766.8,98.6);
  ctx.bezierCurveTo(765.0999999999999,101.89999999999999,762.5,105.3,762.5,105.3);
  ctx.bezierCurveTo(762.5,105.3,762.5,92.3,757.9,89.1);
  ctx.bezierCurveTo(753.3,85.89999999999999,747,86.6,735.5,82.69999999999999);
  ctx.bezierCurveTo(724,78.79999999999998,722.8,72.49999999999999,722.8,72.49999999999999);
  ctx.bezierCurveTo(722.8,72.49999999999999,723.6999999999999,78.19999999999999,728.3,81.69999999999999);
  ctx.bezierCurveTo(732.9,85.19999999999999,737.0999999999999,85.6,737.0999999999999,85.6);
  ctx.bezierCurveTo(737.0999999999999,85.6,724.0999999999999,92,711.6999999999999,80.6);
  ctx.bezierCurveTo(699.3,69.19999999999999,697.4999999999999,61.39999999999999,697.4999999999999,61.39999999999999);
  ctx.bezierCurveTo(697.4999999999999,61.39999999999999,693.7999999999998,75.6,685.6999999999999,82.39999999999999);
  ctx.bezierCurveTo(677.6,89.19999999999999,671.1999999999999,90.69999999999999,667.4999999999999,94.8);
  ctx.bezierCurveTo(664.2999999999998,98.3,664.7999999999998,101.6,664.7999999999998,101.6);
  ctx.bezierCurveTo(664.7999999999998,101.6,661.7999999999998,99.1,662.0999999999998,91.3);
  ctx.bezierCurveTo(662.0999999999998,91.3,653.5999999999998,91.6,653.5999999999998,103.7);
  ctx.bezierCurveTo(653.5999999999998,114,664.4999999999998,115.5,664.4999999999998,115.5);
  ctx.bezierCurveTo(669.9999999999998,133.6,698.0999999999998,149.3,715.2999999999997,149.3);
  ctx.bezierCurveTo(727.9999999999998,149.3,756.4999999999998,138.60000000000002,765.4999999999998,115.9);
  ctx.bezierCurveTo(765.4999999999998,115.9,775.7999999999997,113.80000000000001,775.7999999999997,104.30000000000001);
  ctx.bezierCurveTo(775.7,92.6,768.5,91.6,768.5,91.6);
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
  ctx.moveTo(742.5,97.4);
  ctx.bezierCurveTo(742.5,97.4,737.6,103,731.3,101.9);
  ctx.bezierCurveTo(725.0999999999999,100.80000000000001,723.1999999999999,94.60000000000001,723.1999999999999,94.60000000000001);
  ctx.bezierCurveTo(723.1999999999999,94.60000000000001,725.4,85.9,732.9,85.9);
  ctx.bezierCurveTo(738.6,86,742.6,90.7,742.5,97.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#29abe2";
  ctx.strokeStyle = "#29abe2";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(732.9,99.9);
  ctx.lineTo(732.9,99.9);
  ctx.bezierCurveTo(736.6999999999999,99.9,739.9,96.80000000000001,739.9,92.9);
  ctx.lineTo(739.9,92.9);
  ctx.bezierCurveTo(739.9,89.10000000000001,736.8,85.9,732.9,85.9);
  ctx.lineTo(732.9,85.9);
  ctx.bezierCurveTo(729.1,85.9,725.9,89,725.9,92.9);
  ctx.lineTo(725.9,92.9);
  ctx.bezierCurveTo(725.9,96.8,729,99.9,732.9,99.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(732.6,96.1);
  ctx.lineTo(732.6,96.1);
  ctx.bezierCurveTo(735.1,96.1,737.2,94,737.2,91.5);
  ctx.lineTo(737.2,91.5);
  ctx.bezierCurveTo(737.2,89,735.1,86.9,732.6,86.9);
  ctx.lineTo(732.6,86.9);
  ctx.bezierCurveTo(730.1,86.9,728,89,728,91.5);
  ctx.lineTo(728,91.5);
  ctx.bezierCurveTo(728,94.1,730.1,96.1,732.6,96.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(736,96.6);
  ctx.lineTo(736,96.6);
  ctx.bezierCurveTo(736.7,96.6,737.4,96,737.4,95.3);
  ctx.lineTo(737.4,95.3);
  ctx.bezierCurveTo(737.4,94.6,736.8,94,736,94);
  ctx.lineTo(736,94);
  ctx.bezierCurveTo(735.3,94,734.7,94.6,734.7,95.3);
  ctx.lineTo(734.7,95.3);
  ctx.bezierCurveTo(734.7,96.1,735.2,96.6,736,96.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(746.8,92.2);
  ctx.bezierCurveTo(746.6999999999999,92.2,743.9,92.8,742.1999999999999,91);
  ctx.bezierCurveTo(741.8,90.6,741.4,90.1,740.9999999999999,89.6);
  ctx.bezierCurveTo(739.3999999999999,87.5,737.2999999999998,85,732.7999999999998,85);
  ctx.bezierCurveTo(727.1999999999998,85,724.8999999999999,89.8,723.3999999999999,93);
  ctx.lineTo(723.1999999999998,93.7);
  ctx.lineTo(723.2999999999998,93.5);
  ctx.bezierCurveTo(724.7999999999998,90.3,727.8999999999999,86.1,732.7999999999998,86.1);
  ctx.bezierCurveTo(736.7999999999998,86.1,738.4999999999999,88.3,740.0999999999998,90.3);
  ctx.bezierCurveTo(740.5999999999998,90.89999999999999,740.8999999999997,91.39999999999999,741.2999999999998,91.8);
  ctx.bezierCurveTo(743.5,94,746.8,92.1,746.8,92.2);
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
  ctx.moveTo(687.8,97.4);
  ctx.bezierCurveTo(687.8,97.4,692.6999999999999,103,699,101.9);
  ctx.bezierCurveTo(705.2,100.80000000000001,707.1,94.60000000000001,707.1,94.60000000000001);
  ctx.bezierCurveTo(707.1,94.60000000000001,704.9,85.9,697.4,85.9);
  ctx.bezierCurveTo(691.7,86,687.8,90.7,687.8,97.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#29abe2";
  ctx.strokeStyle = "#29abe2";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(697.5,99.9);
  ctx.lineTo(697.5,99.9);
  ctx.bezierCurveTo(693.7,99.9,690.5,96.80000000000001,690.5,92.9);
  ctx.lineTo(690.5,92.9);
  ctx.bezierCurveTo(690.5,89.10000000000001,693.6,85.9,697.5,85.9);
  ctx.lineTo(697.5,85.9);
  ctx.bezierCurveTo(701.3,85.9,704.5,89,704.5,92.9);
  ctx.lineTo(704.5,92.9);
  ctx.bezierCurveTo(704.5,96.8,701.4,99.9,697.5,99.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(697.8,96.1);
  ctx.lineTo(697.8,96.1);
  ctx.bezierCurveTo(695.3,96.1,693.1999999999999,94,693.1999999999999,91.5);
  ctx.lineTo(693.1999999999999,91.5);
  ctx.bezierCurveTo(693.1999999999999,89,695.3,86.9,697.8,86.9);
  ctx.lineTo(697.8,86.9);
  ctx.bezierCurveTo(700.3,86.9,702.4,89,702.4,91.5);
  ctx.lineTo(702.4,91.5);
  ctx.bezierCurveTo(702.3,94.1,700.3,96.1,697.8,96.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(694.4,96.6);
  ctx.lineTo(694.4,96.6);
  ctx.bezierCurveTo(693.6999999999999,96.6,693.1,96,693.1,95.3);
  ctx.lineTo(693.1,95.3);
  ctx.bezierCurveTo(693.1,94.6,693.7,94,694.4,94);
  ctx.lineTo(694.4,94);
  ctx.bezierCurveTo(695.1,94,695.6999999999999,94.6,695.6999999999999,95.3);
  ctx.lineTo(695.6999999999999,95.3);
  ctx.bezierCurveTo(695.7,96.1,695.1,96.6,694.4,96.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(683.5,92.2);
  ctx.bezierCurveTo(683.6,92.2,686.4,92.8,688.1,91);
  ctx.bezierCurveTo(688.5,90.6,688.9,90.1,689.3000000000001,89.6);
  ctx.bezierCurveTo(690.9000000000001,87.5,693.0000000000001,85,697.5000000000001,85);
  ctx.bezierCurveTo(703.1000000000001,85,705.4000000000001,89.8,706.9000000000001,93);
  ctx.lineTo(707.1000000000001,93.7);
  ctx.lineTo(707.0000000000001,93.5);
  ctx.bezierCurveTo(705.5000000000001,90.3,702.4000000000001,86.1,697.5000000000001,86.1);
  ctx.bezierCurveTo(693.5000000000001,86.1,691.8000000000001,88.3,690.2000000000002,90.3);
  ctx.bezierCurveTo(689.7000000000002,90.89999999999999,689.4000000000002,91.39999999999999,689.0000000000001,91.8);
  ctx.bezierCurveTo(686.8,94,683.5,92.1,683.5,92.2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(718.4,196.7);
  ctx.bezierCurveTo(718.1999999999999,196.7,718.1,196.79999999999998,717.9,196.79999999999998);
  ctx.bezierCurveTo(718.1,196.7,718.3,196.7,718.4,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(717.7,196.7);
  ctx.bezierCurveTo(717.1,196.79999999999998,716.6,196.79999999999998,716,196.79999999999998);
  ctx.bezierCurveTo(716.6,196.8,717.1,196.8,717.7,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(722.1,195.9);
  ctx.bezierCurveTo(726.1,194.8,729.7,192.6,732.7,189.20000000000002);
  ctx.bezierCurveTo(729.8,192.2,726.3,194.6,722.1,195.9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(714,196.7);
  ctx.lineTo(714,196.7);
  ctx.lineTo(714,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(713.3,196.5);
  ctx.bezierCurveTo(697.5,193.6,694.3,165.3,694.3,165.3);
  ctx.bezierCurveTo(695.8,181.60000000000002,700.6999999999999,187.70000000000002,704.4,191.60000000000002);
  ctx.bezierCurveTo(706.8,194.3,709.9,196,713.3,196.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(670.5,466.8);
  ctx.bezierCurveTo(671.8,498.7,671.7,539.8,673.3,539.4);
  ctx.bezierCurveTo(675.9,538.8,691,540.4,695.3,541.1);
  ctx.bezierCurveTo(698.5999999999999,541.6,702.3,487.20000000000005,703.9,468.40000000000003);
  ctx.bezierCurveTo(705,456.1,706.9,426.90000000000003,706.5,380.90000000000003);
  ctx.bezierCurveTo(692.7,379.50000000000006,677,372.90000000000003,669.9,368.40000000000003);
  ctx.bezierCurveTo(668.4,399.3,669.8,447.3,670.5,466.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(756.4,368.5);
  ctx.bezierCurveTo(749.1999999999999,372.9,733.5,379.4,719.6999999999999,380.7);
  ctx.bezierCurveTo(718.9,426.7,720.5999999999999,455.9,721.5999999999999,468.2);
  ctx.bezierCurveTo(722.9999999999999,486.9,726.3,541.4,729.5999999999999,540.9);
  ctx.bezierCurveTo(733.8999999999999,540.3,748.9999999999999,538.8,751.5999999999999,539.4);
  ctx.bezierCurveTo(753.1999999999999,539.8,753.4999999999999,498.7,755.0999999999999,466.9);
  ctx.bezierCurveTo(755.9,447.5,757.8,399.4,756.4,368.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(717.9,196.7);
  ctx.bezierCurveTo(717.8,196.7,717.8,196.7,717.6999999999999,196.7);
  ctx.bezierCurveTo(717.8,196.7,717.9,196.7,717.9,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(714,196.7);
  ctx.bezierCurveTo(713.8,196.6,713.5,196.6,713.3,196.6);
  ctx.bezierCurveTo(713.5,196.6,713.8,196.6,714,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(718.4,196.7);
  ctx.bezierCurveTo(719.6999999999999,196.5,720.9,196.29999999999998,722.1,195.89999999999998);
  ctx.bezierCurveTo(721.1,196.2,720.2,196.39999999999998,719.2,196.49999999999997);
  ctx.bezierCurveTo(719,196.5,718.7,196.6,718.4,196.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(716,196.8);
  ctx.lineTo(716,196.8);
  ctx.bezierCurveTo(715.4,196.8,714.7,196.70000000000002,714.1,196.70000000000002);
  ctx.bezierCurveTo(714.7,196.7,715.3,196.8,716,196.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#a40062";
  ctx.beginPath();
  ctx.moveTo(732.7,189.2);
  ctx.bezierCurveTo(740.7,181.2,744.2,169.6,744.2,169.6);
  ctx.bezierCurveTo(744.2,169.6,744.1,169.5,744,169.5);
  ctx.bezierCurveTo(743,171.5,737.6,182.6,734.1,187.4);
  ctx.bezierCurveTo(733.7,188,733.2,188.7,732.7,189.2);
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
  ctx.moveTo(749.6,284.6);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(869.7,211.6);
  ctx.lineTo(867.2,213.5);
  ctx.bezierCurveTo(833.4000000000001,249.2,822.4000000000001,248.3,820.6,248.3);
  ctx.lineTo(820.6,248.3);
  ctx.bezierCurveTo(812.2,248.5,781.8000000000001,225,773.9,213.3);
  ctx.bezierCurveTo(768.9,206,754.9,186.20000000000002,758.8,179.10000000000002);
  ctx.lineTo(762.1999999999999,180.20000000000002);
  ctx.bezierCurveTo(767.6999999999999,183.3,777.8,189.9,781.3,193.4);
  ctx.bezierCurveTo(784.9,196.9,788.9,200.5,792.1999999999999,201.6);
  ctx.bezierCurveTo(793.1999999999999,201.9,794.1999999999999,202.2,795.1999999999999,202.29999999999998);
  ctx.bezierCurveTo(807.1999999999999,216.6,817.5999999999999,231.29999999999998,819.6999999999999,229.39999999999998);
  ctx.bezierCurveTo(822.9,228.2,846.4999999999999,213.79999999999998,856.9999999999999,204.99999999999997);
  ctx.bezierCurveTo(858.5999999999999,203.69999999999996,859.8999999999999,202.59999999999997,860.9999999999999,201.69999999999996);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(854.8,206.3);
  ctx.lineTo(860.8,221.3);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(725.7,147.7);
  ctx.bezierCurveTo(725.8000000000001,147.6,725.9000000000001,147.6,725.9000000000001,147.6);
  ctx.lineTo(725.9000000000001,147.6);
  ctx.lineTo(708.5000000000001,148.29999999999998);
  ctx.lineTo(708.5000000000001,148.49999999999997);
  ctx.bezierCurveTo(710.0000000000001,148.69999999999996,713.5000000000001,149.09999999999997,716.8000000000001,149.09999999999997);
  ctx.bezierCurveTo(721.7,149.2,725.7,147.7,725.7,147.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(725.8,159.8);
  ctx.lineTo(725.8,149.10000000000002);
  ctx.bezierCurveTo(724.8,149.40000000000003,721.1999999999999,150.60000000000002,716.9,150.60000000000002);
  ctx.bezierCurveTo(716.8,150.60000000000002,716.8,150.60000000000002,716.8,150.60000000000002);
  ctx.bezierCurveTo(713.5,150.60000000000002,710.3,150.20000000000002,708.6999999999999,150.00000000000003);
  ctx.lineTo(708.6999999999999,159.40000000000003);
  ctx.bezierCurveTo(704.8,160.30000000000004,693.4999999999999,165.30000000000004,693.0999999999999,165.40000000000003);
  ctx.bezierCurveTo(691.5999999999999,166.10000000000002,695.1999999999999,175.60000000000002,695.5999999999999,176.80000000000004);
  ctx.bezierCurveTo(697.8999999999999,183.70000000000005,701.5999999999999,191.50000000000003,708.3,195.10000000000005);
  ctx.bezierCurveTo(725.5999999999999,204.40000000000006,738.0999999999999,182.00000000000006,743.6999999999999,167.10000000000005);
  ctx.bezierCurveTo(742.3,166.2,731.9,162.1,725.8,159.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#efd0b4";
  ctx.beginPath();
  ctx.moveTo(716.8,150.8);
  ctx.bezierCurveTo(721.0999999999999,150.8,724.5,149.5,725.5999999999999,149.10000000000002);
  ctx.lineTo(725.5999999999999,147.60000000000002);
  ctx.bezierCurveTo(725.5999999999999,147.60000000000002,725.4999999999999,147.60000000000002,725.3999999999999,147.70000000000002);
  ctx.bezierCurveTo(725.2999999999998,147.70000000000002,721.4999999999999,149.20000000000002,716.7999999999998,149.20000000000002);
  ctx.bezierCurveTo(713.3999999999999,149.20000000000002,709.7999999999998,148.8,708.5999999999998,148.60000000000002);
  ctx.lineTo(708.5999999999998,150.00000000000003);
  ctx.bezierCurveTo(710.2999999999998,150.20000000000002,713.2999999999998,150.80000000000004,716.5999999999998,150.80000000000004);
  ctx.bezierCurveTo(716.8,150.8,716.8,150.8,716.8,150.8);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(561,208.1);
  ctx.lineTo(563.5,210.1);
  ctx.bezierCurveTo(596.4,246.89999999999998,607.4,246.39999999999998,609.3,246.39999999999998);
  ctx.lineTo(609.3,246.39999999999998);
  ctx.bezierCurveTo(617.6999999999999,246.79999999999998,649.4,224.39999999999998,657.9,212.99999999999997);
  ctx.bezierCurveTo(663.1999999999999,205.89999999999998,678.1,186.49999999999997,674.4,179.29999999999995);
  ctx.lineTo(671,180.29999999999995);
  ctx.bezierCurveTo(665.3,183.29999999999995,654.9,189.39999999999995,651.1,192.79999999999995);
  ctx.bezierCurveTo(647.3000000000001,196.09999999999997,643.2,199.59999999999997,639.7,200.59999999999997);
  ctx.bezierCurveTo(638.7,200.89999999999998,637.7,201.09999999999997,636.5,201.19999999999996);
  ctx.bezierCurveTo(623.8,215.09999999999997,612.7,229.49999999999997,610.7,227.39999999999995);
  ctx.bezierCurveTo(607.5,226.09999999999994,584.2,210.89999999999995,573.9000000000001,201.79999999999995);
  ctx.bezierCurveTo(572.4000000000001,200.49999999999994,571.0000000000001,199.29999999999995,570.0000000000001,198.39999999999995);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(576.2,203.3);
  ctx.lineTo(569.6,218.2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.beginPath();
  ctx.moveTo(766.7,173.2);
  ctx.bezierCurveTo(763.7,170.5,761.6,169,754.9000000000001,167.1);
  ctx.bezierCurveTo(753.7,166.79999999999998,752.0000000000001,165.4,740.7,165.29999999999998);
  ctx.lineTo(740.7,165.99999999999997);
  ctx.bezierCurveTo(740.7,165.99999999999997,739.5,172.49999999999997,737,175.29999999999998);
  ctx.bezierCurveTo(733.5,179.29999999999998,727.3,182.39999999999998,720.5,182.79999999999998);
  ctx.bezierCurveTo(712.2,183.2,707.1,180.39999999999998,703.9,178.1);
  ctx.bezierCurveTo(698.6,174.4,693.9,167,693,165.4);
  ctx.lineTo(693.1,165.20000000000002);
  ctx.bezierCurveTo(693,165.20000000000002,692.9,165.20000000000002,692.9,165.20000000000002);
  ctx.bezierCurveTo(692.8,165.10000000000002,692.8,165.10000000000002,692.8,165.10000000000002);
  ctx.bezierCurveTo(692.8,165.10000000000002,692.5999999999999,165.20000000000002,692.0999999999999,165.20000000000002);
  ctx.bezierCurveTo(683.1999999999999,165.10000000000002,681.8,165.20000000000002,674.3999999999999,166.60000000000002);
  ctx.bezierCurveTo(668.5999999999999,167.70000000000002,664.5999999999999,169.70000000000002,661.6999999999998,172.70000000000002);
  ctx.bezierCurveTo(658.8999999999999,175.60000000000002,642.4999999999998,191.3,635.6999999999998,201.3);
  ctx.bezierCurveTo(638.7999999999998,208.5,648.5999999999998,213.5,656.9999999999998,215.60000000000002);
  ctx.lineTo(661.6999999999998,210.8);
  ctx.bezierCurveTo(662.8999999999999,227.60000000000002,668.0999999999998,236,668.8999999999999,239.5);
  ctx.bezierCurveTo(669.6999999999998,243.3,670.3999999999999,243.8,671.4999999999999,259.4);
  ctx.bezierCurveTo(671.7999999999998,263.2,670.5999999999999,288.4,668.8999999999999,293.5);
  ctx.bezierCurveTo(667.1999999999998,298.6,667.2999999999998,308,666.3999999999999,313.9);
  ctx.bezierCurveTo(665.5999999999999,319.9,663.3999999999999,342,663.3999999999999,342);
  ctx.bezierCurveTo(663.3999999999999,342,682.9999999999999,348,699.0999999999999,349.2);
  ctx.bezierCurveTo(715.1999999999999,350.5,752.3,348,758.6999999999999,346.7);
  ctx.bezierCurveTo(765.0999999999999,345.4,767.5999999999999,341.2,768.0999999999999,339.4);
  ctx.bezierCurveTo(768.5999999999999,333.4,763.8,298.09999999999997,760.8999999999999,290.5);
  ctx.bezierCurveTo(757.8999999999999,282.9,759.2999999999998,266,759.8999999999999,259.6);
  ctx.bezierCurveTo(760.8999999999999,248.60000000000002,761.5999999999999,246.70000000000002,763.4999999999999,240.8);
  ctx.bezierCurveTo(764.2999999999998,238.3,769.0999999999999,230.8,770.9999999999999,212.8);
  ctx.lineTo(774.1999999999999,215.70000000000002);
  ctx.bezierCurveTo(782.4,213.10000000000002,791.9,207.50000000000003,794.5999999999999,200.10000000000002);
  ctx.bezierCurveTo(787,190.6,769.7,175.9,766.7,173.2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(746.8,200.1);
  ctx.lineTo(688.9,200.1);
  ctx.bezierCurveTo(683.6999999999999,205.4,678.4,210.7,673.1,216.1);
  ctx.bezierCurveTo(688,233.29999999999998,702.9,250.39999999999998,717.8000000000001,267.6);
  ctx.bezierCurveTo(732.7,250.40000000000003,747.6,233.3,762.5000000000001,216.10000000000002);
  ctx.bezierCurveTo(757.2,210.8,752,205.5,746.8,200.1);
  ctx.moveTo(675.4,216.2);
  ctx.bezierCurveTo(680.1,211.39999999999998,684.9,206.6,689.6,201.79999999999998);
  ctx.lineTo(746.1,201.79999999999998);
  ctx.bezierCurveTo(750.8000000000001,206.6,755.5,211.39999999999998,760.3000000000001,216.2);
  ctx.bezierCurveTo(746.2,232.5,732.1,248.7,717.9000000000001,265);
  ctx.bezierCurveTo(703.7,248.7,689.6,232.5,675.4,216.2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(695.1,218.5);
  ctx.bezierCurveTo(695.1,216.8,695.6,215.7,696.8000000000001,214.4);
  ctx.lineTo(704.6,206.6);
  ctx.bezierCurveTo(705.4,205.79999999999998,706.1,205.4,707,205.1);
  ctx.lineTo(691.3,205.1);
  ctx.lineTo(680.6,216);
  ctx.lineTo(695.2,232.6);
  ctx.bezierCurveTo(695.2,232.5,695.2,232.29999999999998,695.2,232.2);
  ctx.lineTo(695.1,218.5);
  ctx.lineTo(695.1,218.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(706,245.2);
  ctx.lineTo(717.8,258.59999999999997);
  ctx.lineTo(729.1999999999999,245.69999999999996);
  ctx.lineTo(708.5999999999999,245.69999999999996);
  ctx.bezierCurveTo(707.6,245.7,706.8,245.5,706,245.2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(738.4,210.4);
  ctx.bezierCurveTo(739.6,211.6,739.6,212.5,738.4,213.8);
  ctx.lineTo(732.3,219.9);
  ctx.bezierCurveTo(731.0999999999999,221.1,730.1999999999999,221.20000000000002,729,219.9);
  ctx.lineTo(726.2,216.9);
  ctx.lineTo(712.3000000000001,216.9);
  ctx.lineTo(708.6,220.6);
  ctx.lineTo(708.6,230.2);
  ctx.lineTo(712.3000000000001,233.79999999999998);
  ctx.lineTo(726.4000000000001,233.79999999999998);
  ctx.lineTo(729.1000000000001,230.99999999999997);
  ctx.bezierCurveTo(730.4000000000001,229.69999999999996,731.2000000000002,229.69999999999996,732.4000000000001,230.89999999999998);
  ctx.lineTo(737.7,236.2);
  ctx.lineTo(755.4000000000001,216.1);
  ctx.lineTo(744.5000000000001,205.2);
  ctx.lineTo(732.5000000000001,205.2);
  ctx.bezierCurveTo(733.3000000000001,205.39999999999998,734.1000000000001,205.89999999999998,734.9000000000001,206.7);
  ctx.lineTo(738.4,210.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#dd3858";
  ctx.beginPath();
  ctx.moveTo(783.4,375.1);
  ctx.bezierCurveTo(783,323.90000000000003,762.1999999999999,295.6,762.1999999999999,295.6);
  ctx.lineTo(715.4999999999999,298.20000000000005);
  ctx.lineTo(715.4999999999999,298.1);
  ctx.lineTo(715.3999999999999,298.1);
  ctx.lineTo(715.4999999999999,298.1);
  ctx.lineTo(715.4999999999999,298.20000000000005);
  ctx.lineTo(669.0999999999999,294.50000000000006);
  ctx.bezierCurveTo(669.0999999999999,294.50000000000006,648.1999999999999,323.90000000000003,647.8,375.1);
  ctx.bezierCurveTo(647.6999999999999,387.8,681.1999999999999,396.5,715.5,396.8);
  ctx.lineTo(715.5,396.8);
  ctx.bezierCurveTo(715.5,396.8,715.7,396.8,715.8,396.8);
  ctx.bezierCurveTo(715.8999999999999,396.8,716.0999999999999,396.8,716.0999999999999,396.8);
  ctx.lineTo(716.0999999999999,396.8);
  ctx.bezierCurveTo(749.8,396.5,783.5,387.8,783.4,375.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.beginPath();
  ctx.moveTo(668.2,295.6);
  ctx.lineTo(717.8,316);
  ctx.lineTo(762.2,295.6);
  ctx.lineTo(759.1,279.4);
  ctx.lineTo(718.1,299.2);
  ctx.lineTo(670.7,279.4);
  ctx.lineTo(668.2,295.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(571,199);
  ctx.bezierCurveTo(570.9,198.9,570.6,198.7,570.2,198.3);
  ctx.bezierCurveTo(570,198.10000000000002,569.7,197.8,569.5,197.60000000000002);
  ctx.bezierCurveTo(569.3,197.3,568.9,196.90000000000003,568.6,196.20000000000002);
  ctx.bezierCurveTo(566.7,192.8,565.4,190.60000000000002,564.7,189.50000000000003);
  ctx.bezierCurveTo(564.3000000000001,188.90000000000003,562.8000000000001,187.80000000000004,560.2,186.20000000000002);
  ctx.bezierCurveTo(557.9000000000001,184.70000000000002,556.5,184.00000000000003,556,183.8);
  ctx.bezierCurveTo(555.4,183.60000000000002,555,183.70000000000002,554.9,184.3);
  ctx.bezierCurveTo(554.8,184.5,554.8,184.8,554.8,185.10000000000002);
  ctx.bezierCurveTo(554.8,186.10000000000002,554.9,186.70000000000002,555.0999999999999,187.10000000000002);
  ctx.bezierCurveTo(555.5999999999999,187.70000000000002,556.4999999999999,188.60000000000002,557.6999999999999,189.70000000000002);
  ctx.bezierCurveTo(558.9,190.8,559.8,191.70000000000002,560.3,192.20000000000002);
  ctx.bezierCurveTo(560.5,192.4,560.5,192.60000000000002,560.5,192.70000000000002);
  ctx.bezierCurveTo(560.3,193.3,559.6,193.70000000000002,558.5,193.8);
  ctx.bezierCurveTo(557.5,193.9,556.8,193.9,556.1,193.60000000000002);
  ctx.lineTo(542.9,188.8);
  ctx.bezierCurveTo(542.6,188.70000000000002,542.3,188.8,541.9,189.10000000000002);
  ctx.bezierCurveTo(541.6,189.40000000000003,541.3,189.70000000000002,541.3,189.90000000000003);
  ctx.bezierCurveTo(541.1999999999999,190.20000000000005,541.1999999999999,190.60000000000002,541.3,191.00000000000003);
  ctx.bezierCurveTo(541.4,191.40000000000003,541.5999999999999,191.70000000000002,541.9,191.80000000000004);
  ctx.lineTo(553.3,196.00000000000003);
  ctx.bezierCurveTo(553.5999999999999,196.10000000000002,553.6999999999999,196.40000000000003,553.5,197.00000000000003);
  ctx.bezierCurveTo(553.3,197.50000000000003,553,197.70000000000002,552.8,197.60000000000002);
  ctx.lineTo(539.5999999999999,192.8);
  ctx.bezierCurveTo(539.3,192.70000000000002,538.8999999999999,192.8,538.4999999999999,193.10000000000002);
  ctx.bezierCurveTo(538.0999999999999,193.40000000000003,537.7999999999998,193.70000000000002,537.6999999999999,194.10000000000002);
  ctx.bezierCurveTo(537.5999999999999,194.40000000000003,537.5999999999999,194.8,537.5999999999999,195.3);
  ctx.bezierCurveTo(537.6999999999999,195.8,537.8999999999999,196.10000000000002,538.1999999999999,196.20000000000002);
  ctx.lineTo(551.8,201.10000000000002);
  ctx.bezierCurveTo(552,201.20000000000002,552.0999999999999,201.3,552.0999999999999,201.50000000000003);
  ctx.bezierCurveTo(552.1999999999999,201.70000000000002,552.1999999999999,201.90000000000003,552.1999999999999,202.10000000000002);
  ctx.bezierCurveTo(551.9999999999999,202.70000000000002,551.6999999999999,202.90000000000003,551.4,202.8);
  ctx.lineTo(539.6,198.60000000000002);
  ctx.bezierCurveTo(539.3000000000001,198.50000000000003,538.9,198.50000000000003,538.5,198.8);
  ctx.bezierCurveTo(538.1,199,537.8,199.3,537.7,199.60000000000002);
  ctx.bezierCurveTo(537.6000000000001,199.90000000000003,537.6,200.3,537.8000000000001,200.70000000000002);
  ctx.bezierCurveTo(538.0000000000001,201.10000000000002,538.2,201.4,538.5000000000001,201.50000000000003);
  ctx.lineTo(551,206);
  ctx.bezierCurveTo(551.3,206.1,551.4,206.4,551.2,207);
  ctx.bezierCurveTo(551,207.5,550.8000000000001,207.7,550.5,207.6);
  ctx.lineTo(542.6,204.7);
  ctx.bezierCurveTo(542.3000000000001,204.6,542,204.7,541.6,205);
  ctx.bezierCurveTo(541.2,205.3,541,205.6,540.9,205.8);
  ctx.bezierCurveTo(540.9,205.9,540.8,206,540.8,206.20000000000002);
  ctx.bezierCurveTo(540.8,206.3,540.9,206.50000000000003,541,207.00000000000003);
  ctx.bezierCurveTo(541.2,207.40000000000003,541.3,207.60000000000002,541.5,207.70000000000002);
  ctx.lineTo(559.3,214.20000000000002);
  ctx.bezierCurveTo(559.8,214.4,560.8,214.3,562.1999999999999,214.00000000000003);
  ctx.bezierCurveTo(563.4,213.70000000000002,564.3,213.40000000000003,564.9999999999999,213.00000000000003);
  ctx.bezierCurveTo(565.6999999999998,212.60000000000002,566.2999999999998,212.50000000000003,566.5999999999999,212.60000000000002);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(571.4,198.8);
  ctx.lineTo(564.4,214.4);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ffdfbe";
  ctx.beginPath();
  ctx.moveTo(860.1,202.1);
  ctx.bezierCurveTo(860.2,202,860.5,201.79999999999998,860.9,201.4);
  ctx.bezierCurveTo(861.1,201.20000000000002,861.4,201,861.6,200.70000000000002);
  ctx.bezierCurveTo(861.8000000000001,200.50000000000003,862.2,200.00000000000003,862.5,199.4);
  ctx.bezierCurveTo(864.5,196.1,865.8,193.9,866.7,192.8);
  ctx.bezierCurveTo(867.2,192.20000000000002,868.7,191.20000000000002,871.3000000000001,189.70000000000002);
  ctx.bezierCurveTo(873.7,188.3,875.1,187.60000000000002,875.5000000000001,187.4);
  ctx.bezierCurveTo(876.1000000000001,187.20000000000002,876.5000000000001,187.4,876.6000000000001,188);
  ctx.bezierCurveTo(876.7000000000002,188.2,876.7000000000002,188.5,876.7000000000002,188.8);
  ctx.bezierCurveTo(876.7000000000002,189.8,876.5000000000001,190.4,876.3000000000002,190.70000000000002);
  ctx.bezierCurveTo(875.7000000000002,191.3,874.8000000000002,192.10000000000002,873.6000000000001,193.20000000000002);
  ctx.bezierCurveTo(872.4000000000001,194.3,871.5000000000001,195.10000000000002,871.0000000000001,195.70000000000002);
  ctx.bezierCurveTo(870.8000000000001,195.9,870.8000000000001,196.10000000000002,870.8000000000001,196.20000000000002);
  ctx.bezierCurveTo(871.0000000000001,196.8,871.6,197.20000000000002,872.7,197.4);
  ctx.bezierCurveTo(873.7,197.5,874.4000000000001,197.5,875.1,197.3);
  ctx.lineTo(888.3000000000001,193.10000000000002);
  ctx.bezierCurveTo(888.6,193.00000000000003,888.9000000000001,193.10000000000002,889.3000000000001,193.40000000000003);
  ctx.bezierCurveTo(889.6,193.70000000000005,889.9000000000001,194.00000000000003,889.9000000000001,194.20000000000005);
  ctx.bezierCurveTo(890.0000000000001,194.50000000000006,890.0000000000001,194.90000000000003,889.8000000000001,195.30000000000004);
  ctx.bezierCurveTo(889.7,195.70000000000005,889.5000000000001,196.00000000000003,889.2,196.10000000000005);
  ctx.lineTo(877.7,199.90000000000006);
  ctx.bezierCurveTo(877.4000000000001,200.00000000000006,877.3000000000001,200.30000000000007,877.4000000000001,200.90000000000006);
  ctx.bezierCurveTo(877.6000000000001,201.40000000000006,877.8000000000001,201.60000000000005,878.1000000000001,201.60000000000005);
  ctx.lineTo(891.3000000000002,197.30000000000004);
  ctx.bezierCurveTo(891.6000000000001,197.20000000000005,892.0000000000002,197.30000000000004,892.3000000000002,197.60000000000005);
  ctx.bezierCurveTo(892.7000000000002,197.90000000000006,892.9000000000002,198.20000000000005,893.0000000000002,198.60000000000005);
  ctx.bezierCurveTo(893.1000000000003,198.90000000000006,893.1000000000003,199.30000000000004,893.0000000000002,199.80000000000004);
  ctx.bezierCurveTo(892.9000000000002,200.30000000000004,892.7000000000003,200.60000000000005,892.4000000000002,200.70000000000005);
  ctx.lineTo(878.8000000000002,205.10000000000005);
  ctx.bezierCurveTo(878.6000000000001,205.20000000000005,878.5000000000002,205.30000000000004,878.5000000000002,205.50000000000006);
  ctx.bezierCurveTo(878.4000000000002,205.70000000000005,878.4000000000002,205.90000000000006,878.4000000000002,206.10000000000005);
  ctx.bezierCurveTo(878.6000000000003,206.70000000000005,878.8000000000002,206.90000000000006,879.1000000000003,206.80000000000004);
  ctx.lineTo(891.0000000000002,202.90000000000003);
  ctx.bezierCurveTo(891.3000000000002,202.80000000000004,891.7000000000003,202.80000000000004,892.1000000000003,203.10000000000002);
  ctx.bezierCurveTo(892.5000000000002,203.3,892.8000000000003,203.60000000000002,892.8000000000003,204.00000000000003);
  ctx.bezierCurveTo(892.9000000000003,204.30000000000004,892.9000000000003,204.70000000000002,892.7000000000003,205.10000000000002);
  ctx.bezierCurveTo(892.5000000000002,205.50000000000003,892.2000000000003,205.8,892.0000000000002,205.90000000000003);
  ctx.lineTo(879.6000000000003,210.00000000000003);
  ctx.bezierCurveTo(879.3000000000003,210.10000000000002,879.2000000000003,210.40000000000003,879.4000000000002,211.00000000000003);
  ctx.bezierCurveTo(879.6000000000003,211.50000000000003,879.8000000000002,211.70000000000002,880.1000000000003,211.60000000000002);
  ctx.lineTo(888.0000000000002,209.00000000000003);
  ctx.bezierCurveTo(888.3000000000002,208.90000000000003,888.6000000000003,209.10000000000002,888.9000000000002,209.30000000000004);
  ctx.bezierCurveTo(889.2000000000002,209.60000000000005,889.5000000000002,209.90000000000003,889.5000000000002,210.10000000000005);
  ctx.bezierCurveTo(889.5000000000002,210.20000000000005,889.6000000000003,210.30000000000004,889.6000000000003,210.60000000000005);
  ctx.bezierCurveTo(889.6000000000003,210.70000000000005,889.5000000000002,210.90000000000006,889.3000000000003,211.30000000000004);
  ctx.bezierCurveTo(889.1000000000004,211.70000000000002,889.0000000000003,211.90000000000003,888.8000000000003,212.00000000000003);
  ctx.lineTo(871.0000000000003,217.80000000000004);
  ctx.bezierCurveTo(870.5000000000003,218.00000000000003,869.6000000000004,217.90000000000003,868.2000000000004,217.50000000000003);
  ctx.bezierCurveTo(867.0000000000003,217.20000000000002,866.1000000000004,216.80000000000004,865.4000000000004,216.40000000000003);
  ctx.bezierCurveTo(864.7000000000004,216.00000000000003,864.2000000000004,215.80000000000004,863.9000000000004,216.00000000000003);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#f9ae5c";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(859.7,201.9);
  ctx.lineTo(866.1,217.7);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.strokeStyle = "#efd0b4";
  ctx.lineWidth = 2;
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(716.3,101.6);
  ctx.bezierCurveTo(718.5,110.3,721,112.5,716.5,112.5);
  ctx.bezierCurveTo(712,112.5,710.4,112.5,710.4,112.5);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.moveTo(763,347);
  ctx.lineTo(742.9,356.6);
  ctx.lineTo(729.4,328.40000000000003);
  ctx.lineTo(754.5,316.40000000000003);
  ctx.lineTo(763,347);
  ctx.closePath();
  ctx.moveTo(743.6,354.5);
  ctx.lineTo(761.1,346.1);
  ctx.lineTo(753.4,318.5);
  ctx.lineTo(731.4,329);
  ctx.lineTo(743.6,354.5);
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
  ctx.arc(741.2,332.1,1.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(743.6,338.5,1.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(745.9,345.5,1.2,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(748.3,328.7,1.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(750.5,335.2,1.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#f9ae5c";
  ctx.strokeStyle = "#f9ae5c";
  ctx.miterLimit = 10;
  ctx.beginPath();
  ctx.arc(752.6,342.3,1.3,0,6.283185307179586,true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#f26e7b";
  ctx.beginPath();
  ctx.moveTo(730.2,124.4);
  ctx.bezierCurveTo(730.2,124.4,723,135.6,714.9000000000001,134.9);
  ctx.bezierCurveTo(706.6000000000001,134.20000000000002,701.5000000000001,122,701.5000000000001,122);
  ctx.bezierCurveTo(701.5000000000001,122,709.3000000000001,125.9,715.6000000000001,126.4);
  ctx.bezierCurveTo(721.5,126.9,730.2,124.4,730.2,124.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(730,556.4);
  ctx.lineTo(729.7,556.4);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(730,556.4);
  ctx.bezierCurveTo(740.3,556.5,796.1,556.4,796.1,556.4);
  ctx.lineTo(730,556.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(800.7,551.5);
  ctx.bezierCurveTo(800.7,552.6,800.2,553.8,799.6,554.7);
  ctx.bezierCurveTo(798.3000000000001,556.5,796.3000000000001,556.5,796.3000000000001,556.5);
  ctx.lineTo(730.2,556.5);
  ctx.bezierCurveTo(729.1,556.5,727.8000000000001,554.6,726.9000000000001,552.9);
  ctx.bezierCurveTo(725.6000000000001,550.1999999999999,725.7,547.1,725.7,544.1999999999999);
  ctx.bezierCurveTo(725.7,537.9999999999999,727.7,533.8,727.8000000000001,533.6999999999999);
  ctx.bezierCurveTo(728.2,532.8,729.3000000000001,532.4,730.2,532.5999999999999);
  ctx.bezierCurveTo(730.3000000000001,532.5999999999999,738.1,534.6999999999999,745.1,534.6999999999999);
  ctx.bezierCurveTo(746.7,534.6999999999999,747.2,534.1999999999999,747.2,534.0999999999999);
  ctx.bezierCurveTo(747.2,533.4999999999999,746.7,532.9999999999999,746,532.0999999999999);
  ctx.bezierCurveTo(745.2,531.1999999999999,744.1,529.9999999999999,744.1,528.3999999999999);
  ctx.bezierCurveTo(744.1,526.2999999999998,745.7,523.6999999999998,750.3000000000001,523.6999999999998);
  ctx.bezierCurveTo(754.1,523.6999999999998,751.0000000000001,524.5999999999998,753.8000000000001,526.4999999999998);
  ctx.bezierCurveTo(755.8000000000001,527.7999999999997,757.7,529.0999999999998,760.4000000000001,530.1999999999998);
  ctx.bezierCurveTo(772.2,534.9999999999998,785.9000000000001,538.6999999999998,790.0000000000001,539.5999999999998);
  ctx.bezierCurveTo(792.7,540.3,800.7,542.1,800.7,551.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(695.9,556.4);
  ctx.lineTo(695.5,556.4);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(629.2,556.4);
  ctx.bezierCurveTo(629.2,556.4,685.2,556.5,695.5,556.4);
  ctx.lineTo(629.2,556.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#ed93a4";
  ctx.beginPath();
  ctx.moveTo(624.7,551.5);
  ctx.bezierCurveTo(624.7,552.6,625.2,553.8,625.8000000000001,554.7);
  ctx.bezierCurveTo(627.1,556.5,629.1,556.5,629.1,556.5);
  ctx.lineTo(695.4,556.5);
  ctx.bezierCurveTo(696.5,556.5,697.9,554.6,698.6999999999999,552.9);
  ctx.bezierCurveTo(699.9999999999999,550.1999999999999,699.9,547.1,699.9,544.1999999999999);
  ctx.bezierCurveTo(699.9,537.9999999999999,697.9,533.8,697.8,533.6999999999999);
  ctx.bezierCurveTo(697.4,532.8,696.3,532.4,695.3,532.5999999999999);
  ctx.bezierCurveTo(695.1999999999999,532.5999999999999,687.3,534.6999999999999,680.4,534.6999999999999);
  ctx.bezierCurveTo(678.8,534.6999999999999,678.3,534.1999999999999,678.3,534.0999999999999);
  ctx.bezierCurveTo(678.3,533.4999999999999,678.8,532.9999999999999,679.5,532.0999999999999);
  ctx.bezierCurveTo(680.3,531.1999999999999,681.4,529.9999999999999,681.4,528.3999999999999);
  ctx.bezierCurveTo(681.4,526.2999999999998,679.8,523.6999999999998,675.1999999999999,523.6999999999998);
  ctx.bezierCurveTo(671.4,523.6999999999998,668.5999999999999,525.5999999999998,665.8,527.3999999999999);
  ctx.bezierCurveTo(663.8,528.6999999999998,661.9,529.9999999999999,659.1999999999999,531.0999999999999);
  ctx.bezierCurveTo(647.3,535.8999999999999,639.5999999999999,538.6999999999999,635.4,539.5999999999999);
  ctx.bezierCurveTo(632.7,540.3,624.7,542.1,624.7,551.5);
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
  // Fill the canvas with white (no answer)
  ctx.beginPath();
  ctx.rect(0, 0,
      ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  /*ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  for (var i = -Movie.HEIGHT; i < Movie.HEIGHT; i += 4) {
    ctx.beginPath();
    ctx.moveTo(i, -i);
    ctx.lineTo(i + Movie.HEIGHT, -i + Movie.WIDTH);
    ctx.stroke();
  }*/
};


/**
 * On startup draw the previous answer and save it to the prevAnswer canvas.
 * @private
 */
Movie.renderAnswer_ = function() {
  var div = document.getElementById('visualization');
  // <canvas id="answer1" width="400" height="400" style="display: none">
  // </canvas>
  var canvas = document.createElement('canvas');
  canvas.id = 'prevAnswer';
  canvas.width = Movie.WIDTH;
  canvas.height = Movie.HEIGHT;
  canvas.style.display = 'block';
  div.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'copy';
  ctx.drawImage(Movie.ctxDisplay.canvas, 0, 0);
	
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
  /*Movie.ctxScratch.globalAlpha =
      (BlocklyGames.LEVEL == BlocklyGames.MAX_LEVEL) ? 1 : 0.9;*/

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
  //Movie.ctxDisplay.beginPath();
  Movie.ctxDisplay.clearRect(0, 0,
      Movie.ctxDisplay.canvas.width, Movie.ctxDisplay.canvas.height);
  //Movie.ctxDisplay.fillStyle = '#ffffff';
  //Movie.ctxDisplay.fill();
  
  
  //var superhero = document.getElementById('superhero');
  //Movie.ctxDisplay.drawImage(superhero, 0, 0);
  
  
  // Draw and copy the user layer.
  var code = Blockly.JavaScript.workspaceToCode();
  var interpreter = new Interpreter(code, Movie.initInterpreter);
  Movie.drawFrame_(interpreter);
  Movie.ctxDisplay.drawImage(Movie.ctxScratch.canvas, 0, 0);
  
  // Copy the hatching.
  /*var hatching = document.getElementById('hatching');
  Movie.ctxDisplay.drawImage(hatching, 0, 0);		
  BlocklyInterface.saveToLocalStorage();*/

  //Movie.checkFrameAnswer();
  //if (BlocklyGames.LEVEL == 1 || BlocklyGames.LEVEL == 2) {
  // setTimeout(Movie.checkAnswers, 1000);
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
    Movie.bow();
  };
  interpreter.setProperty(scope, 'bow',
      interpreter.createNativeFunction(wrapper));
  
  wrapper = function() {
    Movie.earrings();
  };
  interpreter.setProperty(scope, 'earrings',
      interpreter.createNativeFunction(wrapper));
  
  wrapper = function() {
    Movie.skirt();
  };
  interpreter.setProperty(scope, 'skirt',
      interpreter.createNativeFunction(wrapper));
  
  wrapper = function() {
    Movie.shorts();
  };
  interpreter.setProperty(scope, 'shorts',
      interpreter.createNativeFunction(wrapper));
  
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
	  
  wrapper = function() {
    Movie.hightops();
  };
  interpreter.setProperty(scope, 'hightops',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Movie.sneakers();
  };
  interpreter.setProperty(scope, 'sneakers',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Movie.cowboyboots();
  };
  interpreter.setProperty(scope, 'cowboyboots',
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

Movie.sneakers = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.translate(106,516);
  Movie.ctxScratch.scale(.065,.065);
  Movie.ctxScratch.translate(1462.4,0);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(246.5,575.3);
  Movie.ctxScratch.lineTo(241.6,575.3);
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(246.5,575.3);
  Movie.ctxScratch.bezierCurveTo(418.1,576.9,1349.8,575.3,1349.8,575.3);
  Movie.ctxScratch.lineTo(246.5,575.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(1426.7,488.6);
  Movie.ctxScratch.bezierCurveTo(1426.7,508.20000000000005,1418.5,529.5,1408.7,544.2);
  Movie.ctxScratch.bezierCurveTo(1387.5,575.3000000000001,1353.1000000000001,575.3000000000001,1353.1000000000001,575.3000000000001);
  Movie.ctxScratch.lineTo(249.8,575.3000000000001);
  Movie.ctxScratch.bezierCurveTo(231.8,575.3000000000001,208.9,542.6,194.20000000000002,511.6000000000001);
  Movie.ctxScratch.bezierCurveTo(173.00000000000003,464.2000000000001,174.60000000000002,410.30000000000007,174.60000000000002,359.6000000000001);
  Movie.ctxScratch.bezierCurveTo(174.60000000000002,251.70000000000007,207.3,178.20000000000007,208.90000000000003,174.9000000000001);
  Movie.ctxScratch.bezierCurveTo(215.40000000000003,158.60000000000008,233.40000000000003,152.00000000000009,249.80000000000004,155.3000000000001);
  Movie.ctxScratch.bezierCurveTo(251.40000000000003,155.3000000000001,382.20000000000005,192.9000000000001,498.30000000000007,192.9000000000001);
  Movie.ctxScratch.bezierCurveTo(524.5000000000001,192.9000000000001,532.6,184.7000000000001,532.6,183.10000000000008);
  Movie.ctxScratch.bezierCurveTo(532.6,173.30000000000007,524.4,163.50000000000009,513,148.80000000000007);
  Movie.ctxScratch.bezierCurveTo(499.9,132.50000000000006,481.9,111.20000000000007,481.9,83.40000000000006);
  Movie.ctxScratch.bezierCurveTo(481.9,45.80000000000006,508.09999999999997,1.7000000000000597,584.9,1.7000000000000597);
  Movie.ctxScratch.bezierCurveTo(648.6,1.7000000000000597,596.3,18.00000000000006,643.6999999999999,50.70000000000006);
  Movie.ctxScratch.bezierCurveTo(676.4,73.60000000000005,709.0999999999999,96.50000000000006,753.1999999999999,116.10000000000007);
  Movie.ctxScratch.bezierCurveTo(951,199.50000000000006,1178.1999999999998,264.80000000000007,1246.8,281.20000000000005);
  Movie.ctxScratch.bezierCurveTo(1292.7,292.5,1426.7,325.2,1426.7,488.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-265.1,575.3);
  Movie.ctxScratch.lineTo(-271.6,575.3);
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-1374.9,575.3);
  Movie.ctxScratch.bezierCurveTo(-1374.9,575.3,-443.20000000000005,576.9,-271.60000000000014,575.3);
  Movie.ctxScratch.lineTo(-1374.9,575.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-1450.1,488.6);
  Movie.ctxScratch.bezierCurveTo(-1450.1,508.20000000000005,-1441.8999999999999,529.5,-1432.1,544.2);
  Movie.ctxScratch.bezierCurveTo(-1410.8999999999999,575.3000000000001,-1376.5,575.3000000000001,-1376.5,575.3000000000001);
  Movie.ctxScratch.lineTo(-273.20000000000005,575.3000000000001);
  Movie.ctxScratch.bezierCurveTo(-255.20000000000005,575.3000000000001,-232.30000000000004,542.6,-217.60000000000005,511.6000000000001);
  Movie.ctxScratch.bezierCurveTo(-196.40000000000006,464.2000000000001,-198.00000000000006,410.30000000000007,-198.00000000000006,359.6000000000001);
  Movie.ctxScratch.bezierCurveTo(-198.00000000000006,251.70000000000007,-230.70000000000005,178.20000000000007,-232.30000000000007,174.9000000000001);
  Movie.ctxScratch.bezierCurveTo(-238.80000000000007,158.60000000000008,-256.80000000000007,152.00000000000009,-273.20000000000005,155.3000000000001);
  Movie.ctxScratch.bezierCurveTo(-274.80000000000007,155.3000000000001,-405.6,192.9000000000001,-521.7,192.9000000000001);
  Movie.ctxScratch.bezierCurveTo(-547.9000000000001,192.9000000000001,-556,184.7000000000001,-556,183.10000000000008);
  Movie.ctxScratch.bezierCurveTo(-556,173.30000000000007,-547.8,163.50000000000009,-536.4,148.80000000000007);
  Movie.ctxScratch.bezierCurveTo(-523.3,132.50000000000006,-505.29999999999995,111.20000000000007,-505.29999999999995,83.40000000000006);
  Movie.ctxScratch.bezierCurveTo(-505.29999999999995,45.80000000000006,-531.5,1.7000000000000597,-608.3,1.7000000000000597);
  Movie.ctxScratch.bezierCurveTo(-672,1.7000000000000597,-717.8,34.40000000000006,-765.1999999999999,67.10000000000007);
  Movie.ctxScratch.bezierCurveTo(-797.9,90.00000000000006,-830.5999999999999,112.90000000000006,-874.6999999999999,132.50000000000006);
  Movie.ctxScratch.bezierCurveTo(-1072.5,215.90000000000006,-1201.6,264.9000000000001,-1270.3,281.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-1317.7,292.5,-1450.1,325.2,-1450.1,488.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
}

Movie.longsleeve = function(){
  Movie.ctxScratch.save();
  //Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(98.1,0);
  Movie.ctxScratch.lineTo(98.1,66.3);
  Movie.ctxScratch.lineTo(0,66.3);
  Movie.ctxScratch.closePath();
  //Movie.ctxScratch.clip();
  //Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.translate(54,162);
  Movie.ctxScratch.scale(3,2.8);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(96,16.1);
  Movie.ctxScratch.bezierCurveTo(86.8,22.200000000000003,85.6,23.400000000000002,84.2,22.400000000000002);
  Movie.ctxScratch.bezierCurveTo(82.4,21.000000000000004,80.9,18.200000000000003,76.4,12.500000000000002);
  Movie.ctxScratch.bezierCurveTo(76.4,12.500000000000002,76.4,12.500000000000002,76.4,12.500000000000002);
  Movie.ctxScratch.bezierCurveTo(73.80000000000001,9.100000000000001,67.9,3.900000000000002,66.9,2.900000000000002);
  Movie.ctxScratch.bezierCurveTo(65.9,1.9000000000000021,65.10000000000001,1.4000000000000021,62.800000000000004,0.700000000000002);
  Movie.ctxScratch.bezierCurveTo(61.400000000000006,0.30000000000000193,58.400000000000006,1.9984014443252818e-15,57.50000000000001,0.30000000000000193);
  Movie.ctxScratch.bezierCurveTo(56.60000000000001,0.6000000000000019,56.00000000000001,1.5000000000000018,55.20000000000001,2.100000000000002);
  Movie.ctxScratch.bezierCurveTo(53.40000000000001,3.5000000000000018,51.70000000000001,4.8000000000000025,49.90000000000001,6.200000000000001);
  Movie.ctxScratch.bezierCurveTo(49.80000000000001,6.200000000000001,49.70000000000001,6.400000000000001,49.600000000000016,6.400000000000001);
  Movie.ctxScratch.bezierCurveTo(48.20000000000002,5.400000000000001,46.90000000000001,4.300000000000001,45.500000000000014,3.200000000000001);
  Movie.ctxScratch.bezierCurveTo(44.600000000000016,2.500000000000001,43.600000000000016,1.8000000000000012,42.70000000000002,1.0000000000000009);
  Movie.ctxScratch.bezierCurveTo(41.9,0.3,41.7,0,40.6,0);
  Movie.ctxScratch.bezierCurveTo(38.7,0,37,0.2,35.2,0.5);
  Movie.ctxScratch.bezierCurveTo(33.2,0.9,31.800000000000004,1.6,30.800000000000004,2.7);
  Movie.ctxScratch.bezierCurveTo(29.900000000000006,3.7,24.700000000000003,8.9,22.200000000000003,12.5);
  Movie.ctxScratch.bezierCurveTo(17.400000000000002,18,14.100000000000003,22.8,13.300000000000002,22);
  Movie.ctxScratch.bezierCurveTo(12.100000000000003,21.5,6.500000000000003,18.4,2.600000000000003,14.8);
  Movie.ctxScratch.lineTo(0,20.1);
  Movie.ctxScratch.bezierCurveTo(10.8,30,11.9,29.5,12.6,29.5);
  Movie.ctxScratch.bezierCurveTo(15.8,29.6,26.799999999999997,21.8,30,17.3);
  Movie.ctxScratch.bezierCurveTo(30.2,17.1,30.3,16.8,30.5,16.5);
  Movie.ctxScratch.lineTo(30.6,16.4);
  Movie.ctxScratch.bezierCurveTo(31,22.4,32.800000000000004,25.5,33.1,26.7);
  Movie.ctxScratch.bezierCurveTo(33.4,28.099999999999998,33.6,29.2,33.9,34.8);
  Movie.ctxScratch.bezierCurveTo(33.699999999999996,39.9,33.8,42.099999999999994,31.7,49.4);
  Movie.ctxScratch.bezierCurveTo(31.3,52,30.599999999999998,54.699999999999996,29.9,57.8);
  Movie.ctxScratch.bezierCurveTo(29.599999999999998,59.199999999999996,29,62.5,30.2,63.599999999999994);
  Movie.ctxScratch.bezierCurveTo(32.4,65.89999999999999,37.9,65.69999999999999,43.5,66.19999999999999);
  Movie.ctxScratch.bezierCurveTo(49,66.69999999999999,62.8,65.79999999999998,65,65.29999999999998);
  Movie.ctxScratch.bezierCurveTo(67.2,64.79999999999998,67.9,63.999999999999986,68.2,62.69999999999998);
  Movie.ctxScratch.bezierCurveTo(68.60000000000001,57.399999999999984,66.9,52.29999999999998,65.9,47.19999999999998);
  Movie.ctxScratch.bezierCurveTo(63.900000000000006,42.59999999999998,64,38.499999999999986,64.30000000000001,33.999999999999986);
  Movie.ctxScratch.bezierCurveTo(64.60000000000001,29.999999999999986,64.9,29.299999999999986,65.50000000000001,27.199999999999985);
  Movie.ctxScratch.bezierCurveTo(65.80000000000001,26.299999999999986,67.40000000000002,23.599999999999984,68.10000000000001,17.099999999999987);
  Movie.ctxScratch.lineTo(68.80000000000001,17.799999999999986);
  Movie.ctxScratch.bezierCurveTo(72.4,22.599999999999987,82.00000000000001,29.999999999999986,85.00000000000001,29.899999999999984);
  Movie.ctxScratch.bezierCurveTo(85.00000000000001,29.899999999999984,87.10000000000001,30.699999999999985,97.90000000000002,21.099999999999984);
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 1){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
}

Movie.tshirt = function() {
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.7,.7);
  Movie.ctxScratch.translate(163,223);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  //Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = 'rgba(255,255,255,.8)';
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
  //if(BlocklyGames.LEVEL == 1){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
};

Movie.earrings =function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.59,.59);
  Movie.ctxScratch.translate(43,-40);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(612,0);
  Movie.ctxScratch.lineTo(612,792);
  Movie.ctxScratch.lineTo(0,792);
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
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#d1d3d4";
  //Movie.ctxScratch.strokeStyle = "#231f20";
  Movie.ctxScratch.miterLimit = 10;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(391,224.195);
  Movie.ctxScratch.bezierCurveTo(394.29713995648984,224.195,396.97,226.9748639883006,396.97,230.404);
  Movie.ctxScratch.bezierCurveTo(396.97,233.8331360116994,394.29713995648984,236.613,391,236.613);
  Movie.ctxScratch.bezierCurveTo(387.70286004351016,236.613,385.03,233.8331360116994,385.03,230.404);
  Movie.ctxScratch.bezierCurveTo(385.03,226.9748639883006,387.70286004351016,224.195,391,224.195);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#d1d3d4";
  //Movie.ctxScratch.strokeStyle = "#231f20";
  Movie.ctxScratch.miterLimit = 10;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(204.971,224.195);
  Movie.ctxScratch.bezierCurveTo(208.26758767174002,224.195,210.94,226.9748639883006,210.94,230.404);
  Movie.ctxScratch.bezierCurveTo(210.94,233.8331360116994,208.26758767174002,236.613,204.971,236.613);
  Movie.ctxScratch.bezierCurveTo(201.67441232826,236.613,199.002,233.8331360116994,199.002,230.404);
  Movie.ctxScratch.bezierCurveTo(199.002,226.9748639883006,201.67441232826,224.195,204.971,224.195);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 4){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.done();},1000);};
};

Movie.skirt = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.574,.60);
  Movie.ctxScratch.translate(50,189);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(612,0);
  Movie.ctxScratch.lineTo(612,792);
  Movie.ctxScratch.lineTo(0,792);
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
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#d1d3d4";
  //Movie.ctxScratch.strokeStyle = "#231f20";
  Movie.ctxScratch.miterLimit = 10;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(421.743,430.786);
  Movie.ctxScratch.bezierCurveTo(421.064,339.694,384,289.5,384,289.5);
  Movie.ctxScratch.lineTo(301,294.087);
  Movie.ctxScratch.lineTo(301,294);
  Movie.ctxScratch.lineTo(300.777,294);
  Movie.ctxScratch.lineTo(301,294);
  Movie.ctxScratch.lineTo(301,294.087);
  Movie.ctxScratch.lineTo(218.5,287.5);
  Movie.ctxScratch.bezierCurveTo(218.5,287.5,181.325,339.673,180.64600000000002,430.764);
  Movie.ctxScratch.bezierCurveTo(180.477,453.4,240,468.878,301,469.328);
  Movie.ctxScratch.lineTo(301,469.339);
  Movie.ctxScratch.bezierCurveTo(301,469.338,301.256,469.335,301.5,469.334);
  Movie.ctxScratch.bezierCurveTo(301.743,469.335,302,469.338,302,469.339);
  Movie.ctxScratch.lineTo(302,469.328);
  Movie.ctxScratch.bezierCurveTo(362,468.878,421.912,453.422,421.743,430.786);
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 2){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
};

Movie.shorts =function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.23,.24);
  Movie.ctxScratch.translate(748,1055);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(145.2,498.8);
  Movie.ctxScratch.bezierCurveTo(144.2,482.90000000000003,119.29999999999998,482.8,120.29999999999998,498.8);
  Movie.ctxScratch.bezierCurveTo(122.59999999999998,534.7,103.89999999999998,573.3,107.69999999999999,609.2);
  Movie.ctxScratch.bezierCurveTo(94.19999999999999,609.3000000000001,80.69999999999999,609.4000000000001,67.39999999999999,609.7);
  Movie.ctxScratch.lineTo(169.7,609.1);
  Movie.ctxScratch.bezierCurveTo(168.79999999999998,607,167.7,604.9,166.39999999999998,602.9);
  Movie.ctxScratch.bezierCurveTo(160.7,568.8,147.4,532.6,145.2,498.8);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-167.4,569.6);
  Movie.ctxScratch.bezierCurveTo(-165.70000000000002,342.70000000000005,-72.7,156.40000000000003,-72.7,156.40000000000003);
  Movie.ctxScratch.lineTo(-173,161.80000000000004);
  Movie.ctxScratch.lineTo(-173,611.1);
  Movie.ctxScratch.lineTo(-66.9,610.5);
  Movie.ctxScratch.bezierCurveTo(-127.2,608.2,-167.6,599,-167.4,569.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(339.5,161.4);
  Movie.ctxScratch.bezierCurveTo(339.5,161.4,431.8,286.4,433.5,513.3);
  Movie.ctxScratch.bezierCurveTo(434.3,622.6999999999999,441.9,608.4,169.7,609.0999999999999);
  Movie.ctxScratch.lineTo(439,611.0999999999999);
  Movie.ctxScratch.lineTo(439,161.7);
  Movie.ctxScratch.lineTo(339.5,161.4);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#99bac6";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(67.4,609.7);
  Movie.ctxScratch.lineTo(-66.9,610.5);
  Movie.ctxScratch.bezierCurveTo(-28.4,611.9,18.2,610.5,67.4,609.7);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#99bac6";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(433.5,513.2);
  Movie.ctxScratch.bezierCurveTo(431.8,286.30000000000007,339.5,161.30000000000007,339.5,161.30000000000007);
  Movie.ctxScratch.lineTo(132.8,172.70000000000007);
  Movie.ctxScratch.lineTo(-72.69999999999999,156.30000000000007);
  Movie.ctxScratch.bezierCurveTo(-72.69999999999999,156.30000000000007,-165.7,342.6000000000001,-167.39999999999998,569.5);
  Movie.ctxScratch.bezierCurveTo(-167.59999999999997,598.9,-127.19999999999997,608.1,-66.89999999999998,610.4);
  Movie.ctxScratch.lineTo(67.40000000000003,609.6);
  Movie.ctxScratch.bezierCurveTo(80.70000000000003,609.4,94.10000000000004,609.2,107.70000000000003,609.1);
  Movie.ctxScratch.bezierCurveTo(103.90000000000003,573.2,122.60000000000004,534.7,120.30000000000003,498.70000000000005);
  Movie.ctxScratch.bezierCurveTo(119.30000000000003,482.70000000000005,144.20000000000002,482.80000000000007,145.20000000000002,498.70000000000005);
  Movie.ctxScratch.bezierCurveTo(147.4,532.5,160.70000000000002,568.7,166.4,602.7);
  Movie.ctxScratch.bezierCurveTo(167.8,604.7,168.9,606.8000000000001,169.70000000000002,608.9000000000001);
  Movie.ctxScratch.bezierCurveTo(441.9,608.3,434.3,622.7,433.5,513.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 2){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
};


Movie.bow = function() {
  Movie.ctxScratch.save();
  Movie.ctxScratch.translate(-85,-255);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(612,0);
  Movie.ctxScratch.lineTo(612,792);
  Movie.ctxScratch.lineTo(0,792);
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
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#d1d3d4";
  //Movie.ctxScratch.strokeStyle = "#231f20";
  Movie.ctxScratch.miterLimit = 10;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(268.603,289.33);
  Movie.ctxScratch.bezierCurveTo(282.271,328.639,323.135,206.12399999999997,323.135,289.33);
  Movie.ctxScratch.bezierCurveTo(323.135,310.895,244.609,220.324,268.603,289.33);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 4){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.done();},1000);};
}


Movie.hightops = function() {
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.57,.57);
  Movie.ctxScratch.translate(-25,586);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(167.7,308.7);
  Movie.ctxScratch.lineTo(560.4,308.7);
  Movie.ctxScratch.quadraticCurveTo(560.4,308.7,560.4,308.7);
  Movie.ctxScratch.lineTo(560.4,390.2);
  Movie.ctxScratch.quadraticCurveTo(560.4,390.2,560.4,390.2);
  Movie.ctxScratch.lineTo(167.7,390.2);
  Movie.ctxScratch.quadraticCurveTo(167.7,390.2,167.7,390.2);
  Movie.ctxScratch.lineTo(167.7,308.7);
  Movie.ctxScratch.quadraticCurveTo(167.7,308.7,167.7,308.7);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(522.2,335);
  Movie.ctxScratch.bezierCurveTo(517.9000000000001,333.9,505.90000000000003,330.7,488.40000000000003,322.8);
  Movie.ctxScratch.bezierCurveTo(473.8,316.2,465.00000000000006,309.7,460.3,293.8);
  Movie.ctxScratch.bezierCurveTo(458.1,286.40000000000003,455,278.5,444.7,278.5);
  Movie.ctxScratch.bezierCurveTo(436.8,278.5,433.3,283.7,433.3,288.5);
  Movie.ctxScratch.bezierCurveTo(433.3,291.2,434.1,293.2,434.8,294.8);
  Movie.ctxScratch.bezierCurveTo(435.5,296.3,436,297.5,436,299.7);
  Movie.ctxScratch.bezierCurveTo(436,300.3,435.9,300.5,435.9,300.59999999999997);
  Movie.ctxScratch.bezierCurveTo(435.7,300.79999999999995,434.4,301.7,427.5,301.7);
  Movie.ctxScratch.bezierCurveTo(413.8,301.7,403.1,297.4,403,297.4);
  Movie.ctxScratch.bezierCurveTo(401.9,296.9,400.6,297,399.5,297.59999999999997);
  Movie.ctxScratch.bezierCurveTo(398.4,298.2,397.7,299.2,397.4,300.4);
  Movie.ctxScratch.bezierCurveTo(397.29999999999995,301.09999999999997,393.7,319.2,393.7,331.79999999999995);
  Movie.ctxScratch.bezierCurveTo(393.7,335.19999999999993,394.2,351.9,396.3,362.69999999999993);
  Movie.ctxScratch.bezierCurveTo(394.8,363.29999999999995,393.90000000000003,364.79999999999995,393.90000000000003,366.3999999999999);
  Movie.ctxScratch.lineTo(393.90000000000003,380.0999999999999);
  Movie.ctxScratch.bezierCurveTo(393.90000000000003,382.3999999999999,395.70000000000005,383.7999999999999,397.90000000000003,383.7999999999999);
  Movie.ctxScratch.lineTo(538.9000000000001,383.7999999999999);
  Movie.ctxScratch.bezierCurveTo(541.1000000000001,383.7999999999999,542.9000000000001,382.2999999999999,543.0000000000001,379.9999999999999);
  Movie.ctxScratch.lineTo(543.2000000000002,366.6999999999999);
  Movie.ctxScratch.bezierCurveTo(543.7000000000002,364.4999999999999,544.0000000000001,362.39999999999986,544.0000000000001,360.09999999999985);
  Movie.ctxScratch.bezierCurveTo(544.1,340.3,528.2,336.5,522.2,335);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(402,331.9);
  Movie.ctxScratch.bezierCurveTo(402,328.29999999999995,402.4,324.2,402.8,320.09999999999997);
  Movie.ctxScratch.bezierCurveTo(402.90000000000003,319.49999999999994,403,318.79999999999995,403,318.2);
  Movie.ctxScratch.bezierCurveTo(403.1,317.59999999999997,403.2,316.9,403.2,316.3);
  Movie.ctxScratch.bezierCurveTo(403.2,316.3,403.2,316.3,403.2,316.3);
  Movie.ctxScratch.bezierCurveTo(403.7,312.5,404.2,309.1,404.7,306.5);
  Movie.ctxScratch.bezierCurveTo(409.59999999999997,308,417.9,309.8,427.59999999999997,309.8);
  Movie.ctxScratch.bezierCurveTo(432.2,309.8,438.99999999999994,309.8,442.29999999999995,305.7);
  Movie.ctxScratch.bezierCurveTo(442.49999999999994,305.4,442.79999999999995,305.09999999999997,442.99999999999994,304.7);
  Movie.ctxScratch.bezierCurveTo(443.09999999999997,304.5,443.19999999999993,304.3,443.29999999999995,304.2);
  Movie.ctxScratch.bezierCurveTo(443.4,304,443.49999999999994,303.8,443.59999999999997,303.59999999999997);
  Movie.ctxScratch.bezierCurveTo(443.79999999999995,303.2,443.9,302.79999999999995,443.99999999999994,302.29999999999995);
  Movie.ctxScratch.bezierCurveTo(444.19999999999993,301.49999999999994,444.29999999999995,300.69999999999993,444.29999999999995,299.69999999999993);
  Movie.ctxScratch.bezierCurveTo(444.29999999999995,295.8999999999999,443.19999999999993,293.3999999999999,442.49999999999994,291.5999999999999);
  Movie.ctxScratch.bezierCurveTo(441.8999999999999,290.19999999999993,441.59999999999997,289.4999999999999,441.59999999999997,288.5999999999999);
  Movie.ctxScratch.bezierCurveTo(441.59999999999997,288.3999999999999,441.59999999999997,288.2999999999999,441.7,288.0999999999999);
  Movie.ctxScratch.bezierCurveTo(441.7,287.9999999999999,441.8,287.8999999999999,441.8,287.8999999999999);
  Movie.ctxScratch.bezierCurveTo(441.90000000000003,287.7999999999999,442,287.5999999999999,442.1,287.49999999999994);
  Movie.ctxScratch.bezierCurveTo(442.5,287.09999999999997,443.1,286.8999999999999,443.70000000000005,286.79999999999995);
  Movie.ctxScratch.bezierCurveTo(443.90000000000003,286.79999999999995,444.1,286.69999999999993,444.40000000000003,286.69999999999993);
  Movie.ctxScratch.bezierCurveTo(444.6,286.69999999999993,444.8,286.69999999999993,445.00000000000006,286.69999999999993);
  Movie.ctxScratch.bezierCurveTo(448.1000000000001,286.69999999999993,450.20000000000005,287.29999999999995,452.80000000000007,296.19999999999993);
  Movie.ctxScratch.bezierCurveTo(458.30000000000007,314.99999999999994,469.30000000000007,323.19999999999993,485.30000000000007,330.3999999999999);
  Movie.ctxScratch.bezierCurveTo(498.30000000000007,336.19999999999993,508.4000000000001,339.7999999999999,514.7,341.69999999999993);
  Movie.ctxScratch.bezierCurveTo(511.70000000000005,346.3999999999999,507.90000000000003,353.69999999999993,506.90000000000003,362.69999999999993);
  Movie.ctxScratch.lineTo(404.7,362.69999999999993);
  Movie.ctxScratch.bezierCurveTo(402.7,353.6,401.9,337.7,402,331.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(535,375.6);
  Movie.ctxScratch.lineTo(402,375.6);
  Movie.ctxScratch.lineTo(402,370.6);
  Movie.ctxScratch.lineTo(535.1,370.6);
  Movie.ctxScratch.lineTo(535,375.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(535.9,362.6);
  Movie.ctxScratch.lineTo(515,362.6);
  Movie.ctxScratch.bezierCurveTo(516.2,353.6,520.5,347.20000000000005,522.9,343.90000000000003);
  Movie.ctxScratch.bezierCurveTo(531.1,346.3,536.1,350.3,536.1,360.3);
  Movie.ctxScratch.bezierCurveTo(536,361,536,361.6,535.9,362.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(535.1,370.6);
  Movie.ctxScratch.lineTo(535,375.6);
  Movie.ctxScratch.lineTo(402,375.6);
  Movie.ctxScratch.lineTo(402,370.6);
  Movie.ctxScratch.lineTo(535.1,370.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(536,360.3);
  Movie.ctxScratch.bezierCurveTo(536,361,536,361.6,535.9,362.6);
  Movie.ctxScratch.lineTo(515,362.6);
  Movie.ctxScratch.bezierCurveTo(516.2,353.6,520.5,347.20000000000005,522.9,343.90000000000003);
  Movie.ctxScratch.bezierCurveTo(531,346.3,536,350.3,536,360.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(485.2,330.3);
  Movie.ctxScratch.bezierCurveTo(469.2,323.1,458.2,314.90000000000003,452.7,296.1);
  Movie.ctxScratch.bezierCurveTo(450.09999999999997,287.3,448,286.6,444.9,286.6);
  Movie.ctxScratch.bezierCurveTo(444.7,286.6,444.5,286.6,444.29999999999995,286.6);
  Movie.ctxScratch.bezierCurveTo(443.4,286.6,442.49999999999994,286.8,441.99999999999994,287.3);
  Movie.ctxScratch.bezierCurveTo(441.8999999999999,287.40000000000003,441.79999999999995,287.5,441.69999999999993,287.7);
  Movie.ctxScratch.bezierCurveTo(441.69999999999993,287.8,441.5999999999999,287.8,441.5999999999999,287.9);
  Movie.ctxScratch.bezierCurveTo(441.5999999999999,288,441.4999999999999,288.2,441.4999999999999,288.4);
  Movie.ctxScratch.bezierCurveTo(441.4999999999999,289.4,441.7999999999999,290.09999999999997,442.39999999999986,291.4);
  Movie.ctxScratch.bezierCurveTo(443.1999999999999,293.2,444.1999999999999,295.7,444.1999999999999,299.5);
  Movie.ctxScratch.bezierCurveTo(444.1999999999999,300.4,444.09999999999985,301.3,443.89999999999986,302.1);
  Movie.ctxScratch.bezierCurveTo(442.29999999999984,309.6,433.1999999999999,309.6,427.59999999999985,309.6);
  Movie.ctxScratch.bezierCurveTo(417.79999999999984,309.6,409.59999999999985,307.70000000000005,404.6999999999999,306.20000000000005);
  Movie.ctxScratch.bezierCurveTo(404.09999999999985,309.70000000000005,403.2999999999999,314.70000000000005,402.6999999999999,319.90000000000003);
  Movie.ctxScratch.bezierCurveTo(402.1999999999999,324.00000000000006,401.89999999999986,328.1,401.89999999999986,331.70000000000005);
  Movie.ctxScratch.bezierCurveTo(401.89999999999986,337.50000000000006,402.6999999999999,353.50000000000006,404.59999999999985,362.50000000000006);
  Movie.ctxScratch.lineTo(506.6999999999998,362.50000000000006);
  Movie.ctxScratch.bezierCurveTo(507.6999999999998,353.50000000000006,511.49999999999983,346.20000000000005,514.4999999999998,341.50000000000006);
  Movie.ctxScratch.bezierCurveTo(508.2,339.7,498.2,336.1,485.2,330.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(424.3,354.5);
  Movie.ctxScratch.bezierCurveTo(417.3,354.5,411.6,348.8,411.6,341.8);
  Movie.ctxScratch.bezierCurveTo(411.6,334.8,417.3,329.1,424.3,329.1);
  Movie.ctxScratch.bezierCurveTo(431.3,329.1,437,334.8,437,341.8);
  Movie.ctxScratch.bezierCurveTo(437,348.8,431.3,354.5,424.3,354.5);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(464.5,334.3);
  Movie.ctxScratch.bezierCurveTo(461.3,334.3,458.8,331.7,458.8,328.6);
  Movie.ctxScratch.bezierCurveTo(458.8,325.40000000000003,461.40000000000003,322.90000000000003,464.5,322.90000000000003);
  Movie.ctxScratch.bezierCurveTo(467.6,322.90000000000003,470.2,325.50000000000006,470.2,328.6);
  Movie.ctxScratch.bezierCurveTo(470.2,331.7,467.6,334.3,464.5,334.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(476.4,340);
  Movie.ctxScratch.bezierCurveTo(473.2,340,470.7,337.4,470.7,334.3);
  Movie.ctxScratch.bezierCurveTo(470.7,331.1,473.3,328.6,476.4,328.6);
  Movie.ctxScratch.bezierCurveTo(479.5,328.6,482.09999999999997,331.20000000000005,482.09999999999997,334.3);
  Movie.ctxScratch.bezierCurveTo(482.1,337.4,479.5,340,476.4,340);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(488.3,344.9);
  Movie.ctxScratch.bezierCurveTo(485.1,344.9,482.6,342.29999999999995,482.6,339.2);
  Movie.ctxScratch.bezierCurveTo(482.6,336.09999999999997,485.20000000000005,333.5,488.3,333.5);
  Movie.ctxScratch.bezierCurveTo(491.5,333.5,494,336.1,494,339.2);
  Movie.ctxScratch.bezierCurveTo(494.1,342.4,491.5,344.9,488.3,344.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(500.3,350.1);
  Movie.ctxScratch.bezierCurveTo(497.1,350.1,494.6,347.5,494.6,344.40000000000003);
  Movie.ctxScratch.bezierCurveTo(494.6,341.20000000000005,497.20000000000005,338.70000000000005,500.3,338.70000000000005);
  Movie.ctxScratch.bezierCurveTo(503.40000000000003,338.70000000000005,506,341.30000000000007,506,344.40000000000003);
  Movie.ctxScratch.bezierCurveTo(506,347.5,503.4,350.1,500.3,350.1);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(424.3,329.2);
  Movie.ctxScratch.bezierCurveTo(417.3,329.2,411.6,334.9,411.6,341.9);
  Movie.ctxScratch.bezierCurveTo(411.6,348.9,417.20000000000005,354.59999999999997,424.3,354.59999999999997);
  Movie.ctxScratch.bezierCurveTo(431.3,354.59999999999997,437,348.9,437,341.9);
  Movie.ctxScratch.bezierCurveTo(437,334.9,431.3,329.2,424.3,329.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(424.3,346.4);
  Movie.ctxScratch.bezierCurveTo(421.8,346.4,419.8,344.29999999999995,419.8,341.9);
  Movie.ctxScratch.bezierCurveTo(419.8,339.29999999999995,421.8,337.4,424.3,337.4);
  Movie.ctxScratch.bezierCurveTo(426.8,337.4,428.8,339.5,428.8,341.9);
  Movie.ctxScratch.bezierCurveTo(428.9,344.4,426.8,346.4,424.3,346.4);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(428.9,341.9);
  Movie.ctxScratch.bezierCurveTo(428.9,344.4,426.9,346.4,424.4,346.4);
  Movie.ctxScratch.bezierCurveTo(421.9,346.4,419.9,344.29999999999995,419.9,341.9);
  Movie.ctxScratch.bezierCurveTo(419.9,339.29999999999995,421.9,337.4,424.4,337.4);
  Movie.ctxScratch.bezierCurveTo(426.8,337.3,428.9,339.4,428.9,341.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(470.2,328.6);
  Movie.ctxScratch.bezierCurveTo(470.2,331.8,467.59999999999997,334.3,464.5,334.3);
  Movie.ctxScratch.bezierCurveTo(461.3,334.3,458.8,331.7,458.8,328.6);
  Movie.ctxScratch.bezierCurveTo(458.8,325.40000000000003,461.40000000000003,322.90000000000003,464.5,322.90000000000003);
  Movie.ctxScratch.bezierCurveTo(467.6,322.9,470.2,325.4,470.2,328.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(482.1,334.2);
  Movie.ctxScratch.bezierCurveTo(482.1,337.4,479.5,339.9,476.40000000000003,339.9);
  Movie.ctxScratch.bezierCurveTo(473.20000000000005,339.9,470.70000000000005,337.29999999999995,470.70000000000005,334.2);
  Movie.ctxScratch.bezierCurveTo(470.70000000000005,331,473.30000000000007,328.5,476.40000000000003,328.5);
  Movie.ctxScratch.bezierCurveTo(479.5,328.5,482.1,331.1,482.1,334.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(494.1,339.2);
  Movie.ctxScratch.bezierCurveTo(494.1,342.4,491.5,344.9,488.40000000000003,344.9);
  Movie.ctxScratch.bezierCurveTo(485.20000000000005,344.9,482.70000000000005,342.29999999999995,482.70000000000005,339.2);
  Movie.ctxScratch.bezierCurveTo(482.70000000000005,336.09999999999997,485.30000000000007,333.5,488.40000000000003,333.5);
  Movie.ctxScratch.bezierCurveTo(491.5,333.5,494.1,336.1,494.1,339.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(506,344.3);
  Movie.ctxScratch.bezierCurveTo(506,347.5,503.4,350,500.3,350);
  Movie.ctxScratch.bezierCurveTo(497.1,350,494.6,347.4,494.6,344.3);
  Movie.ctxScratch.bezierCurveTo(494.6,341.1,497.20000000000005,338.6,500.3,338.6);
  Movie.ctxScratch.bezierCurveTo(503.4,338.6,506,341.2,506,344.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(352.5,364.5);
  Movie.ctxScratch.bezierCurveTo(354.7,353.7,355.1,337,355.1,333.6);
  Movie.ctxScratch.bezierCurveTo(355,321.1,351.40000000000003,302.90000000000003,351.3,302.20000000000005);
  Movie.ctxScratch.bezierCurveTo(351.1,301.00000000000006,350.3,300.00000000000006,349.2,299.40000000000003);
  Movie.ctxScratch.bezierCurveTo(348.09999999999997,298.8,346.8,298.8,345.7,299.20000000000005);
  Movie.ctxScratch.bezierCurveTo(345.59999999999997,299.20000000000005,334.9,303.50000000000006,321.2,303.50000000000006);
  Movie.ctxScratch.bezierCurveTo(314.3,303.50000000000006,313,302.6000000000001,312.8,302.40000000000003);
  Movie.ctxScratch.bezierCurveTo(312.8,302.40000000000003,312.7,302.1,312.7,301.50000000000006);
  Movie.ctxScratch.bezierCurveTo(312.7,299.40000000000003,313.2,298.20000000000005,313.9,296.6000000000001);
  Movie.ctxScratch.bezierCurveTo(314.59999999999997,295.00000000000006,315.4,293.00000000000006,315.4,290.30000000000007);
  Movie.ctxScratch.bezierCurveTo(315.4,285.50000000000006,311.79999999999995,280.30000000000007,304,280.30000000000007);
  Movie.ctxScratch.bezierCurveTo(293.8,280.30000000000007,290.6,288.20000000000005,288.4,295.6000000000001);
  Movie.ctxScratch.bezierCurveTo(283.7,311.50000000000006,274.9,318.1000000000001,260.29999999999995,324.6000000000001);
  Movie.ctxScratch.bezierCurveTo(243,332.7,231,336,226.7,337);
  Movie.ctxScratch.bezierCurveTo(220.7,338.4,204.79999999999998,342.3,204.7,361.9);
  Movie.ctxScratch.bezierCurveTo(204.7,364.2,205,366.4,205.5,368.59999999999997);
  Movie.ctxScratch.lineTo(205.7,381.79999999999995);
  Movie.ctxScratch.bezierCurveTo(205.79999999999998,383.99999999999994,207.6,385.59999999999997,209.79999999999998,385.59999999999997);
  Movie.ctxScratch.lineTo(350.79999999999995,385.59999999999997);
  Movie.ctxScratch.bezierCurveTo(353.09999999999997,385.59999999999997,354.9,384.2,354.9,381.99999999999994);
  Movie.ctxScratch.lineTo(354.9,368.29999999999995);
  Movie.ctxScratch.bezierCurveTo(355,366.6,354,365.2,352.5,364.5);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(212.9,362.2);
  Movie.ctxScratch.bezierCurveTo(212.9,352.2,217.9,348.4,226.1,346);
  Movie.ctxScratch.bezierCurveTo(228.5,349.4,232.79999999999998,355.6,234,364.6);
  Movie.ctxScratch.lineTo(213,364.6);
  Movie.ctxScratch.bezierCurveTo(213,363.6,213,362.9,212.9,362.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(347,377.6);
  Movie.ctxScratch.lineTo(213.9,377.6);
  Movie.ctxScratch.lineTo(213.8,372.6);
  Movie.ctxScratch.lineTo(347,372.6);
  Movie.ctxScratch.lineTo(347,377.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(344.3,364.6);
  Movie.ctxScratch.lineTo(242.2,364.6);
  Movie.ctxScratch.bezierCurveTo(241.2,355.6,237.39999999999998,348.3,234.39999999999998,343.6);
  Movie.ctxScratch.bezierCurveTo(235.2,343.40000000000003,236.09999999999997,343.1,236.99999999999997,342.8);
  Movie.ctxScratch.bezierCurveTo(243.39999999999998,340.8,252.49999999999997,337.40000000000003,263.9,332.40000000000003);
  Movie.ctxScratch.bezierCurveTo(279.9,325.20000000000005,290.9,317.00000000000006,296.4,298.20000000000005);
  Movie.ctxScratch.bezierCurveTo(299,289.40000000000003,301.09999999999997,288.70000000000005,304.2,288.70000000000005);
  Movie.ctxScratch.bezierCurveTo(305.2,288.70000000000005,306.4,288.90000000000003,307,289.40000000000003);
  Movie.ctxScratch.bezierCurveTo(307.1,289.50000000000006,307.2,289.6,307.3,289.8);
  Movie.ctxScratch.bezierCurveTo(307.3,289.90000000000003,307.40000000000003,289.90000000000003,307.40000000000003,290);
  Movie.ctxScratch.bezierCurveTo(307.40000000000003,290.1,307.50000000000006,290.3,307.50000000000006,290.5);
  Movie.ctxScratch.bezierCurveTo(307.50000000000006,291.5,307.20000000000005,292.2,306.6000000000001,293.5);
  Movie.ctxScratch.bezierCurveTo(305.80000000000007,295.3,304.80000000000007,297.8,304.80000000000007,301.6);
  Movie.ctxScratch.bezierCurveTo(304.80000000000007,311.70000000000005,315.20000000000005,311.70000000000005,321.4000000000001,311.70000000000005);
  Movie.ctxScratch.bezierCurveTo(331.2000000000001,311.70000000000005,339.4000000000001,309.80000000000007,344.30000000000007,308.30000000000007);
  Movie.ctxScratch.bezierCurveTo(345.4000000000001,314.4000000000001,347.00000000000006,325.70000000000005,347.1000000000001,333.80000000000007);
  Movie.ctxScratch.bezierCurveTo(347,339.7,346.2,355.6,344.3,364.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(347,372.6);
  Movie.ctxScratch.lineTo(347,377.6);
  Movie.ctxScratch.lineTo(213.9,377.6);
  Movie.ctxScratch.lineTo(213.8,372.6);
  Movie.ctxScratch.lineTo(347,372.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(234,364.6);
  Movie.ctxScratch.lineTo(213,364.6);
  Movie.ctxScratch.bezierCurveTo(212.9,363.6,212.9,362.90000000000003,212.9,362.1);
  Movie.ctxScratch.bezierCurveTo(212.9,352.1,217.9,348.3,226.1,345.90000000000003);
  Movie.ctxScratch.bezierCurveTo(228.5,349.4,232.8,355.6,234,364.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(344.2,308.3);
  Movie.ctxScratch.bezierCurveTo(339.3,309.8,331,311.7,321.3,311.7);
  Movie.ctxScratch.bezierCurveTo(315.1,311.7,304.7,311.7,304.7,301.59999999999997);
  Movie.ctxScratch.bezierCurveTo(304.7,297.79999999999995,305.7,295.29999999999995,306.5,293.49999999999994);
  Movie.ctxScratch.bezierCurveTo(307.1,292.19999999999993,307.4,291.49999999999994,307.4,290.49999999999994);
  Movie.ctxScratch.bezierCurveTo(307.4,290.29999999999995,307.4,290.19999999999993,307.29999999999995,289.99999999999994);
  Movie.ctxScratch.bezierCurveTo(307.29999999999995,289.8999999999999,307.29999999999995,289.79999999999995,307.19999999999993,289.79999999999995);
  Movie.ctxScratch.bezierCurveTo(307.0999999999999,289.69999999999993,306.99999999999994,289.49999999999994,306.8999999999999,289.4);
  Movie.ctxScratch.bezierCurveTo(306.2999999999999,288.79999999999995,305.0999999999999,288.59999999999997,304.0999999999999,288.59999999999997);
  Movie.ctxScratch.bezierCurveTo(300.9999999999999,288.59999999999997,298.8999999999999,289.2,296.2999999999999,298.09999999999997);
  Movie.ctxScratch.bezierCurveTo(290.7999999999999,316.9,279.7999999999999,325.09999999999997,263.7999999999999,332.29999999999995);
  Movie.ctxScratch.bezierCurveTo(252.3999999999999,337.4,243.2999999999999,340.79999999999995,236.8999999999999,342.79999999999995);
  Movie.ctxScratch.bezierCurveTo(235.9999999999999,343.09999999999997,235.09999999999988,343.29999999999995,234.2999999999999,343.59999999999997);
  Movie.ctxScratch.bezierCurveTo(237.2999999999999,348.29999999999995,241.0999999999999,355.59999999999997,242.0999999999999,364.59999999999997);
  Movie.ctxScratch.lineTo(344.19999999999993,364.59999999999997);
  Movie.ctxScratch.bezierCurveTo(346.19999999999993,355.59999999999997,346.8999999999999,339.7,346.8999999999999,333.79999999999995);
  Movie.ctxScratch.bezierCurveTo(346.9,325.7,345.3,314.5,344.2,308.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(248.7,352.1);
  Movie.ctxScratch.bezierCurveTo(245.6,352.1,243,349.5,243,346.40000000000003);
  Movie.ctxScratch.bezierCurveTo(243,343.30000000000007,245.6,340.70000000000005,248.7,340.70000000000005);
  Movie.ctxScratch.bezierCurveTo(251.89999999999998,340.70000000000005,254.39999999999998,343.30000000000007,254.39999999999998,346.40000000000003);
  Movie.ctxScratch.bezierCurveTo(254.4,349.5,251.8,352.1,248.7,352.1);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(260.6,346.9);
  Movie.ctxScratch.bezierCurveTo(257.40000000000003,346.9,254.90000000000003,344.29999999999995,254.90000000000003,341.2);
  Movie.ctxScratch.bezierCurveTo(254.90000000000003,338.09999999999997,257.50000000000006,335.5,260.6,335.5);
  Movie.ctxScratch.bezierCurveTo(263.70000000000005,335.5,266.3,338.1,266.3,341.2);
  Movie.ctxScratch.bezierCurveTo(266.3,344.4,263.7,346.9,260.6,346.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(272.6,341.9);
  Movie.ctxScratch.bezierCurveTo(269.40000000000003,341.9,266.90000000000003,339.29999999999995,266.90000000000003,336.2);
  Movie.ctxScratch.bezierCurveTo(266.90000000000003,333.09999999999997,269.50000000000006,330.5,272.6,330.5);
  Movie.ctxScratch.bezierCurveTo(275.7,330.5,278.3,333.1,278.3,336.2);
  Movie.ctxScratch.bezierCurveTo(278.3,339.4,275.7,342,272.6,341.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(284.5,336.3);
  Movie.ctxScratch.bezierCurveTo(281.3,336.3,278.8,333.7,278.8,330.6);
  Movie.ctxScratch.bezierCurveTo(278.8,327.40000000000003,281.40000000000003,324.90000000000003,284.5,324.90000000000003);
  Movie.ctxScratch.bezierCurveTo(287.7,324.90000000000003,290.2,327.50000000000006,290.2,330.6);
  Movie.ctxScratch.bezierCurveTo(290.2,333.7,287.7,336.3,284.5,336.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(324.6,356.5);
  Movie.ctxScratch.bezierCurveTo(317.6,356.5,311.90000000000003,350.8,311.90000000000003,343.8);
  Movie.ctxScratch.bezierCurveTo(311.90000000000003,336.8,317.6,331.1,324.6,331.1);
  Movie.ctxScratch.bezierCurveTo(331.6,331.1,337.3,336.8,337.3,343.8);
  Movie.ctxScratch.bezierCurveTo(337.3,350.8,331.6,356.5,324.6,356.5);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(324.6,331.2);
  Movie.ctxScratch.bezierCurveTo(317.6,331.2,311.90000000000003,336.9,311.90000000000003,343.9);
  Movie.ctxScratch.bezierCurveTo(311.90000000000003,350.9,317.6,356.59999999999997,324.6,356.59999999999997);
  Movie.ctxScratch.bezierCurveTo(331.6,356.59999999999997,337.3,350.9,337.3,343.9);
  Movie.ctxScratch.bezierCurveTo(337.3,336.9,331.6,331.2,324.6,331.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.moveTo(324.6,348.4);
  Movie.ctxScratch.bezierCurveTo(322.1,348.4,320.1,346.29999999999995,320.1,343.9);
  Movie.ctxScratch.bezierCurveTo(320.1,341.4,322.1,339.4,324.6,339.4);
  Movie.ctxScratch.bezierCurveTo(327.1,339.4,329.1,341.4,329.1,343.9);
  Movie.ctxScratch.bezierCurveTo(329.2,346.4,327.1,348.4,324.6,348.4);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(329.2,343.9);
  Movie.ctxScratch.bezierCurveTo(329.2,346.4,327.09999999999997,348.4,324.7,348.4);
  Movie.ctxScratch.bezierCurveTo(322.3,348.4,320.2,346.29999999999995,320.2,343.9);
  Movie.ctxScratch.bezierCurveTo(320.2,341.4,322.2,339.4,324.7,339.4);
  Movie.ctxScratch.bezierCurveTo(327.2,339.4,329.2,341.3,329.2,343.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(290.2,330.6);
  Movie.ctxScratch.bezierCurveTo(290.2,333.8,287.59999999999997,336.3,284.5,336.3);
  Movie.ctxScratch.bezierCurveTo(281.3,336.3,278.8,333.7,278.8,330.6);
  Movie.ctxScratch.bezierCurveTo(278.8,327.40000000000003,281.40000000000003,324.90000000000003,284.5,324.90000000000003);
  Movie.ctxScratch.bezierCurveTo(287.7,324.9,290.2,327.4,290.2,330.6);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(278.3,336.2);
  Movie.ctxScratch.bezierCurveTo(278.3,339.4,275.7,342,272.6,341.9);
  Movie.ctxScratch.bezierCurveTo(269.40000000000003,341.9,266.90000000000003,339.29999999999995,266.90000000000003,336.2);
  Movie.ctxScratch.bezierCurveTo(266.90000000000003,333.09999999999997,269.50000000000006,330.5,272.6,330.5);
  Movie.ctxScratch.bezierCurveTo(275.7,330.5,278.3,333,278.3,336.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(266.3,341.2);
  Movie.ctxScratch.bezierCurveTo(266.3,344.4,263.7,346.9,260.6,346.9);
  Movie.ctxScratch.bezierCurveTo(257.40000000000003,346.9,254.90000000000003,344.29999999999995,254.90000000000003,341.2);
  Movie.ctxScratch.bezierCurveTo(254.90000000000003,338.09999999999997,257.50000000000006,335.5,260.6,335.5);
  Movie.ctxScratch.bezierCurveTo(263.7,335.5,266.3,338.1,266.3,341.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#d1d1d1";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(254.4,346.3);
  Movie.ctxScratch.bezierCurveTo(254.4,349.5,251.8,352,248.70000000000002,352);
  Movie.ctxScratch.bezierCurveTo(245.60000000000002,352,243.00000000000003,349.4,243.00000000000003,346.3);
  Movie.ctxScratch.bezierCurveTo(243.00000000000003,343.20000000000005,245.60000000000002,340.6,248.70000000000002,340.6);
  Movie.ctxScratch.bezierCurveTo(251.8,340.6,254.4,343.2,254.4,346.3);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 4){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.done();},1000);};
}

////need to change it to reflect pants
Movie.pants = function() {
  Movie.ctxScratch.save();
  //	Movie.ctxScratch.scale(.75,.75);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.fillStyle = "rgba(0, 0, 0, 0)";
  Movie.ctxScratch.strokeStyle = "rgba(0, 0, 0, 0)";
  Movie.ctxScratch.lineCap = "square";
  Movie.ctxScratch.miterLimit = 10;
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.scale(0,0);
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(960,0);
  Movie.ctxScratch.lineTo(960,720);
  Movie.ctxScratch.lineTo(0,720);
  Movie.ctxScratch.lineTo(0,0);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(960,0);
  Movie.ctxScratch.lineTo(960,720);
  Movie.ctxScratch.lineTo(0,720);
  Movie.ctxScratch.lineTo(0,0);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.clip();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "rgba(0, 0, 0, 0)";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,0);
  Movie.ctxScratch.lineTo(960,0);
  Movie.ctxScratch.lineTo(960,720);
  Movie.ctxScratch.lineTo(0,720);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#000000";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(335.47244,477.88977);
  Movie.ctxScratch.lineTo(354.144864,178.81367);
  Movie.ctxScratch.lineTo(428.834654,178.81367);
  Movie.ctxScratch.lineTo(410.162199,477.88977);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.strokeStyle = "#000000";
  Movie.ctxScratch.lineWidth = 2;
  Movie.ctxScratch.lineCap = "butt";
  Movie.ctxScratch.lineJoin = "round";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(335.47244,477.88977);
  Movie.ctxScratch.lineTo(354.144864,178.81367);
  Movie.ctxScratch.lineTo(428.834654,178.81367);
  Movie.ctxScratch.lineTo(410.162199,477.88977);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#000000";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(428.83386,180.62883);
  Movie.ctxScratch.lineTo(504.32992,172.282379);
  Movie.ctxScratch.lineTo(537.24328,469.542209);
  Movie.ctxScratch.lineTo(461.74725,477.88867500000003);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.strokeStyle = "#000000";
  Movie.ctxScratch.lineWidth = 2;
  Movie.ctxScratch.lineCap = "butt";
  Movie.ctxScratch.lineJoin = "round";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(428.83386,180.62883);
  Movie.ctxScratch.lineTo(504.32992,172.282379);
  Movie.ctxScratch.lineTo(537.24328,469.542209);
  Movie.ctxScratch.lineTo(461.74725,477.88867500000003);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#000000";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(352.87927,142.4042);
  Movie.ctxScratch.lineTo(506.35959,142.4042);
  Movie.ctxScratch.lineTo(506.35959,178.81364);
  Movie.ctxScratch.lineTo(352.87927,178.81364);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.strokeStyle = "#000000";
  Movie.ctxScratch.lineWidth = 2;
  Movie.ctxScratch.lineCap = "butt";
  Movie.ctxScratch.lineJoin = "round";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(352.87927,142.4042);
  Movie.ctxScratch.lineTo(506.35959,142.4042);
  Movie.ctxScratch.lineTo(506.35959,178.81364);
  Movie.ctxScratch.lineTo(352.87927,178.81364);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#999999";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(352.87927,153.49081);
  Movie.ctxScratch.lineTo(506.35959,153.49081);
  Movie.ctxScratch.lineTo(506.35959,167.727031);
  Movie.ctxScratch.lineTo(352.87927,167.727031);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.strokeStyle = "#000000";
  Movie.ctxScratch.lineWidth = 2;
  Movie.ctxScratch.lineCap = "butt";
  Movie.ctxScratch.lineJoin = "round";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(352.87927,153.49081);
  Movie.ctxScratch.lineTo(506.35959,153.49081);
  Movie.ctxScratch.lineTo(506.35959,167.727031);
  Movie.ctxScratch.lineTo(352.87927,167.727031);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#cfe2f3";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(416.1706,160.60892);
  Movie.ctxScratch.lineTo(416.1706,160.60892);
  Movie.ctxScratch.bezierCurveTo(416.1706,154.494662,422.19183999999996,149.538058,429.619422,149.538058);
  Movie.ctxScratch.lineTo(429.619422,149.538058);
  Movie.ctxScratch.bezierCurveTo(437.04700399999996,149.538058,443.068244,154.494662,443.068244,160.60892);
  Movie.ctxScratch.lineTo(443.068244,160.60892);
  Movie.ctxScratch.bezierCurveTo(443.068244,166.723193,437.047004,171.679797,429.619422,171.679797);
  Movie.ctxScratch.lineTo(429.619422,171.679797);
  Movie.ctxScratch.bezierCurveTo(422.19184,171.679797,416.1706,166.723193,416.1706,160.60892);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.strokeStyle = "#000000";
  Movie.ctxScratch.lineWidth = 2;
  Movie.ctxScratch.lineCap = "butt";
  Movie.ctxScratch.lineJoin = "round";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(416.1706,160.60892);
  Movie.ctxScratch.lineTo(416.1706,160.60892);
  Movie.ctxScratch.bezierCurveTo(416.1706,154.494662,422.19183999999996,149.538058,429.619422,149.538058);
  Movie.ctxScratch.lineTo(429.619422,149.538058);
  Movie.ctxScratch.bezierCurveTo(437.04700399999996,149.538058,443.068244,154.494662,443.068244,160.60892);
  Movie.ctxScratch.lineTo(443.068244,160.60892);
  Movie.ctxScratch.bezierCurveTo(443.068244,166.723193,437.047004,171.679797,429.619422,171.679797);
  Movie.ctxScratch.lineTo(429.619422,171.679797);
  Movie.ctxScratch.bezierCurveTo(422.19184,171.679797,416.1706,166.723193,416.1706,160.60892);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
};

Movie.boots = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.translate(0,0);
  Movie.ctxScratch.scale(1,1);
  Movie.ctxScratch.translate(635,222);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-552.7,263.2);
  Movie.ctxScratch.lineTo(-316.00000000000006,263.2);
  Movie.ctxScratch.quadraticCurveTo(-316.00000000000006,263.2,-316.00000000000006,263.2);
  Movie.ctxScratch.lineTo(-316.00000000000006,351);
  Movie.ctxScratch.quadraticCurveTo(-316.00000000000006,351,-316.00000000000006,351);
  Movie.ctxScratch.lineTo(-552.7,351);
  Movie.ctxScratch.quadraticCurveTo(-552.7,351,-552.7,351);
  Movie.ctxScratch.lineTo(-552.7,263.2);
  Movie.ctxScratch.quadraticCurveTo(-552.7,263.2,-552.7,263.2);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-443.2,256);
  Movie.ctxScratch.lineTo(-443.4,256.8);
  Movie.ctxScratch.bezierCurveTo(-444.9,263.1,-447.9,276.3,-448.09999999999997,279.5);
  Movie.ctxScratch.bezierCurveTo(-448.2,281.4,-447.99999999999994,285.7,-447.79999999999995,289.5);
  Movie.ctxScratch.bezierCurveTo(-447.69999999999993,292.4,-447.49999999999994,294.8,-447.59999999999997,296.1);
  Movie.ctxScratch.bezierCurveTo(-447.7,298.6,-447.2,303.90000000000003,-447.09999999999997,304.6);
  Movie.ctxScratch.bezierCurveTo(-446.99999999999994,305.3,-445.9,311,-444.79999999999995,315.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-444.4,317.50000000000006,-444.49999999999994,319.90000000000003,-444.59999999999997,323.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-444.7,326.30000000000007,-444.79999999999995,330.20000000000005,-444.59999999999997,335.00000000000006);
  Movie.ctxScratch.lineTo(-444.59999999999997,336.1000000000001);
  Movie.ctxScratch.lineTo(-446.09999999999997,336.7000000000001);
  Movie.ctxScratch.bezierCurveTo(-448.9,338.0000000000001,-454.79999999999995,340.5000000000001,-461.09999999999997,340.5000000000001);
  Movie.ctxScratch.bezierCurveTo(-461.09999999999997,340.5000000000001,-461.09999999999997,340.5000000000001,-461.09999999999997,340.5000000000001);
  Movie.ctxScratch.bezierCurveTo(-464.2,340.5000000000001,-467.09999999999997,339.9000000000001,-469.59999999999997,338.7000000000001);
  Movie.ctxScratch.lineTo(-470.29999999999995,338.4000000000001);
  Movie.ctxScratch.lineTo(-470.4,337.6000000000001);
  Movie.ctxScratch.bezierCurveTo(-470.9,335.1000000000001,-471.09999999999997,332.4000000000001,-471.09999999999997,331.7000000000001);
  Movie.ctxScratch.bezierCurveTo(-471.2,331.7000000000001,-471.4,331.6000000000001,-471.59999999999997,331.6000000000001);
  Movie.ctxScratch.lineTo(-471.7,331.6000000000001);
  Movie.ctxScratch.bezierCurveTo(-472.7,331.6000000000001,-474.9,332.1000000000001,-475.8,333.30000000000007);
  Movie.ctxScratch.bezierCurveTo(-476,333.50000000000006,-476.2,333.80000000000007,-476.5,334.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-478.8,337.20000000000005,-481.2,340.30000000000007,-483.1,341.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-484.90000000000003,342.1,-487,343.00000000000006,-490.90000000000003,343.00000000000006);
  Movie.ctxScratch.bezierCurveTo(-491.3,343.00000000000006,-491.70000000000005,343.00000000000006,-492.1,343.00000000000006);
  Movie.ctxScratch.bezierCurveTo(-496.20000000000005,342.80000000000007,-505.20000000000005,341.6000000000001,-510.6,339.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-515.8000000000001,338.20000000000005,-520.2,335.6,-521.1,335.00000000000006);
  Movie.ctxScratch.bezierCurveTo(-522.3000000000001,334.20000000000005,-522.8000000000001,332.80000000000007,-522.4,331.40000000000003);
  Movie.ctxScratch.bezierCurveTo(-522.4,331.1,-522.4,330.20000000000005,-522.5,329.6);
  Movie.ctxScratch.bezierCurveTo(-522.7,327.3,-522.8,325.6,-522.4,324.6);
  Movie.ctxScratch.bezierCurveTo(-521.8,323,-519.6,320,-516.6999999999999,320);
  Movie.ctxScratch.bezierCurveTo(-516.4,320,-515.9999999999999,320,-515.6999999999999,320.1);
  Movie.ctxScratch.bezierCurveTo(-514.5999999999999,320.40000000000003,-512.9999999999999,320.6,-511.5999999999999,320.6);
  Movie.ctxScratch.bezierCurveTo(-510.3999999999999,320.6,-509.7999999999999,320.40000000000003,-509.69999999999993,320.40000000000003);
  Movie.ctxScratch.bezierCurveTo(-508.5999999999999,320.00000000000006,-506.29999999999995,319.40000000000003,-504.3999999999999,318.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-503.5999999999999,318.70000000000005,-502.8999999999999,318.50000000000006,-502.5999999999999,318.40000000000003);
  Movie.ctxScratch.lineTo(-502.3999999999999,318.3);
  Movie.ctxScratch.bezierCurveTo(-501.7999999999999,318.1,-501.19999999999993,318,-499.2999999999999,315.6);
  Movie.ctxScratch.bezierCurveTo(-497.39999999999986,313.20000000000005,-492.5999999999999,305.70000000000005,-490.5999999999999,302.5);
  Movie.ctxScratch.bezierCurveTo(-490.0999999999999,301.7,-489.7999999999999,301.2,-489.5999999999999,300.9);
  Movie.ctxScratch.bezierCurveTo(-489.3999999999999,300.59999999999997,-489.19999999999993,300.29999999999995,-488.9999999999999,300);
  Movie.ctxScratch.bezierCurveTo(-487.9999999999999,298.6,-486.89999999999986,297.1,-486.39999999999986,293.2);
  Movie.ctxScratch.bezierCurveTo(-485.6999999999999,288,-484.39999999999986,266.9,-484.59999999999985,262.59999999999997);
  Movie.ctxScratch.bezierCurveTo(-484.6999999999999,260.7,-484.6999999999999,257.7,-484.79999999999984,254.49999999999997);
  Movie.ctxScratch.bezierCurveTo(-484.79999999999984,249.99999999999997,-484.89999999999986,244.49999999999997,-485.1999999999998,242.89999999999998);
  Movie.ctxScratch.lineTo(-485.1999999999998,242.7);
  Movie.ctxScratch.bezierCurveTo(-485.99999999999983,238.6,-486.49999999999983,235.39999999999998,-485.8999999999998,233.79999999999998);
  Movie.ctxScratch.bezierCurveTo(-485.49999999999983,232.79999999999998,-484.49999999999983,232.2,-483.7999999999998,231.79999999999998);
  Movie.ctxScratch.bezierCurveTo(-481.69999999999976,230.79999999999998,-478.19999999999976,230.1,-476.4999999999998,229.79999999999998);
  Movie.ctxScratch.bezierCurveTo(-474.39999999999975,229.49999999999997,-467.9999999999998,229.29999999999998,-462.7999999999998,229.29999999999998);
  Movie.ctxScratch.bezierCurveTo(-459.0999999999998,229.29999999999998,-456.0999999999998,229.39999999999998,-454.2999999999998,229.49999999999997);
  Movie.ctxScratch.bezierCurveTo(-450.0999999999998,229.79999999999998,-445.8999999999998,231.19999999999996,-443.69999999999976,232.89999999999998);
  Movie.ctxScratch.bezierCurveTo(-442.69999999999976,233.7,-442.09999999999974,234.49999999999997,-441.89999999999975,235.49999999999997);
  Movie.ctxScratch.lineTo(-441.89999999999975,235.69999999999996);
  Movie.ctxScratch.bezierCurveTo(-441.9,236,-441.4,248.3,-443.2,256);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(-348.3,329.5);
  Movie.ctxScratch.bezierCurveTo(-347.90000000000003,330.9,-348.40000000000003,332.3,-349.6,333.1);
  Movie.ctxScratch.bezierCurveTo(-349.6,333.1,-354.1,336.1,-360,338.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-365.4,340.00000000000006,-374.3,341.40000000000003,-378.4,341.70000000000005);
  Movie.ctxScratch.bezierCurveTo(-379,341.70000000000005,-379.59999999999997,341.80000000000007,-380.09999999999997,341.80000000000007);
  Movie.ctxScratch.bezierCurveTo(-383.7,341.80000000000007,-385.7,341.00000000000006,-387.4,340.1000000000001);
  Movie.ctxScratch.bezierCurveTo(-389.29999999999995,339.2000000000001,-391.79999999999995,336.2000000000001,-394.09999999999997,333.2000000000001);
  Movie.ctxScratch.bezierCurveTo(-394.4,332.9000000000001,-394.59999999999997,332.6000000000001,-394.79999999999995,332.3000000000001);
  Movie.ctxScratch.bezierCurveTo(-395.69999999999993,331.2000000000001,-397.9,330.7000000000001,-398.9,330.7000000000001);
  Movie.ctxScratch.bezierCurveTo(-398.9,330.7000000000001,-398.9,330.7000000000001,-398.9,330.7000000000001);
  Movie.ctxScratch.bezierCurveTo(-399.2,330.7000000000001,-399.4,330.7000000000001,-399.5,330.8000000000001);
  Movie.ctxScratch.bezierCurveTo(-399.5,331.5000000000001,-399.7,334.2000000000001,-400.1,336.7000000000001);
  Movie.ctxScratch.lineTo(-400.20000000000005,337.5000000000001);
  Movie.ctxScratch.lineTo(-400.90000000000003,337.9000000000001);
  Movie.ctxScratch.bezierCurveTo(-403.50000000000006,339.30000000000007,-406.50000000000006,340.0000000000001,-409.8,340.0000000000001);
  Movie.ctxScratch.bezierCurveTo(-416,340.0000000000001,-421.7,337.60000000000014,-424.40000000000003,336.4000000000001);
  Movie.ctxScratch.lineTo(-425.90000000000003,335.80000000000007);
  Movie.ctxScratch.lineTo(-425.90000000000003,334.70000000000005);
  Movie.ctxScratch.bezierCurveTo(-425.8,329.90000000000003,-426.00000000000006,326.00000000000006,-426.1,322.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-426.3,319.6,-426.40000000000003,317.3,-426.1,315.6);
  Movie.ctxScratch.bezierCurveTo(-425.1,310.70000000000005,-424.20000000000005,304.90000000000003,-424.1,304.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-424.1,303.50000000000006,-423.70000000000005,298.30000000000007,-423.8,295.70000000000005);
  Movie.ctxScratch.bezierCurveTo(-423.90000000000003,294.50000000000006,-423.8,292.00000000000006,-423.7,289.1);
  Movie.ctxScratch.bezierCurveTo(-423.59999999999997,285.3,-423.5,281,-423.7,279.1);
  Movie.ctxScratch.bezierCurveTo(-424,276,-427.3,262.8,-428.9,256.5);
  Movie.ctxScratch.lineTo(-429.09999999999997,255.7);
  Movie.ctxScratch.bezierCurveTo(-430.99999999999994,248,-430.79999999999995,235.7,-430.79999999999995,235.2);
  Movie.ctxScratch.lineTo(-430.79999999999995,235);
  Movie.ctxScratch.bezierCurveTo(-430.69999999999993,234.1,-430.09999999999997,233.2,-429.09999999999997,232.4);
  Movie.ctxScratch.bezierCurveTo(-426.9,230.70000000000002,-422.7,229.20000000000002,-418.49999999999994,228.8);
  Movie.ctxScratch.bezierCurveTo(-415.49999999999994,228.5,-409.49999999999994,228.4,-404.8999999999999,228.4);
  Movie.ctxScratch.bezierCurveTo(-402.8999999999999,228.4,-398.19999999999993,228.4,-396.3999999999999,228.70000000000002);
  Movie.ctxScratch.bezierCurveTo(-394.69999999999993,228.9,-391.19999999999993,229.60000000000002,-389.0999999999999,230.60000000000002);
  Movie.ctxScratch.bezierCurveTo(-388.3999999999999,230.90000000000003,-387.2999999999999,231.50000000000003,-386.8999999999999,232.50000000000003);
  Movie.ctxScratch.bezierCurveTo(-386.2999999999999,234.10000000000002,-386.7999999999999,237.40000000000003,-387.49999999999994,241.50000000000003);
  Movie.ctxScratch.lineTo(-387.49999999999994,241.70000000000002);
  Movie.ctxScratch.bezierCurveTo(-387.79999999999995,243.3,-387.69999999999993,248.8,-387.69999999999993,253.3);
  Movie.ctxScratch.bezierCurveTo(-387.69999999999993,256.5,-387.5999999999999,259.6,-387.69999999999993,261.40000000000003);
  Movie.ctxScratch.bezierCurveTo(-387.8999999999999,265.70000000000005,-386.0999999999999,286.8,-385.29999999999995,291.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-384.69999999999993,295.70000000000005,-383.59999999999997,297.3,-382.59999999999997,298.70000000000005);
  Movie.ctxScratch.bezierCurveTo(-382.4,299.00000000000006,-382.2,299.30000000000007,-381.99999999999994,299.6);
  Movie.ctxScratch.bezierCurveTo(-381.79999999999995,299.90000000000003,-381.3999999999999,300.5,-380.8999999999999,301.20000000000005);
  Movie.ctxScratch.bezierCurveTo(-378.7999999999999,304.40000000000003,-373.8999999999999,311.80000000000007,-371.8999999999999,314.1);
  Movie.ctxScratch.bezierCurveTo(-369.8999999999999,316.5,-369.2999999999999,316.6,-368.69999999999993,316.8);
  Movie.ctxScratch.lineTo(-368.49999999999994,316.90000000000003);
  Movie.ctxScratch.bezierCurveTo(-368.19999999999993,317.00000000000006,-367.49999999999994,317.20000000000005,-366.69999999999993,317.40000000000003);
  Movie.ctxScratch.bezierCurveTo(-364.79999999999995,317.90000000000003,-362.3999999999999,318.40000000000003,-361.3999999999999,318.8);
  Movie.ctxScratch.bezierCurveTo(-361.2999999999999,318.8,-360.7999999999999,319,-359.7999999999999,319);
  Movie.ctxScratch.bezierCurveTo(-358.3999999999999,319,-356.6999999999999,318.8,-355.4999999999999,318.4);
  Movie.ctxScratch.bezierCurveTo(-355.1999999999999,318.29999999999995,-354.7999999999999,318.29999999999995,-354.4999999999999,318.29999999999995);
  Movie.ctxScratch.bezierCurveTo(-351.6999999999999,318.29999999999995,-349.39999999999986,321.29999999999995,-348.7999999999999,322.79999999999995);
  Movie.ctxScratch.bezierCurveTo(-348.3999999999999,323.79999999999995,-348.4999999999999,325.49999999999994,-348.5999999999999,327.79999999999995);
  Movie.ctxScratch.bezierCurveTo(-348.3,328.3,-348.3,329.2,-348.3,329.5);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
	//if(BlocklyGames.LEVEL == 3){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
}

Movie.cowboyboots = function(){
  Movie.ctxScratch.save();
  Movie.ctxScratch.scale(.9,1);
  Movie.ctxScratch.translate(122,365);
  Movie.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Movie.ctxScratch.lineCap = 'butt';
  Movie.ctxScratch.lineJoin = 'miter';
  Movie.ctxScratch.miterLimit = 4;
  Movie.ctxScratch.save();
  Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(0,105);
  Movie.ctxScratch.lineTo(200,105);
  Movie.ctxScratch.quadraticCurveTo(200,105,200,105);
  Movie.ctxScratch.lineTo(200,200);
  Movie.ctxScratch.quadraticCurveTo(200,200,200,200);
  Movie.ctxScratch.lineTo(0,200);
  Movie.ctxScratch.quadraticCurveTo(0,200,0,200);
  Movie.ctxScratch.lineTo(0,105);
  Movie.ctxScratch.quadraticCurveTo(0,105,0,105);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.translate(1,-2);
  Movie.ctxScratch.moveTo(189.4,176.9);
  Movie.ctxScratch.bezierCurveTo(189.4,179.5,188.9,182.1,188.6,182.9);
  Movie.ctxScratch.lineTo(188.6,191.70000000000002);
  Movie.ctxScratch.bezierCurveTo(188.6,193.00000000000003,187.6,194.3,186.29999999999998,194.60000000000002);
  Movie.ctxScratch.bezierCurveTo(185.79999999999998,194.60000000000002,176.2,196.40000000000003,156.89999999999998,196.40000000000003);
  Movie.ctxScratch.bezierCurveTo(141.79999999999998,196.40000000000003,134.29999999999998,193.80000000000004,128.09999999999997,191.50000000000003);
  Movie.ctxScratch.lineTo(126.79999999999997,194.90000000000003);
  Movie.ctxScratch.bezierCurveTo(126.29999999999997,195.90000000000003,125.49999999999997,196.70000000000005,124.19999999999997,196.70000000000005);
  Movie.ctxScratch.lineTo(111.19999999999997,196.70000000000005);
  Movie.ctxScratch.bezierCurveTo(109.89999999999998,196.70000000000005,108.89999999999998,195.90000000000003,108.59999999999998,194.60000000000005);
  Movie.ctxScratch.lineTo(105.99999999999999,184.70000000000005);
  Movie.ctxScratch.bezierCurveTo(105.99999999999999,184.70000000000005,105.99999999999999,184.40000000000003,105.99999999999999,184.20000000000005);
  Movie.ctxScratch.bezierCurveTo(105.99999999999999,183.90000000000003,105.99999999999999,183.90000000000003,105.99999999999999,183.90000000000003);
  Movie.ctxScratch.lineTo(105.99999999999999,175.60000000000002);
  Movie.ctxScratch.bezierCurveTo(105.69999999999999,174.3,104.99999999999999,170.40000000000003,104.99999999999999,164.70000000000002);
  Movie.ctxScratch.bezierCurveTo(104.99999999999999,135.60000000000002,105.99999999999999,105.70000000000002,105.99999999999999,105.50000000000001);
  Movie.ctxScratch.bezierCurveTo(105.99999999999999,104.50000000000001,106.49999999999999,103.70000000000002,107.59999999999998,103.20000000000002);
  Movie.ctxScratch.bezierCurveTo(107.89999999999998,102.90000000000002,114.09999999999998,99.60000000000002,122.39999999999998,98.00000000000001);
  Movie.ctxScratch.lineTo(123.19999999999997,92.30000000000001);
  Movie.ctxScratch.bezierCurveTo(123.49999999999997,91.00000000000001,124.49999999999997,90.00000000000001,125.79999999999997,90.00000000000001);
  Movie.ctxScratch.lineTo(133.59999999999997,90.00000000000001);
  Movie.ctxScratch.bezierCurveTo(135.19999999999996,90.00000000000001,136.49999999999997,91.30000000000001,136.19999999999996,92.90000000000002);
  Movie.ctxScratch.lineTo(136.19999999999996,97.80000000000003);
  Movie.ctxScratch.bezierCurveTo(145.59999999999997,99.10000000000002,151.49999999999997,103.00000000000003,151.79999999999995,103.30000000000003);
  Movie.ctxScratch.bezierCurveTo(152.59999999999997,103.80000000000003,153.09999999999997,105.10000000000002,153.09999999999997,106.20000000000003);
  Movie.ctxScratch.bezierCurveTo(153.09999999999997,106.50000000000003,148.69999999999996,137.60000000000002,148.69999999999996,148.00000000000003);
  Movie.ctxScratch.bezierCurveTo(148.69999999999996,149.60000000000002,148.69999999999996,150.90000000000003,148.99999999999997,151.90000000000003);
  Movie.ctxScratch.lineTo(148.99999999999997,152.20000000000005);
  Movie.ctxScratch.bezierCurveTo(149.49999999999997,157.40000000000003,151.29999999999998,159.00000000000006,158.09999999999997,162.10000000000005);
  Movie.ctxScratch.bezierCurveTo(159.09999999999997,162.60000000000005,160.19999999999996,163.10000000000005,161.19999999999996,163.70000000000005);
  Movie.ctxScratch.bezierCurveTo(166.89999999999995,166.60000000000005,168.99999999999997,167.60000000000005,177.79999999999995,167.10000000000005);
  Movie.ctxScratch.bezierCurveTo(182.19999999999996,166.80000000000004,185.29999999999995,167.60000000000005,187.39999999999995,169.70000000000005);
  Movie.ctxScratch.bezierCurveTo(188.3,170.7,189.4,173.5,189.4,176.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.save();
  //Movie.ctxScratch.fillStyle = "#ffffff";
  
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(12.9,168.9);
  Movie.ctxScratch.bezierCurveTo(15,166.8,18.1,166,22.5,166.3);
  Movie.ctxScratch.bezierCurveTo(31.3,166.8,33.4,165.8,39.1,162.9);
  Movie.ctxScratch.bezierCurveTo(39.9,162.4,40.9,161.9,42.2,161.3);
  Movie.ctxScratch.bezierCurveTo(48.7,158.20000000000002,50.800000000000004,156.60000000000002,51.300000000000004,151.4);
  Movie.ctxScratch.lineTo(51.300000000000004,151.1);
  Movie.ctxScratch.bezierCurveTo(51.300000000000004,150.1,51.6,148.79999999999998,51.6,147.2);
  Movie.ctxScratch.bezierCurveTo(51.6,136.79999999999998,47.2,105.6,47.2,105.39999999999999);
  Movie.ctxScratch.bezierCurveTo(46.900000000000006,104.39999999999999,47.5,103.1,48.5,102.49999999999999);
  Movie.ctxScratch.bezierCurveTo(48.8,102.19999999999999,54.7,98.29999999999998,64.1,96.99999999999999);
  Movie.ctxScratch.lineTo(64.1,92.09999999999998);
  Movie.ctxScratch.bezierCurveTo(64.1,90.49999999999999,65.39999999999999,89.19999999999997,66.69999999999999,89.19999999999997);
  Movie.ctxScratch.lineTo(74.49999999999999,89.19999999999997);
  Movie.ctxScratch.bezierCurveTo(75.79999999999998,89.19999999999997,77.09999999999998,90.19999999999997,77.09999999999998,91.49999999999997);
  Movie.ctxScratch.lineTo(77.89999999999998,97.19999999999997);
  Movie.ctxScratch.bezierCurveTo(86.49999999999997,98.79999999999997,92.39999999999998,102.09999999999998,92.69999999999997,102.39999999999998);
  Movie.ctxScratch.bezierCurveTo(93.49999999999997,102.89999999999998,93.99999999999997,103.69999999999997,94.29999999999997,104.69999999999997);
  Movie.ctxScratch.bezierCurveTo(94.29999999999997,104.99999999999997,95.29999999999997,135.09999999999997,95.29999999999997,163.89999999999998);
  Movie.ctxScratch.bezierCurveTo(95.29999999999997,169.59999999999997,94.49999999999997,173.79999999999998,94.29999999999997,174.79999999999998);
  Movie.ctxScratch.lineTo(94.29999999999997,183.1);
  Movie.ctxScratch.lineTo(94.29999999999997,183.4);
  Movie.ctxScratch.bezierCurveTo(94.29999999999997,183.4,94.29999999999997,183.70000000000002,94.29999999999997,183.9);
  Movie.ctxScratch.lineTo(91.69999999999997,193.8);
  Movie.ctxScratch.bezierCurveTo(91.39999999999998,195.10000000000002,90.39999999999998,195.9,89.09999999999998,195.9);
  Movie.ctxScratch.lineTo(76,195.9);
  Movie.ctxScratch.bezierCurveTo(75,195.9,73.9,195.1,73.4,194.1);
  Movie.ctxScratch.lineTo(72.10000000000001,190.7);
  Movie.ctxScratch.bezierCurveTo(65.9,193,58.30000000000001,195.6,43.30000000000001,195.6);
  Movie.ctxScratch.bezierCurveTo(24.100000000000012,195.6,14.20000000000001,193.79999999999998,13.900000000000013,193.79999999999998);
  Movie.ctxScratch.bezierCurveTo(12.600000000000012,193.49999999999997,11.600000000000012,192.2,11.600000000000012,190.89999999999998);
  Movie.ctxScratch.lineTo(11.600000000000012,182.09999999999997);
  Movie.ctxScratch.bezierCurveTo(11.300000000000011,181.09999999999997,10.800000000000011,178.69999999999996,10.800000000000011,176.09999999999997);
  Movie.ctxScratch.bezierCurveTo(10.3,173.5,11.1,170.7,12.9,168.9);
  Movie.ctxScratch.closePath();
  Movie.ctxScratch.fill();
  Movie.ctxScratch.stroke();
  Movie.ctxScratch.restore();
  Movie.ctxScratch.restore();
  //if(BlocklyGames.LEVEL == 3){setTimeout(function(){Blockly.playAudio('win', 0.5); BlocklyDialogs.levelup();},1000);};
}

/**
 * Change the colour of the pen.
 * @param {string} colour Hexadecimal #rrggbb colour string.
 */
Movie.penColour = function(colour) {
  Movie.ctxScratch.strokeStyle = colour;
  Movie.ctxScratch.fillStyle = colour;
  Movie.ctxDisplay.fillStyle = colour;
};

/**
 * Verify if the answer to this frame is correct.
 */
Movie.checkFrameAnswer = function() {
  // Compare the Alpha (opacity) byte of each pixel in the user's image and
  // the sample answer image.
  //alert('checking');
  var userImage =
      Movie.ctxDisplay.getImageData(0, 0, Movie.WIDTH, Movie.HEIGHT);
  var answer = document.getElementById('prevAnswer');
  if (answer) {
    var ctxAnswer = answer.getContext('2d');
    var answerImage = ctxAnswer.getImageData(0, 0, Movie.WIDTH, Movie.HEIGHT);
    var len = Math.min(userImage.data.length, answerImage.data.length);
    for(var i = 0; i<userImage.data.length; i++){
        if(userImage.data[i] != answerImage.data[i]) return false;
    }
    return true;
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
  //alert(Movie.ctxDisplay.fillStyle);
  if (Movie.ctxDisplay.fillStyle != '#ffffff') {
    Movie.success = true;
    BlocklyInterface.saveToLocalStorage();
    if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
      // No congrats for last level, it is open ended.
      Blockly.playAudio('win', 0.5);
      BlocklyDialogs.levelup();
    }
  }
};
