
var path = require('path');
var express = require('express');
var eventsourcing = require('eventsourcing');
var WORKING_DIR = path.dirname(module.filename);

exports.init = function(app){
	app.get("/dropbucket/application", function(req, res) {
		res.render("standaloneApplication", {});
	});
	app.use("/dropbucket/", express.static(path.join(__dirname, 'public')));
	
	require('./services/dropbucketService').init(app);
	
	eventsourcing.Repository();
};