import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide50',
  url: 'user-guide-50',
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
        Span('Posted on November 15, 2019'),
      ]),
      Title('User Guide: Inviting Users to Collaborate'),

      Paragraph(`Since no group of programmers alive can decide on a CSS styling method, we’ve added all of them.`),

      Paragraph(
        `Most of the time, teams are working on the same project, sometimes even the same page. To make that process run smoothly, the Playground supports realtime collaboration.`
      ),

      Paragraph(
        `All you have to do is invite your team members by clicking on the "+" icon on the right, top-side to the Playground, and input your team members' email address.`
      ),

      Paragraph(
        `Your team member will receive an email with the collaboration invite and can agree to join at any time.`
      ),

      Vimeo('https://www.youtube.com/embed/T5qJfDhhpFY'),

      NextPrev('< Prev Post', 'user-guide-49', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
