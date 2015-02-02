define(['./DroppedItemModel'], function(DroppedItemModel){
	return Backbone.Collection.extend({
		model: DroppedItemModel,
		
		dropNewItem: function(newItem) {
			this.add(newItem);
		}
	});
});