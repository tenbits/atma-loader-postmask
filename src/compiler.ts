import * as postmask from 'postmask'
import { Compiler, io } from 'atma-io-middleware-base'


export default function processAsync (content, file, compiler: Compiler) {
	return postmask
		.processSource(content, file.uri.toString(), compiler.options)
		.then(str => {
			return {
				content: str
			};
		}, error => {
			return {
				content: error.toString(),
				error: error
			};
		});
}

