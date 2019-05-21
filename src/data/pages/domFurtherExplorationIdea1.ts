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
  name: 'domFurtherExplorationIdea1',
  url: 'dom-further-exploration-idea-1',
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
        Span('Posted on May 6, 2019'),
      ]),
      Title('Further Exploration Idea: Clusterization per Industry'),

      AutoScaleImage({
        src: '/static/blog/dom-series/14.png',
        alt: `2019 New Ideas.`,
      }),

      Paragraph(
        `During our work on this topic, many new ideas of exploration came to our mind such as the clusterization of designs per industries. For example, we detected a lot of similar design patterns for car makers.`
      ),

      NextPrev('< Previous Post', 'dom-tag-types-on-pages', 'Next Post >', 'dom-further-exploration-idea-2')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
