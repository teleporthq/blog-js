import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide15',
  url: 'user-guide-15',
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
        Span('Posted on July 8, 2019'),
      ]),
      Title('User Guide: Searching Components'),

      Paragraph(
        `To search for a component, simply type your search query in the search input at the top of the Elements panel.`
      ),

      Vimeo('https://www.youtube.com/embed/3ViV10C2tAQ'),

      NextPrev('< Prev Post', 'user-guide-14', 'Next Post >', 'user-guide-16')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
