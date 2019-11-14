import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide48',
  url: 'user-guide-48',
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
        Span('Posted on November 5, 2019'),
      ]),
      Title('User Guide: Leave Feedback'),

      Paragraph(
        `We think that your feedback is vital to the correct development of the playground. It’s made for you, so your opinion is crucial to us.`
      ),

      Paragraph(
        `To leave us feedback, simply click on the Feedback icon located to the bottom, left-side of the playground. It will redirect you to our Spectrum.chat page where we’ve set up channels for each category of feedback you might have.`
      ),

      Paragraph(`If you take the time to leave us feedback, we thank you!`),

      Vimeo('https://www.youtube.com/embed/EX-HSVbpZ2g'),

      NextPrev('< Prev Post', 'user-guide-47', 'Next Post >', 'user-guide-49')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
