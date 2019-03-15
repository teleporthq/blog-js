import Br from '../../elements/br'

import {
  // Paragraph,
  Link,
  Span,
  Footer,
  FooterInfo,
  Image,
  FooterRegister,
  Title3,
  Button,
  FooterLinks,
} from '../../components'

export default Footer([
  FooterInfo([Image({ src: '/static/blog/assets/teleporthq-footer.svg', alt: 'teleport footer' })]),
  FooterRegister([
    Title3('Sounds good?', 'center', '1.3em'),
    Span('Register for our Private Alpha'),
    Br,
    Br,
    Link(Button([Span('SIGN UP')], 'inline-block'), '/sign-up'),
  ]),
  FooterLinks([
    Title3('Links', 'center', '1.1em'),
    Link(Span('About us'), '/about'),
    Link(Span('Funding'), '/funding'),
    Link(Span('Vision'), '/vision'),
  ]),
])
