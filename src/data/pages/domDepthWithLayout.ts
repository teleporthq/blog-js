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
  name: 'domDepthWithLayout',
  url: 'dom-depth-with-layout',
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
        Span('Posted on April 24, 2019'),
      ]),
      Title('Depth With Layout'),

      AutoScaleImage({
        src: '/static/blog/dom-series/11.png',
        alt: `An image displaying a visualization of ikea.com's homepage HTML layout.`,
      }),

      Paragraph(
        `Another interesting perspective is the one in which we superpose the imbrication depth with the layout.`
      ),

      NextPrev('< Previous Post', 'dom-height-of-tags', 'Next Post >', 'dom-background-color-approximation')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
