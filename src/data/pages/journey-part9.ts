import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Hero, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journey-part9',
  url: 'journey-part9',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/journey/Part9.png', 'Journey Part 9', '#ffffff'),
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
      Title('Our Journey: Part 9'),

      AutoScaleImage({
        src: '/static/blog/journey/part9-pic.png',
        alt: `A plot visualizing the most common placement for DIV html tags`,
      }),

      Paragraph(
        `Again, with the position informations from our previous post, we look at tags with tagName DIV. An important point on our methodology when processing the data is that there were several tags centered outside of the page area, probably to hide information to the viewer or for SEO purposes. Those tags had to be excluded to ease the creation of those plots and it is particularly visible in the case of the DIV tag as those tags typically have a large area, thus the margins of the created image appear black and therefore without tags. Another remark about this plot is that we can see different sections appearing. This can be explain by a common layout between websites.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
