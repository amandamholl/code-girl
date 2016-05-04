// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored) {
  return BlocklyGames.soy.messages(null) + '<div style="display: none"><span id="Puzzle_animal1">Elephant</span><span id="Puzzle_animal1Pic">elephant.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Elephant</span><span id="Puzzle_animal2">Ladybug</span><span id="Puzzle_animal2Pic">ladybug.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Coccinellidae</span><span id="Puzzle_animal3">Goldfish</span><span id="Puzzle_animal3Pic">goldfish.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Fish</span><span id="Puzzle_animal4">Penguin</span><span id="Puzzle_animal4Pic">penguin.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Penguin</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};


Puzzle.soy.start = function(opt_data, opt_ignored) {
  return Puzzle.soy.messages(null) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp;<i class="fa fa-question"></i></button><button id="checkButton" class="primary">Check Answers &nbsp;<i class="fa fa-check-square-o"></i></button></div></div><div id="blockly"></div>' + BlocklyGames.soy.dialog(null) + BlocklyGames.soy.doneDialog(null) + BlocklyGames.soy.abortDialog(null) + BlocklyGames.soy.storageDialog(null) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (blue), attach its picture and choose its number of legs.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null) + '</div>';
};


Puzzle.soy.readonly = function(opt_data, opt_ignored) {
  return Puzzle.soy.messages(null) + '<div id="blockly"></div>';
};
