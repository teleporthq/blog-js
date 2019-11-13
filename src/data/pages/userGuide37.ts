import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide37',
  url: 'user-guide-37',
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
        Span('Posted on September 23, 2019'),
      ]),
      Title('User Guide: General Project Settings'),

      Paragraph(
        `From the General tab you can set the name for your project, the subdomain, your favicon, the language of your project as well as the viewport.`
      ),

      Paragraph(`Don’t forget to click on the “Save Changes” button once you’re finished with editing your settings.`),

      Vimeo('https://www.youtube.com/embed/umsHAFk6W-4'),

      NextPrev('< Prev Post', 'user-guide-36', 'Next Post >', 'user-guide-38')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
