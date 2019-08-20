import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide25',
  url: 'user-guide-25',
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
        Span('Posted on August 12, 2019'),
      ]),
      Title('User Guide: Previewing'),

      Paragraph(
        `If you want to preview your application directly in a new browser tab, simply click on the ‘Preview’ icon on the top right side corner of the playground.`
      ),

      Vimeo('https://www.youtube.com/embed/1txg16ynw74'),

      NextPrev('< Prev Post', 'user-guide-24', 'Next Post >', 'user-guide-26')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
