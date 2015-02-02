define(['text!DroppedItemsList.component.html'], function(template){
	var $listTemplate = $(template);
	var $itemTemplate = $listTemplate.find('.dayItem').remove();
	
	return Backbone.View.extend({
		
		render: function() {
			this.$el = $listTemplate.clone();
			this.$el.on('click', '.manualResolution', _.bind(function(e){
				$(e.currentTarget).parents('.dayItem').removeClass('unresolved');
			}, this));
			
			return this;
		},
		
		addItem: function(item) {
			var $newItem = $itemTemplate.clone();
			$newItem.attr('itemId', item.id);
			$newItem.find('.description').text(item.value);
			this.$el.prepend($newItem)
		}
	});
});