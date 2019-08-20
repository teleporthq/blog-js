import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide4',
  url: 'user-guide-4',
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
        Span('Posted on May 28, 2019'),
      ]),
      Title('User Guide: Setting the Index Page'),

      Paragraph(
        `To set a Page as the Homepage, right-click on your desired Page and select the “Set as homepage” option from the menu.`
      ),

      Vimeo('https://www.youtube.com/embed/eX8C16g-bfA'),

      NextPrev('< Prev Post', 'user-guide-3', 'Next Post >', 'user-guide-5')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
