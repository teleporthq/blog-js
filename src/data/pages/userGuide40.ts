import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide40',
  url: 'user-guide-40',
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
        Span('Posted on October 2, 2019'),
      ]),
      Title('User Guide: Deleting Custom Fonts'),

      Paragraph(
        `To delete an added font from your project, click on the trash basket icon next to the font you want to delete.`
      ),

      Vimeo('https://www.youtube.com/embed/IZz7dmLeq6w'),

      NextPrev('< Prev Post', 'user-guide-39', 'Next Post >', 'user-guide-41')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
