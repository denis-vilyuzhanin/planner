define([], function(){
	return Backbone.Model.extend({
		
		getDescription: function() {
			return this.attributes.description;
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