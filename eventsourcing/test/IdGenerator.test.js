var IdGenerator = require('../js/IdGenerator');

exports.IdGenerator = {
	createId: function(test) {
		// given
		var currentDate = new Date('1111-02-03T04:05:06.007Z');
		// when
		var actualId = IdGenerator._createEventId(currentDate, 1234);
		// then
		test.equal(actualId, "11110203040506007-1234");
		test.done();
	},
	unique: function(test) {
		//when
		var id1 = IdGenerator.generate();
		var id2 = IdGenerator.generate();
		//then
		test.notEqual(id1, id2);
		test.done();
	}
};
