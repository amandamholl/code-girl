/**
 * Blockly Games: Common code for dialogs.
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

'use strict';

goog.provide('BlocklyDialogs');

goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('Blockly');


/**
 * Is the dialog currently onscreen?
 * @private
 */
BlocklyDialogs.isDialogVisible_ = false;

/**
 * A closing dialog should animate towards this element.
 * @type Element
 * @private
 */
BlocklyDialogs.dialogOrigin_ = null;

/**
 * A function to call when a dialog closes.
 * @type Function
 * @private
 */
BlocklyDialogs.dialogDispose_ = null;

BlocklyDialogs.APPS = ['puzzle', 'turtle', 'movie', 'bird', 'maze', 'pond'];

/**
 * Show the dialog pop-up.
 * @param {!Element} content DOM element to display in the dialog.
 * @param {Element} origin Animate the dialog opening/closing from/to this
 *     DOM element.  If null, don't show any animations for opening or closing.
 * @param {boolean} animate Animate the dialog opening (if origin not null).
 * @param {boolean} modal If true, grey out background and prevent interaction.
 * @param {!Object} style A dictionary of style rules for the dialog.
 * @param {Function} disposeFunc An optional function to call when the dialog
 *     closes.  Normally used for unhooking events.
 */
BlocklyDialogs.showDialog = function(content, origin, animate, modal, style,
                                  disposeFunc) {
  if (BlocklyDialogs.isDialogVisible_) {
    BlocklyDialogs.hideDialog(false);
  }
  Blockly.hideChaff(true);
  BlocklyDialogs.isDialogVisible_ = true;
  BlocklyDialogs.dialogOrigin_ = origin;
  BlocklyDialogs.dialogDispose_ = disposeFunc;
  var dialog = document.getElementById('dialog');
  var shadow = document.getElementById('dialogShadow');
  var border = document.getElementById('dialogBorder');

  // Copy all the specified styles to the dialog.
  for (var name in style) {
    dialog.style[name] = style[name];
  }
  if (modal) {
    shadow.style.visibility = 'visible';
    shadow.style.opacity = 0.3;
    shadow.style.zIndex = 9;
    var header = document.createElement('div');
    header.id = 'dialogHeader';
    dialog.appendChild(header);
    BlocklyDialogs.dialogMouseDownWrapper_ =
        Blockly.bindEvent_(header, 'mousedown', null,
                           BlocklyDialogs.dialogMouseDown_);
  }
  dialog.appendChild(content);
  content.className = content.className.replace('dialogHiddenContent', '');

  function endResult() {
    // Check that the dialog wasn't closed during opening.
    if (BlocklyDialogs.isDialogVisible_) {
      dialog.style.visibility = 'visible';
      dialog.style.zIndex = 10;
      border.style.visibility = 'hidden';
    }
  }
  if (animate && origin) {
    BlocklyDialogs.matchBorder_(origin, false, 0.2);
    BlocklyDialogs.matchBorder_(dialog, true, 0.8);
    // In 175ms show the dialog and hide the animated border.
    setTimeout(endResult, 175);
  } else {
    // No animation.  Just set the final state.
    endResult();
  }
};

/**
 * Horizontal start coordinate of dialog drag.
 */
BlocklyDialogs.dialogStartX_ = 0;

/**
 * Vertical start coordinate of dialog drag.
 */
BlocklyDialogs.dialogStartY_ = 0;

/**
 * Handle start of drag of dialog.
 * @param {!Event} e Mouse down event.
 * @private
 */
BlocklyDialogs.dialogMouseDown_ = function(e) {
  BlocklyDialogs.dialogUnbindDragEvents_();
  if (Blockly.isRightButton(e)) {
    // Right-click.
    return;
  }
  // Left click (or middle click).
  // Record the starting offset between the current location and the mouse.
  var dialog = document.getElementById('dialog');
  BlocklyDialogs.dialogStartX_ = dialog.offsetLeft - e.clientX;
  BlocklyDialogs.dialogStartY_ = dialog.offsetTop - e.clientY;

  BlocklyDialogs.dialogMouseUpWrapper_ = Blockly.bindEvent_(document,
      'mouseup', null, BlocklyDialogs.dialogUnbindDragEvents_);
  BlocklyDialogs.dialogMouseMoveWrapper_ = Blockly.bindEvent_(document,
      'mousemove', null, BlocklyDialogs.dialogMouseMove_);
  // This event has been handled.  No need to bubble up to the document.
  e.stopPropagation();
};

/**
 * Drag the dialog to follow the mouse.
 * @param {!Event} e Mouse move event.
 * @private
 */
