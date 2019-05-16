import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'domWidthOfTags',
  url: 'dom-width-of-tags',
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
        Span('Posted on April 17, 2019'),
      ]),
      Title('Width of tags (by order)'),

      AutoScaleImage({
        src: '/static/blog/dom-series/9.png',
        alt: 'A graph display the width of HTML tags in a page, by order.',
      }),

      NextPrev('< Previous Post', 'dom-distance-of-tags-from-left', 'Next Post >', 'dom-height-of-tags')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
