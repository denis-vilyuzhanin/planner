
exports.generate = generate;
function generate() {
	var random = Math.random().toString().substring(2);
	return createEventId(new Date(), random);
}

exports._createEventId = createEventId;
function createEventId(currentDate, randomNumber) {
	var timestamp = currentDate.toISOString().replace(/[-T:.Z]/g, '');
	return timestamp + '-' + randomNumber;
}