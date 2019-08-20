import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide18',
  url: 'user-guide-18',
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
        Span('Posted on July 16, 2019'),
      ]),
      Title('User Guide: Dragging & Dropping in the Tree View'),

      Paragraph(
        `We’ve been dragging & dropping elements and component directly on our pages, but we can also do the same thing within the Tree View. If some elements are difficult to insert in a desired place within the canvas, the Tree View can fix that problem in no time.`
      ),

      Vimeo('https://www.youtube.com/embed/0kaakYDiRGc'),

      NextPrev('< Prev Post', 'user-guide-17', 'Next Post >', 'user-guide-19')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
