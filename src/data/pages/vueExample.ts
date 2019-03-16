import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
} from '../components'

export default {
  name: 'vueExample',
  url: 'vue-example',
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
        Span('Posted on March 6, 2019'),
      ]),
      Title('Vue Example'),

      Paragraph(
        `The mechanism for a Vue component is absolutely identical, the only thing you have to do is to instantiate a Vue Component Generator.`
      ),

      AutoScaleImage({
        src: '/static/blog/code9.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(`And the corresponding Vue Code:`),

      AutoScaleImage({
        src: '/static/blog/code10.png',
        alt: 'Snippet of code.',
      }),

      NextPrev('< Style Flavors', 'style-flavors', 'Dependencies >', 'dependencies')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
