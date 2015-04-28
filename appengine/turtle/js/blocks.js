/**
 * Blockly Games: Turtle Graphics Blocks
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

/**
 * @fileoverview Blocks for Blockly's Turtle Graphics application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Turtle.Blocks');

goog.require('Blockly');
goog.require('Blockly.JavaScript');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.JavaScript.colour');
goog.require('Blockly.Blocks.lists');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.Blocks.logic');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.Blocks.loops');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.Blocks.math');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.Blocks.procedures');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.Blocks.text');
goog.require('Blockly.JavaScript.text');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');

// Extensions to Blockly's language and JavaScript generator.

Blockly.Blocks['turtle_move_internal'] = {
  /**
   * Block for moving forward or backwards.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [['move forward', 'moveForward'],
         ['move backward', 'moveBackward']];
    /*var VALUES =
        [['20', '20'],
         ['50', '50'],
         ['100', '100'],
         ['150', '150']];*/
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
        //.appendField('', 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_moveTooltip'));
  }
};

Blockly.JavaScript['turtle_move_internal'] = function(block) {
  // Generate JavaScript for moving forward or backwards.
  var value = '100';
  return block.getFieldValue('DIR') +
      '(' + value + ', \'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_turn'] = {
  /**
   * Block for turning left or right.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [['turn right', 'turnRight'],
         ['turn left', 'turnLeft']];
    // Append arrows to direction messages.
    DIRECTIONS[0][0] += ' \u21BB';
    DIRECTIONS[1][0] += ' \u21BA';
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_turnTooltip'));
  }
};

Blockly.JavaScript['turtle_turn'] = function(block) {
  // Generate JavaScript for turning left or right.
  var value = 90;
  return block.getFieldValue('DIR') +
      '(' + value + ', \'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_turn_internal'] = {
  /**
   * Block for turning left or right.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [['turn right', 'turnRight'],
         ['turn left', 'turnLeft']];
    var VALUES =
        [['slightly', '72'],
         ['some', '90'],
         ['a lot', '144']];
    // Append arrows to direction messages.
    DIRECTIONS[0][0] += ' \u21BB';
    DIRECTIONS[1][0] += ' \u21BA';
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIR')
        .appendField(new Blockly.FieldDropdown(VALUES), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_turnTooltip'));
  }
};

Blockly.JavaScript['turtle_turn_internal'] = function(block) {
  // Generate JavaScript for turning left or right.
  var value = block.getFieldValue('VALUE');
  if(value == 'some'){
	  value = 90;
  }
  return block.getFieldValue('DIR') +
      '(' + value + ', \'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_width'] = {
  /**
   * Block for setting the width.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(160);
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .appendField(BlocklyGames.getMsg('Turtle_setWidth'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_widthTooltip'));
  }
};

Blockly.JavaScript['turtle_width'] = function(block) {
  // Generate JavaScript for setting the width.
  var width = Blockly.JavaScript.valueToCode(block, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '1';
  return 'penWidth(' + width + ', \'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_pen'] = {
  /**
   * Block for pen up/down.
   * @this Blockly.Block
   */
  init: function() {
    var STATE =
        [[BlocklyGames.getMsg('Turtle_penUp'), 'penUp'],
         [BlocklyGames.getMsg('Turtle_penDown'), 'penDown']];
    this.setColour(160);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STATE), 'PEN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_penTooltip'));
  }
};

