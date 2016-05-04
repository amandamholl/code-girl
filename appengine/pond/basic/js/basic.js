/**
 * Blockly Games: Pond Basic
 *
 * Copyright 2013 Google Inc.
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
 * @fileoverview Creates an pond programmable with blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Pond.Basic');

goog.require('Pond');
goog.require('Pond.Basic.soy');
goog.require('Pond.Battle');
goog.require('Pond.Blocks');
goog.require('Pond.Tutorial');
goog.require('Pond.Visualization');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');


BlocklyGames.NAME = 'pond-basic';

/**
 * Initialize Blockly and the pond.  Called on page load.
 */
Pond.Basic.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Pond.Basic.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       level: BlocklyGames.LEVEL,
       maxLevel: BlocklyGames.MAX_LEVEL,
       html: BlocklyGames.IS_HTML});

  Pond.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
    blocklyDiv.style.top = Math.max(10, top - window.pageYOffset) + 'px';
    blocklyDiv.style.left = rtl ? '10px' : '0px';
    blocklyDiv.style.width = (window.innerWidth - 430) + 'px';
  };
  window.addEventListener('scroll', function() {
      onresize();
      Blockly.fireUiEvent(window, 'resize');
    });
  window.addEventListener('resize', onresize);
  onresize();

  var toolbox = document.getElementById('toolbox');
  BlocklyGames.workspace = Blockly.inject(document.getElementById('blockly'),
      {'media': 'media/',
       'rtl': rtl,
       'toolbox': toolbox,
       'trashcan': true});
  Blockly.JavaScript.addReservedWords('scan,cannon,drive,swim,stop,speed,' +
      'damage,health,loc_x,loc_y');

  /*var defaultXml;
  if (BlocklyGames.LEVEL == 1) {
    defaultXml =
      '<xml>' +
      '  <block type="outfit">' +
      '  </block>' +
      '</xml>';
  }
  BlocklyInterface.loadBlocks(defaultXml, false);*/

  /*for (var playerData, i = 0; playerData = Pond.Tutorial.PLAYERS[i]; i++) {
    if (playerData.code) {
      var div = document.getElementById(playerData.code);
      //var code = div.textContent;
    } else {
      var code = function() {return Blockly.JavaScript.workspaceToCode()};
    }
    var name = BlocklyGames.getMsg(playerData.name);
    Pond.Battle.addPlayer(name, code, playerData.start, playerData.damage);
  }*/
  
  //Pond.reset();
  
  Pond.ctxDisplay = document.getElementById('display').getContext('2d');
  //Pond.ctxDisplay.globalCompositeOperation = 'source-over';
  Pond.ctxScratch = document.getElementById('scratch').getContext('2d');
  Pond.renderSuperhero_();
  BlocklyGames.workspace.addChangeListener(Pond.display);
};

window.addEventListener('load', Pond.Basic.init);

Pond.display = function(event) {
  // Draw and copy the user layer.
  var code = Blockly.JavaScript.workspaceToCode(BlocklyGames.workspace);
  var interpreter = new Interpreter(code, Pond.initInterpreter);
  Pond.drawFrame_(interpreter);
  var maximum = Blockly.mainWorkspace.getAllBlocks().length;
  var ok = "wrong order";	// don't write
  console.log("-----------");
  console.log(Blockly.mainWorkspace.getBlockById(event.blockId))
  console.log(Blockly.mainWorkspace.getTopBlocks(true));
  
  var blocks = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
  
  /*var top = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
  var blocks = top[0].getChildren();
	console.log(blocks);*/
  
  var currentBlock = Blockly.mainWorkspace.getBlockById(event.blockId);
  var current = blocks.indexOf(currentBlock);
  var type = Blockly.mainWorkspace.getBlockById(event.blockId)['type'];	// "type" or current block (item of clothing/accessory)
  // if this is the only block on the canvas, then by default its okay
  if(maximum == 1){
	ok = "correct order";
  }
  else{
  	var checkAbove = Pond.checkAbove_(current, type);
	var checkBelow = Pond.checkBelow_(current, maximum, type);
	if(checkAbove && checkBelow)
		ok = "correct order";
	else{
		ok = "wrong order";
		Pond.showError(currentBlock);
	}
  }
  
  /*for(i = 0; i < maximum; i++){
	  /if(maximum == 1){
		ok = "correct order";
		break;
	  }
	  if(Blockly.mainWorkspace.getBlockById(event.blockId)['type'] == "tshirt"){
	  	if(blocks[i]['type'] == "cape" || blocks[i]['type'] == "skirt" || blocks[i]['type'] == "logo" || blocks[i]['type'] == "belt"){
			ok = "wrong order";
			break;
		}
	  }
	  else if(Blockly.mainWorkspace.getBlockById(event.blockId)['type'] == "cape"){
		if(blocks[i]['type'] == "cape")
			break;
	  	if(blocks[i]['type'] == "tshirt"){
			ok = "correct order";
		}
	  }
	  else if(Blockly.mainWorkspace.getBlockById(event.blockId)['type'] == "belt"){
		if(blocks[i]['type'] == "belt")
			break;
	  	if(blocks[i]['type'] == "tshirt" || blocks[i]['type'] == "skirt" ){
			ok = "correct order";
		}
	  }
	  else if(Blockly.mainWorkspace.getBlockById(event.blockId)['type'] == "skirt"){
		if(blocks[i]['type'] == "skirt")
			break;
	
	  }
	  else{
	  	ok = "correct order";
		break;
	  }
  }
  */
  console.log(ok);
  
  Pond.ctxDisplay.drawImage(Pond.ctxScratch.canvas, 0, 0);
}

Pond.checkAbove_ = function(maximum, type){
	//var top = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
	//var blocks = top[0].getChildren();
	var blocks = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
	for(var i = 0; i < maximum; i++){
		if(type == "tshirt"){
			// Shirt: wrong if its below cape || logo || skirt || belt
		  	if(blocks[i]['type'] == "cape" || blocks[i]['type'] == "skirt" || blocks[i]['type'] == "logo" || blocks[i]['type'] == "belt"){
			  	return false;	// wrong order
		  	}
	  	}
		else if(type == "skirt"){
			// Skirt: wrong if below belt
			if(blocks[i]['type'] == "belt")
				return false;	// wrong order
		}
		
	}
	return true;
}

Pond.checkBelow_ = function(current, maximum, type){
	//var top = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
	//var blocks = top[0].getChildren();
	var blocks = Blockly.mainWorkspace.getTopBlocks(true);	// get blocks in sorted order (top to bottom)
	for(var i = current; i < maximum; i++){
		if(type == "skirt"){
			// Skirt: wrong if above tshirt
		  	if(blocks[i]['type'] == "tshirt"){
			  	return false;	// wrong order
		  	}
	  	}
		else if(type == "logo"){
			// Logo: wrong if above tshirt
			if(blocks[i]['type'] == "tshirt"){
			  	return false;	// wrong order
		  	}
		}
		else if(type == "belt"){
			// Belt: wrong if above tshirt or above skirt
			if(blocks[i]['type'] == "tshirt" || blocks[i]['type'] == "skirt")
				return false	;	// wrong order
		}
		else if(type == "cape"){
			if(blocks[i]['type'] == "shirt"){
				return false;
			}
		}
	}
	return true;
}

Pond.drawFrame_ = function(interpreter) {
  // Clear the canvas.
  
  // Levels 1-9 should be slightly transparent so eclipsed blocks may be seen.
  // Level 10 should be opaque so that the movie is clean.
  /*Movie.ctxScratch.globalAlpha =
      (BlocklyGames.LEVEL == BlocklyGames.MAX_LEVEL) ? 1 : 0.9;*/


  var go = true;
  for (var tick = 0; go && tick < 10000; tick++) {
    try {
      go = interpreter.step();
    } catch (e) {
      // User error, terminate in shame.
      alert(e);
      go = false;
    }
  }
};

Pond.initInterpreter = function(interpreter, scope) {
  // API
  var wrapper;

  wrapper = function() {
    Pond.shirt();
  };
  interpreter.setProperty(scope, 'shirt',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    Pond.mask();
  };
  interpreter.setProperty(scope, 'mask',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Pond.skirt();
  };
  interpreter.setProperty(scope, 'skirt',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Pond.boots();
  };
  interpreter.setProperty(scope, 'boots',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    Pond.gloves();
  };
  interpreter.setProperty(scope, 'gloves',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    Pond.cape();
  };
  interpreter.setProperty(scope, 'cape',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Pond.logo();
  };
  interpreter.setProperty(scope, 'logo',
      interpreter.createNativeFunction(wrapper));

  wrapper = function() {
    Pond.belt();
  };
  interpreter.setProperty(scope, 'belt',
      interpreter.createNativeFunction(wrapper));
	  
  wrapper = function() {
    Pond.shield();
  };
  interpreter.setProperty(scope, 'shield',
      interpreter.createNativeFunction(wrapper));
};

