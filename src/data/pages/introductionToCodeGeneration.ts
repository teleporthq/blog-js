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
  ExternalLink,
  NextPrev,
} from '../components'

export default {
  name: 'introductionToCodeGeneration',
  url: 'introduction-to-code-generation',
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
        Span('Posted on February 18, 2019'),
      ]),
      Title('Introduction to Code Generation'),

      Paragraph(
        `A couple of weeks ago we announced the release of our latest generation of code generators. They’re open-source and you can take a look at the code `,
        ExternalLink('here', 'https://github.com/teleporthq/teleport-code-generators'),
        `. They’re coming with several improvements, a lot of new features such as state description and loops. They are opening the path to a final production version which should become available by the end of this year.`
      ),

      AutoScaleImage({
        src: '/static/blog/code1.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(
        `In this series of blog posts, we’ll present how they work, and we’ll go through a series of examples.`
      ),

      NextPrev('', '', 'Setup >', 'setup')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
