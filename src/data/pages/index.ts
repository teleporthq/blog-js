import {
  Body,
  ExternalLink,
  Header,
  HeroSmall,
  Logo,
  Page,
  Title,
  Title2,
  Link,
  Navigation,
  NavigationItem,
  AuthorCard,
  Paragraph,
  Title3,
  Button,
  Span,
  SmallText,
  AuthorCardWrapper,
  Bold,
  HorizontalLine,
  InfoText,
} from '../components'

import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import br from '../elements/br'
import FinalFooter from './common/finalFooter'

export default {
  name: 'index',
  url: '/',
  content: Page(
    Header(
      Link(
        Logo(
          '/static/blog/assets/circle.svg',
          '/static/blog/assets/square.svg',
          '/static/blog/assets/triangle.svg',
          '/static/blog/assets/logowriting.svg'
        ),
        '/'
      ),
      Navigation(
        NavigationItem([Link('Home', '/')]),
        NavigationItem([Link('Vision', '/vision')]),
        NavigationItem([Link('About Us', '/about')]),
        NavigationItem([Link('Funding', '/funding')]),
        NavigationItem([Link('Blog', '/blog')], '#4a4a4a'),
        NavigationItem([Link(Button('Sign up'), '/sign-up')])
      )
    ),
    Body(
      Title('Blog Port', 'center', 600, '2em'),
      Title3("We'd like to share something with you", 'center', '1rem', '#959393', '-20px', '60px'),

      Link(
        HeroSmall('/static/blog/start-your-career.png', 'Start Your Tech Career at teleportHQ'),
        '/blog/start-your-career'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on November 11, 2019'),
      ]),
      Link(
        [
          Title2('Start Your Tech Career at teleportHQ'),
          SmallText(
            `Are you interested in Web Development and JavaScript? So are we. And we want to grow our development team as we head into 2020. Hence we’re opening 3 positions for our office in Cluj, for Junior Software Developers.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/start-your-career'
      ),
      HorizontalLine(),
      br,

      Link(
        HeroSmall('/static/blog/blogpost-hacktober-smaller.png', 'teleportHQ Hacktoberfest'),
        '/blog/teleport-to-hacktoberfest'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on October 8, 2019'),
      ]),
      Link(
        [
          Title2('Teleport to Hacktoberfest'),
          SmallText(
            `Have you ever wanted to contribute to open source but didn’t have the chance, the project, nor the proper guidance? Let’s fix that!`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/teleport-to-hacktoberfest'
      ),
      HorizontalLine(),
      br,

      Link(
        HeroSmall('/static/blog/code-gen-v0.9/codeGenerators09indexbanner.png', 'Going Up the Tree of Abstraction'),
        '/blog/new-code-gen'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on September 5, 2019'),
      ]),
      Link(
        [
          Title2('New Release: Code Generators v0.9'),
          SmallText(
            `We’re excited to report major progress on the teleportHQ code generation libraries! In this new release, we've added new component and project generators for: angular, preact and stencil.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/new-code-gen'
      ),
      HorizontalLine(),
      br,

      Link(
        HeroSmall('/static/blog/new-vision-api/banner-mini.png', 'The Second Version of Our Vision Api'),
        '/blog/new-vision-api'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/dimitri.jpg',
          name: 'Dimitri Fichou',
          twitterHandle: '@dimitrifichou',
          twitterLink: 'https://twitter.com/@dimitrifichou',
        }),
        Span('Posted on July 2, 2019'),
      ]),
      Link(
        [
          Title2('The Second Version of Our Vision Api'),
          SmallText(
            `A few months ago, we introduced new conventions to facilitate the creation of a machine learning model that could interpret hand drawn wireframes. We wanted to decrease ambiguity for the human in charge of annotating each image needed to train the machine learning model.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/new-vision-api'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/climbing-mini.png', 'Going Up the Tree of Abstraction'),
        '/blog/going-up-the-tree-of-abstraction'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alexM.jpg',
          name: 'Alex Moldovan',
          twitterHandle: '@alexnmoldovan',
          twitterLink: 'https://twitter.com/@alexnmoldovan',
        }),
        Span('Posted on April 5, 2019'),
      ]),
      Link(
        [
          Title2('Going Up the Tree of Abstraction'),
          SmallText(
            `As I was staring at that console I wasn’t thinking at all at the fact that 29 other students had written the same lines of code. Why would that be a problem? We were learning after all, right? Fast forward 15 years. While the context is different, the outcome is the same. You and me and tens of thousands of developers world wide are writing the same lines of code.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/going-up-the-tree-of-abstraction'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/enforcing-convention-mini.png', 'Enforcing Convention for Wireframe Object Detection'),
        '/blog/enforcing-convention-for-wireframe-object-detection'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/dimitri.jpg',
          name: 'Dimitri Fichou',
          twitterHandle: '@dimitrifichou',
          twitterLink: 'https://twitter.com/@dimitrifichou',
        }),
        Span('Posted on March 13, 2019'),
      ]),
      Link(
        [
          Title2('Enforcing Convention for Wireframe Object Detection: Why we need it'),
          SmallText(
            `Many great ideas start on a piece of paper or a whiteboard. Why? Because hand-drawing is still the most natural, intuitive, and efficient way of structuring abstract or visual thoughts. Humans, despite their efforts to adapt to the digital world, still often perform better in analogical situations.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/enforcing-convention-for-wireframe-object-detection'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/weBelieveInAI-mini.png', 'We believe in AI'),
        '/blog/we-believe-in-AI-powered-code-generation'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/paul.jpg',
          name: 'Paul Brie',
          twitterHandle: '@aelythe',
          twitterLink: 'https://twitter.com/@aelythe',
        }),
        Span('Posted on January 22, 2019'),
      ]),
      Link(
        [
          Title2('We believe in AI-powered code generation'),
          SmallText(
            `In September 2018, teleportHQ released a 30-second video demonstrating preliminary results of our automatic code generation engine. Within a couple of days, the video went viral with over 2 million views.`
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/we-believe-in-AI-powered-code-generation'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/internship-mini.png', '2019 machine learning internship'),
        '/blog/data-science-internship-applied-to-design-2019'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alex.jpg',
          name: 'Alex Pausan',
          twitterHandle: '@alexpausan',
          twitterLink: 'https://twitter.com/@alexpausan',
        }),
        Span('Posted on January 3, 2019'),
      ]),

      Link(
        [
          Title2('teleportHQ’s data science applied to design internship 2019'),
          SmallText(
            'At teleportHQ, we’re building a platform which leverages Artificial Intelligence to redefine the experience of building user interfaces.'
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/data-science-internship-applied-to-design-2019'
      ),
      HorizontalLine(),
      br,
      Link(
        HeroSmall('/static/blog/raul-blog-mini.png', 'teleportHQ people building'),
        '/blog/understanding-the-web-parsing-web-pages-semantically'
      ),
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/raul.png',
          name: 'Raul Incze',
          twitterHandle: '@raulincze',
          twitterLink: 'https://twitter.com/@raulincze',
        }),
        Span('Posted on June 25, 2018'),
      ]),
      Link(
        [
          Title2('Understanding the Web: Parsing Web Pages Semantically'),
          SmallText(
            'Around two months ago I joined forces with the rest of the teleportHQ team in our mission to reduce friction and eliminate dead ends in the GUI building process, spawning a machine learning (ML) track.'
          ),
          SmallText([Bold('Read more &#8250;')]),
        ],
        '/blog/understanding-the-web-parsing-web-pages-semantically'
      )
    ),
    InfoText([
      Paragraph(
        'Our blog’s code is automatically generated from a  ',
        ExternalLink('teleport project definition', 'https://teleporthq.io/static/blog/teleport.json'),
        '. The blog is open-source and you can learn more about how the technology works from our ',
        ExternalLink('github repo', 'https://github.com/teleporthq/blog'),
        '.'
      ),
    ]),
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
