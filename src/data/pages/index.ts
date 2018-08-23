import {
	Body,
	ExternalLink,
	Footer,
	Header,
	HeroSmall,
	LogoIcon,
	Logo,
	Page,
	Title,
	Title2,
	NextLink,
	Navigation,
	NavigationItem, AuthorCard
} from '../components'

export default {
  name: 'index',
  url: 'test',
  content: Page(
    Header(
	    NextLink(
    	[
    	  Logo('/static/circle.svg', '/static/square.svg', '/static/triangle.svg', '/static/logowriting.svg')
	    ],
		    '/'
	    ),
    Navigation(
      NextLink(
        [
          NavigationItem('Home')
        ],
          '/'
      ),
      NextLink(
        [
            NavigationItem('Vision')
        ],
        '/vision'
      ),
      NextLink(
        [
            NavigationItem('About Us')
        ],
        '/about'
      ),
      NextLink(
        [
            NavigationItem('Funding')
        ],
        '/funding'
      ),
	    NextLink(
		    [
			    NavigationItem('Blog')
		    ],
		    '/blog'
	    ),
      NextLink(
        [
            NavigationItem('Sign up')
        ],
        '/sign-up'
      ),
    )),
    Body(
      Title('Blog', 'center'),
      NextLink(
        [
          HeroSmall('https://cdn-images-1.medium.com/fit/t/800/240/1*b6YODLRx6dghlZzzO1PXpg.png', 'teleportHQ Sketch plugin'),
          Title2('Hello! we’ve built a real-time Sketch-to-code engine (with live preview)'),
          AuthorCard({
	          src: 'https://cdn-images-1.medium.com/fit/c/120/120/1*fncRD-8O_lY_BQOBrpqOow.jpeg',
	          name: 'Criss Moldovan',
	          twitterHandle: '@crissmoldovan',
	          twitterLink: 'https://twitter.com/@crissmoldovan'
          }),
        ],
        'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
      ),
      NextLink(
        [
          HeroSmall('https://cdn-images-1.medium.com/max/2000/1*cAxYPexj833O8g2BTUv41Q.png', 'teleportHQ people building'),
          Title2('Understanding The Web'),
	        AuthorCard({
		        src: 'https://miro.medium.com/fit/c/240/240/1*JId2c7SsttJ01RAQfFlgIA.png',
		        name: 'Raul Incze',
		        twitterHandle: '@raulincze',
		        twitterLink: 'https://twitter.com/@raulincze'
	        }),
        ],
        'understanding-the-web-parsing-web-pages-semantically'
      )
    ),
    Footer(
      ExternalLink(LogoIcon('static/svg/teleport-icon.svg'), 'https://teleporthq.io'),
      ExternalLink(LogoIcon('static/svg/github-icon.svg'), 'https://github.com/teleporthq'),
    )
  )
}