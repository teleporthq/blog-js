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
  name: 'furtherThanAutomation',
  url: 'further-than-automation',
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
        Span('Posted on January 10, 2019'),
      ]),
      Title('Further Than Automation'),

      AutoScaleImage({
        src: '/static/blog/further-than-automation.png',
        alt: 'Picture with a representation of efficiency.',
      }),

      Paragraph(
        `At teleportHQ we go one step further than automation. Our Visual Development Platform is using machine learning and artificial intelligence, to augment the capabilities of UI professionals by inferring user intent, by generating multi-target state-of-the-art code in real-time, and ultimately by improving existing designs or even generating new designs.`
      ),

      Paragraph(
        `Although in the beginning, the role of the UIDL seemed to be limited to describing the UI elements and their relationship, we are now confident that we can use it to also describe user interactions, flows, events, and more complicated UI patterns based on component architectures as well as dynamic data-driven applications.`
      ),

      NextPrev('< A Mental Exo-Skeleton', 'a-mental-exo-skeleton', 'Accumulating Knowledge >', 'accumulating-knowledge')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
