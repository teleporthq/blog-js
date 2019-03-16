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
  name: 'dependencies',
  url: 'dependencies',
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
        Span('Posted on March 11, 2019'),
      ]),
      Title('Dependencies'),

      Paragraph(
        `All modern frameworks are using dependencies and our code-generators are taking care of that as well. Let’s take a closer look at all the data which comes through a generation cycle:`
      ),

      AutoScaleImage({
        src: '/static/blog/code11.png',
        alt: 'Snippet of code.',
      }),

      NextPrev('< Vue Example', 'vue-example', 'Quickstart >', 'quickstart')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
