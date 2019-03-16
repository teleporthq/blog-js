import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, Bold } from '../components'

export default {
  name: 'nodeTypes',
  url: 'node-types',
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
        Span('Posted on February 12, 2019'),
      ]),
      Title('Node Types'),

      AutoScaleImage({
        src: '/static/blog/node-types.png',
        alt: 'Html?',
      }),

      Paragraph(
        `For storing the node information we decided to use `,
        Bold(`abstract`),
        ` node types (eg. text, image, link) and not the standard 'HTML' tags (eg. span, img, a). Our initial idea was to build code generation tools for the web, but we want to make sure our solution was scalable for mobile and other native interfaces. Hence, our decision to work with abstract types.`
      ),

      Paragraph(
        `This does not apply only to the node types, but also to common attributes and other substructures of the UIDL. All in all, you won't find platform-specific information in the component UIDLs. The only noteworthy exception is the `,
        Bold(`styling`),
        ` objects, which are a 1:1 mapping of the standard style object in JavaScript. Here, we're counting on the similarities between the mobile and web platforms in terms of styling elements.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
