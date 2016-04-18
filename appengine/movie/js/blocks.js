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

Blockly.Blocks['polo'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Polo Shirt")
        .appendField(new Blockly.FieldImage("./movie/polo.svg", 50, 50, "Polo Shirt"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['polo'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'polo();\n ';
};

Blockly.JavaScript['skin'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'SCOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_skin('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['skin'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(236);
  
  this.appendDummyInput()
  .appendField("Skin");
  //.appendField(new Blockly.FieldImage("./movie/skin.svg", 50, 50, "Skin"));
  
  this.appendValueInput('SCOLOUR')
  .setCheck('Colour')
  //.appendField('Color');
		
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  
}
};

Blockly.JavaScript['hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_hair('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['hair'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(236);
	
    this.appendDummyInput()
        .appendField("Hair")
        .appendField(new Blockly.FieldImage("./movie/hair.svg", 50, 50, "Hair"));
	
	this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  //      .appendField('Color');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['straight_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_straight_hair('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['straight_hair'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(236);
	
    this.appendDummyInput()
        .appendField("Straight Hair")
        .appendField(new Blockly.FieldImage("./movie/straight_hair.svg", 50, 50, "Straight Hair"));
	
	this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  //      .appendField('Color');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['short_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_short_hair('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['short_hair'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(236);
	
    this.appendDummyInput()
        .appendField("Short Hair")
        .appendField(new Blockly.FieldImage("./movie/short_hair.svg", 50, 50, "Short Hair"));
	
	this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  //      .appendField('Color');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['pixie'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_pixie('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['pixie'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(236);
	
    this.appendDummyInput()
        .appendField("Short Hair")
        .appendField(new Blockly.FieldImage("./movie/pixie.svg", 50, 50, "Short Hair"));
	
	this.appendValueInput('HCOLOUR')
        .setCheck('Colour')
  //      .appendField('Color');
		
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['curly_hair'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'HCOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#a3550b\'';
  return 'redraw_curly_hair('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['curly_hair'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(236);
  
  this.appendDummyInput()
  .appendField("Hair")
  .appendField(new Blockly.FieldImage("./movie/wavy_hair.svg", 50, 50, "Hair"));
  
  this.appendValueInput('HCOLOUR')
  .setCheck('Colour')
  //.appendField('Color');
		
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
  //console.log(colour);
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
  // Colour picker.
  //alert("called");
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
    //console.log(colour);
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
  // Colour picker.
  //alert("called");
  var code = '\'' + block.getFieldValue('HCOLOUR') + '\'';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['eyes'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'ECOLOUR',
                                              Blockly.JavaScript.ORDER_NONE) || '\'#29abe2\'';
  return 'redraw_eyes('+colour+');\n ';
  //return 'hair();\n ';
};

Blockly.Blocks['eyes'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(236);
  
  this.appendDummyInput()
  .appendField("Eyes");
  
  this.appendValueInput('ECOLOUR')
  .setCheck('Colour')
  //.appendField('Color');
		
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
  //console.log(colour);
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
  // Colour picker.
  //alert("called");
  var code = '\'' + block.getFieldValue('ECOLOUR') + '\'';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['jersey'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'jersey();\n ';
};

Blockly.Blocks['jersey'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Jersey")
        .appendField(new Blockly.FieldImage("./movie/jersey.svg", 50, 50, "Jersey"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};


Blockly.JavaScript['briefcase'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'briefcase();\n ';
};

Blockly.Blocks['briefcase'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Briefcase")
        .appendField(new Blockly.FieldImage("./movie/briefcase.svg", 50, 50, "Briefcase"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['laptop-case'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'laptopcase();\n ';
};

Blockly.Blocks['laptop-case'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Laptop Case")
        .appendField(new Blockly.FieldImage("./movie/laptop-case.svg", 50, 50, "Laptop Case"));
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['tote'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'tote();\n ';
};

Blockly.Blocks['tote'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Tote")
        .appendField(new Blockly.FieldImage("./movie/tote.svg", 50, 50, "Tote"));
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['purse'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'purse();\n ';
};

Blockly.Blocks['purse'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Purse")
        .appendField(new Blockly.FieldImage("./movie/purse.svg", 50, 50, "Purse"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['backpack'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'backpack();\n ';
};

Blockly.Blocks['backpack'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(160);
  
  this.appendDummyInput()
  .appendField("Backpack")
  .appendField(new Blockly.FieldImage("./movie/backpack.svg", 50, 50, "Purse"));
  
  /*this.appendValueInput('COLOUR')
   .setCheck('Colour')
   .appendField('Color');*/
  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  
}
};

Blockly.JavaScript['purse2'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'purse2();\n ';
};

Blockly.Blocks['purse2'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(160);
  
  this.appendDummyInput()
  .appendField("Purse")
  .appendField(new Blockly.FieldImage("./movie/fancy_purse.svg", 50, 50, "Purse"));
  
  /*this.appendValueInput('COLOUR')
   .setCheck('Colour')
   .appendField('Color');*/
  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  
}
};

Blockly.JavaScript['blouse'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'blouse();\n ';
};

Blockly.Blocks['blouse'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Blouse")
        .appendField(new Blockly.FieldImage("./movie/blouse.svg", 50, 50, "Blouse"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['short_blouse'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'short_blouse();\n ';
};

Blockly.Blocks['short_blouse'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Short Sleeve Blouse")
        .appendField(new Blockly.FieldImage("./movie/short_blouse.svg", 50, 50, "Blouse"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['vest'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'vest();\n ';
};

Blockly.Blocks['vest'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setInputsInline(true);
	this.setColour(160);
	
    this.appendDummyInput()
        .appendField("Vest")
        .appendField(new Blockly.FieldImage("./movie/vest.svg", 50, 50, "Vest"));
	
	/*this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('Color');*/
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	
  }
};

Blockly.JavaScript['coat'] = function(block) {
  /*var colour = Blockly.JavaScript.valueToCode(block, 'COLOUR',
   Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';*/
  return 'coat();\n ';
};

Blockly.Blocks['coat'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setInputsInline(true);
  this.setColour(160);
  
  this.appendDummyInput()
  .appendField("Coat")
  .appendField(new Blockly.FieldImage("./movie/jacket.svg", 50, 50, "Coat"));
  
  /*this.appendValueInput('COLOUR')
   .setCheck('Colour')
   .appendField('Color');*/
  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  
}
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

Blockly.JavaScript['hat'] = function(block) {
  return 'hat();\n';
};

Blockly.Blocks['hat'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Hat")
        .appendField(new Blockly.FieldImage("./movie/hat.svg", 50, 50, "Hat"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['retro_glasses'] = function(block) {
  return 'retro_glasses();\n';
};

Blockly.Blocks['retro_glasses'] = {
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Retro Glasses")
        .appendField(new Blockly.FieldImage("./movie/retro_glasses.svg", 50, 50, "Retro Glasses"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['necklace'] = function(block) {
  return 'necklace();\n';
};

Blockly.Blocks['necklace'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Necklace")
  .appendField(new Blockly.FieldImage("./movie/necklace.svg", 50, 50, "Necklace"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['baseball'] = function(block) {
  return 'baseball();\n';
};

Blockly.Blocks['baseball'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Baseball Hat")
  .appendField(new Blockly.FieldImage("./movie/baseball.svg", 50, 50, "Baseball Hat"));
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

Blockly.Blocks['dress'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Dress")
  .appendField(new Blockly.FieldImage("./movie/dress.svg", 50, 50, "Dress"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['dress'] = function(block) {
  return 'dress();\n';
};

Blockly.Blocks['dress2'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Dress")
  .appendField(new Blockly.FieldImage("./movie/dress2.svg", 50, 50, "Dress"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['dress2'] = function(block) {
  return 'dress2();\n';
};

Blockly.Blocks['crown'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Crown")
  .appendField(new Blockly.FieldImage("./movie/crown.svg", 50, 50, "Crown"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['crown'] = function(block) {
  return 'crown();\n';
};

Blockly.Blocks['large_crown'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Crown")
  .appendField(new Blockly.FieldImage("./movie/large_crown.svg", 50, 50, "Crown"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['large_crown'] = function(block) {
  return 'large_crown();\n';
};

Blockly.Blocks['tiara'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Tiara")
  .appendField(new Blockly.FieldImage("./movie/tiara.svg", 50, 50, "Tiara"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['tiara'] = function(block) {
  return 'tiara();\n';
};

Blockly.Blocks['glass_slipper'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Glass Slipper")
  .appendField(new Blockly.FieldImage("./movie/glass-slippers.svg", 50, 50, "Glass Slipper"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['glass_slipper'] = function(block) {
  return 'glass_slipper();\n';
};

Blockly.Blocks['wand'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Wand")
  .appendField(new Blockly.FieldImage("./movie/wand.svg", 50, 50, "Wand"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['wand'] = function(block) {
  return 'wand();\n';
};

Blockly.Blocks['wand2'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Wand")
  .appendField(new Blockly.FieldImage("./movie/wand2.svg", 50, 50, "Wand"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['wand2'] = function(block) {
  return 'wand2();\n';
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

Blockly.JavaScript['shorts2'] = function(block) {
  return 'shorts2();\n';
};

Blockly.Blocks['shorts2'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Shorts")
        .appendField(new Blockly.FieldImage("./movie/shorts2.svg", 50, 50, "Shorts"));
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

Blockly.JavaScript['skirt2'] = function(block) {
  return 'skirt2();\n';
};

Blockly.Blocks['skirt2'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Skirt")
        .appendField(new Blockly.FieldImage("./movie/skirt2.svg", 50, 50, "skirt"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};

Blockly.JavaScript['long_skirt'] = function(block) {
  return 'long_skirt();\n';
};

Blockly.Blocks['long_skirt'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Long Skirt")
        .appendField(new Blockly.FieldImage("./movie/long_skirt.svg", 50, 50, "long skirt"));
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


Blockly.JavaScript['flats'] = function(block) {
  return 'flats();\n';
};

Blockly.Blocks['flats'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Flats")
        .appendField(new Blockly.FieldImage("./movie/flats.svg", 50, 50, "Flats"));
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

Blockly.Blocks['boots2'] = {
  init: function() {
	this.setColour(160);
    this.appendDummyInput()
        .appendField("Boots")
        .appendField(new Blockly.FieldImage("./movie/boots2.svg", 50, 50, "Boots"));
    this.setTooltip('');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
  }
};


Blockly.JavaScript['boots2'] = function(block) {
  return 'boots2();\n';
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

Blockly.Blocks['mask'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Mask")
  .appendField(new Blockly.FieldImage("./movie/mask.svg", 50, 50, "Mask"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['mask'] = function(block) {
  return 'mask();\n';
};

Blockly.Blocks['mask2'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Mask")
  .appendField(new Blockly.FieldImage("./movie/mask2.svg", 50, 50, "Mask"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};


Blockly.JavaScript['mask2'] = function(block) {
  return 'mask2();\n';
};

Blockly.Blocks['belt'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Belt")
  .appendField(new Blockly.FieldImage("./movie/belt.svg", 50, 50, "Belt"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['belt'] = function(block) {
  return 'belt();\n';
};

Blockly.Blocks['logo'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Logo")
  .appendField(new Blockly.FieldImage("./movie/logo.svg", 50, 50, "Logo"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['logo'] = function(block) {
  return 'logo();\n';
};

Blockly.Blocks['word'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Pow!")
  .appendField(new Blockly.FieldImage("./movie/word.svg", 50, 50, "Pow!"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['word'] = function(block) {
  return 'word();\n';
};

Blockly.Blocks['cape'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Cape")
  .appendField(new Blockly.FieldImage("./movie/cape.svg", 50, 50, "Cape"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['cape'] = function(block) {
  return 'cape();\n';
};

Blockly.Blocks['gloves'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Gloves")
  .appendField(new Blockly.FieldImage("./movie/gloves.svg", 50, 50, "Gloves"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['shield'] = function(block) {
  return 'shield();\n';
};

Blockly.Blocks['shield'] = {
init: function() {
  //this.setHelpUrl('http://www.example.com/');
  this.setColour(160);
  this.appendDummyInput()
  .appendField("Shield")
  .appendField(new Blockly.FieldImage("./movie/shield.svg", 50, 50, "Shield"));
  this.setTooltip('');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
}
};

Blockly.JavaScript['gloves'] = function(block) {
  return 'gloves();\n';
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
