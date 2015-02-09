
var temp = require('temp');
var fs = require('fs');
var path = require('path');

var Repository = require('../js/Repository');

exports.setUp = function(callback) {
	temp.track();
	 callback();
};

exports.tearDown = function(callback) {
	temp.cleanupSync();
	callback();
};

exports.init = {

	createInUnexsistingFolder: function(test) {
		test.expect(1);  
		//given
		var UNEXISTING_DIR = path.join(temp.mkdirSync(), 'repository');
		//when
		var repository = new Repository({
			path: UNEXISTING_DIR
		});
		repository.init({
			error: function(err) {
				test.fail(err);
				test.done();
			},
			success: function() {
				test.ok(fs.existsSync(UNEXISTING_DIR));
				test.done();
			}
		});
		
	},
	createInExsistingFolder: function(test) {
		 test.expect(1);  
		//given
		var UNEXISTING_DIR = temp.mkdirSync();
		//when
		var repository = new Repository({
			path: UNEXISTING_DIR
		});
		repository.init({
			error: function(err) {
				test.fail(err);
				test.done();
			},
			success: function() {
				test.ok(fs.existsSync(UNEXISTING_DIR));
				test.done();
			}
		});
		
	}

};