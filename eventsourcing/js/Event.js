
var deepEqual = require('deep-equal')

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

exports.parseJson = parseJson;
function parseJson(json) {
	var eventData = JSON.parse(json);
	return new Event({
		id: eventData.id,
		type: eventData.type,
		createDate: new Date(eventData.createDate),
		data: eventData.data
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

Event.prototype.type = function() {
	return this._type;
}

Event.prototype.data = function() {
	return this._data;
}

Event.prototype.createDate = function() {
	return this._createDate;
}

Event.prototype.toJson = function() {
	return JSON.stringify({
		id: this._id,
		type: this._type,
		createDate: this._createDate.toISOString(),
		data: this._data
	});
}

Event.prototype.equal = function(other) {
	return deepEqual(this, other);
}
