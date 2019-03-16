import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, Bold } from '../components'

export default {
  name: 'theUIDLProject',
  url: 'the-UIDL-project',
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
      Title('The UIDL Project'),

      AutoScaleImage({
        src: '/static/blog/the-UIDL-project.png',
        alt: 'Picture that represents UI bulding.',
      }),

      Paragraph(
        `Modern web interfaces use atomic building blocks commonly referred to as `,
        Bold('components'),
        `. Our philosophy for generating websites is to ensure that the codebase you end up with is as close as possible, if not even better than a codebase that is 100% build by humans.`
      ),

      Paragraph(
        `There are two types of UIDL structures we will talk about. Component UIDLs define a single UI component. They contain most of the UIDL details. The UIDL Project is represented by a collection of components and some extra information about the project. Understanding the core elements of the component UIDL is the key to understanding how we represent user interfaces in the JSON format.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
