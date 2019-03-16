import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
  UnorderedList,
  ListItem,
} from '../components'

export default {
  name: 'setup',
  url: 'setup',
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
        Span('Posted on February 19, 2019'),
      ]),
      Title('Setup'),

      Paragraph(
        `Our open-source code generators are used in our online platform in which you can drag-and-drop elements and components and visually build your interface. However, you can access all their features programmatically as well and this is what we’ll learn about in the next examples.`
      ),

      Paragraph(
        `Before we start, it’s important to remark that our UIDL (User Interface Description Language) is at the heart of our ecosystem. It allows us to define user interfaces in an abstract way, independent of any framework or even the web platform itself, which then allows us to convert that abstraction into different flavors of coding (e.g. React, Vue, etc.). Below, a very simple UIDL example.`
      ),

      AutoScaleImage({
        src: '/static/blog/code2.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(`Our philosophy is based on the following ideas:`),

      Paragraph(
        UnorderedList(
          ListItem(`User interfaces are decomposed into components, hence our focus on component generation`),
          ListItem(
            `What can be built with React, can also be built with Vue or on top of the Web Components standard - we support multiple targets`
          ),
          ListItem(
            `A project built with the visual editor should have a high standard of quality (performance, security, accessibility included)`
          ),
          ListItem(
            `Generated code quality should be as high as possible so that any developer could pick up the work from there on and enhance the project`
          ),
          ListItem(`The code generation architecture is open and extendable, we invite everyone to contribute!`)
        )
      ),

      Paragraph(`With this in mind, let’s jump into the code!`),

      NextPrev('< Introduction to Code Generation', '', 'Generate React Code >', 'generate-react-code')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
