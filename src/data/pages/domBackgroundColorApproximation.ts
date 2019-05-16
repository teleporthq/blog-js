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
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
  Paragraph,
} from '../components'

export default {
  name: 'domBackgroundColorApproximation',
  url: 'dom-background-color-approximation',
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
        Span('Posted on April 29, 2019'),
      ]),
      Title('Background Color Approximation'),

      AutoScaleImage({
        src: '/static/blog/dom-series/12.png',
        alt: `An image displaying a page's background color approximation.`,
      }),

      Paragraph(
        `Another interesting perspective is the one in which we superpose the imbrication depth with the layout.`
      ),

      NextPrev('< Previous Post', 'dom-depth-with-layout', 'Next Post >', 'dom-tag-types-on-page')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
