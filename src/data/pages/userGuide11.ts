import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide11',
  url: 'user-guide-11',
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
        Span('Posted on June 24, 2019'),
      ]),
      Title('User Guide: Creating a Component from 1 Existing Element'),

      Paragraph(
        `To turn a single element into a component, simply right click the desired element from either the page or the Tree View panel, and select the ‘Create component’ option for the dropdown menu.`
      ),

      Vimeo('https://www.youtube.com/embed/U0WEnUOkm0o'),

      NextPrev('< Prev Post', 'user-guide-10', 'Next Post >', 'user-guide-12')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
