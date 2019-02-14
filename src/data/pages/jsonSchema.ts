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
  name: 'jsonSchema',
  url: 'json-schema',
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
        Span('Posted on February 1, 2019'),
      ]),
      Title('JSON Schema'),

      AutoScaleImage({
        src: '/static/blog/json-schema.png',
        alt: 'Picture that represents UI bulding.',
      }),

      Paragraph(
        `Our UIDL format is enforced by JSON Schema, an open format that allows us to add constraints, rules, and types on our UIDL objects. Based on the JSON schemas, we are able to perform structurally and type validation for both the component and the project UIDLs.`
      ),

      Paragraph(
        `Each UIDL has a $schema reference at the root level, based on which we perform the validation. The advantage of using the JSON Schema format is that we can easily keep all the different versions of the UIDL schemas, allowing us to maintain backward compatibility in terms of UIDL validation and code generation.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
