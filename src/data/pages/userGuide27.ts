import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide27',
  url: 'user-guide-27',
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
        Span('Posted on August 19, 2019'),
      ]),
      Title('User Guide: Adding Assets to the Assets Manager'),

      Paragraph(
        `To add an asset to your Assets Manager, simply drag and drop a file from your system directly on top of the Assets Manager.`
      ),

      Paragraph(`Here’s a list of supported file types:`),

      Vimeo('https://www.youtube.com/embed/XdGaulleq-A'),

      NextPrev('< Prev Post', 'user-guide-26', 'Last Post >', 'user-guide-28')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
