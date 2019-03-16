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
  ExternalLink,
} from '../components'

export default {
  name: 'journeyPart6',
  url: 'journey-part-6',
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
        Span('Posted on December 3, 2018'),
      ]),
      Title('Our Journey: Part 6'),

      AutoScaleImage({
        src: '/static/blog/journey/part6-pic.png',
        alt: `A Violin Plot showing the depth of nested tags in html.`,
      }),

      Paragraph(
        `One issue with the previous plot was the predominance of some tagNames, e.g. DIV and A which made the other less frequent tags difficult to visualize. To overcome this problem, we use another type of plot present in the ggplot toolbox, i.e. [violin plots](`,
        ExternalLink('https://en.wikipedia.org/wiki/Violin_plot', 'https://en.wikipedia.org/wiki/Violin_plot'),
        `). Violin plots are useful for numerical data, they are similar to box plots but the difference is that they show density probability of the data at different values. A few observations can be made from this plot. The SPAN tag is the one spreading the most. The H2 and P tags have less depth than the H3 tag.`
      ),

      NextPrev('< Previous Post', 'journey-part-5', 'Next Post >', 'journey-part-7')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
