
define(['text!dropIt.panel.html'], function(template) {
	var DROPPED_ITEM_EVENT = 'droppedItemEvent';
	return Backbone.View.extend({
		
		
		initialize: function() {
			
		},
		render: function() {
			this.$el = $(template);
			
			
			this.$el.find('.dropItButton').click(_.bind(function(){
				this.trigger(DROPPED_ITEM_EVENT, "new item");
			}, this));
			return this;
		},
		
		onDroppedItem: function(listener) {
			this.on(DROPPED_ITEM_EVENT, listener);
		}
	});
});