define([], function(){
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
		
	});
});