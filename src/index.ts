import * as Base from 'atma-io-middleware-base'
import processAsync from './compiler';


export = Base.create({
	name: 'atma-loader-postmask',
    textOnly: true,
    defaultOptions: {
		mimeType: 'text/mask',
		extensions: ['mask'],
        mask: {
            
        },        
    },
	processAsync
});
		
	