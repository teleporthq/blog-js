import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide42',
  url: 'user-guide-42',
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
        Span('Posted on October 15, 2019'),
      ]),
      Title('User Guide: Adding Custom CSS Code'),

      Paragraph(
        `From the CSS tab you can add your custom styles if you have any that need to be applied throughout the project.`
      ),

      Vimeo('https://www.youtube.com/embed/dpij8vJD0lk'),

      NextPrev('< Prev Post', 'user-guide-41', 'Next Post >', 'user-guide-43')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
