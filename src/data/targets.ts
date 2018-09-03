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
          font: 1.25rem/1.85 Source Sans Pro, sans-serif;
          color: #333;
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
		    tagName: 'meta',
		    attributes: {
			    name: 'description',
			    content: 'teleportHQ is a platform and a suite of open-source tools built for user interface professionals.'
		    }
	    },
	    {
		    tagName: 'link',
		    attributes: {
			    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600',
			    rel: 'stylesheet',
		    }
	    },
	    {
		    tagName: 'meta',
		    attributes: {
			    name: 'theme-color',
			    content: '#fff',
		    }
	    },
	    {
		    tagName: 'link',
		    attributes: {
			    rel: 'manifest',
			    href: '/static/manifest.json',
		    }
	    },
	    {
		    tagName: 'link',
		    attributes: {
			    rel: 'icon',
			    type: 'image/png',
			    sizes: '32x32',
			    href: '/static/assets/favicons/favicon-32x32.png'
		    }
	    },
	    {
		    tagName: 'link',
		    attributes: {
			    rel: 'icon',
			    type: 'image/png',
			    sizes: '96x96',
			    href: '/static/assets/favicons/favicon-96x96.png'
		    }
	    },
	    {
		    tagName: 'link',
		    attributes: {
			    rel: 'icon',
			    type: 'image/png',
			    sizes: '16x16',
			    href: '/static/assets/favicons/favicon-16x16.png'
		    }
	    }
    ]
  }
}
