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
  name: 'userInterfaceBuildingProcess',
  url: 'user-interface-building-process',
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
        Span('Posted on December 27, 2018'),
      ]),
      Title('User Interface Building Process'),

      AutoScaleImage({
        src: '/static/blog/user-interface-building-process.png',
        alt: 'A diagram showing the collaborative process between an Owner, Project Manager, Design and Developer',
      }),

      Paragraph(
        `Currently, the performance of any modern digital product is strongly correlated to the quality and usability of its UI. Yet, building a user interface for digital applications is a complex process involving complicated and lengthy interactions between multiple specialists, each with their own specific domain knowledge. `
      ),

      Paragraph(
        'Then, a project or product owner refines the requirements and builds a prototype of the application using wireframes. Once validated, the designer transforms the wireframes into designs which are, finally, transformed into code by the developer. This process is time-consuming and expensive. Moreover, as more people get involved, the process is increasingly prone to error. '
      ),

      NextPrev(
        '< 2 Billion Websites',
        'two-billion-websites',
        'A Limited Supply of Developers >',
        'a-limited-supply-of-developers'
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