Blockly.JavaScript['turtle_pen'] = function(block) {
  // Generate JavaScript for pen up/down.
  return block.getFieldValue('PEN') +
      '(\'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_colour'] = {
  /**
   * Block for setting the colour.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(20);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField(BlocklyGames.getMsg('Turtle_setColour'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_colourTooltip'));
  }
};

Blockly.JavaScript['turtle_colour'] = function(block) {
  // Generate JavaScript for setting the colour.
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'penColour(' + colour + ', \'block_id_' +
      block.id + '\');\n';
};

Blockly.Blocks['turtle_colour_internal'] = {
  /**
   * Block for setting the colour.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Turtle_setColour'))
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_colourTooltip'));
  }
};

Blockly.JavaScript['turtle_colour_internal'] = function(block) {
  // Generate JavaScript for setting the colour.
  var colour = '\'' + block.getFieldValue('COLOUR') + '\'';
  return 'penColour(' + colour + ', \'block_id_' +
      block.id + '\');\n';
};

Blockly.Blocks['turtle_visibility'] = {
  /**
   * Block for changing turtle visiblity.
   * @this Blockly.Block
   */
  init: function() {
    var STATE =
        [[BlocklyGames.getMsg('Turtle_hideTurtle'), 'hideTurtle'],
         [BlocklyGames.getMsg('Turtle_showTurtle'), 'showTurtle']];
    this.setColour(160);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STATE), 'VISIBILITY');
    this.setTooltip(BlocklyGames.getMsg('Turtle_turtleVisibilityTooltip'));
  }
};

Blockly.JavaScript['turtle_visibility'] = function(block) {
  // Generate JavaScript for changing turtle visibility.
  return block.getFieldValue('VISIBILITY') +
      '(\'block_id_' + block.id + '\');\n';
};

Blockly.Blocks['turtle_print'] = {
  /**
   * Block for printing text.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(BlocklyGames.getMsg('Turtle_printHelpUrl'));
    this.setColour(160);
    this.appendValueInput('TEXT')
        .appendField(BlocklyGames.getMsg('Turtle_print'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_printTooltip'));
  }
};

Blockly.JavaScript['turtle_print'] = function(block) {
  // Generate JavaScript for printing text.
  var argument0 = String(Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'');
  return 'print(' + argument0 + ', \'block_id_' +
      block.id + '\');\n';
};

Blockly.Blocks['turtle_font'] = {
  /**
   * Block for setting the font.
   * @this Blockly.Block
   */
  init: function() {
    var FONTLIST =
        // Common font names (intentionally not localized)
        [['Arial', 'Arial'], ['Courier New', 'Courier New'], ['Georgia', 'Georgia'],
         ['Impact', 'Impact'], ['Times New Roman', 'Times New Roman'],
         ['Trebuchet MS', 'Trebuchet MS'], ['Verdana', 'Verdana']];
    var STYLE =
        [[BlocklyGames.getMsg('Turtle_fontNormal'), 'normal'],
         [BlocklyGames.getMsg('Turtle_fontItalic'), 'italic'],
         [BlocklyGames.getMsg('Turtle_fontBold'), 'bold']];
    this.setHelpUrl(BlocklyGames.getMsg('Turtle_fontHelpUrl'));
    this.setColour(160);
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Turtle_font'))
        .appendField(new Blockly.FieldDropdown(FONTLIST), 'FONT');
    this.appendDummyInput()
        .appendField(BlocklyGames.getMsg('Turtle_fontSize'))
        .appendField(new Blockly.FieldTextInput('18',
                     Blockly.FieldTextInput.nonnegativeIntegerValidator),
                     'FONTSIZE');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STYLE), 'FONTSTYLE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Turtle_fontTooltip'));
  }
};

Blockly.JavaScript['turtle_font'] = function(block) {
  // Generate JavaScript for setting the font.
  return 'font(\'' + block.getFieldValue('FONT') + '\',' +
      Number(block.getFieldValue('FONTSIZE')) + ',\'' +
      block.getFieldValue('FONTSTYLE') + '\', \'block_id_' +
      block.id + '\');\n';
};

Blockly.Blocks['turtle_repeat_internal'] = {
  /**
   * Block for repeat n times (internal number).
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_REPEAT_HELPURL);
    this.setColour(120);
    var TIMES =
        [['3', '3'],
         ['4', '4'],
         ['5', '5'],
         ['360', '360']];
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT)
        .appendField(new Blockly.FieldDropdown(TIMES), 'TIMES')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_TITLE_TIMES);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP);
  }
};

Blockly.JavaScript['turtle_repeat_internal'] =
    Blockly.JavaScript['controls_repeat'];
