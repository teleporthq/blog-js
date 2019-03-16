import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'

export default {
  name: 'typeScriptInterfaces',
  url: 'typescript-interfaces',
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
        Span('Posted on February 8, 2019'),
      ]),
      Title('TypeScript Interfaces'),

      AutoScaleImage({
        src: '/static/blog/typescript-interfaces.png',
        alt: 'TypeScript logo',
      }),

      Paragraph(
        `Through our writing we will reference the TypeScript interfaces that are used extensively in representing the UIDLs. TypeScript is a great fit for building our generators because it allows us to easily map the constraints of the UIDL into typed interfaces. We encourage everyone who wishes to create new plugins and/or generators based on our architecture and on the UIDL format, to work with TypeScript to take full advantage of our format and data structures.`
      ),

      Paragraph(
        `Finally, TypeScript is a great way of documenting our APIs, allowing our community to share plugins, generators and other parts of the system with the compatible interfaces.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
