import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import {
  AuthorCard,
  Body,
  Bold,
  ExternalLink,
  Hero,
  ListItem,
  Page,
  Paragraph,
  Title,
  UnorderedList,
  AuthorCardWrapper,
  Span,
} from '../components'

export default {
  name: 'dataScienceInternship',
  url: 'data-science-internship-applied-to-design-2019',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/internship.png', 'understanding the web', '#fff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/alex.jpg',
          name: 'Alex Pausan',
          twitterHandle: '@alexpausan',
          twitterLink: 'https://twitter.com/@alexpausan',
        }),
        Span('Posted on January 3, 2019'),
      ]),
      Title('teleportHQ’s data science applied to design internship 2019'),
      Paragraph(
        'At teleportHQ, we’re building a code generation platform which leverages Artificial Intelligence to redefine the experience of building user interfaces.'
      ),
      Paragraph(
        'One of the topics on which we’re currently working on is automated design generation and we’re looking for aspiring data scientists who also have a strong interest in design and code. Therefore, we’ll launch a ',
        Bold('full-time 4 weeks data science internship applied to design'),
        ' starting on February 25th, 2019 and ending March 22nd, 2019. The internship will take place in our Cluj office in Romania.'
      ),
      Paragraph('Candidates must:'),
      Paragraph(
        UnorderedList(
          ListItem('be fluent in Python and/or JavaScript'),
          ListItem('have a good level in mathematics (high-school scientific math is a minimum)'),
          ListItem('be able to demonstrate experience or strong interest in design and/or coding')
        )
      ),
      Paragraph(
        `The training will be delivered by Dimitri, our inter-disciplinary engineer who leads teleportHQ's R&D for automatic design generation. The training will be organised around 3 core activities:`
      ),
      Paragraph(
        UnorderedList(
          ListItem('teaching via a real-world data science project'),
          ListItem('self-learning by following a data science roadmap'),
          ListItem(
            'practice by applying those skills to a design-oriented data science project in teams of two or three'
          )
        )
      ),
      Paragraph(
        'At the end of the internship, you will have a concrete understanding of what is machine learning, what are the available algorithms and when to use each of them. According to the final results, we may hire up to 5 candidates.'
      ),
      Paragraph(
        `If you're interested, please contact us by email at `,
        ExternalLink('hello@teleporthq.io', 'mailto:hello@teleporthq.io,'),
        '.'
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
