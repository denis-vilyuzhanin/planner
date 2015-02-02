define(['./NewDroppedItemModel',
        './DroppedItemModel',
        './DroppedItemsListModel'], 
        function(NewDroppedItemModel, 
        		 DroppedItemModel,
        		 DroppedItemsListModel){
	return Backbone.Model.extend({
		
		initialize: function() {
			this.attributes.newItem = new NewDroppedItemModel();
			this.attributes.todayItems = new DroppedItemsListModel();
			this.attributes.newItem.onDropNewItem(this.userDroppedNewItem, this);
		},
		
		getNewItemModel: function() {
			return this.attributes.newItem;
		},
		
		getTodayDroppedItems: function() {
			return this.attributes.todayItems;
		},
		
		userDroppedNewItem: function() {
			if (!this.getNewItemModel().isDropped()) {
				return;
			}
			this.getTodayDroppedItems().dropNewItem(new DroppedItemModel(this.getNewItemModel()));
			this.getNewItemModel().clear();
		}
	});
});