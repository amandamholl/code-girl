// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">Code Girl</span><span id="Index_clear">Delete all your solutions?</span></div>';
};


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div id="login"><FORM><BUTTON class="login" Type="BUTTON" ONCLICK="window.location.href=\'/login\'">Login or Sign Up </BUTTON></FORM></div></div><select id="languageMenu"></select><div class="carousel"><div><img src="./index/banner2-01.svg"></div><div><img src="./index/banner-01.svg"></div><div><img src="./index/banner3-01.svg"></div></div><p id="clearDataPara" style="visibility: hidden">Want to start over?<button class="secondary" id="clearData">Clear data</span></button></p>';
};


Index.soy.appLink = function(opt_data, opt_ignored, opt_ijData) {
  return '<svg height="150" width="160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="' + soy.$$escapeHtml(opt_data.x) + '%" y="' + soy.$$escapeHtml(opt_data.y) + '%"><path d="M 41.11,98.89 A 55 55 0 1 1 118.89,98.89" class="gaugeBack" id="back-' + soy.$$escapeHtml(opt_data.app) + '" /><g class="icon" id="icon-' + soy.$$escapeHtml(opt_data.app) + '"><circle cx=80 cy=60 r=50 class="iconBack" /><image xlink:href="index/' + soy.$$escapeHtml(opt_data.app) + '.png" height="100" width="100" x=30 y=10 />' + ((opt_ijData.html) ? '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '<circle cx=80 cy=60 r=50 class="iconBorder" /><path d="M 21.11,98.89 A 55 55 0 1 1 21.11,98.89" class="gaugeFront" id="gauge-' + soy.$$escapeHtml(opt_data.app) + '" /><text x="80" y="135">' + soy.$$escapeHtml(opt_data.contentText) + '</text></a></g></svg>';
};
