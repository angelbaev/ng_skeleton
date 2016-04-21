var require = (function () {
	var _required = {};
	return (function (path, callback) {
		if (typeof path == 'object') {
			// an array
			if (path.length > 1) {
				// load the nth file as soon as everything up to the n-1th one is done.
				for(var i in path) {
					require(path[i], callback);
				}
			} else if (path.length == 1) {
				require(path[0], callback);
			} else {
				;	
			}
			
			return ;	
		}
		
		// haven't loaded this url yet;
		if (typeof _required[path] == 'undefined') {
			var ajax = new XMLHttpRequest();
			ajax.open( 'GET', path, false );
			ajax.onreadystatechange = function () {
				var script = ajax.response || ajax.responseText;
				if (ajax.readyState === 4) {
					switch( ajax.status) {
						case 200:
							eval.apply( window, [script] );
							_required[path] = true;
							break;
						default:
							console.log("ERROR: script not loaded: ", path);
					}
				}
			};
			ajax.send(null);
		}		
	});
})();
