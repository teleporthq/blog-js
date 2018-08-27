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
	NavigationItem,
	AuthorCard,
	Paragraph,
	FooterInfo,
	FooterRegister,
	FooterLinks,
	Title3,
	Button,
	Span,
	Image,
	Copy,
	SmallText,
	HorizontalLine,
	AuthorCardWrapper, Bold
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
      Title('Blog Port', 'center', 300),
      Title3('We\'d like to share something with you', 'center', '1rem','#a9a9a9', '-20px', '60px'),
      HeroSmall('./static/raul-blog-mini.png', 'teleportHQ people building'),
      AuthorCardWrapper([
	      AuthorCard({
	        src: './static/raul.png',
	        name: 'Raul Incze',
	        twitterHandle: '@raulincze',
	        twitterLink: 'https://twitter.com/@raulincze'
	      }),
	      Span('Posted on Jun 25')
      ]),
	    NextLink(
	    [Title2('Understanding the Web: Parsing Web Pages Semantically')
	    ],
	    'understanding-the-web-parsing-web-pages-semantically'),
      SmallText('Around two months ago I joined forces with the rest of the teleportHQ team in our mission to reduce friction and eliminate dead ends in the GUI building process, spawning a machine learning (ML) track. Most of the team focuses on building tools for designers and developers to bridge the gap between these two roles by facilitating a common medium and ideation environment. The first tool we developed, aimed at designers, is a Sketch plugin that exports code. You can read about it over here, in an article by our CTO, Criss.'),
	    NextLink(
		    [
			    SmallText([Bold('Read more &#8250;')])
		    ],
		    '/understanding-the-web-parsing-web-pages-semantically'
	    ),
	    br,
	    HorizontalLine(),
	    br,
      HeroSmall('./static/criss-blog-mini.png', 'teleportHQ Sketch plugin'),
	    AuthorCardWrapper([
		    AuthorCard({
			    src: './static/criss.jpeg',
			    name: 'Criss Moldovan',
			    twitterHandle: '@crissmoldovan',
			    twitterLink: 'https://twitter.com/@crissmoldovan'
		    }),
		    Span('Posted on Jun 25')
	    ]),
	    NextLink(
		    [
		    	Title2('We’ve built a real-time Sketch-to-code engine')
		    ],
		    'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'),
	    SmallText('About a year back, as I was working on a mobile app, I got myself stuck in a never ending ping-pong with my designer, mainly tweaking how the app looks and behaves. Most of these changes were only about positioning, colors, spacing and so on. Instead of using my time to implement the real value bringing guts of the app, about 60% was spent doing non-business-logic relevant work aka “pixel pushing”. Essentially, all the “actions” the designer was doing in Sketch, I had to re-do in code. That, to me, looked like a completely inefficient process and the paved way to frustration. And a missed ...'),
	    NextLink(
		    [
			    SmallText([Bold('Read more &#8250;')])
		    ],
		    '/how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
	    ),
    ),
    Footer([
    	FooterInfo([
    		Image({src: './static/teleporthq-footer.svg', alt: 'teleport footer'}),
		    Paragraph('For information regarding other co-financed projects within European Union, please visit ', ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')),
		    Paragraph('The content of this material does not necessary represent the oficial statement of the European Union or Romania\'s Government.')
	    ]),
	    FooterRegister([
		    Title3('Sounds good?', 'center', '1.3em'),
		    Span('Register for our Private Alpha'),
		    br,
		    br,
		    Button(NextLink([Span('SIGN UP')], '/sign-up'))
	    ]),
	    FooterLinks([
		    Title3('Links', 'center', '1.1em'),
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