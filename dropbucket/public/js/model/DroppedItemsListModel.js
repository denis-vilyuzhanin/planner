define(['./DroppedItemModel'], function(DroppedItemModel){
	return Backbone.Collection.extend({
		model: DroppedItemModel
	});
});