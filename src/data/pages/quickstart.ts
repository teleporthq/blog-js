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
  name: 'quickstart',
  url: 'quickstart',
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
        Span('Posted on March 12, 2019'),
      ]),
      Title('Quickstart'),

      Paragraph(
        `In order to allow you to play instantly with our code generators, we’ve prepared for you a Codesandbox template.`
      ),

      AutoScaleImage({
        src: '/static/blog/code12.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(
        `If you’re interested in getting your hands dirty, just click `,
        ExternalLink('here', 'https://codesandbox.io/s/32w7pll6l5'),
        ` and don’t forget to give us feedback on our Spectrum channel.`
      ),

      NextPrev('< Dependencies', 'dependencies', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
