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
  name: 'journeyPart1',
  url: 'journey-part-1',
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
        Span('Posted on November 16, 2018'),
      ]),
      Title('Our Journey: Part 1'),

      AutoScaleImage({
        src: '/static/blog/part1.png',
        alt: 'Picture with a lot of websites',
      }),

      Paragraph(
        `One of our objectives at teleportHQ is to generate web design, so we first had to collect data from the web. Since no available dataset fitted our needs, we created our own parsing technology with a focus on web design data. This post shows the screenshots taken from some of the webpages parsed. In addition, we collected other data for each tag such as their type (e.g. div, img, p, h1, etc...), position (i.e. top, left, width, height) and colors.`
      ),

      ExternalLink('Next >', 'journey-part-2')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
