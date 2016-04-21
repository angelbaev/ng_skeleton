(function () {
    'use strict';
	
	var Module = new function() {
		this.moduleName = 'app';
		this.onBootstrap = function() {
			this.init();
		}; 
		
		this.init = function() {
			require([
				'module/app/src/app/controller/index.controller.js', 
				'module/app/src/app/service/authentication.service.js',
				'module/app/src/app/service/flash.service.js'
				], function () {

			});						
		};
	};
	
	Module.onBootstrap();
})();
