import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide39',
  url: 'user-guide-39',
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
        Span('Posted on October 1, 2019'),
      ]),
      Title('User Guide: Adding Custom Fonts'),

      Paragraph(
        `From the Fonts tab you can add your own custom fonts from the internet. Simply copy the url of the font you want to install, give it a name so you can identify it in the playground, and click on the “Add Font” button.`
      ),

      Vimeo('https://www.youtube.com/embed/Ud4Rd3xcfFw'),

      NextPrev('< Prev Post', 'user-guide-38', 'Next Post >', 'user-guide-40')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
