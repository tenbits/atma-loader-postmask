
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
    return new Promise(function (resolve, reject) {
        postmask
            .optimizeAsync(content, file.uri.toString(), compiler.options)
            .then(function (body) {
            var report = body.report;
            if (report.warnings.length > 0) {
                var logger_1 = compiler.logger;
                logger_1.write("Mask warnings for " + file.uri.toLocalFile());
                report.warnings.forEach(function (x) {
                    logger_1.write(x.message);
                });
            }
            if (report.errors.length > 0) {
                var logger_2 = compiler.logger;
                logger_2.write("Mask errors for " + file.uri.toLocalFile());
                report.errors.forEach(function (x) {
                    logger_2.write(x.message);
                });
                reject(report.errors[0]);
                return;
            }
            resolve(body.result);
        });
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
				