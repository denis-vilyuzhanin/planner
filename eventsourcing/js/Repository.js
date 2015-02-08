var fsUtils = require('./fsUtils');

module.exports = Repository;
function Repository(params) {
	this._repositoryDir = params.path;
}

Repository.prototype.init = function(callback) {
	fsUtils.createFolderIfnotExist(this._repositoryDir, callback);
}

Repository.prototype.newEventLog = function() {
	
}

Repository.prototype.findEventLog = function(logId) {
	
}
