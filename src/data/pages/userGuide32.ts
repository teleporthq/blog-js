import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'userGuide32',
  url: 'user-guide-32',
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
        Span('Posted on September 5, 2019'),
      ]),
      Title('User Guide: Download Project'),

      Paragraph(
        `To download the UIDL of the project, click the Download icon found on the top, right side of the playground. From here, click the “Download” button. This will prompt you to download a .zip file to your local storage.`
      ),

      Vimeo('https://www.youtube.com/embed/6QjY_I0qAV0'),

      NextPrev('< Prev Post', 'user-guide-31', 'Next Post >', 'user-guide-33')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
