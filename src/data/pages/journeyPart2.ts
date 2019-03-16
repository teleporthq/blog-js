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
  name: 'journeyPart2',
  url: 'journey-part-2',
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
        Span('Posted on November 19, 2018'),
      ]),
      Title('Our Journey: Part 2'),

      AutoScaleImage({
        src: '/static/blog/journey/part2-pic.png',
        alt: 'AI-based platforms will build websites according to described content.',
      }),

      Paragraph(
        `This post is part of a series where we relayed information found in an infographic from `,
        ExternalLink(
          `https://designmodo.com/history-website-building/`,
          `https://designmodo.com/history-website-building/`
        ),
        `. This visionary infographic tried to describe the way AI will influence the work of user interface professionals in the future. It resonated strongly with what we believe in at teleportHQ. Feel free to give the `,
        ExternalLink('article', 'https://designmodo.com/history-website-building/'),
        ` a look! Thank you Diana Valeanu and Designmodo for confirming our beliefs and allowing us to share you work!`
      ),

      NextPrev('< Previous Post', 'journey-part-1', 'Next Post >', 'journey-part-3')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
