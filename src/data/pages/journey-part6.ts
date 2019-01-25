import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Hero, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journey-part6',
  url: 'journey-part6',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/journey/Part6.png', 'Journey Part 6', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/mihaitaba.png',
          name: 'Mihai Tabacaru',
          twitterHandle: '@mihaiitabacaru',
          twitterLink: 'https://twitter.com/@mihaiitabacaru',
        }),
        Span('Posted on Jan 23'),
      ]),
      Title('Our Journey: Part 6'),

      AutoScaleImage({
        src: '/static/blog/journey/part6-pic.png',
        alt: `A Violin Plot showing the depth of nested tags in html.`,
      }),

      Paragraph(
        `One issue with the previous plot was the predominance of some tagNames, e.g. DIV and A which made the other less frequent tags difficult to visualize. To overcome this problem, we use another type of plot present in the ggplot toolbox, i.e. [violin plots](https://en.wikipedia.org/wiki/Violin_plot). Violin plots are useful for numerical data, they are similar to box plots but the difference is that they show density probability of the data at different values. A few observations can be made from this plot. The SPAN tag is the one spreading the most. The H2 and P tags have less depth than the H3 tag.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