Pond.skirt = function(){
	Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.18,.18);
  Pond.ctxScratch.translate(740,1050);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#dd3858";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(545.8,87.8);
  Pond.ctxScratch.bezierCurveTo(547.3,42,528.8,27.799999999999997,528.8,27.799999999999997);
  Pond.ctxScratch.bezierCurveTo(528.8,27.799999999999997,465.59999999999997,65.69999999999999,354.59999999999997,65.69999999999999);
  Pond.ctxScratch.bezierCurveTo(243.59999999999997,65.69999999999999,175.8,27.8,175.8,27.8);
  Pond.ctxScratch.bezierCurveTo(157.3,45.2,161.9,87.8,161.9,87.8);
  Pond.ctxScratch.bezierCurveTo(124.9,141.5,70.9,233.10000000000002,72.5,424.1);
  Pond.ctxScratch.bezierCurveTo(72.5,424.1,103.3,469.90000000000003,195.8,484.1);
  Pond.ctxScratch.bezierCurveTo(194.3,496.70000000000005,194.3,504.6,195.8,510.90000000000003);
  Pond.ctxScratch.bezierCurveTo(195.8,510.90000000000003,268.3,545.6,343.8,522);
  Pond.ctxScratch.bezierCurveTo(343.8,522,345.3,520.4,345.3,518.8);
  Pond.ctxScratch.bezierCurveTo(345.3,525.0999999999999,346.8,528.3,348.40000000000003,529.9);
  Pond.ctxScratch.bezierCurveTo(356.1,539.4,473.30000000000007,548.8,507.20000000000005,514.1);
  Pond.ctxScratch.bezierCurveTo(507.20000000000005,514.1,508.70000000000005,515.7,508.70000000000005,498.3);
  Pond.ctxScratch.bezierCurveTo(601.2,510.90000000000003,633.6,447.8,633.6,447.8);
  Pond.ctxScratch.bezierCurveTo(633.7,436.7,655.3,286.7,545.8,87.8);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
}

Pond.mask = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.126,.125);
  Pond.ctxScratch.translate(1155,180);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#f9ae5c";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(776.2,262.1);
  Pond.ctxScratch.lineTo(931.6,223.60000000000002);
  Pond.ctxScratch.lineTo(914.5,197.40000000000003);
  Pond.ctxScratch.lineTo(914.5,161.60000000000002);
  Pond.ctxScratch.lineTo(776,245.20000000000002);
  Pond.ctxScratch.bezierCurveTo(776.6,221.60000000000002,774.7,203,769.1,203.40000000000003);
  Pond.ctxScratch.bezierCurveTo(442.40000000000003,223.60000000000002,222,215.80000000000004,32,197.90000000000003);
  Pond.ctxScratch.bezierCurveTo(18.1,196.60000000000002,29.3,315.40000000000003,49.4,317.5);
  Pond.ctxScratch.bezierCurveTo(145.1,327.7,489.4,326,758.6,343.1);
  Pond.ctxScratch.bezierCurveTo(764.1,343.40000000000003,769.7,317.6,773,288);
  Pond.ctxScratch.lineTo(918.8,332.4);
  Pond.ctxScratch.lineTo(895.3,298.2);
  Pond.ctxScratch.lineTo(931.5999999999999,281.09999999999997);
  Pond.ctxScratch.lineTo(776.2,262.1);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.moveTo(304.4,307.6);
  Pond.ctxScratch.bezierCurveTo(269,307.6,240.29999999999998,290.90000000000003,240.29999999999998,270.20000000000005);
  Pond.ctxScratch.bezierCurveTo(240.29999999999998,249.60000000000005,269,232.80000000000004,304.4,232.80000000000004);
  Pond.ctxScratch.bezierCurveTo(339.79999999999995,232.80000000000004,368.5,249.50000000000003,368.5,270.20000000000005);
  Pond.ctxScratch.bezierCurveTo(368.5,290.8,339.8,307.6,304.4,307.6);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.moveTo(507.5,309.3);
  Pond.ctxScratch.bezierCurveTo(472.1,309.3,443.4,292.6,443.4,271.90000000000003);
  Pond.ctxScratch.bezierCurveTo(443.4,251.30000000000004,472.09999999999997,234.50000000000003,507.5,234.50000000000003);
  Pond.ctxScratch.bezierCurveTo(542.9,234.50000000000003,571.6,251.20000000000002,571.6,271.90000000000003);
  Pond.ctxScratch.bezierCurveTo(571.6,292.5,542.9,309.3,507.5,309.3);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
}

Pond.shirt = function() {
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.49,.49);
  Pond.ctxScratch.translate(632,75);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#dd3858";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-154.3,158);
  Pond.ctxScratch.bezierCurveTo(-158.8,154,-162,151.9,-171.9,149);
  Pond.ctxScratch.bezierCurveTo(-173.70000000000002,148.5,-176,146.4,-193,146.4);
  Pond.ctxScratch.lineTo(-193,147.4);
  Pond.ctxScratch.bezierCurveTo(-193,147.4,-194.6,157,-198.3,161.20000000000002);
  Pond.ctxScratch.bezierCurveTo(-203.5,167.10000000000002,-212.60000000000002,171.70000000000002,-222.60000000000002,172.3);
  Pond.ctxScratch.bezierCurveTo(-234.8,173,-242.40000000000003,168.70000000000002,-247.10000000000002,165.4);
  Pond.ctxScratch.bezierCurveTo(-254.90000000000003,159.9,-261.90000000000003,148.9,-263.20000000000005,146.70000000000002);
  Pond.ctxScratch.lineTo(-263.00000000000006,146.50000000000003);
  Pond.ctxScratch.bezierCurveTo(-263.1000000000001,146.50000000000003,-263.20000000000005,146.50000000000003,-263.30000000000007,146.50000000000003);
  Pond.ctxScratch.bezierCurveTo(-263.4000000000001,146.40000000000003,-263.4000000000001,146.30000000000004,-263.4000000000001,146.30000000000004);
  Pond.ctxScratch.bezierCurveTo(-263.4000000000001,146.30000000000004,-263.80000000000007,146.40000000000003,-264.4000000000001,146.50000000000003);
  Pond.ctxScratch.bezierCurveTo(-277.5000000000001,146.40000000000003,-279.7000000000001,146.50000000000003,-290.5000000000001,148.50000000000003);
  Pond.ctxScratch.bezierCurveTo(-299.10000000000014,150.10000000000002,-305.10000000000014,153.20000000000002,-309.3000000000001,157.40000000000003);
  Pond.ctxScratch.bezierCurveTo(-313.5000000000001,161.60000000000002,-337.7000000000001,184.90000000000003,-347.7000000000001,199.60000000000002);
  Pond.ctxScratch.bezierCurveTo(-343.1000000000001,210.20000000000002,-328.6000000000001,217.60000000000002,-316.3000000000001,220.70000000000002);
  Pond.ctxScratch.lineTo(-309.40000000000015,213.60000000000002);
  Pond.ctxScratch.bezierCurveTo(-307.70000000000016,238.40000000000003,-299.90000000000015,250.8,-298.8000000000001,256);
  Pond.ctxScratch.bezierCurveTo(-297.5000000000001,261.7,-296.60000000000014,262.4,-295.0000000000001,285.4);
  Pond.ctxScratch.bezierCurveTo(-293.5000000000001,307.5,-296.60000000000014,327.2,-300.4000000000001,348.9);
  Pond.ctxScratch.bezierCurveTo(-302.30000000000007,359.59999999999997,-306.1000000000001,372.7,-308.0000000000001,383.4);
  Pond.ctxScratch.bezierCurveTo(-309.10000000000014,389.29999999999995,-311.7000000000001,402.59999999999997,-306.9000000000001,407.4);
  Pond.ctxScratch.bezierCurveTo(-297.30000000000007,416.79999999999995,-278.0000000000001,416.2,-254.10000000000008,418.09999999999997);
  Pond.ctxScratch.bezierCurveTo(-230.20000000000007,419.99999999999994,-175.50000000000009,416.29999999999995,-166.10000000000008,414.4);
  Pond.ctxScratch.bezierCurveTo(-156.70000000000007,412.5,-153.70000000000007,408.9,-152.30000000000007,403.7);
  Pond.ctxScratch.bezierCurveTo(-150.70000000000007,382,-157.70000000000007,361.09999999999997,-162.10000000000008,340.09999999999997);
  Pond.ctxScratch.bezierCurveTo(-165.9000000000001,321.9,-166.00000000000009,304.2,-164.50000000000009,285.7);
  Pond.ctxScratch.bezierCurveTo(-163.10000000000008,269.4,-162.00000000000009,266.59999999999997,-159.20000000000007,257.9);
  Pond.ctxScratch.bezierCurveTo(-158.00000000000009,254.2,-150.90000000000006,243.09999999999997,-148.10000000000008,216.49999999999997);
  Pond.ctxScratch.lineTo(-143.4000000000001,220.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-131.3000000000001,216.99999999999997,-117.20000000000009,208.7,-113.40000000000009,197.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-124.3,183.7,-149.9,162,-154.3,158);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  
  Pond.ctxScratch.restore();
  //alert("here");
};

