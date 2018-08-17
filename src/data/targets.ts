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
          font-family: Source Sans Pro, serif;
        }
        a {
          text-decoration: none;
          color: inherit;
        }`
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