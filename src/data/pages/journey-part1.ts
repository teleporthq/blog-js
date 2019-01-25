import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Hero, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journey-part1',
  url: 'journey-part1',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/journey/Part1.png', 'Journey Part 1', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/mihaitaba.png',
          name: 'Mihai Tabacaru',
          twitterHandle: '@mihaiitabacaru',
          twitterLink: 'https://twitter.com/@mihaiitabacaru',
        }),
        Span('Posted on Jan 23'),
      ]),
      Title('Our Journey: Part 1'),

      AutoScaleImage({
        src: '/static/blog/part1.png',
        alt: 'Picture with a lot of websites',
      }),

      Paragraph(
        `One of our objectives at teleportHQ is to generate web design, so we first had to collect data from the web. Since no available dataset fitted our needs, we created our own parsing technology with a focus on web design data. This post shows the screenshots taken from some of the webpages parsed. In addition, we collected other data for each tag such as their type (e.g. div, img, p, h1, etc...), position (i.e. top, left, width, height) and colors.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
