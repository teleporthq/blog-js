import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide28',
  url: 'user-guide-28',
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
        Span('Posted on August 20, 2019'),
      ]),
      Title('User Guide: Using Assets with Elements'),

      Paragraph(
        `To add an Asset from your Assets Manager to your page or element, simply drag it from the Assets Manager panel and drop it on top of your desired page or element.`
      ),

      Vimeo('https://www.youtube.com/embed/WoVNFMRHwQI'),

      NextPrev('< Prev Post', 'user-guide-27', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
