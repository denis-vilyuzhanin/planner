define(['text!DroppedItemsList.component.html'], function(template){
	var $listTemplate = $(template);
	var $itemTemplate = $listTemplate.find('.dayItem').remove();
	
	return Backbone.View.extend({
		
		
		initialize: function() {
			this.model.on('change reset add remove', this.renderItems, this);
		},
		
		render: function() {
			this.$el = $listTemplate.clone();
			this.$el.on('click', '.manualResolution', _.bind(function(e){
				$(e.currentTarget).parents('.dayItem').removeClass('unresolved');
			}, this));
			
			return this;
		},
		
		renderItems: function() {
			this.$el.empty();
			this.model.each(function(droppedItem){
				this.addItem(droppedItem);
			}, this);
		},
		
		addItem: function(item) {
			var $newItem = $itemTemplate.clone();
			$newItem.attr('itemId', item.id);
			$newItem.find('.description').text(item.get('value'));
			this.$el.prepend($newItem)
		}
	});
});