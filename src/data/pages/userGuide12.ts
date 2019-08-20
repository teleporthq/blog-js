import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide12',
  url: 'user-guide-12',
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
        Span('Posted on June 25, 2019'),
      ]),
      Title('User Guide: Creating a Component from a Group of Existing Elements'),

      Paragraph(
        `To turn a group of elements into a component, simply right click the father element of the desired elements from either the page or the Tree View panel, and select the ‘Create component’ option for the dropdown menu.`
      ),

      Vimeo('https://www.youtube.com/embed/4gsXdPvVxO0'),

      NextPrev('< Prev Post', 'user-guide-11', 'Next Post >', 'user-guide-13')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
