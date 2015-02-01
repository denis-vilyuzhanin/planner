
define(['text!DropItPanel.component.html'], function(template) {
	var DROPPED_ITEM_EVENT = 'droppedItemEvent';
	var DROP_IT_PANEL_SELECTOR = '.dropItPanel';
	var DESCRIPTION_INPUT_SELECTOR = '.descriptionInput'; 
	var DROP_IT_BUTTON_SELECTOR = '.dropItButton';
	
	return Backbone.View.extend({
		
		initialize: function() {
			
		},
		render: function() {
			this.$el = $(template);
			
			
			this.$el.find(DESCRIPTION_INPUT_SELECTOR)
				.keypress(_.bind(this.handleKeyPressedOnDescriptionInput, this));
			this.$el.find(DROP_IT_BUTTON_SELECTOR)
				.click(_.bind(this.fireDroppedItemEvent, this));
			
			return this;
		},
		
		handleKeyPressedOnDescriptionInput: function(e) {
			if(e.which == 13) {
				this.fireDroppedItemEvent();
			}
		},
		
		fireDroppedItemEvent: function() {
			var $input = this.$el.find(DESCRIPTION_INPUT_SELECTOR);
			var value = $input.val();
			this.trigger(DROPPED_ITEM_EVENT, value);
			$input.val('');
		},
		
		onDroppedItem: function(listener) {
			this.on(DROPPED_ITEM_EVENT, listener);
		}
	});
});