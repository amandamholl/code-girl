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
Movie.FRAMES = BlocklyGames.LEVEL == 1 ? 0 : 100;

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
        ['#ff0000', '#ffcc33', '#ffff00',
         '#009900', '#3333ff', '#cc33cc',
         '#ffffff', '#999999', '#000000'];
  }

  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {'media': 'media/',
       'rtl': rtl,
       'toolbox': toolbox,
       'trashcan': true});
	   
 /* Code from puzzle.js -- saves blocks and reloads them if page reloads */
 /*
  var savedBlocks =
      BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME, BlocklyGames.LEVEL);
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
  */
  
  // Prevent collisions with user-defined functions or variables.
  Blockly.JavaScript.addReservedWords('circle,rect,line,penColour,time');

  /*if (document.getElementById('submitButton')) {
    BlocklyGames.bindClick('submitButton', Movie.submitToReddit);
  }*/

  var defaultXml = '<xml></xml>';
  if (BlocklyGames.LEVEL == 9) {
    defaultXml = '<xml xmlns="http://www.w3.org/1999/xhtml">' +
        '  <block type="movie_colour" inline="false" x="51" y="28">' +
        '    <value name="COLOUR">' +
        '      <block type="colour_picker">' +
        '        <field name="COLOUR">#999999</field>' +
        '      </block>' +
        '    </value>' +
        '    <next>' +
        '      <block type="movie_line" inline="false">' +
        '        <value name="X1">' +
        '          <block type="math_number">' +
        '            <field name="NUM">0</field>' +
        '          </block>' +
        '        </value>' +
        '        <value name="Y1">' +
        '          <block type="math_number">' +
        '            <field name="NUM">40</field>' +
        '          </block>' +
        '        </value>' +
        '        <value name="X2">' +
        '          <block type="math_number">' +
        '            <field name="NUM">20</field>' +
        '          </block>' +
        '        </value>' +
        '        <value name="Y2">' +
        '          <block type="math_number">' +
        '            <field name="NUM">40</field>' +
        '          </block>' +
        '        </value>' +
        '        <value name="WIDTH">' +
        '          <block type="math_number">' +
        '            <field name="NUM">1</field>' +
        '          </block>' +
        '        </value>' +
        '        <next>' +
        '          <block type="movie_line" inline="false">' +
        '            <value name="X1">' +
        '              <block type="math_number">' +
        '                <field name="NUM">20</field>' +
        '              </block>' +
        '            </value>' +
        '            <value name="Y1">' +
        '              <block type="math_number">' +
        '                <field name="NUM">40</field>' +
        '              </block>' +
        '            </value>' +
        '            <value name="X2">' +
        '              <block type="math_number">' +
        '                <field name="NUM">20</field>' +
        '              </block>' +
        '            </value>' +
        '            <value name="Y2">' +
        '              <block type="math_number">' +
        '                <field name="NUM">80</field>' +
        '              </block>' +
        '            </value>' +
        '            <value name="WIDTH">' +
        '              <block type="math_number">' +
        '                <field name="NUM">1</field>' +
        '              </block>' +
        '            </value>' +
        '            <next>' +
        '              <block type="movie_line" inline="false">' +
        '                <value name="X1">' +
        '                  <block type="math_number">' +
        '                    <field name="NUM">20</field>' +
        '                  </block>' +
        '                </value>' +
        '                <value name="Y1">' +
        '                  <block type="math_number">' +
        '                    <field name="NUM">80</field>' +
        '                  </block>' +
        '                </value>' +
        '                <value name="X2">' +
        '                  <block type="math_number">' +
        '                    <field name="NUM">80</field>' +
        '                  </block>' +
        '                </value>' +
        '                <value name="Y2">' +
        '                  <block type="math_number">' +
        '                    <field name="NUM">20</field>' +
        '                  </block>' +
        '                </value>' +
        '                <value name="WIDTH">' +
        '                  <block type="math_number">' +
        '                    <field name="NUM">1</field>' +
        '                  </block>' +
        '                </value>' +
        '              </block>' +
        '            </next>' +
        '          </block>' +
        '        </next>' +
        '      </block>' +
        '    </next>' +
        '  </block>' +
        '</xml>';
  }
  BlocklyInterface.loadBlocks(defaultXml, false);
  
 

  Movie.ctxDisplay = document.getElementById('display').getContext('2d');
  Movie.ctxDisplay.globalCompositeOperation = 'source-over';
  Movie.ctxScratch = document.getElementById('scratch').getContext('2d');
  Movie.renderHatching_();
  // Render the frame zero answer because we need it right now.
  Movie.renderAnswer_(0);
  // Remaining answers may be computed later without slowing down page load.
  function renderRemainingAnswers() {
    for (var f = 1; f <= Movie.FRAMES; f++) {
      Movie.renderAnswer_(f);
    }
  }
  setTimeout(renderRemainingAnswers, 1);
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
 
  // <canvas id="answer1" width="400" height="400" style="display: none">
  // </canvas>
  var canvas = document.createElement('canvas');
  canvas.id = 'answer' + f;
  canvas.width = Movie.WIDTH;
  canvas.height = Movie.HEIGHT;
  canvas.style.display = 'none';
  div.appendChild(canvas);
	
	 //Draw the superhero
	var ctx = canvas.getContext('2d');
	var img = new Image;      // First create the image...
    img.onload = function(){  // ...then set the onload handler...
    	ctx.drawImage(img,-90,0, 600, 600);
    };
  img.src = "./movie/superhero.jpg";      // *then* set the .src and start it loading.
 


  // Clear the scratch canvas.
  Movie.ctxScratch.canvas.width = Movie.ctxScratch.canvas.width;
  // Render the answer.
  Movie.answer(f);
  // Copy the scratch canvas to the answer canvas.
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'copy';
  ctx.drawImage(Movie.ctxScratch.canvas, 0, 0);
  
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

