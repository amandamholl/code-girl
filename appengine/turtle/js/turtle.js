/**
 * Blockly Games: Turtle Graphics
 *
 * Copyright 2012 Google Inc.
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

goog.provide('Turtle');

goog.require('Slider');
goog.require('Turtle.soy');
goog.require('Turtle.Blocks');
goog.require('Turtle.Answers');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');


BlocklyGames.NAME = 'turtle';

/**
 * Go to the next level.
 */
BlocklyInterface.nextLevel = function() {
   window.location = window.location.protocol + '//' +
        window.location.host + '/movie?lang=' + BlocklyGames.LANG + '&level=' + (BlocklyGames.LEVEL + 1);
};

Turtle.HEIGHT = 400;
Turtle.WIDTH = 400;

/**
 * PID of animation task currently executing.
 * @type !Array.<number>
 */
Turtle.pidList = [];

/**
 * Number of milliseconds that execution should delay.
 * @type number
 */
Turtle.pause = 0;

/**
 * JavaScript interpreter for executing program.
 * @type Interpreter
 */
Turtle.interpreter = null;

/**
 * Should the turtle be drawn?
 * @type boolean
 */
Turtle.visible = true;

/**
 * Is the drawing ready to be submitted to Reddit?
 * @type boolean
 */
Turtle.canSubmit = false;

/**
 * Initialize Blockly and the turtle.  Called on page load.
 */
Turtle.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Turtle.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       level: BlocklyGames.LEVEL,
       maxLevel: 3,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
    if(window.innerWidth <= 801){
      blocklyDiv.style.width = (window.innerWidth - 35) + 'px';
    }
    else{
      blocklyDiv.style.width = (window.innerWidth - 432) + 'px';
    }
    blocklyDiv.style.height = (window.innerHeight - 105) + 'px';
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

  if(BlocklyGames.LEVEL != 1){
    var toolbox = document.getElementById('toolbox');
  }
  BlocklyGames.workspace = Blockly.inject('blockly',
                                          {'media': 'media/',
                                          'rtl': rtl,
                                          'toolbox': toolbox,
                                          'scrollbars': true,
                                          'trashcan': BlocklyGames.LEVEL == 1 ? false : true ,
                                        });
  // Prevent collisions with user-defined functions or variables.
  Blockly.JavaScript.addReservedWords('moveForward,moveBackward,' +
                                      'turnRight,turnLeft,penUp,penDown,penWidth,penColour,' +
                                      'hideTurtle,showTurtle,print,font');

  if (document.getElementById('submitButton')) {
    BlocklyGames.bindClick('submitButton', Turtle.submitToReddit);
  }

  // Initialize the slider.
  var sliderSvg = document.getElementById('slider');
  Turtle.speedSlider = new Slider(10, 35, 130, sliderSvg);

  if (BlocklyGames.LEVEL == 1){

	var defaultXml =
		  '<xml>' +
		  '  <block type="turtle_move_internal" x="60" y="120">' +

		  '  </block>' +
		  '  <block type="turtle_turn" x="300" y="200">' +

		  '  </block>' +
		  '  <block type="turtle_move_internal" x="220" y="50">' +

		  '  </block>' +
		  '  <block type="turtle_turn" x="550" y="150">' +

		  '  </block>' +
		  '  <block type="turtle_move_internal" x="500" y="270">' +

		  '  </block>' +
		  '  <block type="turtle_turn" x="200" y="400">' +

		  '  </block>' +

		  '  <block type="turtle_move_internal" x="100" y="300">' +

		  '  </block>' +
		  '  <block type="turtle_turn" x="450" y="400">' +

		  '  </block>' +
		  '</xml>';
  }
  else{
	 var defaultXml =
		  '<xml>' +
		  '  <block type="turtle_move_internal" x="70" y="120">' +

		  '  </block>';
  }

  /* Changed from true to false to fix block issue */
  BlocklyInterface.loadBlocks(defaultXml, false);

  Turtle.ctxDisplay = document.getElementById('display').getContext('2d');
  Turtle.ctxAnswer = document.getElementById('answer').getContext('2d');
  Turtle.ctxScratch = document.getElementById('scratch').getContext('2d');
  Turtle.drawAnswer();
  Turtle.reset();
  BlocklyGames.bindClick('runButton', Turtle.runButtonClick);
  BlocklyGames.bindClick('resetButton', Turtle.resetButtonClick);

  // Preload the win sound.
  // Lazy-load the JavaScript interpreter.
  setTimeout(BlocklyInterface.importInterpreter, 1);
  // Lazy-load the syntax-highlighting.
  setTimeout(BlocklyInterface.importPrettify, 1);

  BlocklyGames.bindClick('helpButton', Turtle.showHelp);

  if (location.hash.length < 2 &&
      !BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME,
                                         BlocklyGames.LEVEL)) {
    setTimeout(Turtle.showHelp, 1000);
    if (BlocklyGames.LEVEL == 9) {
      setTimeout(BlocklyDialogs.abortOffer, 5 * 60 * 1000);
    }
  }
};

