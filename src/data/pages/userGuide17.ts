import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide17',
  url: 'user-guide-17',
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
        Span('Posted on July 15, 2019'),
      ]),
      Title('User Guide: The Tree View'),

      Paragraph(
        `The Tree View is there to help you better navigate your content. Having divs in divs in divs can get a little overwhelming, especially when some of them could be ‘visibility:none’ in responsive cases or who knows what other CSS magic you might be doing.`
      ),

      Paragraph(`Worry not, the Tree View is there to help you keep a tight structure to your project.`),

      Vimeo('https://www.youtube.com/embed/kgEaJYu38as'),

      NextPrev('< Prev Post', 'user-guide-16', 'Next Post >', 'user-guide-18')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
