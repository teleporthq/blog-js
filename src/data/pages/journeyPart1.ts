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
  // ExternalLink,
  NextPrev,
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';

export default {
  name: 'journeyPart1',
  url: 'journey-part-1',
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
        Span('Posted on November 16, 2018'),
      ]),
      Title('Our Journey: Part 1'),

      AutoScaleImage({
        src: '/static/blog/journey/part1-pic.png',
        alt: 'Picture with a lot of websites',
      }),

      Paragraph(
        `One of our objectives at teleportHQ is to generate web design, so we first had to collect data from the web. Since no available dataset fitted our needs, we created our own parsing technology with a focus on web design data. This post shows the screenshots taken from some of the webpages parsed. In addition, we collected other data for each tag such as their type (e.g. div, img, p, h1, etc...), position (i.e. top, left, width, height) and colors.`
      ),

      NextPrev('', '', 'Next Post >', 'journey-part-2')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
