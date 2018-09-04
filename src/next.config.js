const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	exportPathMap: async function (defaultPathMap) {
		return {
			'/blog': { page: '/' },
			'/blog/how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview': { page: '/sketchPlugin' },
			'/blog/understanding-the-web-parsing-web-pages-semantically': { page: '/understandingTheWeb' },
		}
	},
	// You may only need to add assetPrefix in the production.
	assetPrefix: isProd ? 'https://teleporthq.io/blog' : ''
}