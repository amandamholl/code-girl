/**
 * Blockly Games: Movie Blocks
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

goog.provide('Movie.Blocks');

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
goog.require('Blockly.Blocks.texts');
goog.require('Blockly.JavaScript.texts');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');

// Extensions to Blockly's language and JavaScript generator.

Blockly.Blocks['tshirt'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Shirt")
        .appendField(new Blockly.FieldImage("./movie/shirt.svg", 50, 50, "T-Shirt"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['tshirt'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
  Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'tshirt('+colour+');\n ';
};

Blockly.Blocks['polo'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Polo Shirt")
        .appendField(new Blockly.FieldImage("./movie/polo.svg", 50, 50, "Polo Shirt"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['polo'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'polo('+colour+');\n ';
};

Blockly.JavaScript['skin'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'SCOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_skin('+colour+');\n ';
};

Blockly.Blocks['skin'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(236);
    this.appendDummyInput()
        .appendField("Skin");
    this.appendValueInput('SCOLOUR')
        .setCheck('Colour')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_hair('+colour+');\n ';
};

Blockly.Blocks['hair'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(236);
    this.appendDummyInput()
        .appendField("Hair")
        .appendField(new Blockly.FieldImage("./movie/hair.svg", 50, 50, "Hair"));
  	this.appendValueInput('HCOLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['straight_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_straight_hair('+colour+');\n ';
};

Blockly.Blocks['straight_hair'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(236);
    this.appendDummyInput()
        .appendField("Straight Hair")
        .appendField(new Blockly.FieldImage("./movie/straight_hair.svg", 50, 50, "Straight Hair"));
	  this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['short_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_short_hair('+colour+');\n ';
};

Blockly.Blocks['short_hair'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(236);
    this.appendDummyInput()
        .appendField("Short Hair")
        .appendField(new Blockly.FieldImage("./movie/short_hair.svg", 50, 50, "Short Hair"));
  	this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['pixie'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_pixie('+colour+');\n ';
};

Blockly.Blocks['pixie'] = {
  init: function() {
	  this.setInputsInline(true);
	  this.setColour(236);
    this.appendDummyInput()
        .appendField("Short Hair")
        .appendField(new Blockly.FieldImage("./movie/pixie.svg", 50, 50, "Short Hair"));
  	this.appendValueInput('HCOLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['curly_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_curly_hair('+colour+');\n ';
};

Blockly.Blocks['curly_hair'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(236);
    this.appendDummyInput()
        .appendField("Hair")
        .appendField(new Blockly.FieldImage("./movie/wavy_hair.svg", 50, 50, "Hair"));
    this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['skin_colour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);
    this.setColour(330);
    var colour = new Blockly.FieldColour('#ffdfbe');
    colour.setColours(['#FAE7D0', '#DFC183', '#AA724B',
                       '#FFCC99', '#CEAB69', '#935D37',
                       '#FEB186', '#B98865', '#7B4B2A',
                       '#C8ACA3', '#E8CDA8', '#7B4B2A',
                       '#C0A183', '#CAA661', '#573719',
                       '#C18E74', '#B58A3F', '#483728']).setColumns(3);
    this.appendDummyInput()
        .appendField(colour, 'SCOLOUR');
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP);
  }
};

Blockly.JavaScript['skin_colour_picker'] = function(block) {
  var code = '\'' + block.getFieldValue('SCOLOUR') + '\'';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['haircolour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);
    this.setColour(330);
    var colour = new Blockly.FieldColour('#a3550b');
    colour.setColours(['#A7856A', '#E6CEA8', '#FFF5E1',
                       '#B55239', '#91553D', '#B89778',
                       '#A56B46', '#3B3024', '#CABFB1']).setColumns(3);
    this.appendDummyInput()
        .appendField(colour, 'HCOLOUR');
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP);
  }
};

Blockly.JavaScript['haircolour_picker'] = function(block) {
  var code = '\'' + block.getFieldValue('HCOLOUR') + '\'';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['eyes'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'ECOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#29abe2\'';
  return 'redraw_eyes('+colour+');\n ';
};

Blockly.Blocks['eyes'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(236);
    this.appendDummyInput()
        .appendField("Eyes");
    this.appendValueInput('ECOLOUR')
        .setCheck('Colour')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['eyecolour_picker'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);
    this.setColour(330);
    var colour = new Blockly.FieldColour('#29abe2');
    colour.setColours(['#29abe2', '#9BCB69', '#776536',
                       '#A46F3D', '#CAF1A1', '#4B3316',
                       '#1C4E7E', '#D1E8FF', '#3A1B0F']).setColumns(3);
    this.appendDummyInput()
        .appendField(colour, 'ECOLOUR');
    this.setOutput(true, 'Colour');
    this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP);
  }
};

Blockly.JavaScript['eyecolour_picker'] = function(block) {
  var code = '\'' + block.getFieldValue('ECOLOUR') + '\'';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['jersey'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'jersey('+colour+');\n ';
};

Blockly.Blocks['jersey'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Jersey")
        .appendField(new Blockly.FieldImage("./movie/jersey.svg", 50, 50, "Jersey"));
  	this.appendValueInput('COLOUR')
          .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};


Blockly.JavaScript['briefcase'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'briefcase('+colour+');\n ';
};

Blockly.Blocks['briefcase'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Briefcase")
        .appendField(new Blockly.FieldImage("./movie/briefcase.svg", 50, 50, "Briefcase"));
  	this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['laptop-case'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'laptopcase('+colour+');\n ';
};

Blockly.Blocks['laptop-case'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Laptop Case")
        .appendField(new Blockly.FieldImage("./movie/laptop-case.svg", 50, 50, "Laptop Case"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['tote'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'tote('+colour+');\n ';
};

Blockly.Blocks['tote'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Tote")
        .appendField(new Blockly.FieldImage("./movie/tote.svg", 50, 50, "Tote"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['purse'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'purse('+colour+');\n ';
};

Blockly.Blocks['purse'] = {
  init: function() {
  	this.setInputsInline(true);
  	this.setColour(160);
    this.appendDummyInput()
        .appendField("Purse")
        .appendField(new Blockly.FieldImage("./movie/purse.svg", 50, 50, "Purse"));
  	this.appendValueInput('COLOUR')
          .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['backpack'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'backpack('+colour+');\n ';
};

Blockly.Blocks['backpack'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Backpack")
        .appendField(new Blockly.FieldImage("./movie/backpack.svg", 50, 50, "Purse"));
    this.appendValueInput('COLOUR')
      .setCheck('Colour');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['purse2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'purse2('+colour+');\n ';
};

Blockly.Blocks['purse2'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Purse")
        .appendField(new Blockly.FieldImage("./movie/fancy_purse.svg", 50, 50, "Purse"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['blouse'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'blouse('+colour+');\n ';
};

Blockly.Blocks['blouse'] = {
  init: function() {
	  this.setInputsInline(true);
	  this.setColour(160);
    this.appendDummyInput()
        .appendField("Blouse")
        .appendField(new Blockly.FieldImage("./movie/blouse.svg", 50, 50, "Blouse"));
	  this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['short_blouse'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'short_blouse('+colour+');\n ';
};

Blockly.Blocks['short_blouse'] = {
  init: function() {
	  this.setInputsInline(true);
	  this.setColour(160);
    this.appendDummyInput()
        .appendField("Blouse")
        .appendField(new Blockly.FieldImage("./movie/short_blouse.svg", 50, 50, "Blouse"));
  	this.appendValueInput('COLOUR')
        .setCheck('Colour')
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['vest'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'vest('+colour+');\n ';
};

Blockly.Blocks['vest'] = {
  init: function() {
	  this.setInputsInline(true);
	  this.setColour(160);
    this.appendDummyInput()
        .appendField("Vest")
        .appendField(new Blockly.FieldImage("./movie/vest.svg", 50, 50, "Vest"));
  	this.appendValueInput('COLOUR')
        .setCheck('Colour')
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['coat'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'coat('+colour+');\n ';
};

Blockly.Blocks['coat'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Coat")
        .appendField(new Blockly.FieldImage("./movie/jacket.svg", 50, 50, "Coat"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks['longsleeve'] = {
  init: function() {
    this.setInputsInline(true);
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Shirt")
        .appendField(new Blockly.FieldImage("./movie/longsleeve.svg", 50, 50, "Long sleeve shirt"));
    this.appendValueInput('COLOUR')
         .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['longsleeve'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'longsleeve('+colour+');\n';
};

Blockly.Blocks['pants'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Pants")
        .appendField(new Blockly.FieldImage("./movie/pants.svg", 50, 50, "Pants"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['pants'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'pants('+colour+');\n';
};

Blockly.Blocks['bow'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Bow")
        .appendField(new Blockly.FieldImage("./movie/bow.svg", 50, 50, "Bow"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['hat'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'hat('+colour+');\n';
};

Blockly.Blocks['hat'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Hat")
        .appendField(new Blockly.FieldImage("./movie/hat.svg", 50, 50, "Hat"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['retro_glasses'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'retro_glasses('+colour+');\n';
};

Blockly.Blocks['retro_glasses'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Retro Glasses")
        .appendField(new Blockly.FieldImage("./movie/retro_glasses.svg", 50, 50, "Retro Glasses"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['necklace'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'necklace('+colour+');\n';
};

Blockly.Blocks['necklace'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Necklace")
        .appendField(new Blockly.FieldImage("./movie/necklace.svg", 50, 50, "Necklace"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['baseball'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'baseball('+colour+');\n';
};

Blockly.Blocks['baseball'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Baseball Hat")
        .appendField(new Blockly.FieldImage("./movie/baseball.svg", 50, 50, "Baseball Hat"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['bow'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'bow('+colour+');\n';
};

Blockly.Blocks['earrings'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Earrings")
        .appendField(new Blockly.FieldImage("./movie/earrings.svg", 50, 50, "Earrings"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['earrings'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'earrings('+colour+');\n';
};

Blockly.Blocks['dress'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Dress")
        .appendField(new Blockly.FieldImage("./movie/dress.svg", 50, 50, "Dress"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['dress'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'dress('+colour+');\n';
};

Blockly.Blocks['dress2'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Dress")
        .appendField(new Blockly.FieldImage("./movie/dress2.svg", 50, 50, "Dress"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['dress2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'dress2('+colour+');\n';
};

Blockly.Blocks['crown'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Crown")
        .appendField(new Blockly.FieldImage("./movie/crown.svg", 50, 50, "Crown"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['crown'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'crown('+colour+');\n';
};

Blockly.Blocks['large_crown'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Crown")
        .appendField(new Blockly.FieldImage("./movie/large_crown.svg", 50, 50, "Crown"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['large_crown'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'large_crown('+colour+');\n';
};

Blockly.Blocks['tiara'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Tiara")
        .appendField(new Blockly.FieldImage("./movie/tiara.svg", 50, 50, "Tiara"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['tiara'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'tiara('+colour+');\n';
};

Blockly.Blocks['glass_slipper'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Glass Slipper")
        .appendField(new Blockly.FieldImage("./movie/glass-slippers.svg", 50, 50, "Glass Slipper"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['glass_slipper'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'glass_slipper('+colour+');\n';
};

Blockly.Blocks['wand'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Wand")
        .appendField(new Blockly.FieldImage("./movie/wand.svg", 50, 50, "Wand"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['wand'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'wand('+colour+');\n';
};

Blockly.Blocks['wand2'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Wand")
        .appendField(new Blockly.FieldImage("./movie/wand2.png", 50, 50, "Wand"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['wand2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'wand2('+colour+');\n';
};

Blockly.JavaScript['shorts'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'shorts('+colour+');\n';
};

Blockly.Blocks['shorts'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Shorts")
        .appendField(new Blockly.FieldImage("./movie/shorts.svg", 50, 50, "Shorts"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['shorts2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'shorts2('+colour+');\n';
};

Blockly.Blocks['shorts2'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Shorts")
        .appendField(new Blockly.FieldImage("./movie/shorts2.svg", 50, 50, "Shorts"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['skirt'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'skirt('+colour+');\n';
};

Blockly.Blocks['skirt'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Skirt")
        .appendField(new Blockly.FieldImage("./movie/skirt.svg", 50, 50, "skirt"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['skirt2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'skirt2('+colour+');\n';
};

Blockly.Blocks['skirt2'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Skirt")
        .appendField(new Blockly.FieldImage("./movie/skirt2.svg", 50, 50, "skirt"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['long_skirt'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'long_skirt('+colour+');\n';
};

Blockly.Blocks['long_skirt'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Long Skirt")
        .appendField(new Blockly.FieldImage("./movie/long_skirt.svg", 50, 50, "long skirt"));
    this.setTooltip('');
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.Blocks['hightops'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("High Tops")
        .appendField(new Blockly.FieldImage("./movie/hightop.svg", 50, 50, "High Tops"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['flats'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'flats('+colour+');\n';
};

Blockly.Blocks['flats'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Flats")
        .appendField(new Blockly.FieldImage("./movie/flats.svg", 50, 50, "Flats"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['hightops'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'hightops('+colour+');\n';
};

Blockly.Blocks['sneakers'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Sneakers")
        .appendField(new Blockly.FieldImage("./movie/shoe.svg", 50, 50, "Sneakers"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['sneakers'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'sneakers('+colour+');\n';
};

Blockly.Blocks['boots'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Boots")
        .appendField(new Blockly.FieldImage("./movie/boots.svg", 50, 50, "Boots"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};


Blockly.JavaScript['boots'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'boots('+colour+');\n';
};

Blockly.Blocks['boots2'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Boots")
        .appendField(new Blockly.FieldImage("./movie/boots2.svg", 50, 50, "Boots"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['boots2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'boots2('+colour+');\n';
};

Blockly.Blocks['cowboyboots'] = {
  init: function() {
  	this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Cowboy Boots")
        .appendField(new Blockly.FieldImage("./movie/cowboyboot.svg", 50, 50, "Cowboy Boots"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
  	this.setPreviousStatement(true);
  	this.setNextStatement(true);
  }
};

Blockly.JavaScript['cowboyboots'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'cowboyboots('+colour+');\n';
};

Blockly.Blocks['mask'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Mask")
        .appendField(new Blockly.FieldImage("./movie/mask.svg", 50, 50, "Mask"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['mask'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'mask('+colour+');\n';
};

Blockly.Blocks['mask2'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Mask")
        .appendField(new Blockly.FieldImage("./movie/mask2.svg", 50, 50, "Mask"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['mask2'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'mask2('+colour+');\n';
};

Blockly.Blocks['belt'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Belt")
        .appendField(new Blockly.FieldImage("./movie/belt.svg", 50, 50, "Belt"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['belt'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'belt('+colour+');\n';
};

Blockly.Blocks['logo'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Logo")
        .appendField(new Blockly.FieldImage("./movie/logo.svg", 50, 50, "Logo"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['logo'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'logo('+colour+');\n';
};

Blockly.Blocks['word'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Pow!")
        .appendField(new Blockly.FieldImage("./movie/word.svg", 50, 50, "Pow!"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['word'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'word('+colour+');\n';
};

Blockly.Blocks['cape'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Cape")
        .appendField(new Blockly.FieldImage("./movie/cape.svg", 50, 50, "Cape"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['cape'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'cape('+colour+');\n';
};

Blockly.Blocks['gloves'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Gloves")
        .appendField(new Blockly.FieldImage("./movie/gloves.svg", 50, 50, "Gloves"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['shield'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'shield('+colour+');\n';
};

Blockly.Blocks['shield'] = {
  init: function() {
    this.setColour(160);
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField("Shield")
        .appendField(new Blockly.FieldImage("./movie/shield.svg", 50, 50, "Shield"));
    this.appendValueInput('COLOUR')
        .setCheck('Colour');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript['gloves'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'gloves('+colour+');\n';
};

Blockly.Blocks['movie_circle'] = {
  /**
   * Block for drawing a circle.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(160);
    this.appendValueInput('X')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_circleDraw'))
        .appendField(BlocklyGames.getMsg('Movie_x'));
    this.appendValueInput('Y')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_y'));

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Movie_circleTooltip'));
  }
};

Blockly.JavaScript['movie_circle'] = function(block) {
  // Generate JavaScript for drawing a circle.
  var x = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var y = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var radius = '5';
  return 'circle(' + x + ', ' + y + ', ' + radius + ');\n';
};

Blockly.Blocks['movie_rect'] = {
  /**
   * Block for drawing a rectangle.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(160);
    this.appendValueInput('X')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_rectDraw'))
        .appendField(BlocklyGames.getMsg('Movie_x'));
    this.appendValueInput('Y')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_y'));
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_width'));
    this.appendValueInput('HEIGHT')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_height'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Movie_rectTooltip'));
  }
};

Blockly.JavaScript['movie_rect'] = function(block) {
  // Generate JavaScript for drawing a rectangle.
  var x = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var y = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var width = Blockly.JavaScript.valueToCode(block, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var height = Blockly.JavaScript.valueToCode(block, 'HEIGHT',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'rect(' + x + ', ' + y + ', ' + width + ', ' + height + ');\n';
};

Blockly.Blocks['movie_line'] = {
  /**
   * Block for drawing a line.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(160);
    this.appendValueInput('X1')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_lineDraw'))
        .appendField(BlocklyGames.getMsg('Movie_x1'));
    this.appendValueInput('Y1')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_y1'));
    this.appendValueInput('X2')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_x2'));
    this.appendValueInput('Y2')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_y2'));
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BlocklyGames.getMsg('Movie_width'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Movie_rectTooltip'));
  }
};

Blockly.JavaScript['movie_line'] = function(block) {
  // Generate JavaScript for drawing a line.
  var x1 = Blockly.JavaScript.valueToCode(block, 'X1',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var y1 = Blockly.JavaScript.valueToCode(block, 'Y1',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var x2 = Blockly.JavaScript.valueToCode(block, 'X2',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var y2 = Blockly.JavaScript.valueToCode(block, 'Y2',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var width = Blockly.JavaScript.valueToCode(block, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'line(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ', ' +
      width + ');\n';
};


Blockly.Blocks['movie_time'] = {
  /**
   * Block for getting the current time value.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField('time (0\u2192100)');
    this.setOutput(true, 'Number');
    this.setTooltip(BlocklyGames.getMsg('Movie_timeTooltip'));
  }
};

Blockly.JavaScript['movie_time'] = function(block) {
  // Generate JavaScript for getting the current time value.
  var code = 'time()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['movie_colour'] = {
  /**
   * Block for setting the colour.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(330);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyGames.getMsg('Movie_colourTooltip'));
  }
};

Blockly.JavaScript['movie_colour'] = function(block) {
  // Generate JavaScript for setting the colour.
  var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'penColour(' + colour + ');\n';
};
