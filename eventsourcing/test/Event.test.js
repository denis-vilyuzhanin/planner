var Event = require('../js/Event');

var ANY_TYPE = "anyEventType";
var ANY_DATA = {};

exports.create = {
	eventsHasUniqueId: function(test) {
		//when
		var event1 = Event.createNew(ANY_TYPE, ANY_DATA);
		var event2 = Event.createNew(ANY_TYPE, ANY_DATA);
		//then
		test.notEqual(event1.id(), event2.id());
		test.done();
	}
};
