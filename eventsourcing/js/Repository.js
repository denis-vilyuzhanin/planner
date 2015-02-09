var fsUtils = require('./fsUtils');
var IdGenerator = require('./IdGenerator');
var EventLog = require('./EventLog');

module.exports = Repository;
function Repository(params) {
	this._repositoryDir = params.path;
}

Repository.prototype.init = function(callback) {
	fsUtils.createFolderIfnotExist(this._repositoryDir, callback);
}

Repository.prototype.newEventLog = function(callback) {
	var newEventLog = new EventLog({
		workingDir: this._repositoryDir
	});
	newEventLog.createNew(callback);
}

Repository.prototype.findEventLog = function(logId) {
	
}
