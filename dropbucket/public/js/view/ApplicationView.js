define(['text!dropbucket.view.html'], function(template){
	
	return {
		show: function() {
			$('body').append(template);
		}
	};
});