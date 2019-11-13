import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide30',
  url: 'user-guide-30',
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
        Span('Posted on August 27, 2019'),
      ]),
      Title('User Guide: Navigating and Zooming'),

      Paragraph(
        `To zoom in and out, hold CTRL (on Windows) or CMD (on Mac) and scroll up or down with the mouse. Also, if you’re using a touchpad, pinching it creates the same effect.`
      ),

      Paragraph(
        `To move the working area around, press and hold the spacebar while clicking and dragging the mouse (or trackpad) around.`
      ),

      Vimeo('https://www.youtube.com/embed/VrZ3FbmNgb8'),

      NextPrev('< Prev Post', 'user-guide-29', 'Next Post >', 'user-guide-31')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