BlocklyDialogs.dialogMouseMove_ = function(e) {
  var dialog = document.getElementById('dialog');
  var dialogLeft = BlocklyDialogs.dialogStartX_ + e.clientX;
  var dialogTop = BlocklyDialogs.dialogStartY_ + e.clientY;
  dialogTop = Math.max(dialogTop, 0);
  dialogTop = Math.min(dialogTop, window.innerHeight - dialog.offsetHeight);
  dialogLeft = Math.max(dialogLeft, 0);
  dialogLeft = Math.min(dialogLeft, window.innerWidth - dialog.offsetWidth);
  dialog.style.left = dialogLeft + 'px';
  dialog.style.top = dialogTop + 'px';
};

/**
 * Stop binding to the global mouseup and mousemove events.
 * @private
 */
BlocklyDialogs.dialogUnbindDragEvents_ = function() {
  if (BlocklyDialogs.dialogMouseUpWrapper_) {
    Blockly.unbindEvent_(BlocklyDialogs.dialogMouseUpWrapper_);
    BlocklyDialogs.dialogMouseUpWrapper_ = null;
  }
  if (BlocklyDialogs.dialogMouseMoveWrapper_) {
    Blockly.unbindEvent_(BlocklyDialogs.dialogMouseMoveWrapper_);
    BlocklyDialogs.dialogMouseMoveWrapper_ = null;
  }
};

/**
 * Hide the dialog pop-up.
 * @param {boolean} opt_animate Animate the dialog closing.  Defaults to true.
 *     Requires that origin was not null when dialog was opened.
 */
BlocklyDialogs.hideDialog = function(opt_animate) {
  if (!BlocklyDialogs.isDialogVisible_) {
    return;
  }
  BlocklyDialogs.dialogUnbindDragEvents_();
  if (BlocklyDialogs.dialogMouseDownWrapper_) {
    Blockly.unbindEvent_(BlocklyDialogs.dialogMouseDownWrapper_);
    BlocklyDialogs.dialogMouseDownWrapper_ = null;
  }

  BlocklyDialogs.isDialogVisible_ = false;
  BlocklyDialogs.dialogDispose_ && BlocklyDialogs.dialogDispose_();
  BlocklyDialogs.dialogDispose_ = null;
  var origin = (opt_animate === false) ? null : BlocklyDialogs.dialogOrigin_;
  var dialog = document.getElementById('dialog');
  var shadow = document.getElementById('dialogShadow');

  shadow.style.opacity = 0;

  function endResult() {
    shadow.style.zIndex = -1;
    shadow.style.visibility = 'hidden';
    var border = document.getElementById('dialogBorder');
    border.style.visibility = 'hidden';
  }
  if (origin) {
    BlocklyDialogs.matchBorder_(dialog, false, 0.8);
    BlocklyDialogs.matchBorder_(origin, true, 0.2);
    // In 175ms hide both the shadow and the animated border.
    setTimeout(endResult, 175);
  } else {
    // No animation.  Just set the final state.
    endResult();
  }
  dialog.style.visibility = 'hidden';
  dialog.style.zIndex = -1;
  var header = document.getElementById('dialogHeader');
  if (header) {
    header.parentNode.removeChild(header);
  }
  while (dialog.firstChild) {
    var content = dialog.firstChild;
    content.className += ' dialogHiddenContent';
    document.body.appendChild(content);
  }
};

/**
 * Match the animated border to the a element's size and location.
 * @param {!Element} element Element to match.
 * @param {boolean} animate Animate to the new location.
 * @param {number} opacity Opacity of border.
 * @private
 */
BlocklyDialogs.matchBorder_ = function(element, animate, opacity) {
  if (!element) {
    return;
  }
  var border = document.getElementById('dialogBorder');
  var bBox = BlocklyDialogs.getBBox_(element);
  function change() {
    border.style.width = bBox.width + 'px';
    border.style.height = bBox.height + 'px';
    border.style.left = bBox.x + 'px';
    border.style.top = bBox.y + 'px';
    border.style.opacity = opacity;
  }
  if (animate) {
    border.className = 'dialogAnimate';
    setTimeout(change, 1);
  } else {
    border.className = '';
    change();
  }
  border.style.visibility = 'visible';
};

/**
 * Compute the absolute coordinates and dimensions of an HTML or SVG element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
BlocklyDialogs.getBBox_ = function(element) {
  if (element.getBBox) {
    // SVG element.
    var bBox = element.getBBox();
    var height = bBox.height;
    var width = bBox.width;
    var xy = Blockly.getAbsoluteXY_(element);
    var x = xy.x;
    var y = xy.y;
  } else {
    // HTML element.
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
  }
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * Display a storage-related modal dialog.
 * @param {string} message Text to alert.
 */
