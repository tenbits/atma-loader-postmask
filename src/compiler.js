(function(){
	var _mask;
			
	module.exports = {
		compile: function(source, path, options){
			throw new Error('Mask Sync compile not implemented yet');
		},
		compileAsync: function(source, path, options, fn){
			var opts = prepair(path, options);
			Optimizer.optimizeAsync(source, options, function(error, data){
				if (error == null) {
					fn(null, data);
					return;
				}
				fn({
					content: error.toString(),
					error: error
				});
			});
		}
	};

	var Optimizer = {
		optimizeAsync: function (source, options, fn) {
			var ast = typeof source === 'string' ? _mask.parse(source) : source;
			_mask.optimize(ast, function(ast){
				var indent = options.minify ? 0 : 4;
				var str = _mask.stringify(ast, { indent: indent });
				fn(null, { content: str });
			});
		}
	}

	function prepair (path, options) {
		if (_mask == null) {
			_mask = require('maskjs');
			_mask.on('error', function(error) {
				console.error(error);
			});
			_mask.on('warn', function(msg) {
				console.warn(msg);
			});
		}
		
		var uri = new net.Uri(path)
		var base = options && options.base || '/';
		if (base[0] === '/') {
			base = net.Uri.combine(process.cwd(), base);
		}

		options.plugins.map(function(name){
			if (name[0] === '.' || name[0] === '/') {
				name = require('path').join(process.cwd(), name);
			}
			require(name);
		});

		return {
			settings: {
				from: uri.toLocalFile(),
				minify: options.minify
			}
		};
	}
}());