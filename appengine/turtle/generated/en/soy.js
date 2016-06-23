// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>';
};


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp; <i class="fa fa-question"></i></button></div></div><div id="workspace">' + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="leftSide"><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;background-color:white; padding-top: 10px;" id="sliderDiv"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/seaturtle.svg" height=32 width=74 x=-21 y=0 /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/bunny.svg" height=32 width=74 x=92 y=0 /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table></div></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">Your solution works, but you can solve the challenge with fewer blocks. Try using "Loops." ' + ((opt_ijData.level < 3) ? 'Draw the shape with just three blocks.' : 'Draw the star with just four blocks.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">' + ((opt_ijData.level == 1) ? '<h3> Learn Sequentiality! </h3>Put the blocks together to help Ada draw a square. Connect all of the blocks.<br><img src="turtle/blocks.png" width=146 style="margin-bottom: -10px;margin-right:10px;"><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : '') + ((opt_ijData.level == 2) ? '<h3> Learn Loops! </h3>Now, use a loop from the toolbar to help Ada draw a square.' : '') + ((opt_ijData.level == 3) ? 'Now, help Ada draw a hexagon using loops.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div><div id="helpSlider" class="dialogHiddenContent"><div style="margin-right:1em;float:left"><img src="maze/help_up.png" class="mirrorImg" height=64></div><div style="margin-left:2em;">Use the slider to change how fast Ada draws the square.</div></div>';
};


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Directions"><block type="turtle_move_internal"></block>' + ((opt_ijData.level == 2) ? '<block type="turtle_turn"></block>' : '') + ((opt_ijData.level == 3) ? '<block type="turtle_turn_internal"><field name="VALUE">some</field></block>' : '') + '</category><category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category></xml>';
};


Turtle.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Turtle.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
