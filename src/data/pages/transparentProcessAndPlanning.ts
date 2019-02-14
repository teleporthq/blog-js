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
  // NextPrev,
  // Bold,
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';

export default {
  name: 'transparentProcessAndPlanning',
  url: 'transparent-process-and-planning',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on January 18, 2019'),
      ]),
      Title('Transparent Process and Planning'),

      AutoScaleImage({
        src: '/static/blog/transparent-process-and-planning.png',
        alt: 'Picture that represents UI bulding.',
      }),

      Paragraph(
        `Technical decisions were made and will be made in the future. Our process will be as transparent as possible as we strongly believe in open source and transparency. Hence, we will slowly move our entire planning and thinking process towards Github, where we will invite the community to join, in an effort to develop the code generators ecosystem as reliably and as stable as possible.`
      ),

      Paragraph(
        `Considering that our aim is to build a community around our open source code, we decided to build a modular architecture and a plugin based system that allows us to decompose our code generators into smaller parts that can be re-assembled in new ways.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