Pond.boots = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.71,.71);
  Pond.ctxScratch.translate(711,214);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-552.7,263.2);
  Pond.ctxScratch.lineTo(-316.00000000000006,263.2);
  Pond.ctxScratch.quadraticCurveTo(-316.00000000000006,263.2,-316.00000000000006,263.2);
  Pond.ctxScratch.lineTo(-316.00000000000006,351);
  Pond.ctxScratch.quadraticCurveTo(-316.00000000000006,351,-316.00000000000006,351);
  Pond.ctxScratch.lineTo(-552.7,351);
  Pond.ctxScratch.quadraticCurveTo(-552.7,351,-552.7,351);
  Pond.ctxScratch.lineTo(-552.7,263.2);
  Pond.ctxScratch.quadraticCurveTo(-552.7,263.2,-552.7,263.2);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#dd3858";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-443.2,256);
  Pond.ctxScratch.lineTo(-443.4,256.8);
  Pond.ctxScratch.bezierCurveTo(-444.9,263.1,-447.9,276.3,-448.09999999999997,279.5);
  Pond.ctxScratch.bezierCurveTo(-448.2,281.4,-447.99999999999994,285.7,-447.79999999999995,289.5);
  Pond.ctxScratch.bezierCurveTo(-447.69999999999993,292.4,-447.49999999999994,294.8,-447.59999999999997,296.1);
  Pond.ctxScratch.bezierCurveTo(-447.7,298.6,-447.2,303.90000000000003,-447.09999999999997,304.6);
  Pond.ctxScratch.bezierCurveTo(-446.99999999999994,305.3,-445.9,311,-444.79999999999995,315.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-444.4,317.50000000000006,-444.49999999999994,319.90000000000003,-444.59999999999997,323.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-444.7,326.30000000000007,-444.79999999999995,330.20000000000005,-444.59999999999997,335.00000000000006);
  Pond.ctxScratch.lineTo(-444.59999999999997,336.1000000000001);
  Pond.ctxScratch.lineTo(-446.09999999999997,336.7000000000001);
  Pond.ctxScratch.bezierCurveTo(-448.9,338.0000000000001,-454.79999999999995,340.5000000000001,-461.09999999999997,340.5000000000001);
  Pond.ctxScratch.bezierCurveTo(-461.09999999999997,340.5000000000001,-461.09999999999997,340.5000000000001,-461.09999999999997,340.5000000000001);
  Pond.ctxScratch.bezierCurveTo(-464.2,340.5000000000001,-467.09999999999997,339.9000000000001,-469.59999999999997,338.7000000000001);
  Pond.ctxScratch.lineTo(-470.29999999999995,338.4000000000001);
  Pond.ctxScratch.lineTo(-470.4,337.6000000000001);
  Pond.ctxScratch.bezierCurveTo(-470.9,335.1000000000001,-471.09999999999997,332.4000000000001,-471.09999999999997,331.7000000000001);
  Pond.ctxScratch.bezierCurveTo(-471.2,331.7000000000001,-471.4,331.6000000000001,-471.59999999999997,331.6000000000001);
  Pond.ctxScratch.lineTo(-471.7,331.6000000000001);
  Pond.ctxScratch.bezierCurveTo(-472.7,331.6000000000001,-474.9,332.1000000000001,-475.8,333.30000000000007);
  Pond.ctxScratch.bezierCurveTo(-476,333.50000000000006,-476.2,333.80000000000007,-476.5,334.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-478.8,337.20000000000005,-481.2,340.30000000000007,-483.1,341.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-484.90000000000003,342.1,-487,343.00000000000006,-490.90000000000003,343.00000000000006);
  Pond.ctxScratch.bezierCurveTo(-491.3,343.00000000000006,-491.70000000000005,343.00000000000006,-492.1,343.00000000000006);
  Pond.ctxScratch.bezierCurveTo(-496.20000000000005,342.80000000000007,-505.20000000000005,341.6000000000001,-510.6,339.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-515.8000000000001,338.20000000000005,-520.2,335.6,-521.1,335.00000000000006);
  Pond.ctxScratch.bezierCurveTo(-522.3000000000001,334.20000000000005,-522.8000000000001,332.80000000000007,-522.4,331.40000000000003);
  Pond.ctxScratch.bezierCurveTo(-522.4,331.1,-522.4,330.20000000000005,-522.5,329.6);
  Pond.ctxScratch.bezierCurveTo(-522.7,327.3,-522.8,325.6,-522.4,324.6);
  Pond.ctxScratch.bezierCurveTo(-521.8,323,-519.6,320,-516.6999999999999,320);
  Pond.ctxScratch.bezierCurveTo(-516.4,320,-515.9999999999999,320,-515.6999999999999,320.1);
  Pond.ctxScratch.bezierCurveTo(-514.5999999999999,320.40000000000003,-512.9999999999999,320.6,-511.5999999999999,320.6);
  Pond.ctxScratch.bezierCurveTo(-510.3999999999999,320.6,-509.7999999999999,320.40000000000003,-509.69999999999993,320.40000000000003);
  Pond.ctxScratch.bezierCurveTo(-508.5999999999999,320.00000000000006,-506.29999999999995,319.40000000000003,-504.3999999999999,318.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-503.5999999999999,318.70000000000005,-502.8999999999999,318.50000000000006,-502.5999999999999,318.40000000000003);
  Pond.ctxScratch.lineTo(-502.3999999999999,318.3);
  Pond.ctxScratch.bezierCurveTo(-501.7999999999999,318.1,-501.19999999999993,318,-499.2999999999999,315.6);
  Pond.ctxScratch.bezierCurveTo(-497.39999999999986,313.20000000000005,-492.5999999999999,305.70000000000005,-490.5999999999999,302.5);
  Pond.ctxScratch.bezierCurveTo(-490.0999999999999,301.7,-489.7999999999999,301.2,-489.5999999999999,300.9);
  Pond.ctxScratch.bezierCurveTo(-489.3999999999999,300.59999999999997,-489.19999999999993,300.29999999999995,-488.9999999999999,300);
  Pond.ctxScratch.bezierCurveTo(-487.9999999999999,298.6,-486.89999999999986,297.1,-486.39999999999986,293.2);
  Pond.ctxScratch.bezierCurveTo(-485.6999999999999,288,-484.39999999999986,266.9,-484.59999999999985,262.59999999999997);
  Pond.ctxScratch.bezierCurveTo(-484.6999999999999,260.7,-484.6999999999999,257.7,-484.79999999999984,254.49999999999997);
  Pond.ctxScratch.bezierCurveTo(-484.79999999999984,249.99999999999997,-484.89999999999986,244.49999999999997,-485.1999999999998,242.89999999999998);
  Pond.ctxScratch.lineTo(-485.1999999999998,242.7);
  Pond.ctxScratch.bezierCurveTo(-485.99999999999983,238.6,-486.49999999999983,235.39999999999998,-485.8999999999998,233.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-485.49999999999983,232.79999999999998,-484.49999999999983,232.2,-483.7999999999998,231.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-481.69999999999976,230.79999999999998,-478.19999999999976,230.1,-476.4999999999998,229.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-474.39999999999975,229.49999999999997,-467.9999999999998,229.29999999999998,-462.7999999999998,229.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-459.0999999999998,229.29999999999998,-456.0999999999998,229.39999999999998,-454.2999999999998,229.49999999999997);
  Pond.ctxScratch.bezierCurveTo(-450.0999999999998,229.79999999999998,-445.8999999999998,231.19999999999996,-443.69999999999976,232.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-442.69999999999976,233.7,-442.09999999999974,234.49999999999997,-441.89999999999975,235.49999999999997);
  Pond.ctxScratch.lineTo(-441.89999999999975,235.69999999999996);
  Pond.ctxScratch.bezierCurveTo(-441.9,236,-441.4,248.3,-443.2,256);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#dd3858";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-348.3,329.5);
  Pond.ctxScratch.bezierCurveTo(-347.90000000000003,330.9,-348.40000000000003,332.3,-349.6,333.1);
  Pond.ctxScratch.bezierCurveTo(-349.6,333.1,-354.1,336.1,-360,338.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-365.4,340.00000000000006,-374.3,341.40000000000003,-378.4,341.70000000000005);
  Pond.ctxScratch.bezierCurveTo(-379,341.70000000000005,-379.59999999999997,341.80000000000007,-380.09999999999997,341.80000000000007);
  Pond.ctxScratch.bezierCurveTo(-383.7,341.80000000000007,-385.7,341.00000000000006,-387.4,340.1000000000001);
  Pond.ctxScratch.bezierCurveTo(-389.29999999999995,339.2000000000001,-391.79999999999995,336.2000000000001,-394.09999999999997,333.2000000000001);
  Pond.ctxScratch.bezierCurveTo(-394.4,332.9000000000001,-394.59999999999997,332.6000000000001,-394.79999999999995,332.3000000000001);
  Pond.ctxScratch.bezierCurveTo(-395.69999999999993,331.2000000000001,-397.9,330.7000000000001,-398.9,330.7000000000001);
  Pond.ctxScratch.bezierCurveTo(-398.9,330.7000000000001,-398.9,330.7000000000001,-398.9,330.7000000000001);
  Pond.ctxScratch.bezierCurveTo(-399.2,330.7000000000001,-399.4,330.7000000000001,-399.5,330.8000000000001);
  Pond.ctxScratch.bezierCurveTo(-399.5,331.5000000000001,-399.7,334.2000000000001,-400.1,336.7000000000001);
  Pond.ctxScratch.lineTo(-400.20000000000005,337.5000000000001);
  Pond.ctxScratch.lineTo(-400.90000000000003,337.9000000000001);
  Pond.ctxScratch.bezierCurveTo(-403.50000000000006,339.30000000000007,-406.50000000000006,340.0000000000001,-409.8,340.0000000000001);
  Pond.ctxScratch.bezierCurveTo(-416,340.0000000000001,-421.7,337.60000000000014,-424.40000000000003,336.4000000000001);
  Pond.ctxScratch.lineTo(-425.90000000000003,335.80000000000007);
  Pond.ctxScratch.lineTo(-425.90000000000003,334.70000000000005);
  Pond.ctxScratch.bezierCurveTo(-425.8,329.90000000000003,-426.00000000000006,326.00000000000006,-426.1,322.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-426.3,319.6,-426.40000000000003,317.3,-426.1,315.6);
  Pond.ctxScratch.bezierCurveTo(-425.1,310.70000000000005,-424.20000000000005,304.90000000000003,-424.1,304.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-424.1,303.50000000000006,-423.70000000000005,298.30000000000007,-423.8,295.70000000000005);
  Pond.ctxScratch.bezierCurveTo(-423.90000000000003,294.50000000000006,-423.8,292.00000000000006,-423.7,289.1);
  Pond.ctxScratch.bezierCurveTo(-423.59999999999997,285.3,-423.5,281,-423.7,279.1);
  Pond.ctxScratch.bezierCurveTo(-424,276,-427.3,262.8,-428.9,256.5);
  Pond.ctxScratch.lineTo(-429.09999999999997,255.7);
  Pond.ctxScratch.bezierCurveTo(-430.99999999999994,248,-430.79999999999995,235.7,-430.79999999999995,235.2);
  Pond.ctxScratch.lineTo(-430.79999999999995,235);
  Pond.ctxScratch.bezierCurveTo(-430.69999999999993,234.1,-430.09999999999997,233.2,-429.09999999999997,232.4);
  Pond.ctxScratch.bezierCurveTo(-426.9,230.70000000000002,-422.7,229.20000000000002,-418.49999999999994,228.8);
  Pond.ctxScratch.bezierCurveTo(-415.49999999999994,228.5,-409.49999999999994,228.4,-404.8999999999999,228.4);
  Pond.ctxScratch.bezierCurveTo(-402.8999999999999,228.4,-398.19999999999993,228.4,-396.3999999999999,228.70000000000002);
  Pond.ctxScratch.bezierCurveTo(-394.69999999999993,228.9,-391.19999999999993,229.60000000000002,-389.0999999999999,230.60000000000002);
  Pond.ctxScratch.bezierCurveTo(-388.3999999999999,230.90000000000003,-387.2999999999999,231.50000000000003,-386.8999999999999,232.50000000000003);
  Pond.ctxScratch.bezierCurveTo(-386.2999999999999,234.10000000000002,-386.7999999999999,237.40000000000003,-387.49999999999994,241.50000000000003);
  Pond.ctxScratch.lineTo(-387.49999999999994,241.70000000000002);
  Pond.ctxScratch.bezierCurveTo(-387.79999999999995,243.3,-387.69999999999993,248.8,-387.69999999999993,253.3);
  Pond.ctxScratch.bezierCurveTo(-387.69999999999993,256.5,-387.5999999999999,259.6,-387.69999999999993,261.40000000000003);
  Pond.ctxScratch.bezierCurveTo(-387.8999999999999,265.70000000000005,-386.0999999999999,286.8,-385.29999999999995,291.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-384.69999999999993,295.70000000000005,-383.59999999999997,297.3,-382.59999999999997,298.70000000000005);
  Pond.ctxScratch.bezierCurveTo(-382.4,299.00000000000006,-382.2,299.30000000000007,-381.99999999999994,299.6);
  Pond.ctxScratch.bezierCurveTo(-381.79999999999995,299.90000000000003,-381.3999999999999,300.5,-380.8999999999999,301.20000000000005);
  Pond.ctxScratch.bezierCurveTo(-378.7999999999999,304.40000000000003,-373.8999999999999,311.80000000000007,-371.8999999999999,314.1);
  Pond.ctxScratch.bezierCurveTo(-369.8999999999999,316.5,-369.2999999999999,316.6,-368.69999999999993,316.8);
  Pond.ctxScratch.lineTo(-368.49999999999994,316.90000000000003);
  Pond.ctxScratch.bezierCurveTo(-368.19999999999993,317.00000000000006,-367.49999999999994,317.20000000000005,-366.69999999999993,317.40000000000003);
  Pond.ctxScratch.bezierCurveTo(-364.79999999999995,317.90000000000003,-362.3999999999999,318.40000000000003,-361.3999999999999,318.8);
  Pond.ctxScratch.bezierCurveTo(-361.2999999999999,318.8,-360.7999999999999,319,-359.7999999999999,319);
  Pond.ctxScratch.bezierCurveTo(-358.3999999999999,319,-356.6999999999999,318.8,-355.4999999999999,318.4);
  Pond.ctxScratch.bezierCurveTo(-355.1999999999999,318.29999999999995,-354.7999999999999,318.29999999999995,-354.4999999999999,318.29999999999995);
  Pond.ctxScratch.bezierCurveTo(-351.6999999999999,318.29999999999995,-349.39999999999986,321.29999999999995,-348.7999999999999,322.79999999999995);
  Pond.ctxScratch.bezierCurveTo(-348.3999999999999,323.79999999999995,-348.4999999999999,325.49999999999994,-348.5999999999999,327.79999999999995);
  Pond.ctxScratch.bezierCurveTo(-348.3,328.3,-348.3,329.2,-348.3,329.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
};