/**
 * On startup draw the axis scales and save it to the axies canvas.
 * @private
 */
Movie.renderAxies_ = function() {
  var ctx = document.getElementById('axies').getContext('2d');
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#bba';
  ctx.fillStyle = '#bba';
  ctx.font = 'normal 14px sans-serif';
  var TICK_LENGTH = 9;
  var major = 1;
  for (var i = 0.1; i < 0.9; i += 0.1) {
    // Bottom edge.
    ctx.beginPath();
    ctx.moveTo(i * Movie.WIDTH, Movie.HEIGHT);
    ctx.lineTo(i * Movie.WIDTH, Movie.HEIGHT - TICK_LENGTH * major);
    ctx.stroke();
    // Left edge.
    ctx.beginPath();
    ctx.moveTo(0, i * Movie.HEIGHT);
    ctx.lineTo(TICK_LENGTH * major, i * Movie.HEIGHT);
    ctx.stroke();
    if (major == 2) {
      ctx.fillText(Math.round(i * 100), i * Movie.WIDTH + 2, Movie.HEIGHT - 4);
      ctx.fillText(Math.round(100 - i * 100), 3, i* Movie.HEIGHT - 2);
    }
    major = major == 1 ? 2 : 1;
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
Movie.display = function(frameNumber) {
  if (typeof frameNumber == 'number') {
    Movie.frameNumber = frameNumber;
  } else {
    frameNumber = Movie.frameNumber;
  }

  // Clear the display with white.
  Movie.ctxDisplay.beginPath();
  Movie.ctxDisplay.rect(0, 0,
      Movie.ctxDisplay.canvas.width, Movie.ctxDisplay.canvas.height);
  Movie.ctxDisplay.fillStyle = '#ffffff';
  Movie.ctxDisplay.fill();

  // Copy the answer.
  var answer = document.getElementById('answer' + frameNumber);
  if (answer) {
    Movie.ctxDisplay.globalAlpha = 0.2;
    Movie.ctxDisplay.drawImage(answer, 0, 0);
    Movie.ctxDisplay.globalAlpha = 1;
  }

  // Copy the hatching.
  var hatching = document.getElementById('hatching');
  Movie.ctxDisplay.drawImage(hatching, 0, 0);

  // Draw and copy the user layer.
  var code = Blockly.JavaScript.workspaceToCode();
  var interpreter = new Interpreter(code, Movie.initInterpreter);
  Movie.drawFrame_(interpreter);
  Movie.ctxDisplay.drawImage(Movie.ctxScratch.canvas, 0, 0);

  // Copy the axies.
  Movie.ctxDisplay.drawImage(document.getElementById('axies'), 0, 0);
  //Movie.checkFrameAnswer();
  if (BlocklyGames.LEVEL == 1) {
    setTimeout(Movie.checkAnswers, 1000);
  }
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
    Movie.shirt();
  };
  interpreter.setProperty(scope, 'shirt',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function(x, y, radius) {
    Movie.circle(x.valueOf(), y.valueOf(), radius.valueOf());
  };
  interpreter.setProperty(scope, 'circle',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(x, y, w, h) {
    Movie.rect(x.valueOf(), y.valueOf(), w.valueOf(), h.valueOf());
  };
  interpreter.setProperty(scope, 'rect',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(x1, y1, x2, y2, w) {
    Movie.line(x1.valueOf(), y1.valueOf(),
               x2.valueOf(), y2.valueOf(), w.valueOf());
  };
  interpreter.setProperty(scope, 'line',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(colour) {
    Movie.penColour(colour.toString());
  };
  interpreter.setProperty(scope, 'penColour',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    return interpreter.createPrimitive(Movie.frameNumber);
  };
  interpreter.setProperty(scope, 'time',
      interpreter.createNativeFunction(wrapper));
};

/**
 * Convert from ideal 0-100 coordinates to canvas's 0-400 coordinates.
 */
Movie.SCALE = 400 / 100;

Movie.shirt = function() {
  	//alert('Hello');
	Movie.ctxScratch.scale(.75,.75);
Movie.ctxScratch.translate(148,220);
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
};

/**
 * Draw a circle.
 * @param {number} x Horizontal location of centre (0-100).
 * @param {number} y Vertical location of centre (0-100).
 * @param {number} radius Radius of circle.
 */
Movie.circle = function(x, y, radius) {
  y = 100 - y;
  x *= Movie.SCALE;
  y *= Movie.SCALE;
  radius = Math.max(radius * Movie.SCALE, 0);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.arc(x, y, radius, 0, 2 * Math.PI, false);
  Movie.ctxScratch.fill();
};

/**
 * Draw a rectangle.
 * @param {number} x Horizontal location of centre (0-100).
 * @param {number} y Vertical location of centre (0-100).
 * @param {number} width Width of rectangle.
 * @param {number} height Height of rectangle.
 */
Movie.rect = function(x, y, width, height) {
  y = 100 - y;
  x *= Movie.SCALE;
  y *= Movie.SCALE;
  width = Math.max(width * Movie.SCALE, 0);
  height = Math.max(height * Movie.SCALE, 0);
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.rect(x - width / 2, y - height / 2, width, height);
  Movie.ctxScratch.fill();
};

/**
 * Draw a rectangle.
 * @param {number} x1 Horizontal location of start (0-100).
 * @param {number} y1 Vertical location of start (0-100).
 * @param {number} x2 Horizontal location of end (0-100).
 * @param {number} y2 Vertical location of end (0-100).
 * @param {number} width Width of line.
 */
Movie.line = function(x1, y1, x2, y2, width) {
  y1 = 100 - y1;
  y2 = 100 - y2;
  x1 *= Movie.SCALE;
  y1 *= Movie.SCALE;
  x2 *= Movie.SCALE;
  y2 *= Movie.SCALE;
  width *= Movie.SCALE;
  Movie.ctxScratch.beginPath();
  Movie.ctxScratch.moveTo(x1, y1);
  Movie.ctxScratch.lineTo(x2, y2);
  Movie.ctxScratch.lineWidth = Math.max(width, 0);
  Movie.ctxScratch.stroke();
};

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
  var answer = document.getElementById('answer' + Movie.frameNumber);
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
  if (BlocklyGames.LEVEL > 1 && Movie.frameNumber != Movie.FRAMES) {
    // Only check answers at the end of the run.
    return;
  }
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

/**
 * Send an image of the canvas to Reddit.
 */
Movie.submitToReddit = function() {
  var blockCount = Blockly.mainWorkspace.getAllBlocks(false).length;
  var code = Blockly.JavaScript.workspaceToCode();
  if (blockCount < 5 || code.indexOf('time()') == -1) {
    alert(BlocklyGames.getMsg('Movie_submitDisabled'));
    return;
  }
  // Draw and copy the user layer.
  var code = Blockly.JavaScript.workspaceToCode();
  var interpreter = new Interpreter(code, Movie.initInterpreter);
  var frameNumber = Movie.frameNumber;
  try {
    Movie.frameNumber = Math.round(Movie.FRAMES / 2);
    Movie.drawFrame_(interpreter);
  } finally {
    Movie.frameNumber = frameNumber;
  }
  // Encode the thumbnail.
  var thumbnail = document.getElementById('thumbnail');
  var ctxThumb = thumbnail.getContext('2d');
  ctxThumb.globalCompositeOperation = 'copy';
  ctxThumb.drawImage(Movie.ctxScratch.canvas, 0, 0, 100, 100);
  var thumbData = thumbnail.toDataURL('image/png');
  document.getElementById('t2r_thumb').value = thumbData;

  // Encode the XML.
  var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  var xmlData = Blockly.Xml.domToText(xml);
  document.getElementById('t2r_xml').value = xmlData;

  // Submit the form.
  document.getElementById('t2r_form').submit();
};
