import Br from '../../elements/br'

import {
  ExternalLink,
  Paragraph,
  Flags,
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
  FooterInfo([
    Image({ src: '/static/blog/assets/teleporthq-footer.svg', alt: 'teleport footer' }),
    Flags(),
    Paragraph('Competitivi Împreună'),
    Paragraph(
      `Dezvoltarea produsului TIC Unicornspace, instrument de prototipare, design vizual și generator de cod cu aplicabilitate în sectoarele industrii creative, sănătate și tic pentru integrarea pe verticală a solutiilor TIC`
    ),
    Paragraph(
      'For information regarding other co-financed projects within European Union, please visit ',
      ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')
    ),
    Paragraph(
      "The content of this material does not necessary represent the oficial statement of the European Union or Romania's Government."
    ),
  ]),
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
