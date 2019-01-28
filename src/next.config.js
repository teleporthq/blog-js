const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	exportPathMap: async function (defaultPathMap) {
		return {
			'/blog': { page: '/Index' },
			'/blog/data-science-internship-applied-to-design-2019': { page: '/DataScienceInternship' },
			'/blog/understanding-the-web-parsing-web-pages-semantically': { page: '/UnderstandingTheWeb' },
			'/blog/we-believe-in-AI-powered-code-generation': { page: '/WeBelieveInAi' },
			'/blog/journey-part-1': { page: '/JourneyPart1' },
		}
	},
	// You may only need to add assetPrefix in the production.
	assetPrefix: isProd ? 'https://teleporthq.io/blog' : ''
}