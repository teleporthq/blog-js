import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide8',
  url: 'user-guide-8',
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
        Span('Posted on June 11, 2019'),
      ]),
      Title('User Guide: Elements Context Menu'),

      Paragraph(
        `To access the Context Menu options for a given element, simply right click the name of the element in the Tree View panel or directly from the canvas. `
      ),

      Vimeo('https://www.youtube.com/embed/Q7JAFJ7fdoY'),

      NextPrev('< Prev Post', 'user-guide-7', 'Next Post >', 'user-guide-9')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
