const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	exportPathMap: async function (defaultPathMap) {
		return {
			'/blog': { page: '/Index' },
			'/blog/data-science-internship-applied-to-design-2019': { page: '/DataScienceInternship' },
			'/blog/understanding-the-web-parsing-web-pages-semantically': { page: '/UnderstandingTheWeb' },
			'/blog/we-believe-in-AI-powered-code-generation': { page: '/WeBelieveInAi' },
			'/blog/journey-part-1': { page: '/JourneyPart1' },
			'/blog/journey-part-2': { page: '/JourneyPart2' },
			'/blog/journey-part-3': { page: '/JourneyPart3' },
			'/blog/journey-part-4': { page: '/JourneyPart4' },
			'/blog/journey-part-5': { page: '/JourneyPart5' },
			'/blog/journey-part-6': { page: '/JourneyPart6' },
			'/blog/journey-part-7': { page: '/JourneyPart7' },
			'/blog/journey-part-8': { page: '/JourneyPart8' },
			'/blog/journey-part-9': { page: '/JourneyPart9' },
			'/blog/journey-part-10': { page: '/JourneyPart10'},
			'/blog/two-billion-websites' : { page: '/TwoBillionWebsites' },
			'/blog/user-interface-building-process' : { page: '/UserInterfaceBuildingProcess' },
			'/blog/a-limited-supply-of-developers' : { page: '/ALimitedSupplyOfDevelopers' },
			'/blog/a-mental-exo-skeleton' : { page: '/AMentalExoSkeleton' },
			'/blog/further-than-automation' : { page: '/FurtherThanAutomation' },
			'/blog/accumulating-knowledge' : { page: '/AccumulatingKnowledge' },
			'/blog/one-language-for-every-UI' : { page: '/OneLanguageForEveryUI' },
			'/blog/the-UIDL-project' : { page: '/TheUIDLProject' },
			'/blog/quality-first' : { page: '/QualityFirst' },
			'/blog/transparent-process-and-planning' : { page: '/TransparentProcessAndPlanning' },
			'/blog/json-schema' : { page: '/JsonSchema' },
			'/blog/typescript-interfaces' : { page: '/TypeScriptInterfaces'},
			'/blog/teleportHQ-code-generators' : { page: '/TeleportHQCodeGenerators'},
			'/blog/node-types' : { page: '/NodeTypes'},
      '/blog/component-uidl' : { page: '/ComponentUidl' },
      '/blog/enforcing-convention-for-wireframe-object-detection' : { page: '/EnforcingConventionForWireframeObjectDetection' },
			'/blog/introduction-to-code-generation' : { page: '/IntroductionToCodeGeneration' },
			'/blog/setup' : { page: '/Setup' },
			'/blog/generate-react-code' : { page: '/GenerateReactCode' },
			'/blog/adding-styles' : { page: '/AddingStyles' },
			'/blog/style-flavors' : { page: '/StyleFlavors' },
			'/blog/vue-example' : { page: '/VueExample' },
			'/blog/dependencies' : { page: '/Dependencies' },
      '/blog/quickstart' : { page: '/Quickstart' },    
      '/blog/going-up-the-tree-of-abstraction' : { page: '/GoingUpTheTreeOfAbstraction' },   
      '/blog/dom-introduction' : { page: '/DomIntroduction' },                
			'/blog/dom-richer-data' : { page: '/DomRicherData' },                
			'/blog/dom-custom-web-pages-parser' : { page: '/DomCustomWebPagesParser' },                
			'/blog/dom-clustering' : { page: '/DomClustering' },                
      '/blog/dom-exploratory-data-analysis' : { page: '/DomExploratoryDataAnalysis' },   
			'/blog/dom-depth-of-tags' : { page: '/DomDepthOfTags' },                
			'/blog/dom-distance-of-tags-from-top' : { page: '/DomDistanceOfTagsFromTop' },                
			'/blog/dom-distance-of-tags-from-left' : { page: '/DomDistanceOfTagsFromLeft' },                
			'/blog/dom-width-of-tags' : { page: '/DomWidthOfTags' },                
			'/blog/dom-height-of-tags' : { page: '/DomHeightOfTags' },                
			'/blog/dom-depth-with-layout' : { page: '/DomDepthWithLayout' },                
			'/blog/dom-background-color-approximation' : { page: '/DomBackgroundColorApproximation' },                
      '/blog/dom-tag-types-on-page' : { page: '/DomTagTypesOnPage' },
			'/blog/dom-further-exploration-idea-1' : { page: '/DomFurtherExplorationIdea1' },                           
			'/blog/dom-further-exploration-idea-2' : { page: '/DomFurtherExplorationIdea2' },                           
			'/blog/dom-further-exploration-idea-3' : { page: '/DomFurtherExplorationIdea3' },                           
		}
	},
	// You may only need to add assetPrefix in the production.
	assetPrefix: isProd ? 'https://teleporthq.io/blog' : ''
}
