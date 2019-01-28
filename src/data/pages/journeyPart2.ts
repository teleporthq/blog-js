import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

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
} from '../components'

export default {
  name: 'journeyPart2',
  url: 'journey-part-2',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/mihaitaba.png',
          name: 'Mihai Tabacaru',
          twitterHandle: '@mihaiitabacaru',
          twitterLink: 'https://twitter.com/@mihaiitabacaru',
        }),
        Span('Posted on November 19, 2018'),
      ]),
      Title('Our Journey: Part 2'),

      AutoScaleImage({
        src: '/static/blog/journey/part2-pic.png',
        alt: 'AI-based platforms will build websites according to described content.',
      }),

      Paragraph(
        `This post is part of a series where we relayed information found in an infographic from https://designmodo.com/history-website-building/. This visionary infographic tried to describe the way AI will influence the work of user interface professionals in the future. It resonated strongly with what we believe in at teleportHQ. Feel free to give the `,
        ExternalLink('article', 'https://designmodo.com/history-website-building/'),
        ` a look! Thank you Diana Valeanu and Designmodo for confirming our beliefs and allowing us to share you work!`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
