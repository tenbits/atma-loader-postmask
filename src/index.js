(function(){
	
	var Loader;
	(function(module){
		//import /node_modules/atma-loader/index.js
	}(Loader = {}));
	
	var Compiler;
	(function(module){
		// import compiler.js
	}(Compiler = {}));
	
	(function(){
		
		include.exports = Loader.exports.create({
			name: 'atma-loader-postmask',
			options: {
				mimeType: 'text/mask',
				extensions: [ 'mask' ]
			},
		}, Compiler.exports)
		
	}());
	
}());