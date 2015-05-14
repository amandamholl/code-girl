// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">width</span><span id="Movie_height">height</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">circle</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">rectangle</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">line</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>';
};


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/logout\'">Signout</button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></div></div><div id="workspace"><div id="levelLinks">' + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + ((opt_ijData.level == 4) ? '<div class="farSide" id="unlock"><button class="secondary" title="Save">Save Avatar</button></div>' : '<div class="farSide" id="unlock"><button class="secondary" title="Unlock">Unlock Accessories</button></div>') + '</div>' + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="visualization"><canvas id="scratch" width="400" height="580" style="display: none"></canvas><canvas id="superhero" width="400" height="580" style="display: block"></canvas><canvas id="hatching" width="400" height="580" style="display: none"></canvas><canvas id="axies" width="400" height="580" style="display: none"></canvas><canvas id="display" width="400" height="580" style="vertical-align: bottom;z-index:20"></canvas></div></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">' + ((opt_ijData.level == 1) ? 'Customize Grace using the toolbar! Start with the shirts.' : (opt_ijData.level == 2) ? 'Add bottoms to Grace using the toolbar.' : (opt_ijData.level == 3) ? 'Add shoes to Grace using the toolbar.' : (opt_ijData.level == 4) ? 'Add accessories to Grace using the toolbar.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.level >= 1) ? '<category name="Shirts"><block type="tshirt"></block><block type="longsleeve"></block></category>' : '') + ((opt_ijData.level >= 2) ? '<category name="Bottoms"><block type = "skirt"></block><block type = "shorts"></block></category>' : '') + ((opt_ijData.level >= 3) ? '<category name="Shoes"><block type="boots"></block><block type="cowboyboots"></block><block type="hightops"></block><block type="sneakers"></block></category>' : '') + ((opt_ijData.level >= 4) ? '<category name="Accessories"><block type = "bow"></block><block type = "earrings"></block></category>' : '') + '<category name="Color"><block type="movie_colour"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category></xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
