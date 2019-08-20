import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide9',
  url: 'user-guide-9',
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
        Span('Posted on June 17, 2019'),
      ]),
      Title('User Guide: UI States (default, hover, active, focus)'),

      Paragraph(
        `To access different UI states (such as default, hover, focus and active) of an element or component, select your desired element or component and go to the DevMode panel on the right side of the playground. From there, simply click on the desired UI state as shown in the video below.`
      ),

      Vimeo('https://www.youtube.com/embed/KVkq-E90Ul8'),

      NextPrev('< Prev Post', 'user-guide-8', 'Next Post >', 'user-guide-10')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
