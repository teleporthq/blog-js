import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'domCustomWebPagesParser',
  url: 'dom-custom-web-pages-parser',
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
        Span('Posted on March 26, 2019'),
      ]),
      Title('Custom Web Pages Parser'),

      Paragraph(
        `Given our desire to gather precise data about each web page we would parse, we decided to build our own parser, which instead of returning just the HTML code of a given web page, would instead return a complete data set of all the DOM nodes of that page once rendered.`
      ),

      Paragraph(
        `For each web page, our parser waits for all the content to be loaded and then it returns a list of every single DOM node with all its meaningful attributes from a visual perspective such as its size, position, text color, background color, content, font-size and of course a couple of screenshots of the fully rendered page in various sizes.`
      ),

      Paragraph(`Now we have highly precise data from which we can start our work.`),

      NextPrev('< Previous Post', 'dom-richer-data', 'Next Post >', 'dom-clustering')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
