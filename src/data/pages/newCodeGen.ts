import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  Hero,
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  ExternalLink,
  Caption,
  UnorderedList,
  ListItem,
  Title2,
} from '../components'

export default {
  name: 'newCodeGen',
  url: 'new-code-gen',
  content: Page(
    HeaderCommon,
    Hero(
      '/static/blog/code-gen-v0.9/codeGenerators09articlebanner.png',
      'The Second Version of Our Vision Api',
      '#ffffff'
    ),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on September 5, 2019'),
      ]),
      Title('New Release: Code Generators v0.9'),

      Paragraph(
        `We’re excited to report major progress on the teleportHQ code generation libraries! In this new release, we've added new component and project generators for: `,
        ExternalLink('angular', 'https://angular.io/'),
        `, `,
        ExternalLink('preact', 'https://preactjs.com/'),
        ` and `,
        ExternalLink('stencil', 'https://stenciljs.com/'),
        `.`
      ),

      AutoScaleImage({
        src: '/static/blog/code-gen-v0.9/image_preview.gif',
        alt: 'Visual representation of our new code generator',
      }),

      Caption(`Give it a spin at: `, ExternalLink('https://repl.teleporthq.io/', 'https://repl.teleporthq.io/')),

      Paragraph(
        `For some months before v0.9, we were busy working on the underlying infrastructure and architecture for the ecosystem. First we split the packages on npm with a `,
        ExternalLink(
          'lerna monorepo setup',
          'https://medium.com/@askjkrishna/scaffolding-a-project-using-lerna-and-lerna-changelog-cad6156f6f36'
        ),
        ` in v0.7. We then worked at providing generic functionalities for component and project generators in v0.8. With these changes, we enable developers to customize, configure and extend existing packages.`
      ),

      Paragraph(`With this model behind, we’re happy to announce the new official component generators:`),

      UnorderedList(
        ListItem(
          ExternalLink(
            'teleport-component-generator-angular',
            'https://www.npmjs.com/package/@teleporthq/teleport-component-generator-angular'
          )
        ),
        ListItem(
          ExternalLink(
            'teleport-component-generator-preact',
            'https://www.npmjs.com/package/@teleporthq/teleport-component-generator-preact'
          )
        ),
        ListItem(
          ExternalLink(
            'teleport-component-generator-stencil',
            'https://www.npmjs.com/package/@teleporthq/teleport-component-generator-stencil'
          )
        )
      ),

      Paragraph(
        `These new packages add up to our `,
        ExternalLink(
          'extensive ecosystem',
          'https://github.com/teleporthq/teleport-code-generators/tree/master/packages'
        ),
        ` of plugins, component and project generators.`
      ),

      Title2(`Angular`),

      Paragraph(
        `When it comes to enterprise application development and not only, Angular is one of the most popular solutions out there. Angular components are usually made up of 3 separate files: the template HTML, the TypeScript class component and the CSS file. Building Angular components was an interesting task. We ended mixing functionalities we had from the Vue and Stencil component generators. We’re currently working on a solution to have a project generator based on Angular components.`
      ),

      Title2(`Preact`),

      Paragraph(
        `When you don’t need the full power of React, Preact.js comes as a super small (3Kb gzipped lib) alternative for modern web application. Preact works great especially when keeping a minimal bundle size is crucial. Starting from the React plugin system, building Preact components was pretty easy. On top of that, we added a `,
        ExternalLink(
          'Preact-based project generator',
          'https://www.npmjs.com/package/@teleporthq/teleport-project-generator-preact'
        ),
        `, which starts from the template offered by the 'preact-cli'.`
      ),

      Title2(`Stencil`),

      Paragraph(
        `Web Components are great as they offer native support for encapsulation, local state and scoped styling. Stencil.js is one of the most popular solutions for compiling down to web components. Stencil offers a great developer experience with: JSX syntax, TypeScript and scoped CSS.`
      ),

      Paragraph(
        `If you want to experiment with the new generators, head over to the `,
        ExternalLink('online REPL', 'https://repl.teleporthq.io/'),
        ` or check out the docs for a `,
        ExternalLink('quick local setup', 'https://docs.teleporthq.io/guides/getting-started.html'),
        ` based on the npm packages.`
      ),

      Title2(`What's next`),

      Paragraph(
        `We have v0.10 on the horizon. This release will expand our ecosystem with the `,
        ExternalLink('React Native', 'https://facebook.github.io/react-native/'),
        ` component and project generators. We’re also working on adding new publishers for the existing project generators. Finally, we are exploring the generation of component systems based on the UIDL structure.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
