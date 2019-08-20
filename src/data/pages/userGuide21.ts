import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide21',
  url: 'user-guide-21',
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
        Span('Posted on July 29, 2019'),
      ]),
      Title('User Guide: The DevMode Panel'),

      Paragraph(
        `Sometimes the Inspector Panel might be lacking a certain feature/button for that precise CSS trick you have in mind, so the DEVMODE Panel's here to fill that gap. You can write any CSS property in a very simple input form. Each input is a different CSS property next to it's value.`
      ),

      Vimeo('https://www.youtube.com/embed/42xYuqKequo'),

      NextPrev('< Prev Post', 'user-guide-20', 'Next Post >', 'user-guide-22')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
