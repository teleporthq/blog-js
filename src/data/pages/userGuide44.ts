import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide44',
  url: 'user-guide-44',
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
        Span('Posted on October 22, 2019'),
      ]),
      Title('User Guide: Using Icons'),

      Paragraph(
        `The same goes for icons, no one likes them pixelated. We’ve added libraries from Material.io, Font Awesome, Feather, IcoMoon and Typicons to our playground for you to access and use in your projects, free of charge.`
      ),

      Vimeo('https://www.youtube.com/embed/bd4JJvRiprc'),

      NextPrev('< Prev Post', 'user-guide-43', 'Next Post >', 'user-guide-45')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
