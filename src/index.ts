import * as Base from 'atma-io-middleware-base'
import * as postmask from 'postmask'
import processAsync from './compiler'


export = Base.create({
	name: 'atma-loader-postmask',
    textOnly: true,
    cacheable: true,
    defaultOptions: {
		mimeType: 'text/mask',
        extensions: ['mask'],
        plugins: [],
        configs: {},
        mask: {},
    },
    processAsync,
    onMount (ioLib) {
        postmask.configurate({
            io: ioLib
        });
    }
});