define(['text!DroppedItemsList.component.html'], function(template){
	var $listTemplate = $(template);
	var $itemTemplate = $listTemplate.find('.dayItem').remove();
	
	return Backbone.View.extend({
	
		
		
		render: function() {
			this.$el = $listTemplate.clone();
			var $newItem = $itemTemplate.clone();
			$newItem.find('.description').text("Item");
			this.$el.append($newItem)
			return this;
		}
	});
});