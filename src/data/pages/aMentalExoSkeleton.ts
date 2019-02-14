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
  name: 'aMentalExoSkeleton',
  url: 'a-mental-exo-skeleton',
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
        Span('Posted on January 4, 2018'),
      ]),
      Title('A Mental Exo Skeleton'),

      AutoScaleImage({
        src: '/static/blog/a-mental-exo-skeleton.png',
        alt: 'Picture inspiring to more time spent generating ideas, not implementing them.',
      }),

      Paragraph(
        `We're convinced that the future of application development belongs to the tools that will succeed to create a mental exoskeleton for creatives, developers and entrepreneurs.`
      ),

      Paragraph(
        `In this future, humans will spend more time and energy developing ideas, while the implementation details will be executed by automation and AI.`
      ),

      Paragraph(
        `This is why, at teleportHQ, we are building the first blocks of technology for the augmented entrepreneurs to come. teleportHQ’s platform will help the teams involved in the production of user interfaces to handle the increasing complexity of their endeavor.`
      ),

      NextPrev(
        '< A Limited Supply Of Developers',
        'a-limited-supply-of-developers',
        'Further Than Automation >',
        'further-than-automation'
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
