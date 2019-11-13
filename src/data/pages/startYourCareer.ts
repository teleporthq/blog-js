import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  Body,
  Page,
  Hero,
  Paragraph,
  ExternalLink,
  Title,
  Title2,
  AuthorCardWrapper,
  Span,
  UnorderedList,
  ListItem,
  Bold,
} from '../components'

export default {
  name: 'startYourCareer',
  url: 'start-your-career',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/start-your-career.png', 'Start Your Tech Career at teleportHQ', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on November 11, 2019'),
      ]),
      Title('Start Your Tech Career at teleporthq'),

      Paragraph(
        `Are you interested in `,
        Bold(`Web Development`),
        ` and `,
        Bold(`JavaScript`),
        `? So are we. And we want to grow our development team as we head into `,
        Bold(`2020`),
        `. Hence we’re opening `,
        Bold(`3 positions`),
        ` for our office in `,
        Bold(`Cluj`),
        ` for `,
        Bold(`Junior Software Developers`),
        `. We want to fill them up by the end of the year, with the prospect of starting the collaborations at the beginning of 2020.`
      ),

      Title2(`What we are looking for`),

      Paragraph(
        UnorderedList(
          ListItem(`People with passion for software development and interest in working on full-scale products`),
          ListItem(`Good understanding of programming: functions, algorithms, data structures, data types`),
          ListItem(
            `Basic understanding of the fundamentals of client-server architectures and the web stack: browsers, requests, servers, databases`
          ),
          ListItem(
            `Some understanding of the fundamentals of frontend development: HTML, CSS, DOM manipulation, browser APIs`
          ),
          ListItem(`Logic and analytical thinking`),
          ListItem(`Proven skills with at least one programming language`),
          ListItem(`No former working experience required`),
          ListItem(`Good communication skills and openness towards learning and development`),
          ListItem(`Finally, humbleness and respect are two core values which we cannot live without`)
        )
      ),

      Title2(`What we offer`),

      Paragraph(
        UnorderedList(
          ListItem(`Full time / part time contract`),
          ListItem(
            `Each junior developer will have a mentor from day 1 and the full support of the entire dev team around them`
          ),
          ListItem(
            `The first 3 months will be a gradual onboarding on our projects, mixed with technical and non-technical learning`
          ),
          ListItem(`Flexible schedule, starting from 30 h/week`),
          ListItem(`Remote-friendly environment`)
        )
      ),

      Title2(`How you apply`),

      Paragraph(
        UnorderedList(
          ListItem(`Prepare your CV and Cover Letter - we’re interested in your motivation to pursue this career`),
          ListItem(
            `If you worked at a web project before (HTML, CSS, JavaScript or any web frontend framework), share your codebase with us, we want to see how you work.`
          ),
          ListItem(
            `If you don’t have a web project, try building a small user interface that handles a shopping list, where you can add items and quantities and you can cross-check items and remove them later from the list. If you have any questions about the mini-project, don’t hesitate to contact us before sending the application.`
          ),
          ListItem(
            `Note: We want to see your own contribution, so make sure that the codebase you’re sending is done by you and that you are ready to answer questions on the codebase.`
          ),
          ListItem(
            `Pack everything and send it over at: `,
            ExternalLink(`hireme@teleporthq.io`, `mailto: hireme@teleporthq.io`)
          )
        )
      ),

      Title2(`Recruitment process`),

      Paragraph(
        UnorderedList(
          ListItem(`Applications are open until the `, Bold(`end of November`)),
          ListItem(`We review the applications as we receive them`),
          ListItem(`You will definitely get an answer, positive or negative`),
          ListItem(`If it’s positive, we will schedule a face to face technical interview at our headquarters`),
          ListItem(
            `If everything works well, we will invite you for a few hours at our office to meet the team and learn about our projects, before making the final decision.`
          )
        )
      ),

      Title2(`About us`),

      Paragraph(`The role of the full stack JavaScript team, is to develop two parts of the teleportHQ ecosystem:`),

      Paragraph(
        UnorderedList(
          ListItem(
            `a SaaS platform for building web and mobile applications from a modern drag-an-drop interface that is currently in its late alpha stage: `,
            ExternalLink(`https://play.teleporthq.io/`, `https://play.teleporthq.io/`)
          ),
          ListItem(
            `a suite of open source libraries for code generation: `,
            ExternalLink(
              `https://github.com/teleporthq/teleport-code-generators`,
              `https://github.com/teleporthq/teleport-code-generators`
            )
          )
        )
      ),

      Paragraph(
        `Our tech stack is centred around TypeScript and we work with React and Next.js on the front-end and with Node.js and MongoDB on the back-end. Let us know if you have any questions for things we might have forgotten to cover. Looking forward to seeing your applications, good luck!`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
