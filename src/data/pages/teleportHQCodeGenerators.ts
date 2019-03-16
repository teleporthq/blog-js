import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, Bold } from '../components'

export default {
  name: 'teleportHQCodeGenerators',
  url: 'teleportHQ-code-generators',
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
        Span('Posted on February 11, 2019'),
      ]),
      Title('TeleportHQ Code Generators'),

      AutoScaleImage({
        src: '/static/blog/teleporthq-code-generators.png',
        alt: 'Picture representing a computer brain.',
      }),

      Paragraph(
        `The web platform did not embrace visual editors as the standard way of building UIs. However, we believe code generation is the future and we're dedicating a lot of effort in engineering `,
        Bold(`scalable`),
        `, `,
        Bold(`extensible`),
        ` and `,
        Bold(`reusable`),
        ` code generation tools.`
      ),

      Paragraph(
        `Our code generators output `,
        Bold(`modern JavaScript`),
        ` in files linked together with the 'ES Modules' standard. We also believe in the modern approach of `,
        Bold(`component`),
        ` driven `,
        Bold(`architecture`),
        `, so we worked around the ‘React’ and ‘Vue’ ecosystems. This does not mean that we are neglecting other output targets, but it was easier for us to start with just a few popular options.`
      ),

      Paragraph(
        `We also picked two different types of output to show that we can easily switch from one target to another, while building the same functionality from the UI perspective.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
