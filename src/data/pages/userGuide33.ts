import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'userGuide33',
  url: 'user-guide-33',
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
        Span('Posted on September 9, 2019'),
      ]),
      Title('User Guide: Continue to Github'),

      Paragraph(
        `To continue with your project in GitHub, click the Download icon found on the top, right side of the playground. From here, click the GitHub icon.`
      ),

      Vimeo('https://www.youtube.com/embed/RySkOG2cyi4'),

      NextPrev('< Prev Post', 'user-guide-32', 'Next Post >', 'user-guide-34')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
