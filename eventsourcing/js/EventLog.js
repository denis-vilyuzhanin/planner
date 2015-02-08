
module.exports = EventLog;
function EventLog(params) {
	this._workingDir = params.workingDir;
	this._id = params.id;
}

EventLog.prototype.initNew = function(callback) {
	callback.success();
}

