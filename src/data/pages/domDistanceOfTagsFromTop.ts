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
  name: 'domDistanceOfTagsFromTop',
  url: 'dom-distance-of-tags-from-top',
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
        Span('Posted on April 10, 2019'),
      ]),
      Title('Distance of tags from the top of the page (by order)'),

      AutoScaleImage({
        src: '/static/blog/dom-series/7.png',
        alt: 'A graph display the distance of HTML tags from the top of the page, by order.',
      }),

      Paragraph(
        `The following perspectives are looking at the visual aspects of the tags such as the positions from the top, left, width and height of the element within a page.`
      ),

      NextPrev('< Previous Post', 'dom-depth-of-tags', 'Next Post >', 'dom-distance-of-tags-from-left')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