if (window.location.pathname.match(/readonly.html$/)) {
  window.addEventListener('load', function() {
    BlocklyInterface.initReadonly(Turtle.soy.readonly());
  });
} else {
  window.addEventListener('load', Turtle.init);
}

/**
 * Show the help pop-up.
 */
Turtle.showHelp = function() {
  var help = document.getElementById('help');
  var button = document.getElementById('helpButton');
  var style = {
    width: '50%',
    left: '25%',
    top: '6em'
  };

  BlocklyDialogs.showDialog(help, button, true, true, style, Turtle.hideHelp);
  BlocklyDialogs.startDialogKeyDown();
};


/**
 * Hide the help pop-up.
 */
Turtle.hideHelp = function() {
  BlocklyDialogs.stopDialogKeyDown();
  if (BlocklyGames.LEVEL == 2) {
    // Previous apps did not have categories.
    // If the user doesn't find them, point them out.
    Turtle.watchCategories_();
    setTimeout(Turtle.showCategoryHelp, 5000);
  }
  else{
    setTimeout(Turtle.showHelpSlider, 1000);  //Trigger tooltip about slider
  }
};

Turtle.showHelpSlider = function(){
  var help = document.getElementById('helpSlider');
  var style = {
    width: '300px',
    left: 'inherit',
    right: '5.6em',
    top: '37em',
  };
  var origin = document.getElementById('sliderDiv');
  BlocklyDialogs.showDialog(help, origin, true, false, style, null);
  setTimeout(Turtle.close, 5000);
}

Turtle.close = function(){
  BlocklyDialogs.hideDialog(false);
}

/**
 * Show the help pop-up to encourage clicking on the toolbox categories.
 */
Turtle.showCategoryHelp = function() {
  if (Turtle.categoryClicked_ || BlocklyDialogs.isDialogVisible_) {
    return;
  }
  var help = document.getElementById('helpToolbox');
  var style = {
    width: '25%',
    left: '175px',
    top: '5em'
  };
  var origin = document.getElementById(':0');  // Toolbox's tree root.
  BlocklyDialogs.showDialog(help, origin, true, false, style, null);
};


/**
 * Flag indicating if a toolbox categoriy has been clicked yet.
 * Level one only.
 * @private
 */
Turtle.categoryClicked_ = false;

/**
 * Monitor to see if the user finds the categories in level one.
 * @private
 */
Turtle.watchCategories_ = function() {
  if (BlocklyGames.workspace.toolbox_.flyout_.isVisible()) {
    Turtle.categoryClicked_ = true;
    BlocklyDialogs.hideDialog(false);
  }
  if (!Turtle.categoryClicked_) {
    setTimeout(Turtle.watchCategories_, 100);
  }
};

/**
 * On startup draw the expected answer and save it to the answer canvas.
 */
Turtle.drawAnswer = function() {
  Turtle.reset();
  Turtle.answer();
  Turtle.ctxAnswer.globalCompositeOperation = 'copy';
  Turtle.ctxAnswer.drawImage(Turtle.ctxScratch.canvas, 0, 0);
  Turtle.ctxAnswer.globalCompositeOperation = 'source-over';
};

/**
 * Reset the turtle to the start position, clear the display, and kill any
 * pending tasks.
 */
