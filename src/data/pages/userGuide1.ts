import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide1',
  url: 'user-guide-1',
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
        Span('Posted on May 20, 2019'),
      ]),
      Title('User Guide: Creating a Project'),

      Paragraph(
        `To create a project, click the big “+” Card in the teleportHQ Dashboard. When prompted, add a name of your choosing to your project and click “Create Project”. You will be redirected to your new Project.`
      ),

      Vimeo('https://www.youtube.com/embed/koCJ7NRnq_s'),

      NextPrev('< First Post', 'user-guide-1', 'Next Post >', 'user-guide-2')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