BlocklyDialogs.storageAlert = function(message) {
  var container = document.getElementById('containerStorage');
  container.textContent = '';
  var lines = message.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(lines[i]));
    container.appendChild(p);
  }

  var content = document.getElementById('dialogStorage');
  var origin = document.getElementById('linkButton');
  var style = {
    width: '50%',
    left: '25%',
    top: '5em'
  };
  BlocklyDialogs.showDialog(content, origin, true, true, style,
      BlocklyDialogs.stopDialogKeyDown);
  BlocklyDialogs.startDialogKeyDown();
};

/**
 * Display a dialog suggesting that the user give up.
 */
BlocklyDialogs.abortOffer = function() {
  // If the user has solved the level, all is well.
  if (BlocklyGames.loadFromLocalStorage(BlocklyGames.NAME,
                                        BlocklyGames.LEVEL)) {
    return;
  }
  // Don't override an existing dialog, or interrupt a drag.
  if (BlocklyDialogs.isDialogVisible_ || Blockly.Block.dragMode_ != 0) {
    setTimeout(BlocklyDialogs.abortOffer, 15 * 1000);
    return;
  }

  var content = document.getElementById('dialogAbort');
  var style = {
    width: '40%',
    left: '30%',
    //top: '3em'
  };

  var cancel = document.getElementById('abortCancel');
  cancel.addEventListener('click', BlocklyDialogs.hideDialog, true);
  cancel.addEventListener('touchend', BlocklyDialogs.hideDialog, true);
  var ok = document.getElementById('abortOk');
  ok.addEventListener('click', BlocklyInterface.indexPage, true);
  ok.addEventListener('touchend', BlocklyInterface.indexPage, true);

  BlocklyDialogs.showDialog(content, null, false, true, style,
      function() {
        document.body.removeEventListener('keydown',
            BlocklyDialogs.abortKeyDown, true);
        });
  document.body.addEventListener('keydown', BlocklyDialogs.abortKeyDown, true);
};

/**
 * Congratulates the user for completing the level and offers to
 * direct them to the next level, if available.
 */
BlocklyDialogs.levelup = function() {
  var content = document.getElementById('dialogDone');
  var style = {
    width: '40%',
    left: '30%',
    //top: '3em'
  };

  // Add the user's code.
  if (Blockly.mainWorkspace) {
    var linesText = document.getElementById('dialogLinesText');
    linesText.textContent = 'Play a challenge to unlock new features.';
  };

  //var congrats = document.getElementById('dialogCongrats');
  //content.removeChild(congrats);

  var code = document.getElementById('containerCode');
  content.removeChild(code);

  if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
    var text = BlocklyGames.getMsg('Games_nextLevel')
        .replace('%1', BlocklyGames.LEVEL + 1);
  } else {
    var text = BlocklyGames.getMsg('Games_finalLevel');
  }
  //linesText.appendChild(document.createTextNode(text));

  var cancel = document.getElementById('doneCancel');
  cancel.addEventListener('click', BlocklyDialogs.hideDialog, true);
  cancel.addEventListener('touchend', BlocklyDialogs.hideDialog, true);
  var ok = document.getElementById('doneOk');

  /*if(BlocklyGames.LEVEL == 1){
  	ok.addEventListener('click', function(){window.open('/puzzle','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/puzzle','_self')}, true);
  }*/
  if(BlocklyGames.LEVEL == 1){
  	ok.addEventListener('click', function(){window.open('/turtle','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/turtle','_self')}, true);
  }
  if(BlocklyGames.LEVEL == 2){
  	ok.addEventListener('click', function(){window.open('/turtle?lang=en?level=2','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/turtle?lang=en?level=2','_self')}, true);
  }
  if(BlocklyGames.LEVEL == 3){
  	ok.addEventListener('click', function(){window.open('/bird?lang=en?level=3','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/bird?lang=en?level=3','_self')}, true);
  }
  if(BlocklyGames.LEVEL == 4){
  	ok.addEventListener('click', function(){window.open('/maze?lang=en?level=5','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/maze?lang=en?level=5','_self')}, true);
  }
  if(BlocklyGames.LEVEL == 5){
  	ok.addEventListener('click', function(){window.open('/maze?lang=en?level=6','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/maze?lang=en?level=6','_self')}, true);
  }
  if(BlocklyGames.LEVEL == 6){
  	ok.addEventListener('click', function(){window.open('/dress','_self')}, true);
  	ok.addEventListener('touchend', function(){window.open('/dress','_self')}, true);
  }
  BlocklyDialogs.showDialog(content, null, false, true, style,
      function() {
        document.body.removeEventListener('keydown',
            BlocklyDialogs.congratulationsKeyDown, true);
        });
  document.body.addEventListener('keydown',
      BlocklyDialogs.congratulationsKeyDown, true);

  //document.getElementById('dialogDoneText').textContent = text;
};

