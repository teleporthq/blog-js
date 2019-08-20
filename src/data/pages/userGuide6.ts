import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide6',
  url: 'user-guide-6',
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
        Span('Posted on June 4, 2019'),
      ]),
      Title('User Guide: Elements UI'),

      Paragraph(
        `The Elements UI is the panel from which you can drag & drop elements on a page or inside of a component.`
      ),

      Vimeo('https://www.youtube.com/embed/ph4bvYxvazs'),

      NextPrev('< Prev Post', 'user-guide-5', 'Next Post >', 'user-guide-7')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
