var Event = require('../js/Event');

var ANY_TYPE = "anyEventType";
var ANY_DATA = {anyField: 'anyValue'};
var CURRENT_DATE = new Date();
var ANY_ID = "anyId";

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

exports.json = {
	toJson: function(test) {
		//given
		var event = Event.createNew(ANY_TYPE, ANY_DATA);
		//when
		var json = event.toJson();
		//then
		test.deepEqual(JSON.parse(json), {
			id: event.id(),
			type: event.type(),
			createDate: event.createDate().toISOString(),
			data: event.data()
		});
		test.done();
	},
	parseJson: function(test) {
		//given
		var json = JSON.stringify({
			id: "anyId",
			type: ANY_TYPE,
			createDate: CURRENT_DATE,
			data: ANY_DATA
		});
		//when
		var event = Event.parseJson(json);
		//then
		test.equal(ANY_ID, event.id());
		test.equal(ANY_TYPE, event.type());
		test.equal(CURRENT_DATE.toString(), event.createDate().toString());
		test.deepEqual(ANY_DATA, event.data());
		test.done();
	}
}

exports.equal = {
	equals: function(test) {
		//given
		var event1 = Event.createNew(ANY_TYPE, ANY_DATA);
		var event2 = Event.parseJson(event1.toJson());
		//when
		var isEqual = event1.equal(event2);
		//then
		test.ok(isEqual);
		test.done();
	}
}