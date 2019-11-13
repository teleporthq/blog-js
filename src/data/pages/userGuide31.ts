import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide31',
  url: 'user-guide-31',
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
        Span('Posted on September 2, 2019'),
      ]),
      Title('User Guide: Export Project'),

      Paragraph(
        `To export a project, click the download icon found on the top, right side of the playground. From here, you have multiple choices to export your code in the flavor of your liking. When decided, click the Export Code as “.zip” button. This will prompt you to download a .zip file to your local storage.`
      ),

      Vimeo('https://www.youtube.com/embed/Ahc8BPMh6Ro'),

      NextPrev('< Prev Post', 'user-guide-30', 'Next Post >', 'user-guide-32')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
