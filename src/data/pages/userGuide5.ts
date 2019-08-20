import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide5',
  url: 'user-guide-5',
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
        Span('Posted on June 3, 2019'),
      ]),
      Title('User Guide: Page Context Menu'),

      Paragraph(
        `To access the Context Menu options for a given page, simply right click the name of the page in the left side panel.`
      ),

      Vimeo('https://www.youtube.com/embed/skpI3UuuKB0'),

      NextPrev('< Prev Post', 'user-guide-4', 'Next Post >', 'user-guide-6')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
