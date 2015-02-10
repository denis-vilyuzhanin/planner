
var temp = require('temp');
var fs = require('fs');
var path = require('path');

var EventLog = require('../js/EventLog');
var Event = require('../js/Event');

var eventLog;
var ANY_EVENT = Event.createNew("anyEvent", {anyField: 'anyValue'});

var ANY_EVENTS = [];
for(var i = 0; i < 4; i++) {
	ANY_EVENTS.push(Event.createNew("anyEvent", {anyOtherField: 'anyOtherValue' + i}));
}
ANY_EVENTS.sort(function(a, b){return a.id() > b.id() ? 1 : (a.id() == b.id() ? 0 : -1)});


exports.setUp = function(callback) {
	temp.track();
	 callback();
};

exports.tearDown = function(callback) {
	temp.cleanupSync();
	callback();
};

exports.createNew = {
	createEventLogFolder: function(test) {
		test.expect(1);
		//given
		var EVENT_LOG_FOLDER = temp.mkdirSync();
		//when
		var eventLog = new EventLog({
			workingDir: EVENT_LOG_FOLDER
		});
		eventLog.initNew({
			error: function(e) {
				test.fail(e);
				test.done();
			},
			success: function() {
				var EXPECTED_FOLDER = path.join(EVENT_LOG_FOLDER, eventLog.id());
				test.ok(fs.existsSync(EXPECTED_FOLDER), EXPECTED_FOLDER);
				test.done();
			}
		});
	},
	uniqueId: function(test) {
		//given
		var ANY_CONFIG = {workingDir: temp.mkdirSync()};		
		var callback = {
			success: thenIdsIsDifferent,
			error: function(e) {
				test.fail(e);
				test.done();
			}
		};
		//when
		var firstEventLog = new EventLog(ANY_CONFIG);
		firstEventLog.initNew(callback);
		var secondEventLog = new EventLog(ANY_CONFIG);
		secondEventLog.initNew(callback);
		//then
		var done = 0;
		function thenIdsIsDifferent() {
			done++;
			if (done >= 2) {
				test.notEqual(firstEventLog.id(), secondEventLog.id());
				test.done();
			}
		}
		
	}
	
}


exports.append = {
	setUp: function(callback) {
		eventLog = new EventLog({workingDir: temp.mkdirSync()});
		eventLog.initNew({
			success: function() {
				callback();
			},
			error: function(e) {
				console.log(e);
			}
		});
	},
	storeEventInFile: function(test) {
		test.expect(1);
		//given
		var event = ANY_EVENT;
		//when
		eventLog.append(event, {
			success: function() {
				test.ok(fs.existsSync(path.join(eventLog._path, event.id() + '.event.json')));
				test.done();
			}
		});
	},
	readAllEventsInNaturalOrder: function(test) {
		//given
		var firstEvent = ANY_EVENTS[0];
		var secondEvent = ANY_EVENTS[0];
		//when
		eventLog.append(firstEvent);
		eventLog.append(secondEvent, {
			success: readAndCheckOrder
		});
		//then
		function readAndCheckOrder() {
			test.done();
		}
	}
}


