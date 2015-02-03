define([], function(){
	return Backbone.Model.extend({
		url: './api/dropped-item',
		
		
		getDescription: function() {
			return this.attributes.description;
		},
	
		
		
	});
});