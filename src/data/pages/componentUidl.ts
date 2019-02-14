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
  Bold,
  // ExternalLink,
  // NextPrev,
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';

export default {
  name: 'componentUidl',
  url: 'component-uidl',
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
        Span('Posted on January 25, 2019'),
      ]),
      Title('Component UIDL'),

      AutoScaleImage({
        src: '/static/blog/component-UIDL.png',
        alt: 'Picture that represents components.',
      }),

      Paragraph(
        `A single component is represented like a recursive structure. You can pretty much see the correlation between the `,
        Bold(`UIDL`),
        ` and the `,
        Bold(`HTML`),
        ` document from the beginning. The advantage of keeping the information in a JSON format, rather than XML, is that we can easily extend the structure with additional sub-structures which are not relevant from a visual perspective. We will see that later when we talk about conditional rendering and state logic. `
      ),

      Paragraph(
        `Also, JSON manipulation is significantly easier in the realm of JavaScript. As you can see from the example below, a component makes sense by reading the JSON document. As we will go over the separate parts and subsections in the entire spec, you will notice that the UIDL is also constructed as a human readable document.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
