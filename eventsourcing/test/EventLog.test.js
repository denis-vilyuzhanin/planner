
var temp = require('temp');
var fs = require('fs');
var path = require('path');
var EventLog = require('../js/EventLog');

exports.setUp = function(callback) {
	temp.track();
	 callback();
};

exports.tearDown = function(callback) {
	temp.cleanupSync();
	callback();
};

exports.createNew = function(test) {
	test.expect(1);
	//given
	var EVENT_LOG_FOLDER = temp.mkdirSync();
	var ANY_ID = "12345";
	//when
	var eventLog = new EventLog({
		workingDir: EVENT_LOG_FOLDER,
		id: ANY_ID
	});
	eventLog.initNew({
		error: function(e) {
			test.fail(e);
			test.done();
		},
		success: function() {
			var EXPECTED_FOLDER = path.join(EVENT_LOG_FOLDER, '12345');
			test.ok(fs.existsSync(EXPECTED_FOLDER), EXPECTED_FOLDER);
			test.done();
		}
	});
}