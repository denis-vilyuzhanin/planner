
var temp = require('temp');
var fs = require('fs');
var path = require('path');
temp.track();
var tempDir = temp.mkdirSync(); 

var Repository = require('../js/Repository');

exports.setUp = function(callback) {
	 callback();
};

exports.tearDown = function(callback) {
	 callback();
};

exports.init = {

	createInUnexsistingFolder: function(test) {
		 test.expect(1);  
		//given
		var UNEXISTING_DIR = path.join(tempDir, '/repository');
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