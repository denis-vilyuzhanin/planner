

define(['./model/DropbucketModel',
        './view/DropbucketView', 
        'jquery', 
        'bootstrap', 
        'underscore', 
        'backbone'], 
		function(DropbucketModel, 
				 DropbucketView){
	
	function DropbucketApplication() {
		this._view;
	}
	DropbucketApplication.prototype.start = function(){
		console.log('Dropbucket starting ...');
		this._view = new DropbucketView({model: new DropbucketModel()});
		this._view.render();
		console.log('Dropbucket is running');
	}
	
	return DropbucketApplication;
});