Turtle.reset = function() {
  // Starting location and heading of the turtle.
  Turtle.x = Turtle.HEIGHT / 2;
  Turtle.y = Turtle.WIDTH / 2;
  Turtle.heading = 0;
  Turtle.penDownValue = true;
  Turtle.visible = true;

  // Clear the canvas.
  Turtle.ctxScratch.canvas.width = Turtle.ctxScratch.canvas.width;
  Turtle.ctxScratch.strokeStyle = '#ec8fa1';
  Turtle.ctxScratch.fillStyle = '#ffffff';
  Turtle.ctxScratch.lineWidth = 5;
  Turtle.ctxScratch.lineCap = 'round';
  Turtle.ctxScratch.font = 'normal 18pt Arial';
  Turtle.display();

  // Kill all tasks.
  for (var x = 0; x < Turtle.pidList.length; x++) {
    window.clearTimeout(Turtle.pidList[x]);
  }
  Turtle.pidList.length = 0;
  Turtle.interpreter = null;
};

/**
 * Copy the scratch canvas to the display canvas. Add a turtle marker.
 */
Turtle.display = function() {
  // Clear the display with black.
  Turtle.ctxDisplay.beginPath();
  Turtle.ctxDisplay.rect(0, 0,
      Turtle.ctxDisplay.canvas.width, Turtle.ctxDisplay.canvas.height);
  Turtle.ctxDisplay.fillStyle = '#444444';
  Turtle.ctxDisplay.fill();

  // Draw the answer layer.
  Turtle.ctxDisplay.globalCompositeOperation = 'source-over';
  Turtle.ctxDisplay.globalAlpha = 0.2;
  Turtle.ctxDisplay.drawImage(Turtle.ctxAnswer.canvas, 0, 0);
  Turtle.ctxDisplay.globalAlpha = 1;

  // Draw the user layer.
  Turtle.ctxDisplay.globalCompositeOperation = 'source-over';
  Turtle.ctxDisplay.drawImage(Turtle.ctxScratch.canvas, 0, 0);

  // Draw the turtle.
  if (Turtle.visible) {
    // Make the turtle the colour of the pen.
    Turtle.ctxDisplay.strokeStyle = Turtle.ctxScratch.strokeStyle;
    Turtle.ctxDisplay.fillStyle = Turtle.ctxScratch.fillStyle;

    // Draw the turtle body.
    var radius = Turtle.ctxScratch.lineWidth / 2 + 10;
    var diameter = radius * 2;
    var img = new Image;      // First create the image...
    img.onload = function(){  // ...then set the onload handler...
    	Turtle.ctxDisplay.drawImage(img,(Turtle.x-diameter),(Turtle.y-radius),50,50);
    };
    img.src = "./turtle/robot.svg";      // *then* set the .src and start it loading.

    // Draw the turtle head.
    var WIDTH = 0.3;
    var HEAD_TIP = 10;
    var ARROW_TIP = 4;
    var BEND = 6;
    var radians = 2 * Math.PI * Turtle.heading / 360;
    var tipX = Turtle.x + (radius + HEAD_TIP) * Math.sin(radians);
    var tipY = Turtle.y - (radius + HEAD_TIP) * Math.cos(radians);
    radians -= WIDTH;
    var leftX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var leftY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    radians += WIDTH / 2;
    var leftControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var leftControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH;
    var rightControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var rightControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH / 2;
    var rightX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var rightY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    Turtle.ctxDisplay.beginPath();
    Turtle.ctxDisplay.moveTo(tipX, tipY);
    Turtle.ctxDisplay.lineTo(leftX, leftY);
    Turtle.ctxDisplay.bezierCurveTo(leftControlX, leftControlY,
        rightControlX, rightControlY, rightX, rightY);
    Turtle.ctxDisplay.closePath();
    Turtle.ctxDisplay.fill();
  }
};

/**
 * Click the run button.  Start the program.
 * @param {!Event} e Mouse or touch event.
 */
Turtle.runButtonClick = function(e) {
  // Prevent double-clicks or double-taps.
  if (BlocklyInterface.eventSpam(e)) {
    return;
  }
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  runButton.style.display = 'none';
  resetButton.style.display = 'inline';
  document.getElementById('spinner').style.visibility = 'visible';
  BlocklyGames.workspace.traceOn(true);
  Turtle.execute();
};

/**
 * Click the reset button.  Reset the Turtle.
 * @param {!Event} e Mouse or touch event.
 */
Turtle.resetButtonClick = function(e) {
  // Prevent double-clicks or double-taps.
  if (BlocklyInterface.eventSpam(e)) {
    return;
  }
  var runButton = document.getElementById('runButton');
  runButton.style.display = 'inline';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('spinner').style.visibility = 'hidden';
  BlocklyGames.workspace.traceOn(false);
  Turtle.reset();

  // Image cleared; prevent user from submitting to Reddit.
  Turtle.canSubmit = false;
};

