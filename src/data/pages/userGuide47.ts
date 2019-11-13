import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide47',
  url: 'user-guide-47',
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
        Span('Posted on October 30, 2019'),
      ]),
      Title('User Guide: Highlight Mode'),

      Paragraph(
        `Sometimes it might be difficult to pinpoint with elements has what size, margin or padding. To fix that, we’ve added Highlight Mode. This mode adds an overlay to an element when you hover above it, showing you its border-box, padding and margin.`
      ),

      Paragraph(
        `To toggle it on and off, simply click the Highlight Mode icon on the bottom, left-side of the playground.`
      ),

      Vimeo('https://www.youtube.com/embed/nB4U3xcn9hs'),

      NextPrev('< Prev Post', 'user-guide-46', 'Next Post >', 'user-guide-48')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
