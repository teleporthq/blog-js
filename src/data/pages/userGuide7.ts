import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide7',
  url: 'user-guide-7',
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
        Span('Posted on June 10, 2019'),
      ]),
      Title('User Guide: Adding Elements to a Page'),

      Paragraph(
        `To add an element to the page or within another element or component drag & drop your desired element from the elements panel on top of a page, element or component.`
      ),

      Vimeo('https://www.youtube.com/embed/Rx6_mcmzAWI'),

      NextPrev('< Prev Post', 'user-guide-6', 'Next Post >', 'user-guide-8')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
