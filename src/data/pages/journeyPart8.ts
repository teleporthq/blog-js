import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journeyPart8',
  url: 'journey-part-8',
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
        Span('Posted on December 10, 2018'),
      ]),
      Title('Our Journey: Part 8'),

      AutoScaleImage({
        src: '/static/blog/journey/part8-pic.png',
        alt: `A plot visualizing the most common placement for SVG html tags`,
      }),

      Paragraph(
        `Our parser also extract visual information in the form of bounding boxes for each element, i.e. top, left, height, width. With those values, it is possible to visualize the positions for different subsets of our dataset by reconstructing an image with just those tags. The first tag we choose to present is the SVG tag, which is just present in quantity in the top left corner and correspond to the place the logo is often found on websites we parsed. This time, we used the plotting functionality of base R.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
