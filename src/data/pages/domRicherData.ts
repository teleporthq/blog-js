import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from '../components'

export default {
  name: 'domRicherData',
  url: 'dom-richer-data',
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
        Span('Posted on March 20, 2019'),
      ]),
      Title('Richer Data'),

      Paragraph(
        `In the field of websites analysis, one of the classical approaches for data collection has been to parse the HTML structure of each website as a text file.`
      ),

      Paragraph(
        `However, given the complexity of the technology used to build modern websites, which involve a lot of server side rendering as well as client side JavaScript rendering, we felt that just the HTML data wasn’t enough to accurately represent how a web page would look like once it’s loaded in the browser.`
      ),

      Paragraph(
        `This is why we felt that we need to go further and get a more in depth picture of each website we would analyse.`
      ),

      NextPrev('< Previous Post', 'dom-introduction', 'Next Post >', 'dom-custom-web-pages-parser')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
