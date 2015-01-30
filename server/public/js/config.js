requirejs.config({
    //By default load any module IDs from js/lib
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
    	jquery: '/js/lib/jquery',
    	jqueryui: '/js/lib/jquery-ui',
    	underscore: '/js/lib/underscore',
    	backbone: '/js/lib/backbone',
    	bootstrap: '/js/lib/bootstrap',
    	text: '/js/lib/text'
        //model: 'dropbucket/model',
        //view: 'dropbucket/view',
        //DropbucketApplication: 'DropbucketApplication'
    }
});