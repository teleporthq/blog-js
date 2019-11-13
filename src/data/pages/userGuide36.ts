import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide36',
  url: 'user-guide-36',
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
        Span('Posted on September 17, 2019'),
      ]),
      Title('User Guide: New Project Settings'),

      Paragraph(
        `We’ve updated the way you can change setting for your project, making it a little more complex. Let’s get into it in the next few pages.`
      ),

      Vimeo('https://www.youtube.com/embed/73ZzKpBz5sc'),

      NextPrev('< Prev Post', 'user-guide-35', 'Next Post >', 'user-guide-37')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
