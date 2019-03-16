import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
} from '../components'

export default {
  name: 'addingStyles',
  url: 'adding-styles',
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
        Span('Posted on February 27, 2019'),
      ]),
      Title('Adding Styles'),

      Paragraph(
        `Our UIDL format also supports generic styling. The supported format is JSS compatible. Let’s update our example.`
      ),

      AutoScaleImage({
        src: '/static/blog/code5.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(`The corresponding output:`),

      AutoScaleImage({
        src: '/static/blog/code6.png',
        alt: 'Snippet of code.',
      }),

      NextPrev('< Generate React Code', 'generate-react-code', 'Styles flavors >', 'style-flavors')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
