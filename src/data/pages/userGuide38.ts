import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide38',
  url: 'user-guide-38',
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
        Span('Posted on September 24, 2019'),
      ]),
      Title('User Guide: Hosting Project Settings'),

      Paragraph(`From the Hosting tab you can set your Now, Github and Netlify tokens.`),

      Paragraph(`Don’t forget to click on the “Save Changes” button once you’re finished with editing your settings.`),

      Vimeo('https://www.youtube.com/embed/HtBvN765Y8I'),

      NextPrev('< Prev Post', 'user-guide-37', 'Next Post >', 'user-guide-39')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
