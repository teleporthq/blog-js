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
} from '../components'
// import br from '../elements/br'

export default {
  name: 'journeyPart3',
  url: 'journey-part-3',
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
        Span('Posted on November 21, 2018'),
      ]),
      Title('Our Journey: Part 3'),

      AutoScaleImage({
        src: '/static/blog/journey/part3-pic.png',
        alt: 'Plot showing the number of different tags in html.',
      }),

      Paragraph(
        `This post shows the first plot of our `,
        ExternalLink('Instagram', 'https://www.instagram.com/teleporthqiojourney/'),
        ` series about the exploratory data analysis of our parser dataset. We can see how the tagName variable is distributed within a histogram plot, as the dataset was subsetted with the 15 most frequent tagNames. Clearly the DIV and A tags are part of the majoritary. This distribution may change as our dataset grows in size but we can already see a trend starting to form. The plot is made in R with the help of the ggplot2 package.`
      ),

      NextPrev('< Previous Post', 'journey-part-2', 'Next Post >', 'journey-part-4')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
