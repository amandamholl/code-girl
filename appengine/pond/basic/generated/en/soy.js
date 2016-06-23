// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Basic.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Basic.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Basic.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Basic.soy.messages(null, null, opt_ijData) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select><button id="signoutButton" onClick="location.href=\'/\'">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp;<i class="fa fa-question"></i></button></div></div><div id="workspace">' + Pond.Basic.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + Pond.soy.visualization(null, null, opt_ijData) + '</div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">' + ((opt_ijData.level == 1) ? '<h3> Grace needs your help getting dressed for a mission! </h3>Put Grace\'s superhero outfit on in the correct order. Press "Check outfit!" to finish.<br><br><img src="pond/docs/order.png" width=146 style="margin-top:-10px;margin-bottom: -50px">' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="error" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '<table><tr><td><img src="common/ErrorAlert.png" width="100" height="100"></td><td>&nbsp;</td><td valign="top"><h3> Error </h3>Block placed in the wrong order!</td></tr></table>' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};


Pond.Basic.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Clothes"><block type="tshirt"></block><block type="skirt"></block><block type="boots"></block></category><category name="Accessories"><block type="mask"></block><block type="gloves"></block><block type="cape"></block><block type="logo"></block><block type="belt"></block><block type="shield"></block></category>' + ((opt_ijData.level >= 2) ? '<category name="Logic">' + ((opt_ijData.level >= 5) ? '<block type="pond_controls_if"></block><block type="logic_compare"></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="logic_operation"></block>' : '') + '<block type="logic_boolean"></block></category><category name="Loops"><block type="pond_loops_while"></block></category>' : '') + ((opt_ijData.level >= 7) ? '<category name="Variables" custom="VARIABLE"></category>' + ((opt_ijData.level >= 8) ? '<category name="Functions" custom="PROCEDURE"></category>' : '') : '') + '</xml>';
};
