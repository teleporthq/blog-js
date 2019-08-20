import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide22',
  url: 'user-guide-22',
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
        Span('Posted on July 30, 2019'),
      ]),
      Title('User Guide: The Responsiveness Slider'),

      Paragraph(
        `To change the width of your project, and consequently tweak it for responsiveness, simply click and drag the Responsiveness Slider at the top of the playground as shown in the video below.`
      ),

      Vimeo('https://www.youtube.com/embed/pkkJUre8PkM'),

      NextPrev('< Prev Post', 'user-guide-21', 'Next Post >', 'user-guide-23')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
