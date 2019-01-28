import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journeyPart4',
  url: 'journey-part-4',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/mihaitaba.png',
          name: 'Mihai Tabacaru',
          twitterHandle: '@mihaiitabacaru',
          twitterLink: 'https://twitter.com/@mihaiitabacaru',
        }),
        Span('Posted on November 26, 2018'),
      ]),
      Title('Our Journey: Part 4'),

      AutoScaleImage({
        src: '/static/blog/journey/part4-pic.png',
        alt: `Plot showing the relation between website's background color and element color.`,
      }),

      Paragraph(
        `The colors of each tag is another variable our parser is extracting. This plot shows a first visualization of the two corresponding variables: background color and color in the form of hexadecimal codes. We chose to use a count plot as it is a good option to visualize 2 discrete variables. Like previously and in the following plots, we had to select only the more frequent in each variable to keep the graph readable. We can see in the bottom left part of the plot that the black and white colors are preponderant (#FFFFFFF and #000000). However, some of those values may not be visible or contain any text. In such case, because those two colors can be considered as default colors, they may be overestimated and more tests may be needed by subsetting the dataset.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
