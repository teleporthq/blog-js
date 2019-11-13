import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide49',
  url: 'user-guide-49',
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
        Span('Posted on November 6, 2019'),
      ]),
      Title('User Guide: Changing CSS Styling for React Generated Code'),

      Paragraph(`Since no group of programmers alive can decide on a CSS styling method, we’ve added all of them.`),

      Paragraph(
        `For your React, Preact and React Native generated code you can choose the CSS Modules you desire. To change that, simply click on the “CSS Modules” dropdown menu located at the top, right-side of the generated code screen and choose your prefered method.`
      ),

      Vimeo('https://www.youtube.com/embed/yoIFBEnQWBM'),

      NextPrev('< Prev Post', 'user-guide-48', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
