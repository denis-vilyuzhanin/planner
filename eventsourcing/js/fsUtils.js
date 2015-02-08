
var fs = require('fs');

exports.createFolderIfnotExist = function(path, callback) {
	fs.exists(path, function(exists) {
		if (!exists) {
			fs.mkdir(path, function(err){
				if (err) {
					callback.error(err);
				} else {
					callback.success();
				}
			});
		} else {
			callback.success();
		}
	});
}