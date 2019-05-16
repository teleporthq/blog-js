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
  name: 'domTagTypesOnPage',
  url: 'dom-tag-types-on-page',
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
        Span('Posted on April 30, 2019'),
      ]),
      Title('Tag Types on Page'),

      AutoScaleImage({
        src: '/static/blog/dom-series/13.png',
        alt: `An image displaying tag types on a webpage.`,
      }),

      Paragraph(
        `For our last perspective we’ve decided to take a semantic approach and we’re looking at the tag types of each page.`
      ),

      NextPrev('< Previous Post', 'dom-background-color-approximation', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
