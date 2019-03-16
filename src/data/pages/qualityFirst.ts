import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, AutoScaleImage, Body, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'

export default {
  name: 'qualityFirst',
  url: 'quality-first',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on January 25, 2019'),
      ]),
      Title('Quality First'),

      AutoScaleImage({
        src: '/static/blog/quality-first.png',
        alt: 'Picture representing Quality Control.',
      }),

      Paragraph(
        `It is our strong belief that visual editor tools should generate the best possible quality from the point of view of machine generated code. Developers should be able to open a project that they generate with our tool and instantly feel like home.`
      ),

      Paragraph(
        `The user interfaces should be clearly separated into components and each component should reflect the common good practices and patterns that are popular in the community. Hence, our effort in that direction is significant. This also means that we are open to improvements at all times since we are fully aware of the ever-changing landscape of front-end development.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
