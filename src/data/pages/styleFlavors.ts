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
  ExternalLink,
  NextPrev,
  // UnorderedList,
  // ListItem
} from '../components'
// import ExternalLinkComponent from '../components/externalLink';
// import { ExternalLink } from './../components/externalLink';

export default {
  name: 'styleFlavors',
  url: 'style-flavors',
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
        Span('Posted on March 4, 2019'),
      ]),
      Title('Style Flavors'),

      Paragraph(
        `One of the nice things about our code-generators is that they are configurable and are coming with quite some fine options like style flavors. By default, we use `,
        ExternalLink('Styled JSX', 'https://github.com/zeit/styled-jsx'),
        `, but there are a couple of other options. Let’s see how to configure them.`
      ),

      AutoScaleImage({
        src: '/static/blog/code7.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(`The output:`),

      AutoScaleImage({
        src: '/static/blog/code8.png',
        alt: 'Snippet of code.',
      }),

      Paragraph(`Cool, right? :)`),

      NextPrev('< Adding Styles', 'adding-styles', 'Vue Example >', 'vue-example')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
