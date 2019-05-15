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
  name: 'domClustering',
  url: 'dom-clustering',
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
        Span('Posted on March 27, 2019'),
      ]),
      Title('Clustering'),

      AutoScaleImage({
        src: '/static/blog/dom-series/4.png',
        alt: 'The Process of Clustering explained in a diagram',
      }),

      Paragraph(`The first thing we did was to use the clustering technique in order to detect design patterns.`),

      NextPrev('< Previous Post', 'dom-custom-web-pages-parser', 'Next Post >', 'dom-exploratory-data-analysis')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
