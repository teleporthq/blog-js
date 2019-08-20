import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide26',
  url: 'user-guide-26',
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
        Span('Posted on August 13, 2019'),
      ]),
      Title('User Guide: Switching Framework of Realtime Generated Code'),

      Paragraph(
        `To see the realtime generated code of your Project, click the CODE icon on the top right corner of the platform. From this popup we can take a look at the code being generated in real time.`
      ),

      Paragraph(
        `You can currently switch to Vue or React, the latter having a few styling options available, such as JSX, Inline, JSS and CSSModules.`
      ),

      Vimeo('https://www.youtube.com/embed/mkIGDKn7-Rs'),

      NextPrev('< Prev Post', 'user-guide-25', 'Next Post >', 'user-guide-27')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
