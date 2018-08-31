export default {
  web: {
    head: [
      { tagName: 'style',
        attributes: {},
        innerString: `
        html, body, #__next {
          margin: 0;
        }
        body { 
          font: 1.25rem/1.85 Source Sans Pro, serif;
        }
        @media (max-width: 600px) {
          body {
            font-size: 1.2rem;
            line-height: 1.6;
          }
        }
        a {
          text-decoration: none;
          color: inherit;
        }`
      },
	    {
		    tagName: 'meta',
		    attributes: {
			    name: 'viewport',
			    content: 'width=device-width, initial-scale=1.0'
		    }
	    },
      {
        tagName: 'link',
        attributes: {
	        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700',
          rel: 'stylesheet'
        }
      }
    ]
  }
}