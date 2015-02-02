define(['../component/DropItPanelComponent', 
        '../component/DroppedItemsListComponent',
        '../model/DroppedItemsListModel',
        'text!dropbucket.view.html'], 
		function(DropItPanelComponent, 
				 DroppedItemsListComponent, 
				 DroppedItemsListModel,
				 template){
	return Backbone.View.extend({
		
		initialize: function() {
			this.setElement($('body'));
			this.dropItPanel = new DropItPanelComponent();
			this.dropItPanel.onDroppedItem(_.bind(function(message){
				if (_.isEmpty(message)) {
					return;
				}
				this.newItems.model.add([{value: message}]);
			}, this));
			
			this.newItems = new DroppedItemsListComponent({
				model: new DroppedItemsListModel()
			});
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