/* Function to download image created by exporting the avatar.
From https://github.com/PixelsCommander/Download-File-JS/blob/master/src/download.js */
window.downloadFile = function (sUrl) {

    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
        alert('Your device does not support files downloading. Please try again in desktop browser.');
        return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
        //Creating new link node.
        var link = document.createElement('a');
        link.href = sUrl;

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = 'CodeGirl';
            link.download = fileName;
        }

        //Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
        sUrl += '?download';
    }

    window.open(sUrl, '_self');
    return true;
}

window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

/**
 * Congratulates the user for completing the avatar creation. Returns them to the home page.
 */
BlocklyDialogs.done = function() {
  var content = document.getElementById('dialogDone');
  var style = {
    width: '40%',
    left: '30%',
    //top: '6em'
  };

  document.getElementById('clearData').style.visibility = "visible";

  // Add the user's code.
  if (Blockly.mainWorkspace) {
    var linesText = document.getElementById('dialogLinesText');
    linesText.textContent = 'You have finished creating your avatar! Click "OK" to save a picture of your avatar or "Cancel" continue dressing up your avatar. Press "Start Over" to play again.';
  };

  var code = document.getElementById('containerCode');
  if(code)
    content.removeChild(code);

  var clearButton = document.getElementById('clearData');
  BlocklyGames.bindClick(clearButton, BlocklyDialogs.clearData_);

  var cancel = document.getElementById('doneCancel');
  cancel.addEventListener('click', BlocklyDialogs.hideDialog, true);
  cancel.addEventListener('touchend', BlocklyDialogs.hideDialog, true);

  var ok = document.getElementById('doneOk');
  document.getElementById('doneOk').innerHTML='OK';

  ok.addEventListener('click', function(){
    render();
  }, true);
  ok.addEventListener('touchend', function(){
    render();
  }, true);

  BlocklyDialogs.showDialog(content, null, false, true, style,
      function() {
        document.body.removeEventListener('keydown',
            BlocklyDialogs.congratulationsKeyDown, true);
        });
  document.body.addEventListener('keydown',
      BlocklyDialogs.congratulationsKeyDown, true);

  //document.getElementById('dialogDoneText').textContent = text;
};

/**
 * Login Dialog
 */
BlocklyDialogs.login = function() {
	alert('login');
  var content = document.getElementById('login');
  var style = {
    width: '40%',
    left: '30%',
    //top: '3em'
  };
}

/**
 * Congratulates the user for completing the level and offers to
 * direct them to the next level, if available.
 */
