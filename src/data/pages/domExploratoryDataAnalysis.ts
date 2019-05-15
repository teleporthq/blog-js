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
  name: 'domExploratoryDataAnalysis',
  url: 'dom-exploratory-data-analysis',
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
        Span('Posted on March 27, 2019'),
      ]),
      Title('Exploratory Data Analysis'),

      AutoScaleImage({
        src: '/static/blog/dom-series/5.png',
        alt: 'The Process of Clustering explained in a diagram',
      }),

      Paragraph(
        `In our second round of work, we decided to split the exploratory data analysis of our clusters into two categories:`
      ),

      Paragraph(
        UnorderedList(
          ListItem(
            'structure, which for us means the point of view of the developer (tag type, depth structure of the page etc.)'
          ),
          ListItem('appearance (major color types, image coverage, position of elements, font-size etc.)')
        )
      ),

      NextPrev('< Previous Post', 'dom-clustering', 'Next Post >', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
