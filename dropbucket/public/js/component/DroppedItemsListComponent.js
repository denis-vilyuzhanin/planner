define(['text!DroppedItemsList.component.html'], function(template){
	var $listTemplate = $(template);
	var $itemTemplate = $listTemplate.remove('itemTemplate');
	$itemTemplate.remove();
	
	return Backbone.View.extend({
	
		
		
		render: function() {
			this.$el = $listTemplate;
			
			return this;
		}
	});
});