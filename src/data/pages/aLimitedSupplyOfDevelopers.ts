import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  // ExternalLink,
  NextPrev,
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';

export default {
  name: 'aLimitedSupplyOfDevelopers',
  url: 'a-limited-supply-of-developers',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/paul.jpg',
          name: 'Paul Brie',
          twitterHandle: '@aelythe',
          twitterLink: 'https://twitter.com/@aelythe',
        }),
        Span('Posted on December 28, 2018'),
      ]),
      Title('A Limited Supply of Developers'),

      AutoScaleImage({
        src: '/static/blog/a-limited-supply-of-developers.png',
        alt: 'Picture with web developers',
      }),

      Paragraph(
        `There are about 22 million developers in the world, with only 10 million estimated to also be JavaScript UI developers. Overall, the needs of the IT industry for specialists is higher than the world’s capability to train new ones. Besides that, the complexity of user interfaces building is constantly increasing.`
      ),

      Paragraph(
        `This situation has two visible effects: the first one is that it’s hard to find a developer and the second one is that the costs of development are increasing at a higher pace than that of any other industry.`
      ),

      NextPrev(
        '< User Interface Building Process',
        'user-interface-building-process',
        'A Mental Exo-Skeleton >',
        'a-mental-exo-skeleton'
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
