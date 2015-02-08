var Event = require('../js/Event');

var ANY_TYPE = "anyEventType";
var ANY_DATA = {};

exports.generateId = {
	createId: function(test) {
		// given
		var currentDate = new Date('1111-02-03T04:05:06.007Z');
		// when
		var actualId = Event._createEventId(currentDate, 1234);
		// then
		test.equal(actualId, "11110203040506007-1234");
		test.done();

	},
	eventsHasUniqueId: function(test) {
		//when
		var event1 = Event.createNew(ANY_TYPE, ANY_DATA);
		var event2 = Event.createNew(ANY_TYPE, ANY_DATA);
		//then
		test.notEqual(event1.id(), event2.id());
		test.done();
	}
};
