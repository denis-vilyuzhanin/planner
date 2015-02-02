define([], function(){
	return Backbone.Model.extend({
		
		initialize: function(conf) {
			this.attributes.description = conf.getNewItemDescription();
		},
		getDescription: function() {
			return this.attributes.description;
		},
	
		
		
	});
});