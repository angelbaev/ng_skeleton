(function () {
    'use strict';
	
	var Module = new function() {
		this.moduleName = 'register';
		this.onBootstrap = function() {
			this.init();
		}; 
		
		this.init = function() {
			require([
				'module/register/src/register/controller/register.controller.js'
				], function () {

			});						
		};
	};
	
	Module.onBootstrap();
})();
