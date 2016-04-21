(function () {
    'use strict';
	
	var initAutoloader = new function() {
		
		this.run = function() {
			require([
				'module/app/module.js',
				'module/login/module.js',
				'module/register/module.js'
				], function () {

			});						
		};
	};
	
	initAutoloader.run();
})();

