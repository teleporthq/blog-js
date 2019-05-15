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
  name: 'domIntroduction',
  url: 'dom-introduction',
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
        Span('Posted on March 19, 2019'),
      ]),
      Title('Introduction'),

      AutoScaleImage({
        src: '/static/blog/dom-series/1.png',
        alt: 'Picture with 6 different homepages',
      }),

      Paragraph(
        `On our way towards building the tooling which will allow for automatic front-end code generation, we have to take in consideration the design part as well. One of the better ways to begin this exploratory track is to take a closer look at the existing, and very rich data: all the websites available on the World Wide Web.`
      ),

      Paragraph(
        `To get started, we took the top 1 million websites with the highest traffic according to Alexa’s rankings from which we eliminated all the websites with offending content.`
      ),

      NextPrev('', '', 'Next Post >', 'dom-richer-data')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
