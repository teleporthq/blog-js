import {
	Body,
	ExternalLink,
	Footer,
	Header,
	HeroSmall,
	Logo,
	Page,
	Title,
	Title2,
	NextLink,
	Navigation,
	NavigationItem, AuthorCard, Paragraph, FooterInfo, FooterRegister, FooterLinks, Title3, Button, Span, Image, Copy
} from '../components'
import br from "../elements/br";

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
          HeroSmall('./static/criss-blog.png', 'teleportHQ Sketch plugin'),
          Title2('Hello! we’ve built a real-time Sketch-to-code engine (with live preview)'),
          AuthorCard({
	          src: './static/criss.jpeg',
	          name: 'Criss Moldovan',
	          twitterHandle: '@crissmoldovan',
	          twitterLink: 'https://twitter.com/@crissmoldovan'
          }),
        ],
        'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
      ),
      NextLink(
        [
          HeroSmall('./static/raul-blog.png', 'teleportHQ people building'),
          Title2('Understanding The Web'),
	        AuthorCard({
		        src: './static/raul.png',
		        name: 'Raul Incze',
		        twitterHandle: '@raulincze',
		        twitterLink: 'https://twitter.com/@raulincze'
	        }),
        ],
        'understanding-the-web-parsing-web-pages-semantically'
      )
    ),
    Footer([
    	FooterInfo([
    		Image({src: './static/teleporthq-footer.svg', alt: 'teleport footer'}),
		    Paragraph('For information regarding other co-financed projects within European Union, please visit ', ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')),
		    Paragraph('The content of this material does not necessary represent the oficial statement of the European Union or Romania\'s Government.')
	    ]),
	    FooterRegister([
		    Title3('Sounds good?', '1.3rem'),
		    Span('Register for our Private Alpha'),
		    br,
		    br,
		    Button(NextLink([Span('SIGN UP')], '/sign-up'))
	    ]),
	    FooterLinks([
		    Title3('Links', '1.1rem'),
		    NextLink([Span('About us')], '/about'),
		    NextLink([Span('Funding')], '/funding'),
		    NextLink([Span('Vision')], '/vision')
	    ])
    ]),
	  Copy([
	  	Span('Evo Forge, Calea Motilor nr 84, Cluj-Napoca &nbsp;&nbsp;&nbsp;&nbsp; Phone: +40 (0)364 101 203')
	  ])
  )
}