var fs = require('fs');

module.exports = Repository;
function Repository(params) {
	this._repositoryDir = params.path;
}

Repository.prototype.init = function(callback) {
	var path = this._repositoryDir;
	
	fs.exists(path, function(exists) {
		if (!exists) {
			fs.mkdir(path, function(err){
				if (err) {
					callback.error(err);
				} else {
					callback.success();
				}
			});
		}
	});
}

Repository.prototype.newEventLog = function() {
	
}

Repository.prototype.findEventLog = function(logId) {
	
}