
require('date-util');

exports.init = function(app) {
	app.post("/dropbucket/api/dropped-item", persistDroppedItem);
}

function persistDroppedItem(request, response) {
	console.log("Persisted:", request.body);
	var createdDate = new Date();
	var id = generateId(createdDate);
	response.send({
		id: id, 
		createDate: createdDate
	});
	console.log('Persisted item: ', id);
}

function generateId(timestamp) {
	var r = Math.random().toString().substring(2);
	return timestamp.format('yyyymmddHHMMss') + '-' + r;
}
