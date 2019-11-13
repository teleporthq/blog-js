import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide45',
  url: 'user-guide-45',
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
        Span('Posted on October 23, 2019'),
      ]),
      Title('User Guide: Cheat Sheet'),

      Paragraph(
        `We know the playground can be a little complex, especially when you first start using it. To help you out with all the shortcuts in the tool, we’ve made a Cheat Sheet that you can access at any time from within the playground.`
      ),

      Vimeo('https://www.youtube.com/embed/boqDPIkPW_A'),

      NextPrev('< Prev Post', 'user-guide-44', 'Next Post >', 'user-guide-46')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
