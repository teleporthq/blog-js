import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide35',
  url: 'user-guide-35',
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
        Span('Posted on September 16, 2019'),
      ]),
      Title('User Guide: Publish/Deploy'),

      Paragraph(
        `To publish or deploy your project, click the Publish icon found on the top, right side of the playground. From here, click the “Publish” button. After a moment, your project will be up and running.`
      ),

      Vimeo('https://www.youtube.com/embed/jHlnGLt9vWM'),

      NextPrev('< Prev Post', 'user-guide-34', 'Next Post >', 'user-guide-36')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
