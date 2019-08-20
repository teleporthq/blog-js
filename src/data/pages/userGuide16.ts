import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide16',
  url: 'user-guide-16',
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
        Span('Posted on July 9, 2019'),
      ]),
      Title('User Guide: Searching Elements'),

      Paragraph(
        `To search for an element, simply type your search query in the search input at the top of the Elements panel.`
      ),

      Vimeo('https://www.youtube.com/embed/-GqV0nuAqys'),

      NextPrev('< Prev Post', 'user-guide-15', 'Next Post >', 'user-guide-17')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