Pond.gloves = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.41,.41);
  Pond.ctxScratch.translate(290,88);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(448.2,280.2);
  Pond.ctxScratch.bezierCurveTo(446.8,280.2,445.5,279.4,444.9,278);
  Pond.ctxScratch.lineTo(434.2,251.4);
  Pond.ctxScratch.bezierCurveTo(433.5,249.6,434.3,247.5,436.2,246.8);
  Pond.ctxScratch.bezierCurveTo(438,246.10000000000002,440.09999999999997,246.9,440.8,248.8);
  Pond.ctxScratch.lineTo(451.5,275.40000000000003);
  Pond.ctxScratch.bezierCurveTo(452.2,277.20000000000005,451.4,279.3,449.5,280.00000000000006);
  Pond.ctxScratch.bezierCurveTo(449.1,280.2,448.6,280.2,448.2,280.2);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.lineWidth=20;
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(457.6,273.8);
  Pond.ctxScratch.bezierCurveTo(456.20000000000005,273.8,454.90000000000003,273,454.3,271.6);
  Pond.ctxScratch.lineTo(442.90000000000003,243.50000000000003);
  Pond.ctxScratch.bezierCurveTo(442.20000000000005,241.70000000000002,443.00000000000006,239.60000000000002,444.90000000000003,238.90000000000003);
  Pond.ctxScratch.bezierCurveTo(446.70000000000005,238.20000000000005,448.8,239.00000000000003,449.50000000000006,240.90000000000003);
  Pond.ctxScratch.lineTo(460.90000000000003,269.00000000000006);
  Pond.ctxScratch.bezierCurveTo(461.6,270.80000000000007,460.8,272.90000000000003,458.90000000000003,273.6000000000001);
  Pond.ctxScratch.bezierCurveTo(458.5,273.8,458,273.8,457.6,273.8);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.lineWidth=20;
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(510.4,239.2);
  Pond.ctxScratch.lineTo(510.4,239.2);
  Pond.ctxScratch.bezierCurveTo(510.9,239,511.29999999999995,238.7,511.59999999999997,238.29999999999998);
  Pond.ctxScratch.bezierCurveTo(511.9,237.89999999999998,512.0999999999999,237.39999999999998,512.1999999999999,236.89999999999998);
  Pond.ctxScratch.bezierCurveTo(512.3,236.39999999999998,512.3,235.99999999999997,512.3,235.59999999999997);
  Pond.ctxScratch.bezierCurveTo(512.3,235.09999999999997,512.1999999999999,234.69999999999996,512.0999999999999,234.29999999999995);
  Pond.ctxScratch.bezierCurveTo(511.7999999999999,233.39999999999995,511.19999999999993,232.59999999999997,510.3999999999999,232.09999999999997);
  Pond.ctxScratch.bezierCurveTo(509.7999999999999,231.59999999999997,509.0999999999999,231.39999999999998,508.3999999999999,231.39999999999998);
  Pond.ctxScratch.bezierCurveTo(508.0999999999999,231.39999999999998,507.8999999999999,231.39999999999998,507.5999999999999,231.49999999999997);
  Pond.ctxScratch.lineTo(481.8999999999999,239.69999999999996);
  Pond.ctxScratch.lineTo(481.7999999999999,239.69999999999996);
  Pond.ctxScratch.bezierCurveTo(481.6999999999999,239.59999999999997,481.5999999999999,239.39999999999995,481.3999999999999,239.09999999999997);
  Pond.ctxScratch.bezierCurveTo(481.3999999999999,238.89999999999998,481.2999999999999,238.69999999999996,481.2999999999999,238.59999999999997);
  Pond.ctxScratch.lineTo(481.2999999999999,238.39999999999998);
  Pond.ctxScratch.lineTo(503.8999999999999,231.09999999999997);
  Pond.ctxScratch.bezierCurveTo(504.3999999999999,230.89999999999998,504.7999999999999,230.59999999999997,505.0999999999999,230.29999999999995);
  Pond.ctxScratch.bezierCurveTo(505.3999999999999,229.89999999999995,505.5999999999999,229.49999999999994,505.69999999999993,228.99999999999994);
  Pond.ctxScratch.bezierCurveTo(505.8999999999999,228.49999999999994,505.99999999999994,227.99999999999994,505.99999999999994,227.59999999999994);
  Pond.ctxScratch.bezierCurveTo(505.99999999999994,227.19999999999993,505.8999999999999,226.79999999999993,505.79999999999995,226.49999999999994);
  Pond.ctxScratch.bezierCurveTo(505.79999999999995,226.29999999999995,505.69999999999993,226.19999999999993,505.59999999999997,225.99999999999994);
  Pond.ctxScratch.bezierCurveTo(505.29999999999995,225.49999999999994,504.79999999999995,225.09999999999994,504.29999999999995,224.69999999999993);
  Pond.ctxScratch.lineTo(504.19999999999993,224.69999999999993);
  Pond.ctxScratch.bezierCurveTo(503.49999999999994,224.29999999999993,502.8999999999999,223.99999999999994,502.19999999999993,223.99999999999994);
  Pond.ctxScratch.bezierCurveTo(501.99999999999994,223.99999999999994,501.69999999999993,223.99999999999994,501.49999999999994,224.09999999999994);
  Pond.ctxScratch.lineTo(475.59999999999997,232.19999999999993);
  Pond.ctxScratch.bezierCurveTo(474.79999999999995,232.39999999999992,473.99999999999994,232.49999999999994,472.99999999999994,232.49999999999994);
  Pond.ctxScratch.bezierCurveTo(472.49999999999994,232.49999999999994,471.8999999999999,232.49999999999994,471.19999999999993,232.39999999999995);
  Pond.ctxScratch.bezierCurveTo(470.19999999999993,232.19999999999996,469.49999999999994,231.99999999999994,468.99999999999994,231.69999999999996);
  Pond.ctxScratch.bezierCurveTo(468.59999999999997,231.49999999999997,468.3999999999999,231.19999999999996,468.29999999999995,230.99999999999997);
  Pond.ctxScratch.lineTo(468.4,230.89999999999998);
  Pond.ctxScratch.bezierCurveTo(469.29999999999995,229.89999999999998,471,228.39999999999998,473.4,226.29999999999998);
  Pond.ctxScratch.bezierCurveTo(475.7,224.29999999999998,477.5,222.79999999999998,478.7,221.6);
  Pond.ctxScratch.lineTo(478.8,221.5);
  Pond.ctxScratch.lineTo(478.90000000000003,221.4);
  Pond.ctxScratch.bezierCurveTo(479.40000000000003,220.6,479.8,219.4,479.8,217.6);
  Pond.ctxScratch.lineTo(479.8,217.4);
  Pond.ctxScratch.bezierCurveTo(479.8,216.9,479.8,216.3,479.5,215.70000000000002);
  Pond.ctxScratch.bezierCurveTo(479.4,215.20000000000002,479.2,214.8,478.8,214.4);
  Pond.ctxScratch.bezierCurveTo(478.40000000000003,214,477.8,213.9,477.3,213.9);
  Pond.ctxScratch.bezierCurveTo(476.90000000000003,213.9,476.6,214,476.2,214.1);
  Pond.ctxScratch.lineTo(476.09999999999997,214.1);
  Pond.ctxScratch.lineTo(476,214.1);
  Pond.ctxScratch.bezierCurveTo(475.2,214.5,472.4,215.79999999999998,467.7,218.5);
  Pond.ctxScratch.bezierCurveTo(465.09999999999997,219.9,463.09999999999997,221.1,461.59999999999997,222.1);
  Pond.ctxScratch.bezierCurveTo(460.09999999999997,223.1,459.09999999999997,223.79999999999998,458.49999999999994,224.5);
  Pond.ctxScratch.bezierCurveTo(456.69999999999993,226.7,454.19999999999993,230.7,450.29999999999995,236.8);
  Pond.ctxScratch.bezierCurveTo(449.79999999999995,237.8,448.99999999999994,238.70000000000002,448.69999999999993,239);
  Pond.ctxScratch.lineTo(448.5999999999999,239.1);
  Pond.ctxScratch.lineTo(448.4999999999999,239.2);
  Pond.ctxScratch.bezierCurveTo(448.2999999999999,239.6,447.7999999999999,239.89999999999998,447.2999999999999,240.39999999999998);
  Pond.ctxScratch.bezierCurveTo(446.8999999999999,240.7,446.5999999999999,240.99999999999997,446.3999999999999,241.2);
  Pond.ctxScratch.bezierCurveTo(446.19999999999993,241.39999999999998,445.99999999999994,241.5,445.7999999999999,241.6);
  Pond.ctxScratch.bezierCurveTo(443.8999999999999,243.1,442.0999999999999,245.2,439.7999999999999,247);
  Pond.ctxScratch.bezierCurveTo(432.0999999999999,253.2,420.4999999999999,261,408.8999999999999,268.4);
  Pond.ctxScratch.lineTo(408.0999999999999,268.9);
  Pond.ctxScratch.lineTo(429.69999999999993,295.5);
  Pond.ctxScratch.lineTo(430.3999999999999,294.9);
  Pond.ctxScratch.bezierCurveTo(437.69999999999993,288.4,447.2999999999999,277.5,456.19999999999993,268.7);
  Pond.ctxScratch.bezierCurveTo(456.3999999999999,268.8,456.5999999999999,268.9,456.8999999999999,269);
  Pond.ctxScratch.bezierCurveTo(458.3999999999999,269.7,460.19999999999993,270.5,462.5999999999999,271);
  Pond.ctxScratch.bezierCurveTo(464.3999999999999,271.4,465.7999999999999,271.7,466.9999999999999,271.7);
  Pond.ctxScratch.bezierCurveTo(467.5999999999999,271.7,468.0999999999999,271.59999999999997,468.5999999999999,271.4);
  Pond.ctxScratch.lineTo(503.5999999999999,260.2);
  Pond.ctxScratch.lineTo(503.69999999999993,260.2);
  Pond.ctxScratch.bezierCurveTo(504.0999999999999,260,504.29999999999995,259.7,504.49999999999994,259.5);
  Pond.ctxScratch.bezierCurveTo(504.69999999999993,259.2,504.79999999999995,258.9,504.99999999999994,258.5);
  Pond.ctxScratch.bezierCurveTo(505.19999999999993,258.1,505.29999999999995,257.9,505.3999999999999,257.6);
  Pond.ctxScratch.bezierCurveTo(505.49999999999994,257.40000000000003,505.49999999999994,257.3,505.5999999999999,257.1);
  Pond.ctxScratch.lineTo(505.5999999999999,257);
  Pond.ctxScratch.lineTo(505.5999999999999,256.8);
  Pond.ctxScratch.bezierCurveTo(505.5999999999999,256.40000000000003,505.4999999999999,256.1,505.3999999999999,255.9);
  Pond.ctxScratch.lineTo(505.2999999999999,255.70000000000002);
  Pond.ctxScratch.bezierCurveTo(505.2999999999999,255.50000000000003,505.1999999999999,255.3,505.0999999999999,255.10000000000002);
  Pond.ctxScratch.bezierCurveTo(504.7999999999999,254.60000000000002,504.2999999999999,254.20000000000002,503.7999999999999,253.8);
  Pond.ctxScratch.lineTo(503.6999999999999,253.70000000000002);
  Pond.ctxScratch.lineTo(503.59999999999985,253.70000000000002);
  Pond.ctxScratch.bezierCurveTo(503.09999999999985,253.4,502.49999999999983,253.00000000000003,501.6999999999999,253.00000000000003);
  Pond.ctxScratch.bezierCurveTo(501.4999999999999,253.00000000000003,501.2999999999999,253.00000000000003,501.09999999999985,253.10000000000002);
  Pond.ctxScratch.lineTo(485.59999999999985,258.1);
  Pond.ctxScratch.bezierCurveTo(485.59999999999985,258.1,485.39999999999986,257.90000000000003,485.29999999999984,257.5);
  Pond.ctxScratch.bezierCurveTo(485.1999999999998,257.2,485.09999999999985,257,485.09999999999985,256.9);
  Pond.ctxScratch.lineTo(509.49999999999983,248.99999999999997);
  Pond.ctxScratch.lineTo(509.59999999999985,248.99999999999997);
  Pond.ctxScratch.bezierCurveTo(509.89999999999986,248.79999999999998,510.1999999999999,248.59999999999997,510.49999999999983,248.29999999999998);
  Pond.ctxScratch.bezierCurveTo(510.79999999999984,247.99999999999997,511.09999999999985,247.6,511.29999999999984,247.1);
  Pond.ctxScratch.bezierCurveTo(511.59999999999985,246.6,511.6999999999998,246,511.6999999999998,245.5);
  Pond.ctxScratch.bezierCurveTo(511.6999999999998,245.2,511.5999999999998,244.8,511.49999999999983,244.5);
  Pond.ctxScratch.bezierCurveTo(511.49999999999983,244,511.1999999999998,243.5,510.8999999999998,243.1);
  Pond.ctxScratch.bezierCurveTo(510.49999999999983,242.7,510.0999999999998,242.4,509.5999999999998,242.2);
  Pond.ctxScratch.bezierCurveTo(508.9999999999998,241.79999999999998,508.3999999999998,241.7,507.7999999999998,241.7);
  Pond.ctxScratch.bezierCurveTo(507.3999999999998,241.7,507.0999999999998,241.79999999999998,506.7999999999998,241.89999999999998);
  Pond.ctxScratch.lineTo(483.4999999999998,249.39999999999998);
  Pond.ctxScratch.bezierCurveTo(483.39999999999975,249.29999999999998,483.2999999999998,249.09999999999997,483.19999999999976,248.79999999999998);
  Pond.ctxScratch.bezierCurveTo(483.19999999999976,248.49999999999997,483.19999999999976,248.39999999999998,483.2999999999998,248.29999999999998);
  Pond.ctxScratch.lineTo(483.3999999999998,248.1);
  Pond.ctxScratch.lineTo(483.3999999999998,248);
  Pond.ctxScratch.lineTo(510.4,239.2);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.moveTo(505.6,255.5);
  Pond.ctxScratch.lineTo(505.6,255.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(507.2,241.6);
  Pond.ctxScratch.lineTo(507.2,241.6);
  Pond.ctxScratch.lineTo(507.2,241.5);
  Pond.ctxScratch.lineTo(507.2,241.6);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-68.5,274.7);
  Pond.ctxScratch.bezierCurveTo(-69,274.7,-69.5,274.59999999999997,-69.9,274.4);
  Pond.ctxScratch.bezierCurveTo(-71.7,273.59999999999997,-72.5,271.5,-71.7,269.7);
  Pond.ctxScratch.lineTo(-60,243.2);
  Pond.ctxScratch.bezierCurveTo(-59.2,241.39999999999998,-57.1,240.6,-55.3,241.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-53.5,242.2,-52.699999999999996,244.29999999999998,-53.5,246.09999999999997);
  Pond.ctxScratch.lineTo(-65.2,272.59999999999997);
  Pond.ctxScratch.bezierCurveTo(-65.8,274,-67.1,274.7,-68.5,274.7);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.lineWidth=20;
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-77.7,267.9);
  Pond.ctxScratch.bezierCurveTo(-78.2,267.9,-78.7,267.79999999999995,-79.10000000000001,267.59999999999997);
  Pond.ctxScratch.bezierCurveTo(-80.9,266.79999999999995,-81.7,264.7,-80.9,262.9);
  Pond.ctxScratch.lineTo(-68.5,235.2);
  Pond.ctxScratch.bezierCurveTo(-67.7,233.39999999999998,-65.6,232.6,-63.8,233.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-62,234.2,-61.199999999999996,236.29999999999998,-62,238.09999999999997);
  Pond.ctxScratch.lineTo(-74.4,265.79999999999995);
  Pond.ctxScratch.bezierCurveTo(-75.1,267.2,-76.3,267.9,-77.7,267.9);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.lineWidth=20;
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.moveTo(-101.9,241);
  Pond.ctxScratch.lineTo(-101.9,241);
  Pond.ctxScratch.lineTo(-101.9,241.1);
  Pond.ctxScratch.lineTo(-101.80000000000001,241.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-101.70000000000002,241.39999999999998,-101.70000000000002,241.49999999999997,-101.70000000000002,241.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-101.80000000000001,242.1,-102.00000000000001,242.29999999999998,-102.00000000000001,242.39999999999998);
  Pond.ctxScratch.lineTo(-125.00000000000001,233.99999999999997);
  Pond.ctxScratch.bezierCurveTo(-125.30000000000001,233.89999999999998,-125.60000000000001,233.79999999999998,-126.00000000000001,233.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-126.60000000000001,233.79999999999998,-127.20000000000002,233.89999999999998,-127.80000000000001,234.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-128.3,234.49999999999997,-128.70000000000002,234.79999999999998,-129.10000000000002,235.1);
  Pond.ctxScratch.bezierCurveTo(-129.40000000000003,235.4,-129.70000000000002,235.9,-129.8,236.5);
  Pond.ctxScratch.bezierCurveTo(-129.9,236.8,-130,237.1,-130,237.5);
  Pond.ctxScratch.bezierCurveTo(-130,238,-129.9,238.6,-129.7,239.1);
  Pond.ctxScratch.bezierCurveTo(-129.49999999999997,239.6,-129.2,240,-128.89999999999998,240.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-128.59999999999997,240.6,-128.29999999999998,240.89999999999998,-127.99999999999997,241.1);
  Pond.ctxScratch.lineTo(-127.89999999999998,241.1);
  Pond.ctxScratch.lineTo(-103.79999999999998,249.9);
  Pond.ctxScratch.bezierCurveTo(-103.79999999999998,250,-103.89999999999998,250.20000000000002,-103.99999999999999,250.5);
  Pond.ctxScratch.bezierCurveTo(-104.19999999999999,250.9,-104.29999999999998,251,-104.39999999999999,251.1);
  Pond.ctxScratch.lineTo(-119.69999999999999,245.5);
  Pond.ctxScratch.bezierCurveTo(-119.89999999999999,245.4,-120.1,245.4,-120.29999999999998,245.4);
  Pond.ctxScratch.bezierCurveTo(-121.09999999999998,245.4,-121.69999999999999,245.8,-122.19999999999999,246);
  Pond.ctxScratch.lineTo(-122.29999999999998,246);
  Pond.ctxScratch.lineTo(-122.39999999999998,246.1);
  Pond.ctxScratch.bezierCurveTo(-122.89999999999998,246.5,-123.39999999999998,246.9,-123.69999999999997,247.4);
  Pond.ctxScratch.bezierCurveTo(-123.79999999999997,247.5,-123.89999999999998,247.70000000000002,-123.89999999999998,248);
  Pond.ctxScratch.lineTo(-123.99999999999997,248.2);
  Pond.ctxScratch.bezierCurveTo(-124.09999999999997,248.39999999999998,-124.19999999999997,248.7,-124.19999999999997,249.1);
  Pond.ctxScratch.lineTo(-124.19999999999997,249.29999999999998);
  Pond.ctxScratch.lineTo(-124.19999999999997,249.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-124.19999999999997,249.59999999999997,-124.09999999999998,249.79999999999998,-123.99999999999997,249.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-123.89999999999998,250.09999999999997,-123.79999999999997,250.39999999999998,-123.59999999999997,250.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-123.39999999999996,251.2,-123.29999999999997,251.49999999999997,-123.09999999999997,251.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-122.89999999999996,252.1,-122.59999999999997,252.39999999999998,-122.29999999999997,252.6);
  Pond.ctxScratch.lineTo(-122.19999999999997,252.6);
  Pond.ctxScratch.lineTo(-87.69999999999997,265);
  Pond.ctxScratch.bezierCurveTo(-87.19999999999997,265.2,-86.69999999999997,265.3,-86.09999999999998,265.3);
  Pond.ctxScratch.bezierCurveTo(-84.99999999999999,265.3,-83.49999999999999,265.2,-81.69999999999997,264.8);
  Pond.ctxScratch.bezierCurveTo(-79.19999999999997,264.40000000000003,-77.39999999999998,263.7,-75.89999999999998,263);
  Pond.ctxScratch.bezierCurveTo(-75.59999999999998,262.9,-75.39999999999998,262.8,-75.19999999999997,262.7);
  Pond.ctxScratch.bezierCurveTo(-66.69999999999997,271.9,-57.49999999999997,283.09999999999997,-50.39999999999998,289.9);
  Pond.ctxScratch.lineTo(-49.699999999999974,290.5);
  Pond.ctxScratch.lineTo(-27.099999999999973,264.7);
  Pond.ctxScratch.lineTo(-27.899999999999974,264.09999999999997);
  Pond.ctxScratch.bezierCurveTo(-39.199999999999974,256.29999999999995,-50.39999999999998,247.99999999999997,-57.89999999999998,241.49999999999997);
  Pond.ctxScratch.bezierCurveTo(-60.09999999999998,239.59999999999997,-61.89999999999998,237.39999999999998,-63.699999999999974,235.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-63.89999999999998,235.7,-63.99999999999997,235.59999999999997,-64.19999999999997,235.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-64.39999999999998,235.2,-64.79999999999997,234.89999999999998,-65.09999999999998,234.59999999999997);
  Pond.ctxScratch.bezierCurveTo(-65.59999999999998,234.09999999999997,-66.09999999999998,233.79999999999995,-66.29999999999998,233.39999999999998);
  Pond.ctxScratch.lineTo(-66.29999999999998,233.29999999999998);
  Pond.ctxScratch.lineTo(-66.39999999999998,233.2);
  Pond.ctxScratch.bezierCurveTo(-66.69999999999997,232.89999999999998,-67.39999999999998,232,-67.89999999999998,231);
  Pond.ctxScratch.bezierCurveTo(-71.49999999999997,224.8,-73.79999999999998,220.6,-75.59999999999998,218.4);
  Pond.ctxScratch.bezierCurveTo(-76.19999999999997,217.70000000000002,-77.19999999999997,216.9,-78.59999999999998,215.9);
  Pond.ctxScratch.bezierCurveTo(-80.09999999999998,214.9,-81.99999999999999,213.6,-84.49999999999999,212.1);
  Pond.ctxScratch.bezierCurveTo(-89.09999999999998,209.29999999999998,-91.79999999999998,207.79999999999998,-92.59999999999998,207.4);
  Pond.ctxScratch.lineTo(-92.69999999999997,207.4);
  Pond.ctxScratch.lineTo(-92.79999999999997,207.4);
  Pond.ctxScratch.bezierCurveTo(-93.19999999999997,207.3,-93.49999999999997,207.20000000000002,-93.89999999999996,207.20000000000002);
  Pond.ctxScratch.bezierCurveTo(-94.39999999999996,207.20000000000002,-94.99999999999996,207.3,-95.39999999999996,207.70000000000002);
  Pond.ctxScratch.bezierCurveTo(-95.79999999999997,208.00000000000003,-95.99999999999996,208.50000000000003,-96.19999999999996,208.9);
  Pond.ctxScratch.bezierCurveTo(-96.49999999999996,209.5,-96.49999999999996,210.1,-96.49999999999996,210.6);
  Pond.ctxScratch.lineTo(-96.49999999999996,210.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-96.59999999999995,212.6,-96.19999999999996,213.79999999999998,-95.79999999999995,214.6);
  Pond.ctxScratch.lineTo(-95.79999999999995,214.7);
  Pond.ctxScratch.lineTo(-95.69999999999996,214.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-94.49999999999996,215.99999999999997,-92.89999999999996,217.49999999999997,-90.59999999999997,219.7);
  Pond.ctxScratch.bezierCurveTo(-88.29999999999997,221.79999999999998,-86.59999999999997,223.39999999999998,-85.79999999999997,224.5);
  Pond.ctxScratch.lineTo(-85.69999999999997,224.6);
  Pond.ctxScratch.bezierCurveTo(-85.79999999999997,224.9,-86.09999999999998,225.1,-86.49999999999997,225.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-86.99999999999997,225.6,-87.69999999999997,225.79999999999998,-88.69999999999997,225.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-89.39999999999998,225.89999999999998,-89.99999999999997,225.89999999999998,-90.49999999999997,225.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-91.49999999999997,225.89999999999998,-92.29999999999997,225.7,-92.99999999999997,225.49999999999997);
  Pond.ctxScratch.lineTo(-118.59999999999997,216.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-118.79999999999997,216.29999999999998,-119.09999999999997,216.29999999999998,-119.29999999999997,216.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-119.99999999999997,216.29999999999998,-120.69999999999997,216.6,-121.29999999999997,216.99999999999997);
  Pond.ctxScratch.lineTo(-121.39999999999996,216.99999999999997);
  Pond.ctxScratch.bezierCurveTo(-121.89999999999996,217.39999999999998,-122.39999999999996,217.79999999999998,-122.69999999999996,218.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-122.79999999999995,218.39999999999998,-122.79999999999995,218.6,-122.89999999999996,218.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-122.99999999999996,219.1,-123.09999999999997,219.49999999999997,-123.09999999999997,219.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-123.09999999999997,220.39999999999998,-122.99999999999997,220.89999999999998,-122.79999999999997,221.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-122.69999999999997,221.79999999999998,-122.49999999999997,222.2,-122.29999999999997,222.6);
  Pond.ctxScratch.bezierCurveTo(-121.99999999999997,223,-121.59999999999997,223.29999999999998,-121.19999999999997,223.5);
  Pond.ctxScratch.lineTo(-98.89999999999998,231.7);
  Pond.ctxScratch.lineTo(-98.89999999999998,231.89999999999998);
  Pond.ctxScratch.bezierCurveTo(-98.89999999999998,231.99999999999997,-98.89999999999998,232.2,-98.99999999999997,232.39999999999998);
  Pond.ctxScratch.bezierCurveTo(-99.19999999999997,232.7,-99.29999999999997,232.89999999999998,-99.39999999999998,232.99999999999997);
  Pond.ctxScratch.lineTo(-99.49999999999997,232.99999999999997);
  Pond.ctxScratch.lineTo(-124.89999999999998,223.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-125.19999999999997,223.7,-125.39999999999998,223.7,-125.69999999999997,223.6);
  Pond.ctxScratch.bezierCurveTo(-126.39999999999998,223.6,-127.09999999999998,223.79999999999998,-127.69999999999997,224.29999999999998);
  Pond.ctxScratch.bezierCurveTo(-128.59999999999997,224.79999999999998,-129.2,225.6,-129.49999999999997,226.49999999999997);
  Pond.ctxScratch.bezierCurveTo(-129.69999999999996,226.89999999999998,-129.69999999999996,227.29999999999998,-129.79999999999998,227.79999999999998);
  Pond.ctxScratch.bezierCurveTo(-129.79999999999998,228.2,-129.79999999999998,228.7,-129.7,229.1);
  Pond.ctxScratch.bezierCurveTo(-129.6,229.6,-129.5,230.1,-129.2,230.6);
  Pond.ctxScratch.bezierCurveTo(-128.89999999999998,231,-128.5,231.4,-128.1,231.5);
  Pond.ctxScratch.lineTo(-101.9,241);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.moveTo(-124,248);
  Pond.ctxScratch.lineTo(-124,248);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(-125,234);
  Pond.ctxScratch.lineTo(-125,234);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
};

