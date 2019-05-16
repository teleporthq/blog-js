import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'domHeightOfTags',
  url: 'dom-height-of-tags',
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
        Span('Posted on April 23, 2019'),
      ]),
      Title('Height of tags (by order)'),

      AutoScaleImage({
        src: '/static/blog/dom-series/10.png',
        alt: 'A graph display the height of HTML tags in a page, by order.',
      }),

      NextPrev('< Previous Post', 'dom-width-of-tags', 'Next Post >', 'dom-depth-with-layout')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
