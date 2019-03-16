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
} from '../components'

export default {
  name: 'journeyPart5',
  url: 'journey-part-5',
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
        Span('Posted on November 28, 2018'),
      ]),
      Title('Our Journey: Part 5'),

      AutoScaleImage({
        src: '/static/blog/journey/part5-pic.png',
        alt: `Plot showing the depth of nested tags in html.`,
      }),

      Paragraph(
        `Another variable of interest that we have access to is the depth of each tag. The depth is 0 for the HTML tag, then 1 for the head and body and so on. This variable is numeric but can only take the form of integers so we choose scatterplots to display it here. We compared the depth to several other variables of our dataset, in particular the tagNames to give a new dimension to the histogram previously plotted.`
      ),

      Paragraph(
        `As it is a discrete variable, we added a jitter effect and transparency to the point for a better visualization. We can see that if the maximum depth of tags is 40, most tags have a depth between 0 and 20. Some depth seems to present more tags but it could correspond to specific websites with lot of occurence of the same tag at the same depth. With more websites this effect may be smoothened.`
      ),
      NextPrev('< Previous Post', 'journey-part-4', 'Next Post >', 'journey-part-6')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
