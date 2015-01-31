define(['../component/DropItPanelComponent', 'text!dropbucket.view.html'], 
		function(DropItPanelComponent, template){
	return Backbone.View.extend({
		
		initialize: function() {
			this.setElement($('body'));
			this.dropItPanel = new DropItPanelComponent();
			this.dropItPanel.onDroppedItem(function(msg){
				alert(msg);
			});
		},
		render: function() {
			this.$el.html(template);
			
			this.dropItPanel.render();
			this.$el.find('#dropitPanelContainer').append(this.dropItPanel.$el);
		}
	});
});