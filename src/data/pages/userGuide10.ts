import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide10',
  url: 'user-guide-10',
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
        Span('Posted on June 18, 2019'),
      ]),
      Title('User Guide: Creating a Component'),

      Paragraph(
        `To create a new Component, click on the “+” icon next to the Component title on the left side panel. When prompted, name the Component as you wish or leave it as is and we’ll add a default name for you.`
      ),

      Vimeo('https://www.youtube.com/embed/MgU9H1XbKCc'),

      NextPrev('< Prev Post', 'user-guide-9', 'Next Post >', 'user-guide-11')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
