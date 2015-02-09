var fs = require('fs');
var path = require('path');
var IdGenerator = require('./IdGenerator');

module.exports = EventLog;
function EventLog(params) {
	this._workingDir = params.workingDir;
	this._id = params.id;
}

EventLog.prototype.initNew = function(callback) {
	this._id = IdGenerator.generate();
	fs.mkdir(path.join(this._workingDir, this._id), function(e){
		if (e) {
			callback.error(e);
		} else {
			callback.success();
		}
	});
}

EventLog.prototype.id = function() {
	return this._id;
}


