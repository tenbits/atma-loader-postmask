import * as postmask from 'postmask'
import { Compiler, io } from 'atma-io-middleware-base'


export default function processAsync (content, file, compiler: Compiler) {
	return new Promise((resolve, reject) => {
		postmask
			.optimizeAsync(content, file.uri.toString(), compiler.options)
			.then(body => {
				
				let report = body.report;
				if (report.warnings.length > 0) {
					let { logger } = compiler;					
					logger.write(`Mask warnings for ${file.uri.toLocalFile()}`)
					report.warnings.forEach(x => {
						logger.write(x.message);
					});
				}
				if (report.errors.length > 0) {
					let { logger } = compiler;
					logger.write(`Mask errors for ${file.uri.toLocalFile()}`)
					report.errors.forEach(x => {
						logger.write(x.message);
					});

					reject(report.errors[0]);
					return;
				}
				
				resolve(body.result);
			});
	});
	
}

