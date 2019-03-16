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
  name: 'journeyPart9',
  url: 'journey-part-9',
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
        Span('Posted on December 12, 2018'),
      ]),
      Title('Our Journey: Part 9'),

      AutoScaleImage({
        src: '/static/blog/journey/part9-pic.png',
        alt: `A plot visualizing the most common placement for DIV html tags`,
      }),

      Paragraph(
        `Again, with the position informations from our previous post, we look at tags with tagName DIV. An important point on our methodology when processing the data is that there were several tags centered outside of the page area, probably to hide information to the viewer or for SEO purposes. Those tags had to be excluded to ease the creation of those plots and it is particularly visible in the case of the DIV tag as those tags typically have a large area, thus the margins of the created image appear black and therefore without tags.`
      ),

      Paragraph(
        `Another remark about this plot is that we can see different sections appearing. This can be explain by a common layout between websites.`
      ),

      NextPrev('< Previous Post', 'journey-part-8', 'Next Post >', 'journey-part-10')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
