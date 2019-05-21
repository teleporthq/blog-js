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
  name: 'domFurtherExplorationIdea2',
  url: 'dom-further-exploration-idea-2',
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
        Span('Posted on May 7, 2019'),
      ]),
      Title('Further Exploration Idea: Relations Between Desktop and Mobile Layouts'),

      AutoScaleImage({
        src: '/static/blog/dom-series/14.png',
        alt: `2019 New Ideas.`,
      }),

      Paragraph(
        `Another very interesting aspect to explore is the relation between the desktop and mobile layouts - comparing how a given desktop layout is made responsive and is adapted for smaller screens.`
      ),

      NextPrev('< Previous Post', 'dom-further-exploration-idea-1', 'Next Post >', 'dom-further-exploration-idea-3')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
