import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  Body,
  Page,
  Paragraph,
  Title,
  Title2,
  AuthorCardWrapper,
  Span,
  Vimeo,
  ExternalLink,
  Hero,
} from '../components'

export default {
  name: 'goingUpTheTreeOfAbstraction',
  url: 'going-up-the-tree-of-abstraction',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/climbing.png', 'Going Up the Tree of Abstraction', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on April 5, 2019'),
      ]),
      Title('Going Up the Tree of Abstraction'),

      Paragraph(
        `I remember the first lines of code I ever wrote. During my first high-school year I was coming in contact with programming for the first time. My teacher told us it’s time to stop talking about pseudo-code and algorithms and start writing C++ code that actually runs. It was a strange feeling of accomplishment. My program was reading two numbers from the console and writing their sum back to the console.`
      ),

      Paragraph(
        `As I was staring at that console I wasn’t thinking at all at the fact that 29 other students had written the same lines of code. Why would that be a problem? We were learning after all, right? `
      ),

      Paragraph(
        `Fast forward 15 years. While the context is different, the outcome is the same. You and me and tens of thousands of developers world wide are writing the same lines of code. We might not be adding two numbers. But we are definitely aligning divs, fetching data from REST endpoints and querying for users in a database. Are we still learning?`
      ),

      Title2(`The rise of automation`),

      Paragraph(
        `When we talk about human learning in 2019, we have a strong competitor. One that does not get tired of writing and executing the same code over and over again. One that can have a major impact on how the future of our work will play out.`
      ),

      Paragraph(
        `There’s a lot of talk today about automation and about machines replacing humans. So how is the our job market preparing for that?`
      ),

      Paragraph(
        `Automation is already an established practice in software engineering. Mainstream programming languages and tools have a ton of built-in automation. Think of memory allocation and garbage collection. Think of type checking and program compilation.`
      ),

      Paragraph(
        `Also, the software processes themselves benefit from automation. We run functional and non-functional tests on top of our applications and services. We have automatic build and deployment pipelines, spinning off servers and setting up the environments for us.`
      ),

      Paragraph(
        `Yet when we think about the act of writing code, we still consider it a human job. Across the entire stack, we rely on dedicated engineers that architect, design and build: backend systems, databases, web applications, mobile applications, etc.`
      ),

      Paragraph(`Maybe software engineering jobs are not destined to be automated.`),

      Paragraph(`Maybe automation is the wrong word here. How about abstraction?`),

      Title2(`Automation vs Abstraction`),

      Paragraph(
        `Think about low level vs high level programming. How much flexibility you have when allocating memory or addressing registers on the processor. Yet, how much power you get with a well written framework.`
      ),

      Paragraph(
        `When you choose a higher level of abstraction, you let other parties make low level decisions for you. Then you are able to deliver a complete software solution at a much faster pace. That is the theory, of course.`
      ),

      Paragraph(
        `Abstraction can be viewed as a tree of decisions. Cheng Lou has this great talk about the tradeoffs of moving up and down that tree of abstraction.`
      ),

      Paragraph(Vimeo(`https://www.youtube.com/embed/mVVNJKv9esE`)),

      Paragraph(
        `In the end, abstraction is about automating repetitive tasks and about being able to express more with less effort. It is about using that piece of code that someone else wrote, without duplicating the effort.`
      ),

      Paragraph(
        `So automation is here for us, it’s just not here to replace us, it is here to unlock higher levels of abstraction. This will end up with a slight shift in the job market for software engineers. But it will definitely not put an end to the need for software engineering. It means that more and more of us will need to spend less time coding low level problems that were already solved by others. And we will, hopefully, spend more time tackling problems that were not solved before.`
      ),

      Title2(`Is frontend development lagging behind?`),

      Paragraph(
        `Zooming in on the land of web and mobile, application development is taking huge steps in this direction. The last couple of years saw amazing growth in tooling, frameworks and services. Everyone is trying to provide better and more powerful abstractions.`
      ),

      Paragraph(
        `Backend as a service, graphql or design system tools are becoming a widespread practice. Yet, for building user interfaces, mobile or web, we’re not there yet. We work with the low level primitives of the web: html, css and javascript. Yes, we have TypeScript and React and CSS-in-JS and dozens of other tools that are working their magic around the developer experience. But our tasks are not fundamentally changed. We are still writing the same components and user interactions as thousands of developers all over the world. We are still learning.`
      ),

      Title2(`Bridging the gap with automation and code generation`),

      Paragraph(
        `There’s a gap in the stack. Frontend development can move towards a higher level of abstraction. The code that we currently write can be automated or generated. We only need to imagine new ways to model the entire complexity of the interface. We can start by looking at: event systems, state machines and two way data flows. It won’t be easy but it will be fun!`
      ),

      Paragraph(
        `I joined teleportHQ last November with a clear goal. I want to bridge this gap and work at the next level of abstraction for frontend development. I believe in the new era of tools, patterns and practices that are emerging to replace low level implementations of redundant UI concerns.`
      ),

      Paragraph(
        `Will this wave of automation and abstraction allow us to focus on the critical and challenging pieces of frontend engineering? And will this solve the troubles of the repetitive boring tasks? I’m eager to find out! So join our quest in developing the best code generators for web and mobile applications, as an `,
        ExternalLink(`open source library`, `https://github.com/teleporthq/teleport-code-generators`),
        `.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
