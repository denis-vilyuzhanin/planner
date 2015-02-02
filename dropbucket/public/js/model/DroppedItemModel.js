define([], function(){
	return Backbone.Model.extend({
		
		getDescription: function() {
			return this.get('value');
		}
	
	});
});