Pond.cape = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.216,.216);
  Pond.ctxScratch.translate(436,470);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(632.1,281.5);
  Pond.ctxScratch.bezierCurveTo(625.9,300.8,623.6,307,620.3000000000001,342.9);
  Pond.ctxScratch.bezierCurveTo(619.0000000000001,356.29999999999995,616.7,383.59999999999997,617.8000000000001,408.09999999999997);
  Pond.ctxScratch.lineTo(626.5000000000001,453.29999999999995);
  Pond.ctxScratch.bezierCurveTo(627.1000000000001,455.69999999999993,627.8000000000001,458.4,628.4000000000001,461.29999999999995);
  Pond.ctxScratch.bezierCurveTo(631.6000000000001,465.9,650.2,493.49999999999994,667.3000000000001,542);
  Pond.ctxScratch.bezierCurveTo(751.8000000000001,504.5,821.6000000000001,460.6,821.6000000000001,460.6);
  Pond.ctxScratch.bezierCurveTo(773.4000000000001,466.5,708.4000000000001,320.3,661.7000000000002,194.60000000000002);
  Pond.ctxScratch.lineTo(656.6000000000001,190.00000000000003);
  Pond.ctxScratch.bezierCurveTo(650.4,248.9,634.7,273.4,632.1,281.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(321.2,460.8);
  Pond.ctxScratch.lineTo(320.8,460.6);
  Pond.ctxScratch.lineTo(329,407.70000000000005);
  Pond.ctxScratch.lineTo(329,407.70000000000005);
  Pond.ctxScratch.bezierCurveTo(331.1,380.00000000000006,332.1,349.50000000000006,331.6,342.30000000000007);
  Pond.ctxScratch.bezierCurveTo(328,291.30000000000007,325.70000000000005,289.70000000000005,323.1,277.30000000000007);
  Pond.ctxScratch.bezierCurveTo(320.5,265.9000000000001,303.5,238.40000000000006,299.6,183.50000000000006);
  Pond.ctxScratch.lineTo(297,186.10000000000005);
  Pond.ctxScratch.bezierCurveTo(251.7,315.50000000000006,186.7,470.6,138.3,460.5);
  Pond.ctxScratch.bezierCurveTo(138.3,460.5,204.5,501.8,284.8,538.5);
  Pond.ctxScratch.bezierCurveTo(299.5,496.7,315.2,470.1,321.2,460.8);
  Pond.ctxScratch.bezierCurveTo(321.2,460.8,321.2,460.8,321.2,460.8);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(420.3,27.6);
  Pond.ctxScratch.bezierCurveTo(420.3,27.700000000000003,416.90000000000003,37.400000000000006,407.5,44.3);
  Pond.ctxScratch.bezierCurveTo(407.5,44.199999999999996,407.5,44.199999999999996,407.4,44.199999999999996);
  Pond.ctxScratch.bezierCurveTo(407.2,43.9,407.09999999999997,43.699999999999996,406.9,43.4);
  Pond.ctxScratch.bezierCurveTo(406.9,43.8,407,44.199999999999996,407,44.6);
  Pond.ctxScratch.bezierCurveTo(405.6,45.6,404,46.6,402.2,47.4);
  Pond.ctxScratch.bezierCurveTo(396.09999999999997,50.3,388.3,51.9,378.2,50.199999999999996);
  Pond.ctxScratch.bezierCurveTo(366.9,48.3,360.3,42.49999999999999,356.3,36.39999999999999);
  Pond.ctxScratch.bezierCurveTo(352.8,36.89999999999999,349,37.599999999999994,344.5,38.39999999999999);
  Pond.ctxScratch.bezierCurveTo(348.4,25.499999999999993,350.5,17.999999999999993,350.5,17.999999999999993);
  Pond.ctxScratch.lineTo(350.6,17.999999999999993);
  Pond.ctxScratch.bezierCurveTo(350.70000000000005,17.999999999999993,350.8,17.999999999999993,350.90000000000003,17.999999999999993);
  Pond.ctxScratch.bezierCurveTo(351.00000000000006,17.999999999999993,351.20000000000005,17.999999999999993,351.40000000000003,18.099999999999994);
  Pond.ctxScratch.lineTo(352.00000000000006,18.199999999999996);
  Pond.ctxScratch.bezierCurveTo(352.20000000000005,18.199999999999996,352.50000000000006,18.299999999999997,352.80000000000007,18.299999999999997);
  Pond.ctxScratch.bezierCurveTo(361,19.6,390.3,23.9,420.3,27.6);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(609.6,42.4);
  Pond.ctxScratch.bezierCurveTo(607.8000000000001,41.8,606,41.3,604,40.699999999999996);
  Pond.ctxScratch.bezierCurveTo(602.4,40.3,600.5,39.3,596.3,38.199999999999996);
  Pond.ctxScratch.bezierCurveTo(592.4,44.099999999999994,585.9,49.699999999999996,575.0999999999999,51.699999999999996);
  Pond.ctxScratch.bezierCurveTo(572.4999999999999,52.199999999999996,570.0999999999999,52.4,567.8,52.49999999999999);
  Pond.ctxScratch.bezierCurveTo(567.3,52.49999999999999,566.9,52.49999999999999,566.4,52.49999999999999);
  Pond.ctxScratch.bezierCurveTo(565.1999999999999,52.49999999999999,563.9,52.39999999999999,562.8,52.199999999999996);
  Pond.ctxScratch.bezierCurveTo(559.5999999999999,51.8,556.8,50.99999999999999,554.3,49.9);
  Pond.ctxScratch.bezierCurveTo(543.4,45,538.5,34.599999999999994,536.6999999999999,29.5);
  Pond.ctxScratch.bezierCurveTo(536.4,28.6,536.0999999999999,27.9,535.9999999999999,27.3);
  Pond.ctxScratch.bezierCurveTo(535.8999999999999,26.8,535.7999999999998,26.6,535.7999999999998,26.6);
  Pond.ctxScratch.lineTo(602.1999999999998,19);
  Pond.ctxScratch.bezierCurveTo(602.1999999999998,19,602.1999999999998,19.1,602.1999999999998,19.1);
  Pond.ctxScratch.bezierCurveTo(602.2999999999998,19.1,602.3999999999999,19.1,602.3999999999999,19.1);
  Pond.ctxScratch.bezierCurveTo(602.3999999999999,19.1,604.9,27.8,609.6,42.4);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
};

