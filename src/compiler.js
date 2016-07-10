(function(){

	var postmask = require('postmask');
			
	module.exports = {
		compile: function(source, path, options){
			throw new Error('Mask Sync compile not implemented yet');
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