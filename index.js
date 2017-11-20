
				// source ./templates/RootModule.js
				(function(){
					
					var _src_compiler = {};

				// source ./templates/ModuleSimplified.js
				var _src_compiler;
				(function () {
					var exports = {};
					var module = { exports: exports };
					"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postmask = require("postmask");
function processAsync(content, file, compiler) {
    return postmask
        .optimizeAsync(content, file.uri.toString(), compiler.options)
        .then(function (str) {
        return {
            content: str
        };
    });
}
exports.default = processAsync;
;
				
					function isObject(x) {
						return x != null && typeof x === 'object' && x.constructor === Object;
					}
					if (isObject(_src_compiler) && isObject(module.exports)) {
						Object.assign(_src_compiler, module.exports);
						return;
					}
					_src_compiler = module.exports;
				}());
				// end:source ./templates/ModuleSimplified.js
				
"use strict";
var Base = require("atma-io-middleware-base");
var postmask = require("postmask");
var compiler_1 = _src_compiler;
module.exports = Base.create({
    name: 'atma-loader-postmask',
    textOnly: true,
    defaultOptions: {
        mimeType: 'text/mask',
        extensions: ['mask'],
        mask: {},
    },
    processAsync: compiler_1.default,
    onMount: function (ioLib) {
        postmask.configurate({
            io: ioLib
        });
    }
});

				
				}());
				// end:source ./templates/RootModule.js
				