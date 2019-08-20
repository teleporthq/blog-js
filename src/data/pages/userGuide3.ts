import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide3',
  url: 'user-guide-3',
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
        Span('Posted on May 27, 2019'),
      ]),
      Title('User Guide: Creating a Page'),

      Paragraph(
        `To create a new page, click on the “+” icon next to the Pages title on the left side panel. When prompted, name the page as you wish or leave it as is and we’ll add a default name for you.`
      ),

      Vimeo('https://www.youtube.com/embed/dxS3rXO3iOM'),

      NextPrev('< Prev Post', 'user-guide-2', 'Next Post >', 'user-guide-4')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
