import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide19',
  url: 'user-guide-19',
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
        Span('Posted on July 22, 2019'),
      ]),
      Title('User Guide: Contex Menu in the Tree View'),

      Paragraph(
        `You can access any Context Menu option of either an element or component directly from the Tree View. Simply right click an element or component to reveal the Context Menu.`
      ),

      Vimeo('https://www.youtube.com/embed/4A7Ts9kwjJA'),

      NextPrev('< Prev Post', 'user-guide-18', 'Next Post >', 'user-guide-20')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
