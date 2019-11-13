import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide46',
  url: 'user-guide-46',
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
        Span('Posted on October 29, 2019'),
      ]),
      Title('User Guide: Wireframe Mode'),

      Paragraph(
        `Sometimes you might get lost in your design, especially if the structure is complex and the nesting is pretty deep. To help you visualize your design, we’ve added Wireframe View Mode. This mode cancels out all the styling and allows you to see every individual element, along with its boundaries.`
      ),

      Paragraph(
        `To toggle it on and off, simply click the Wireframe Mode icon on the bottom, left-side of the playground.`
      ),

      Vimeo('https://www.youtube.com/embed/u5uGmlJ7iHg'),

      NextPrev('< Prev Post', 'user-guide-45', 'Next Post >', 'user-guide-47')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
