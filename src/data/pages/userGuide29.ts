import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide29',
  url: 'user-guide-29',
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
        Span('Posted on August 26, 2019'),
      ]),
      Title('User Guide: Resizing Page with Sliders'),

      Paragraph(
        `To resize the width and height of your page you can simply click and drag the slider found on the sides, above and below the working area, like shown in the video.`
      ),

      Vimeo('https://www.youtube.com/embed/DwPpWEdsJcg'),

      NextPrev('< Prev Post', 'user-guide-28', 'Next Post >', 'user-guide-30')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