/**
 * Inject the Turtle API into a JavaScript interpreter.
 * @param {!Object} scope Global scope.
 * @param {!Interpreter} interpreter The JS interpreter.
 */
Turtle.initInterpreter = function(interpreter, scope) {
  // API
  var wrapper;
  wrapper = function(distance, id) {
    Turtle.move(distance.valueOf(), id.toString());
  };
  interpreter.setProperty(scope, 'moveForward',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(distance, id) {
    Turtle.move(-distance.valueOf(), id.toString());
  };
  interpreter.setProperty(scope, 'moveBackward',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(angle, id) {
    Turtle.turn(angle.valueOf(), id.toString());
  };
  interpreter.setProperty(scope, 'turnRight',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(angle, id) {
    Turtle.turn(-angle.valueOf(), id.toString());
  };
  interpreter.setProperty(scope, 'turnLeft',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(id) {
    Turtle.penDown(false, id.toString());
  };
  interpreter.setProperty(scope, 'penUp',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(id) {
    Turtle.penDown(true, id.toString());
  };
  interpreter.setProperty(scope, 'penDown',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(width, id) {
    Turtle.penWidth(width.valueOf(), id.toString());
  };
  interpreter.setProperty(scope, 'penWidth',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(colour, id) {
    Turtle.penColour(colour.toString(), id.toString());
  };
  interpreter.setProperty(scope, 'penColour',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(id) {
    Turtle.isVisible(false, id.toString());
  };
  interpreter.setProperty(scope, 'hideTurtle',
      interpreter.createNativeFunction(wrapper));
  wrapper = function(id) {
    Turtle.isVisible(true, id.toString());
  };
  interpreter.setProperty(scope, 'showTurtle',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(text, id) {
    Turtle.drawPrint(text.toString(), id.toString());
  };
  interpreter.setProperty(scope, 'print',
      interpreter.createNativeFunction(wrapper));

  wrapper = function(font, size, style, id) {
    Turtle.drawFont(font.toString(), size.valueOf(), style.toString(),
                  id.toString());
  };
  interpreter.setProperty(scope, 'font',
      interpreter.createNativeFunction(wrapper));
};

/**
 * Execute the user's code.  Heaven help us...
 */
Turtle.execute = function() {
  if (!('Interpreter' in window)) {
    // Interpreter lazy loads and hasn't arrived yet.  Try again later.
    setTimeout(Turtle.execute, 250);
    return;
  }

  Turtle.reset();
  var code = Blockly.JavaScript.workspaceToCode(BlocklyGames.workspace);
  Turtle.interpreter = new Interpreter(code, Turtle.initInterpreter);
  Turtle.pidList.push(setTimeout(Turtle.executeChunk_, 100));
};

/**
 * Execute a bite-sized chunk of the user's code.
 * @private
 */
Turtle.executeChunk_ = function() {
  // All tasks should be complete now.  Clean up the PID list.
  Turtle.pidList.length = 0;
  Turtle.pause = 0;
  var go;
  do {
    try {
      go = Turtle.interpreter.step();
    } catch (e) {
      // User error, terminate in shame.
      alert(e);
      go = false;
    }
    if (go && Turtle.pause) {
      // The last executed command requested a pause.
      go = false;
      Turtle.pidList.push(
                          setTimeout(Turtle.executeChunk_, Turtle.pause));
    }
  } while (go);
  // Wrap up if complete.
  if (!Turtle.pause) {
    document.getElementById('spinner').style.visibility = 'hidden';
    BlocklyGames.workspace.highlightBlock(null);
    Turtle.checkAnswer();
    // Image complete; allow the user to submit this image to Reddit.
    Turtle.canSubmit = true;
  }
};

/**
 * Highlight a block and pause.
 * @param {?string} id ID of block.
 */
Turtle.animate = function(id) {
  Turtle.display();
  if (id) {
    BlocklyInterface.highlight(id);
    // Scale the speed non-linearly, to give better precision at the fast end.
    var stepSpeed = 1000 * Math.pow(1 - Turtle.speedSlider.getValue(), 2);
    Turtle.pause = Math.max(1, stepSpeed);
  }
};

/**
 * Move the turtle forward or backward.
 * @param {number} distance Pixels to move.
 * @param {?string} id ID of block.
 */
Turtle.move = function(distance, id) {
  if (Turtle.penDownValue) {
    Turtle.ctxScratch.beginPath();
    Turtle.ctxScratch.moveTo(Turtle.x, Turtle.y);
  }
  if (distance) {
    Turtle.x += distance * Math.sin(2 * Math.PI * Turtle.heading / 360);
    Turtle.y -= distance * Math.cos(2 * Math.PI * Turtle.heading / 360);
    var bump = 0;
  } else {
    // WebKit (unlike Gecko) draws nothing for a zero-length line.
    var bump = 0.1;
  }
  if (Turtle.penDownValue) {
    Turtle.ctxScratch.lineTo(Turtle.x, Turtle.y + bump);
    Turtle.ctxScratch.stroke();
  }
  Turtle.animate(id);
};

/**
 * Turn the turtle left or right.
 * @param {number} angle Degrees to turn clockwise.
 * @param {?string} id ID of block.
 */
Turtle.turn = function(angle, id) {
  Turtle.heading += angle;
  Turtle.heading %= 360;
  if (Turtle.heading < 0) {
    Turtle.heading += 360;
  }
  Turtle.animate(id);
};

/**
 * Lift or lower the pen.
 * @param {boolean} down True if down, false if up.
 * @param {?string} id ID of block.
 */
Turtle.penDown = function(down, id) {
  Turtle.penDownValue = down;
  Turtle.animate(id);
};

/**
 * Change the thickness of lines.
 * @param {number} width New thickness in pixels.
 * @param {?string} id ID of block.
 */
Turtle.penWidth = function(width, id) {
  Turtle.ctxScratch.lineWidth = width;
  Turtle.animate(id);
};

/**
 * Change the colour of the pen.
 * @param {string} colour Hexadecimal #rrggbb colour string.
 * @param {?string} id ID of block.
 */
Turtle.penColour = function(colour, id) {
  Turtle.ctxScratch.strokeStyle = colour;
  Turtle.ctxScratch.fillStyle = colour;
  Turtle.animate(id);
};

/**
 * Make the turtle visible or invisible.
 * @param {boolean} visible True if visible, false if invisible.
 * @param {?string} id ID of block.
 */
Turtle.isVisible = function(visible, id) {
  Turtle.visible = visible;
  Turtle.animate(id);
};

/**
 * Print some text.
 * @param {string} text Text to print.
 * @param {?string} id ID of block.
 */
Turtle.drawPrint = function(text, id) {
  Turtle.ctxScratch.save();
  Turtle.ctxScratch.translate(Turtle.x, Turtle.y);
  Turtle.ctxScratch.rotate(2 * Math.PI * (Turtle.heading - 90) / 360);
  Turtle.ctxScratch.fillText(text, 0, 0);
  Turtle.ctxScratch.restore();
  Turtle.animate(id);
};

/**
 * Change the typeface of printed text.
 * @param {string} font Font name (e.g. 'Arial').
 * @param {number} size Font size (e.g. 18).
 * @param {string} style Font style (e.g. 'italic').
 * @param {?string} id ID of block.
 */
Turtle.drawFont = function(font, size, style, id) {
  Turtle.ctxScratch.font = style + ' ' + size + 'pt ' + font;
  Turtle.animate(id);
};

/**
 * Verify if the answer is correct.
 * If so, move on to next level.
 */
Turtle.checkAnswer = function() {
  // Compare the Alpha (opacity) byte of each pixel in the user's image and
  // the sample answer image.
  var userImage =
      Turtle.ctxScratch.getImageData(0, 0, Turtle.WIDTH, Turtle.HEIGHT);
  var answerImage =
      Turtle.ctxAnswer.getImageData(0, 0, Turtle.WIDTH, Turtle.HEIGHT);
  var len = Math.min(userImage.data.length, answerImage.data.length);
  var delta = 0;
  // Pixels are in RGBA format.  Only check the Alpha bytes.
  for (var i = 3; i < len; i += 4) {
    // Check the Alpha byte.
    if (Math.abs(userImage.data[i] - answerImage.data[i]) > 64) {
      delta++;
    }
  }
  if (Turtle.isCorrect(delta)) {
    BlocklyInterface.saveToLocalStorage();
    if (BlocklyGames.LEVEL <= 3) {
      // No congrats for last level, it is open ended.
      BlocklyDialogs.congratulations();
    }
  } else {
    Turtle.penColour('#ff0000');
  }
};
