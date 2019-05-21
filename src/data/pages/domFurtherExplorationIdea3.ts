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
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
  Paragraph,
} from '../components'

export default {
  name: 'domFurtherExplorationIdea3',
  url: 'dom-further-exploration-idea-3',
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
        Span('Posted on May 13, 2019'),
      ]),
      Title('Further Exploration Idea: Ratios Between, Texts, Actions and Colors'),

      AutoScaleImage({
        src: '/static/blog/dom-series/14.png',
        alt: `2019 New Ideas.`,
      }),

      Paragraph(
        `Another last idea would be to detect patterns between texts, actions (such as links, buttons, click events) and colors (colors of the actionable items, surface of colored backgrounds, number of images).`
      ),

      NextPrev('< Previous Post', 'dom-further-exploration-idea-2', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
