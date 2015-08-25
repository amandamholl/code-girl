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
goog.require('Blockly.Blocks.text');
goog.require('Blockly.JavaScript.text');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');

// Extensions to Blockly's language and JavaScript generator.

Blockly.Blocks['tshirt'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Shirt")
        .appendField(new Blockly.FieldImage("./movie/shirt.svg", 50, 50, "T-Shirt"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};


Blockly.JavaScript['tshirt'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'tshirt();\n ';
};

Blockly.Blocks['longsleeve'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Long sleeve")
        .appendField(new Blockly.FieldImage("./movie/longsleeve.svg", 50, 50, "Long sleeve shirt"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['longsleeve'] = function(block) {
	
  return 'longsleeve();\n';
};

Blockly.Blocks['pants'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Pants")
        .appendField(new Blockly.FieldImage("./movie/pants.svg", 50, 50, "Pants"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['pants'] = function(block) {
  return 'pants();\n';
};

Blockly.Blocks['bow'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Bow")
        .appendField(new Blockly.FieldImage("./movie/bow.svg", 50, 50, "Bow"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['bow'] = function(block) {
  return 'bow();\n';
};

Blockly.Blocks['earrings'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Earrings")
        .appendField(new Blockly.FieldImage("./movie/earrings.svg", 50, 50, "Earrings"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['earrings'] = function(block) {
  return 'earrings();\n';
};

Blockly.JavaScript['shorts'] = function(block) {
  return 'shorts();\n';
};

Blockly.Blocks['shorts'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Shorts")
        .appendField(new Blockly.FieldImage("./movie/shorts.svg", 50, 50, "Shorts"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['skirt'] = function(block) {
  return 'skirt();\n';
};

Blockly.Blocks['skirt'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Skirt")
        .appendField(new Blockly.FieldImage("./movie/skirt.svg", 50, 50, "skirt"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.Blocks['hightops'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("High Tops")
        .appendField(new Blockly.FieldImage("./movie/hightop.svg", 50, 50, "High Tops"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};


Blockly.JavaScript['hightops'] = function(block) {
  return 'hightops();\n';
};

Blockly.Blocks['sneakers'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Sneakers")
        .appendField(new Blockly.FieldImage("./movie/shoe.svg", 50, 50, "Sneakers"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['sneakers'] = function(block) {
  return 'sneakers();\n';
};

Blockly.Blocks['boots'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Boots")
        .appendField(new Blockly.FieldImage("./movie/boots.svg", 50, 50, "Boots"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};


Blockly.JavaScript['boots'] = function(block) {
  return 'boots();\n';
};

Blockly.Blocks['cowboyboots'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Cowboy Boots")
        .appendField(new Blockly.FieldImage("./movie/cowboyboot.svg", 50, 50, "Cowboy Boots"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};


Blockly.JavaScript['cowboyboots'] = function(block) {
  return 'cowboyboots();\n';
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
