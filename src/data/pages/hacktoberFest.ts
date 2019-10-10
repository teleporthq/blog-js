import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  Hero,
  AuthorCard,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  ExternalLink,
  UnorderedList,
  ListItem,
} from '../components'

export default {
  name: 'hacktoberFest',
  url: 'teleport-to-hacktoberfest',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/hacktoberfest/blogpost-hacktober.png', 'Teleport to Hacktoberfest', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on October 8, 2019'),
      ]),
      Title('Teleport to Hacktoberfest'),

      Paragraph(
        `Have you ever wanted to contribute to open source but didn’t have the chance, the project, nor the proper guidance? Let’s fix that!`
      ),

      Paragraph(
        `In case you didn’t know, during the month of October, Digital Ocean partners with GitHub to bring you the 2019 edition of `,
        ExternalLink('Hacktoberfest', 'https://hacktoberfest.digitalocean.com/'),
        `. You can read more on the website, but basically if you create four pull requests during the month of October, you will get a limited edition Hacktoberfest T-Shirt for your contribution to open source.`
      ),

      Paragraph(
        `At teleportHQ we want to support the open source movement as much as we can. That being said, we flagged some issues on two of our open source repos with 'Hacktoberfest' and 'good first issue'.`
      ),

      Paragraph(`You will find them here:`),

      UnorderedList(
        ListItem(
          Span(
            `on `,
            ExternalLink(
              'teleport-component-generators',
              'https://github.com/teleporthq/teleport-code-generators/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'
            ),
            `, the main library code, a lerna based monorepo`
          )
        ),
        ListItem(
          Span(
            `on `,
            ExternalLink(
              'teleport-repl',
              'https://github.com/teleporthq/teleport-repl/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'
            ),
            `, the `,
            ExternalLink('online editor', 'https://repl.teleporthq.io'),
            ` for UIDLs`
          )
        )
      ),

      Paragraph(
        `On top of the Hacktoberfest challenge we’re adding our own T-Shirts for those who contribute to our projects and we offer sessions of guidance and support for first time contributors!`
      ),

      Paragraph(
        `Feel free to comment on the issues or drop us an email: `,
        ExternalLink('welcome@teleporthq.io', 'mailto:welcome@teleporthq.io'),
        `.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
