define([], function(){
	return Backbone.Model.extend({
		
		getDescription: function() {
			return this.attributes.description;
		},
	
		inputNewItemDescription: function(itemDescription) {
			this.set({description: itemDescription});
		},
		
		getNewItemDescription: function() {
			return this.attributes.description;
		},
		
	});
});