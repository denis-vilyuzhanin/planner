
define(['text!dropIt.panel.html'], function(template) {
	return Backbone.View.extend({
		initialize: function() {
			
		},
		render: function() {
			this.$el = $(template);
			return this;
		}
	});
});