BlocklyDialogs.congratulations = function() {
  var content = document.getElementById('dialogDone');
  var style = {
    width: '40%',
    left: '30%',
    top: '6em'
  };
  // Add the user's code.
  if (Blockly.mainWorkspace) {
    var linesText = document.getElementById('dialogLinesText');
    linesText.textContent = '';
    /*var code = Blockly.JavaScript.workspaceToCode();
    code = BlocklyInterface.stripCode(code);
    var lineCount = code.split('\n').length;*/
	if (BlocklyGames.LEVEL < BlocklyGames.MAX_LEVEL) {
			var text = BlocklyGames.getMsg('Games_nextLevel')
				.replace('%1', BlocklyGames.LEVEL + 1);
	} else {
				var text = BlocklyGames.getMsg('Games_finalLevel');
	}

    var pre = document.getElementById('containerCode');
	//alert("here");
	if(BlocklyGames.NAME == 'puzzle'){
		pre.innerHTML="<p>Grace is a superhero. <br/>Dress her up for her first mission.</p>";
		var next = document.getElementById('Games_nextLevel');
		next.parentElement.removeChild(next);
	}
	else if(BlocklyGames.NAME == 'turtle' && BlocklyGames.LEVEL == 1){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/pants.svg' height='75px' border=0/><img class='featureUnlocked' src='./movie/long_skirt.svg' height='75px' border=0/>";
	}
	else if(BlocklyGames.NAME == 'turtle' && BlocklyGames.LEVEL == 2){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/shoe.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hightop.svg' width='80px' border=0/>";
	}
	else if(BlocklyGames.NAME == 'bird' && BlocklyGames.LEVEL == 3){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/baseball.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/retro_glasses.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/necklace.svg' width='80px' border=0/>";
	}
	else if(BlocklyGames.NAME == 'maze' && BlocklyGames.LEVEL == 5){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/briefcase.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/purse.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/backpack.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/fancy_purse.svg' width='80px' border=0/>";
	}
	else if(BlocklyGames.NAME == 'maze' && BlocklyGames.LEVEL == 6){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/dress.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/crown.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/wand.svg' width='80px' border=0/>";
	}
	else if(BlocklyGames.NAME == 'pond-basic' && BlocklyGames.LEVEL == 1){
		pre.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/cape.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/shield.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask2.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/logo.svg' width='80px' border=0/>";
	};
  }
  var cancel = document.getElementById('doneCancel');
  cancel.addEventListener('click', BlocklyDialogs.hideDialog, true);
  cancel.addEventListener('touchend', BlocklyDialogs.hideDialog, true);
  var ok = document.getElementById('doneOk');

  ok.addEventListener('click', BlocklyInterface.nextLevel, true);
  ok.addEventListener('touchend', BlocklyInterface.nextLevel, true);

  BlocklyDialogs.showDialog(content, null, false, true, style,
      function() {
        document.body.removeEventListener('keydown',
            BlocklyDialogs.congratulationsKeyDown, true);
        });
  document.body.addEventListener('keydown',
      BlocklyDialogs.congratulationsKeyDown, true);

  var endMessage = document.getElementById('dialogDoneText')
  endMessage.innerHTML = text;
  if(BlocklyGames.NAME == 'turtle' && BlocklyGames.LEVEL == 1){
	  endMessage.innerHTML += "<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>";
  }
};

/**
 * If the user preses enter, escape, or space, hide the dialog.
 * @param {!Event} e Keyboard event.
 * @private
 */
BlocklyDialogs.dialogKeyDown_ = function(e) {
  if (BlocklyDialogs.isDialogVisible_) {
    if (e.keyCode == 13 ||
        e.keyCode == 27 ||
        e.keyCode == 32) {
      BlocklyDialogs.hideDialog(true);
      e.stopPropagation();
      e.preventDefault();
    }
  }
};

/**
 * Start listening for BlocklyDialogs.dialogKeyDown_.
 */
BlocklyDialogs.startDialogKeyDown = function() {
  document.body.addEventListener('keydown',
      BlocklyDialogs.dialogKeyDown_, true);
};

/**
 * Stop listening for BlocklyDialogs.dialogKeyDown_.
 */
BlocklyDialogs.stopDialogKeyDown = function() {
  document.body.removeEventListener('keydown',
      BlocklyDialogs.dialogKeyDown_, true);
};

/**
 * If the user preses enter, escape, or space, hide the dialog.
 * Enter and space move to the next level, escape does not.
 * @param {!Event} e Keyboard event.
 */
BlocklyDialogs.congratulationsKeyDown = function(e) {
  if (e.keyCode == 13 ||
      e.keyCode == 27 ||
      e.keyCode == 32) {
    BlocklyDialogs.hideDialog(true);
    e.stopPropagation();
    e.preventDefault();
    if (e.keyCode != 27) {
      BlocklyInterface.nextLevel();
    }
  }
};

/**
 * If the user presses enter, escape, or space, hide the dialog.
 * Enter and space move to the index page, escape does not.
 * @param {!Event} e Keyboard event.
 */
BlocklyDialogs.abortKeyDown = function(e) {
  if (e.keyCode == 13 ||
      e.keyCode == 27 ||
      e.keyCode == 32) {
    BlocklyDialogs.hideDialog(true);
    e.stopPropagation();
    e.preventDefault();
    if (e.keyCode != 27) {
      BlocklyInterface.indexPage();
    }
  }
};

/**
 * Clear all stored data.
 * @private
 */
BlocklyDialogs.clearData_ = function() {
  /*if (!confirm(BlocklyGames.getMsg('Index_clear'))) {
    return;
  }*/
  for (var i = 0; i < BlocklyDialogs.APPS.length; i++) {
    for (var j = 1; j <= BlocklyGames.MAX_LEVEL; j++) {
      delete window.localStorage[BlocklyDialogs.APPS[i] + j];
    }
  }
  location.assign('/puzzle');
};

// Export symbols that would otherwise be renamed by Closure compiler.
// templace.soy has a hardcoded onclick="BlocklyDialogs.hidedialogs()".
window['BlocklyDialogs'] = BlocklyDialogs;
BlocklyDialogs['hideDialog'] = BlocklyDialogs.hideDialog;
