
define(['./view/ApplicationView'], function(ApplicationView){
	var DEPENDENCIES = ['jquery', 'bootstrap', 'underscore', 'backbone'];
	function DropbucketApplication() {
		
	}
	DropbucketApplication.prototype.start = function(){
		console.log('Dropbucket starting ...');
		requirejs(DEPENDENCIES, function(){
			ApplicationView.show();
			console.log('Dropbucket ready');
		})
	}
	
	return DropbucketApplication;
});