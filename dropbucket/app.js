
var path = require('path');
var express = require('express');
var WORKING_DIR = path.dirname(module.filename);

exports.init = function(app){
	app.get("/dropbucket/application", function(req, res) {
		res.render("standaloneApplication", {});
	});
	app.use("/dropbucket/", express.static(path.join(__dirname, 'public')));
	
};