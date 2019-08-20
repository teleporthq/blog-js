import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide14',
  url: 'user-guide-14',
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
        Span('Posted on July 2, 2019'),
      ]),
      Title('User Guide: Adding a Prop to a Component'),

      Paragraph(
        `To create a PROP for a component we first have to tell the playground what attribute of which element within the component we want to be able to edit later from outside of the component.`
      ),

      Paragraph(
        `To do that, we write a variable, like in the video below, as {prop} for the background-color of the selected element. Then we create a ‘Component Override’ by clicking on the “+” button on the top right corner of the Inspector panel.`
      ),

      Paragraph(
        `At the ‘Name’ input, we add the name of our variable ‘prop’, without the ‘{‘ and ‘}’. For ‘Input Type’ we can select between text, number, image or color.`
      ),

      Paragraph(
        `For this example, I’ve chosen to show you how to add a color prop with a text type input, because well, I can :)`
      ),

      Vimeo('https://www.youtube.com/embed/znACbDE_ge0'),

      NextPrev('< Prev Post', 'user-guide-13', 'Next Post >', 'user-guide-15')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
