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
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';

export default {
  name: 'oneLanguageForEveryUI',
  url: 'one-language-for-every-UI',
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
        Span('Posted on January 17, 2019'),
      ]),
      Title('UIDL - One Language for Every UI'),

      AutoScaleImage({
        src: '/static/blog/one-language-for-every-ui.png',
        alt: 'Picture that represents UI bulding.',
      }),

      Paragraph(
        `From the beginning, we wanted to create a universal format that can describe all the possible scenarios in a given user interface. The same universal format would help us generate the same visual interface with various tools and frameworks, allowing us to transition from one output type to another. A JSON based document is the obvious choice as it allows us to manipulate the data with no effort at all.`
      ),

      Paragraph(
        `Overall, our platform’s extended capabilities reduce the cost of building and maintaining user interfaces by 50% in a B2B case and even more for simple static websites.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
