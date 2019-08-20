import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide24',
  url: 'user-guide-24',
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
        Span('Posted on August 6, 2019'),
      ]),
      Title('User Guide: Custom Breakpoints in the Responsiveness Slider'),

      Paragraph(
        `When our breakpoint presets don’t serve your needs, you can add your custom breakpoints by typing in a custom value of pixels in the input on the right side of the responsiveness slider. In the example below, we’re setting it to 700px.`
      ),

      Vimeo('https://www.youtube.com/embed/bSzbGX51RS8'),

      NextPrev('< Prev Post', 'user-guide-23', 'Next Post >', 'user-guide-25')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
