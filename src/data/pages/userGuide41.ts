import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide41',
  url: 'user-guide-41',
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
        Span('Posted on October 9, 2019'),
      ]),
      Title('User Guide: Adding Custom Head & Body Code'),

      Paragraph(
        `In most cases, you might want to add some custom code to your project. For example, some code that will be executed by the browser before loading in the rest of the page.`
      ),

      Paragraph(
        `A recommended practice is to put the scripts at the end of the Body section, to allow the content of the webpage to load before the scripts are executed.`
      ),

      Paragraph(
        `This means that the content, images and stylesheets will already have been loaded, resulting in faster load and a better experience for the users.`
      ),

      Vimeo('https://www.youtube.com/embed/v9KL9k6BRYY'),

      NextPrev('< Prev Post', 'user-guide-40', 'Next Post >', 'user-guide-42')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
