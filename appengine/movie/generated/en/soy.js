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
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" ">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp;<i class="fa fa-question"></i></button></div></div><div id="workspace"><div id="levelLinks">' + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + ((opt_ijData.level == 7) ? '<div class="farSide" id="unlock"><button class="secondary" title="Save">Save Avatar &nbsp;<i class="fa fa-floppy-o"></i></button></div>' : '<div class="farSide" id="unlock"><button class="secondary" title="Unlock">More Accessories&nbsp; <i class="fa fa-unlock-alt"></i></button></div>') + '</div>' + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="visualization"><canvas id="scratch" width="400" height="580" style="display: none"></canvas><canvas id="superhero" width="400" height="580" style="display: block"></canvas><canvas id="hatching" width="400" height="580" style="display: none"></canvas><canvas id="axies" width="400" height="580" style="display: none"></canvas><canvas id="display" width="400" height="580" style="vertical-align: bottom;z-index:20"></canvas></div></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">' + ((opt_ijData.level == 1) ? '<h3> Customize Grace! </h3><video id="instructions" autoplay controls><source src="movie/Instructions.mp4" type="video/mp4">Your browser does not support the video tag.</video>' : (opt_ijData.level == 2) ? 'Add bottoms to Grace using the menu.' : (opt_ijData.level == 3) ? 'Add shoes to Grace using the menu.' : (opt_ijData.level == 4) ? 'Add accessories to Grace using the menu.' : (opt_ijData.level == 5) ? 'Choose a bag for Grace to carry.' : (opt_ijData.level == 6) ? 'Choose princess accessories for Grace if you want.' : (opt_ijData.level == 7) ? 'Choose superhero accessories for Grace if you want. Otherwise, save your avatar.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Grace"><block type="hair"><value name="HCOLOUR"><block type="haircolour_picker"><field name="HCOLOUR">#a3550b</field></block></value></block><block type="curly_hair"><value name="HCOLOUR"><block type="haircolour_picker"><field name="HCOLOUR">#a3550b</field></block></value></block><block type="straight_hair"><value name="HCOLOUR"><block type="haircolour_picker"><field name="HCOLOUR">#a3550b</field></block></value></block><block type="short_hair"><value name="HCOLOUR"><block type="haircolour_picker"><field name="HCOLOUR">#a3550b</field></block></value></block><block type="pixie"><value name="HCOLOUR"><block type="haircolour_picker"><field name="HCOLOUR">#a3550b</field></block></value></block><block type="eyes"><value name="ECOLOUR"><block type="eyecolour_picker"><field name="ECOLOUR">#29abe2</field></block></value></block><block type="skin"><value name="SCOLOUR"><block type="skin_colour_picker"><field name="SCOLOUR">#ffdfbe</field></block></value></block></category>' + ((opt_ijData.level >= 1) ? '<category name="Shirts"><block type="tshirt"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="longsleeve"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="blouse"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="jersey"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="short_blouse"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="polo"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 2) ? '<category name="Bottoms"><block type="pants"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "skirt"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "skirt2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "long_skirt"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "shorts2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 3) ? '<category name="Shoes"><block type="boots"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="cowboyboots"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="hightops"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="sneakers"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="flats"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="boots2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 4) ? '<category name="Accessories"><block type = "bow"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "earrings"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "hat"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "baseball"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "necklace"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "retro_glasses"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="vest"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type="coat"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 5) ? '<category name="Bags"><block type = "briefcase"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "purse"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "purse2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "backpack"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "laptop-case"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "tote"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 6) ? '<category name="Princess"><block type = "dress"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "dress2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "crown"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "large_crown"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "tiara"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "wand"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "wand2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "glass_slipper"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + ((opt_ijData.level >= 7) ? '<category name="Superhero"><block type = "mask"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "mask2"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "cape"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "gloves"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "shield"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "belt"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "logo"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block><block type = "word"><value name="COLOUR"><block type="colour_picker"><field name="COLOUR">#ff9559</field></block></value></block></category>' : '') + '</xml>';
};


Movie.soy.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<div id="blockly"></div>';
};