Pond.shield = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.19,.19);
  Pond.ctxScratch.translate(1390,500);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.arc(288,280,253.7,0,6.283185307179586,true);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.arc(288,280,199.7,0,6.283185307179586,true);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.moveTo(288.5,85.6);
  Pond.ctxScratch.lineTo(345.5,201.1);
  Pond.ctxScratch.lineTo(472.9,219.6);
  Pond.ctxScratch.lineTo(380.7,309.5);
  Pond.ctxScratch.lineTo(402.5,436.4);
  Pond.ctxScratch.lineTo(288.5,376.5);
  Pond.ctxScratch.lineTo(174.5,436.4);
  Pond.ctxScratch.lineTo(196.2,309.5);
  Pond.ctxScratch.lineTo(104,219.6);
  Pond.ctxScratch.lineTo(231.5,201.1);
  Pond.ctxScratch.lineTo(288.5,85.6);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
};

Pond.belt = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.42,.42);
  Pond.ctxScratch.translate(335,438);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(217,46.4);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.lineTo(216.9,46.4);
  Pond.ctxScratch.lineTo(217,46.4);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ff9559";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(216.9,46.5);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.lineTo(138.10000000000002,82.7);
  Pond.ctxScratch.lineTo(50.10000000000002,46.5);
  Pond.ctxScratch.lineTo(50.00000000000002,46.5);
  Pond.ctxScratch.bezierCurveTo(50.30000000000002,45.1,50.60000000000002,43.9,51.00000000000002,42.7);
  Pond.ctxScratch.bezierCurveTo(52.200000000000024,39,53.30000000000002,29.300000000000004,54.10000000000002,18.700000000000003);
  Pond.ctxScratch.lineTo(54.300000000000026,17.700000000000003);
  Pond.ctxScratch.lineTo(134.4,51);
  Pond.ctxScratch.lineTo(138.70000000000002,52.8);
  Pond.ctxScratch.lineTo(143.3,50.599999999999994);
  Pond.ctxScratch.lineTo(143.20000000000002,50.599999999999994);
  Pond.ctxScratch.lineTo(211,17.7);
  Pond.ctxScratch.bezierCurveTo(212,25.299999999999997,212.4,32.5,214.3,37.4);
  Pond.ctxScratch.bezierCurveTo(214.9,38.9,215.70000000000002,41.1,216.4,43.699999999999996);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(216.9,46.5);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.lineTo(216.8,46.5);
  Pond.ctxScratch.lineTo(216.9,46.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();
};

