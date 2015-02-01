define(['../component/DropItPanelComponent', 
        '../component/DroppedItemsListComponent', 
        'text!dropbucket.view.html'], 
		function(DropItPanelComponent, DroppedItemsListComponent, template){
	return Backbone.View.extend({
		
		initialize: function() {
			this.setElement($('body'));
			this.dropItPanel = new DropItPanelComponent();
			this.dropItPanel.onDroppedItem(function(msg){
				alert(msg);
			});
			
			this.newItems = new DroppedItemsListComponent();
		},
		render: function() {
			this.$el.html(template);
			
			this.dropItPanel.render();
			this.$el.find('.dropitPanelContainer').append(this.dropItPanel.$el);
			
			this.newItems.render();
			this.$el.find('.droppedItemsContainer').append(this.newItems.$el);
		}
	});
});