import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide23',
  url: 'user-guide-23',
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
        Span('Posted on August 5, 2019'),
      ]),
      Title('User Guide: Preset Breakpoints in the Responsiveness Slider'),

      Paragraph(
        `To help you out, we’ve added 5 predefined width size presets: mobile, tablet - portrait, tablet - landscape, desktop and ‘max’ (going as wide as your screen allows it). Simply click on the icon representing the desired device to change the width of your project to that specific width and add a breakpoint whenever you make a CSS change.`
      ),

      Vimeo('https://www.youtube.com/embed/pkrP9A12u-w'),

      NextPrev('< Prev Post', 'user-guide-22', 'Next Post >', 'user-guide-24')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
