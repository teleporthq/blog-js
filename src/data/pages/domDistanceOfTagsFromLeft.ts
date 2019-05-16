import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'domDistanceOfTagsFromLeft',
  url: 'dom-distance-of-tags-from-left',
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
        Span('Posted on April 16, 2019'),
      ]),
      Title('Distance of tags from the left side of the page (by order)'),

      AutoScaleImage({
        src: '/static/blog/dom-series/8.png',
        alt: 'A graph display the distance of HTML tags from the left side of the page, by order.',
      }),

      NextPrev('< Previous Post', 'dom-distance-of-tags-from-top', 'Next Post >', 'dom-width-of-tags')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
