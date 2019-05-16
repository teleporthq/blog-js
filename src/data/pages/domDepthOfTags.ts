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
  name: 'domDepthOfTags',
  url: 'dom-depth-of-tags',
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
        Span('Posted on April 9, 2019'),
      ]),
      Title('Depth of Tags'),

      AutoScaleImage({
        src: '/static/blog/dom-series/6.png',
        alt: 'The Process of Clustering explained in a diagram',
      }),

      Paragraph(
        `One of the interesting dimensions about a website is its html tag structure. We found visualizing it from various perspectives very interesting.`
      ),

      Paragraph(
        `The first perspective we’re looking at is simply structural and it’s about the depth of the html tags overlapping each other. With this visualisation we can easily start to make correlations between the html structure and the design.`
      ),

      NextPrev('< Previous Post', 'dom-exploratory-data-analysis', 'Next Post >', 'dom-distance-of-tags-from-top')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
