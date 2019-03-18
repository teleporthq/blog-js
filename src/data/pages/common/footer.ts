import Br from '../../elements/br'

import {
  Paragraph,
  Link,
  Span,
  Footer,
  FooterInfo,
  Image,
  FooterRegister,
  Title3,
  Button,
  FooterLinks,
  FooterLinksSection,
} from '../../components'

export default Footer([
  FooterRegister([
    Title3('Sounds good?', 'center', '1.5em', '#323232', '0px'),
    Paragraph('Register for our Private Alpha', {
      style: {
        marginTop: '0px',
        marginBottom: '30px',
      },
    }),
    Link(Button([Span('SIGN UP')], 'inline-block'), '/sign-up'),
  ]),

  FooterLinksSection([
    FooterInfo([
      Image({ src: '/static/blog/assets/teleporthq-footer.svg', alt: 'teleport footer' }),
      Br,
      Link(Span('English'), '/en/blog'), // this link must be refined (MihaiTaba)
      Link(Span('Română'), '/ro/blog'), // this link must be refined (MihaiTaba)
    ]),

    FooterLinks([
      Title3('LINKS', 'center', '1em', 'rgba(0,0,0,0.8)', '0px', '18px'),
      Link(
        Paragraph('About us', {
          style: {
            marginTop: '0px',
            marginBottom: '0px',
            color: 'rgba(0, 0, 0, 0.6)',
          },
        }),
        '/about'
      ),
      Link(
        Paragraph('Funding', {
          style: {
            marginTop: '0px',
            marginBottom: '0px',
            color: 'rgba(0, 0, 0, 0.6)',
          },
        }),
        '/funding'
      ),
      Link(
        Paragraph('Vision', {
          style: {
            marginTop: '0px',
            marginBottom: '0px',
            color: 'rgba(0, 0, 0, 0.6)',
          },
        }),
        '/vision'
      ),
    ]),
  ]),
])
