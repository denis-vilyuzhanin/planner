var fs = require('fs');
var path = require('path');
var IdGenerator = require('./IdGenerator');

module.exports = EventLog;
function EventLog(params) {
	this._workingDir = params.workingDir;
	this._id = params.id;
	this._path = null;
	if (this._id) {
		this._path = path.join(this._workingDir, this._id);
	}
}

EventLog.prototype.initNew = function(callback) {
	this._id = IdGenerator.generate();
	this._path = path.join(this._workingDir, this._id);
	fs.mkdir(this._path, function(e){
		if (e) {
			callback.error(e);
		} else {
			callback.success();
		}
	});
}

EventLog.prototype.append = function(event, callback) {
	var eventFile = path.join(this._path, event._id + '.event.json');
	var eventData = event.toJson();
	fs.writeFile(eventFile, eventData, function(e){
		if (e) {
			callback && callback.error(e);
		} else {
			callback.success();
		}
	});
}

EventLog.prototype.id = function() {
	return this._id;
}



