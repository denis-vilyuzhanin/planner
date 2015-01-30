
var path = require('path');
var express = require('express');
var WORKING_DIR = path.dirname(module.filename);

exports.init = function(app){
	app.use("/dropbucket/", express.static(path.join(__dirname, 'public')));
}