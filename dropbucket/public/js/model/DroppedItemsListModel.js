define(['./DroppedItemModel'], function(DroppedItemModel){
	return Backbone.Collection.extend({
		mode: DroppedItemModel
	});
});