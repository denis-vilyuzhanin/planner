
exports.createNew = createNewEvent;
function createNewEvent(type, data) {
	var currentDate = new Date();
	return new Event({
		id: generateEventId(currentDate),
		createDate: currentDate,
		type: type,
		data: data
	});
}

function generateEventId() {
	var random = Math.random().toString().substring(2);
	return createEventId(new Date(), random);
}

exports._createEventId = createEventId;
function createEventId(currentDate, randomNumber) {
	var timestamp = currentDate.toISOString().replace(/[-T:.Z]/g, '');
	return timestamp + '-' + randomNumber;
}

function Event(params) {
	this._id = params.id;
	this._createDate = params.createDate;
	this._type = params.type;
	this._data = params.data;
}
Event.prototype.id = function() {
	return this._id;
}

