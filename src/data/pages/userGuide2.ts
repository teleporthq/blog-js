import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide2',
  url: 'user-guide-2',
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
        Span('Posted on May 21, 2019'),
      ]),
      Title('User Guide: Project Settings'),

      Paragraph(
        `To access your projects’ settings, click on the hamburger icon on the top left side corner of the playground and continue to the ‘Page Settings’ option in the menu.`
      ),

      Paragraph(
        `These settings allow you to add a title, set a language for your  webapp, add meta data, assets such as fonts, scripts and styles, and also add a NOW Token for deployment.`
      ),

      Vimeo('https://www.youtube.com/embed/0x1PtUCezCU'),

      NextPrev('< Prev Post', 'user-guide-1', 'Next Post >', 'user-guide-3')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
