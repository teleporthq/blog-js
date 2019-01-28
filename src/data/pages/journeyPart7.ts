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
  NextPrev,
} from '../components'
// import br from '../elements/br'

export default {
  name: 'journeyPart7',
  url: 'journey-part-7',
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
        Span('Posted on December 5, 2018'),
      ]),
      Title('Our Journey: Part 7'),

      AutoScaleImage({
        src: '/static/blog/journey/part7-pic.png',
        alt: `A Jitter Score Plot showing the depth of the lineHeight tag in html.`,
      }),

      Paragraph(
        `In the same series of plots, we also compared depth with another numerical data: the line height. We kept the jitter effect and transparency consistent with the series (also because the plots were produced in a for loop). An alternative would have been to use a count plot but it would have been saturated by the frequent event and wouldn’t have given a global view on the data. A first remark can be made on the tags with line height of 0 on the left of the plot, those are equally distributed in depth and it will be interesting to know which tagNames are concerned. By looking at the other tags, we can see that most of the tags have a depth between 10 and 25 and a line height between 10 and 30. Other tags can be considered as outliers.`
      ),

      NextPrev('< Previous Post', 'journey-part-6', 'Next Post >', 'journey-part-8')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