Pond.logo = function(){
  Pond.ctxScratch.save();
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.translate(0,0);
  Pond.ctxScratch.scale(.32,.32);
  Pond.ctxScratch.translate(510,412);
  Pond.ctxScratch.strokeStyle = 'rgba(0,0,0,0)';
  Pond.ctxScratch.lineCap = 'butt';
  Pond.ctxScratch.lineJoin = 'miter';
  Pond.ctxScratch.miterLimit = 4;
  Pond.ctxScratch.save();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.arc(104.6,82.7,73.6,0,6.283185307179586,true);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fillStyle = "#f9ae5c";
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.save();
  Pond.ctxScratch.fillStyle = "#ffffff";
  Pond.ctxScratch.beginPath();
  Pond.ctxScratch.moveTo(104.6,35.5);
  Pond.ctxScratch.lineTo(118.5,63.7);
  Pond.ctxScratch.lineTo(149.6,68.3);
  Pond.ctxScratch.lineTo(127.1,90.2);
  Pond.ctxScratch.lineTo(132.4,121.3);
  Pond.ctxScratch.lineTo(104.6,106.6);
  Pond.ctxScratch.lineTo(76.7,121.3);
  Pond.ctxScratch.lineTo(82,90.2);
  Pond.ctxScratch.lineTo(59.5,68.3);
  Pond.ctxScratch.lineTo(90.6,63.7);
  Pond.ctxScratch.lineTo(104.6,35.5);
  Pond.ctxScratch.closePath();
  Pond.ctxScratch.fill();
  Pond.ctxScratch.stroke();
  Pond.ctxScratch.restore();
  Pond.ctxScratch.restore();	
};

Pond.renderSuperhero_ = function() {
	Pond.ctxSuperhero = document.getElementById('superhero').getContext('2d');
  /*Pond.ctxScratch.fillStyle = 'white';
  Pond.ctxScratch.fillRect(0, 0,
  Pond.ctxScratch.canvas.width, Pond.ctxScratch.canvas.height);*/
  var img = new Image();
  img.onload = function() {
	  Pond.ctxSuperhero.drawImage(img, -295, 0, 990,396);
  }
  img.src = "pond/superhero.svg";
};


Pond.showError = function(currentBlock) {
  var error = document.getElementById('error');
  var origin = document.getElementById('blockly');
  var style = {
    width: '50%',
    left: '25%',
    //top: '6em'
  };
  BlocklyDialogs.showDialog(error, blockly, true, true, style,
      BlocklyDialogs.stopDialogKeyDown);
  BlocklyDialogs.startDialogKeyDown();
  
  BlocklyGames.workspace.removeTopBlock(currentBlock);
  
};

