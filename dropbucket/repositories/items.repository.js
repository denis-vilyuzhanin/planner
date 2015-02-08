

exports.init = function(conf) {
	
}


exports.persist = function(item) {
	
}


function generateId(timestamp) {
	var r = Math.random().toString().substring(2);
	return timestamp.format('yyyymmddHHMMss') + '-' + r;
}