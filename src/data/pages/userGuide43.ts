import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide43',
  url: 'user-guide-43',
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
        Span('Posted on October 16, 2019'),
      ]),
      Title('User Guide: Using Unsplash'),

      Paragraph(
        `A proper website has clean and HD visuals, images and svgs. To help you with that, we’ve partnered with Unsplash to bring their library directly in our playground.`
      ),

      Paragraph(
        `Go to the Assets panel and select the Unsplash tab. From here, you can search by keyword to find pictures that fit your design, free of charge.`
      ),

      Vimeo('https://www.youtube.com/embed/YcE6TOnGO94'),

      NextPrev('< Prev Post', 'user-guide-42', 'Next Post >', 'user-guide-44')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
