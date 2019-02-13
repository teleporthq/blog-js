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
  name: 'twoBillionWebsites',
  url: 'two-billion-websites',
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
        Span('Posted on December 19, 2018'),
      ]),
      Title('2 Billion Websites'),

      AutoScaleImage({
        src: '/static/blog/two-billion-websites.jpg',
        alt: 'Picture with a lot of websites',
      }),

      Paragraph(
        `In 2018, the web reached the 2 billion websites mark. In the years to come, the number of websites, mobile apps, and user interfaces of all sorts will continue to grow exponentially while the number of humans capable of building them and maintain them won’t. Therefore, there’s a crucial need to optimize the process of user interface building from both a cost and workforce availability perspective.`
      ),

      Paragraph(
        `This is why, at teleportHQ, we started to think about how technology could disrupt this market with the use of AI. But first, let’s take a look at the full process.
        `
      ),

      NextPrev('', '', 'User Interface Building Process >', 'user-interface-building-process')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
