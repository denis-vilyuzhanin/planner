define(['./DroppedItemModel'], function(DroppedItemModel){
	return Backbone.Model.extend({
		
		onDropNewItem: function(listener, context) {
			this.on('change:isDropped', listener, context);
		},
		
		isDropped: function() {
			return this.attributes.isDropped;
		},
	
		inputNewItemDescription: function(itemDescription) {
			this.attributes.description = itemDescription;
		},
		
		dropItem: function() {
			this.set({isDropped: true});
		},
		
		getNewItemDescription: function() {
			return this.attributes.description;
		},
		
		convertToDroppedItem: function() {
			return new DroppedItemModel({
				description: this.getNewItemDescription()
			});
		}
	});
});