import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide20',
  url: 'user-guide-20',
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
        Span('Posted on July 23, 2019'),
      ]),
      Title('User Guide: The Inspector Panel'),

      Paragraph(
        `The Inspector is the panel from where we can quickly edit CSS properties and values for the selected elements with the click of a button.`
      ),

      Vimeo('https://www.youtube.com/embed/8BOaJMWtFFI'),

      NextPrev('< Prev Post', 'user-guide-19', 'Next Post >', 'user-guide-21')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
