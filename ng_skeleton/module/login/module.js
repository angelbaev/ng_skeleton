(function () {
    'use strict';
	
	var Module = new function() {
		this.moduleName = 'login';
		this.onBootstrap = function() {
			this.init();
		}; 
		
		this.init = function() {
			require([
				'module/app/src/app/service/authentication.service.js',
				'module/app/src/app/service/flash.service.js',
				
				'module/login/src/login/controller/login.controller.js', 
				'module/login/src/login/service/user.service.js',
				'module/login/src/login/service/user.service.local-storage.js'
				], function () {

			});						
		};
	};
	
	Module.onBootstrap();
})();
