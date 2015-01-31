

define(['./view/ApplicationView', 
        'jquery', 
        'bootstrap', 
        'underscore', 
        'backbone'], 
		function(ApplicationView){
	
	function DropbucketApplication() {
		this._view;
	}
	DropbucketApplication.prototype.start = function(){
		console.log('Dropbucket starting ...');
		this._view = new ApplicationView();
		this._view.render();
		console.log('Dropbucket is running');
	}
	
	return DropbucketApplication;
});