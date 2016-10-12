(function(){

	var postmask = require('postmask');
			
	module.exports = {
		compile: function(source, path, options){
			console.warn('[atma-loader-postmask] Sync compile not implemented yet in `postmask`.', path);
			return {
				content: source
			};
		},
		compileAsync: function(source, path, options, fn){

			postmask
			    .processSource(source, path, options)
			    .then(str => {
			    	fn(null, {
			    		content: str
			    	});
			    }, error => {
			    	fn({
						content: error.toString(),
						error: error
					})
			    });
		}
	};

}());