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
  Title2,
  AuthorCardWrapper,
  Span,
  ExternalLink,
  UnorderedList,
  ListItem,
  Bold,
  Hero,
  Caption,
} from '../components'

export default {
  name: 'EnforcingConventionForWireframeObjectDetection',
  url: 'enforcing-convention-for-wireframe-object-detection',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/enforcing-convention.png', 'Enforcing Convention for Wireframe Object Detection', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/dimitri.jpg',
          name: 'Dimitri Fichou',
          twitterHandle: '@DimitriFichou',
          twitterLink: 'https://twitter.com/@dimitrifichou',
        }),
        Span('Posted on March 13, 2019'),
      ]),
      Title('Enforcing Convention for Wireframe Object Detection: Why we need it'),

      Title2(`Abstract`),

      Paragraph(
        `Many great ideas start on a piece of paper or a whiteboard. Why? Because hand-drawing is still the most natural, intuitive, and efficient way of structuring abstract or visual thoughts. Humans, despite their efforts to adapt to the digital world, still often perform better in analogical situations.`
      ),

      Paragraph(
        `With this observation in mind, we decided to focus on one specific use case: automate the generation of production-ready code from hand-drawn wireframes, and at this stage, we believe that having a digital proof of concept straight out of a shareholder meeting is not a distant dream anymore.`
      ),

      Paragraph(
        `As explained in this `,
        ExternalLink('previous article', 'https://teleporthq.io/blog/we-believe-in-AI-powered-code-generation/'),
        `, we aim to use artificial intelligence (AI) and machine learning (ML) in different points of our platform. However, we know that ML cannot solve every problem, at least for now. Our `,
        ExternalLink('vision API', `https://github.com/teleporthq/teleport-vision-api`),
        ` is part of a bigger ecosystem and it ‘only’ takes care of detection bounding boxes. Those raw bounding boxes must then be converted into a User Interface Definition Language (UIDL) representation. Afterwards, our `,
        ExternalLink('code generators', `https://github.com/teleporthq/teleport-code-generators`),
        ` - and some proprietary decision-making layers - can take over to generate the code.`
      ),

      AutoScaleImage({
        src: '/static/blog/enforcing-convention/stack-overflow.png',
        alt: 'A screenshot of Stack Overflow website homepage next to a drawn wireframe of the same page.',
      }),

      Caption(`Screenshot and wireframe of `, ExternalLink('Stackoverflow.com', 'https://stackoverflow.com')),

      Title2(`Need for data`),

      Paragraph(
        `On paper, for a data scientist, the problem looks very simple: we have pictures or scans of wireframes that are annotated so that we know where elements like images, buttons, and texts are. Looks easy, so let’s just go online and collect some images and we’ll annotate them later.`
      ),

      AutoScaleImage({
        src: '/static/blog/enforcing-convention/web-wireframes.png',
        alt: 'Three drawn wireframes we found online.',
      }),

      Caption(`A few wireframes we found on the web`),

      Paragraph(
        `To get started, we decided to harvest free data from the web. This was good enough to get a rough idea about the nature of the data we were about to work with, but it also allowed us to realize that this source could not provide enough images to train an ML model. Then, we stumbled upon a second issue which was that nobody had the same conventions when drawing wireframes... As a matter of fact, later on in the process of collecting data, we learned that quite often there are specific guidelines inside each organization.`
      ),

      Paragraph(
        `To solve these first issues, we decided to make our own guidelines and started drawing wireframes ourselves. Once every team member contributed, we decided to “friendsource” our data and went around to ask each of our (awesome!) friends to draw wireframes for us as well. This is definitely not a viable strategy at scale as friends come in very limited supply but it allowed us to have an initial coherent collection of hand-written wireframes.`
      ),

      AutoScaleImage({
        src: '/static/blog/enforcing-convention/guidelines.jpg',
        alt: 'Our current guidelines on wireframe building convention.',
      }),

      Caption(`Our current wireframe drawing guidelines`),

      Title2(`We had the X but still needed the Y`),

      Paragraph(
        `The simplest intuition on machine learning is that the computer learns a function, by itself, to predict Y from X by looking at a large number of examples. At that point, we were a few hundred images rich, so we had the X. We knew this would be enough for a proof of concept so we went on to the next step: annotations to get the Y.`
      ),

      Paragraph(
        `We started manually annotating each drawn wireframe to pinpoint where our images, buttons, and texts were placed. Useless to say that this task wasn’t the most pleasant part of this initiative, but nothing comes for free in this life, so we just bit the bullet. `
      ),

      Paragraph(
        `The good part is that it helped all our team members fully appreciate the real value of clean and structured data, a type of resource which is extremely scarce and a bottleneck for most data science projects.`
      ),

      Title2(`Need for consistent data`),

      Paragraph(
        `Once we had the X and the Y, we could finally start the fun part: model training. This took way less time than the data collection and the conclusion was, of course, that we needed more data!`
      ),

      Paragraph(
        `Nonetheless, it got us a proof of concept and a very good baseline for improvement. The accuracy of the model was 55% on our test set, meaning that 55% of the elements were correctly detected.`
      ),

      Paragraph(
        `Apart from the low number of data points, this is when we realized that we’ll have to deal with a new challenge as we had a large number of collisions in the annotation. Some annotations were ambiguous, even for a human:`
      ),

      UnorderedList(
        ListItem(`Is it a header or a paragraph?`),
        ListItem(`Is it an image or a button?`),
        ListItem(`Is it a text input or a button?`)
      ),

      Paragraph(
        `In some cases, such as headers and paragraphs, the main structure of the wireframe could help the decision. But in many other cases, there was no way to tell the difference. And so, in turn, there was no way for the model to be correctly trained.`
      ),

      AutoScaleImage({
        src: '/static/blog/enforcing-convention/board-wireframes.png',
        alt:
          'A wireframe uploaded by a user, on the left, next to a wireframe from our training dataset, on the right.',
      }),

      Caption(
        `A wireframe uploaded by a user, on the left, next to a wireframe from our training dataset, on the right`
      ),

      Title2(`Need for stronger guidelines`),

      Paragraph(
        `Like with many engineering problems, the most difficult part is to get to a first solid baseline from which you can improve. Machine Learning is no exception. In our case, a solid baseline meant strong constraints on what and how the model could detect the user’s intent. Even if we plan to expand our capabilities in terms of element variety and in terms of drawing freedom later on, this is why, for now, we’ll limit ourselves to the following conventions (many inspired from markdown):`
      ),

      UnorderedList(
        ListItem(Bold(`Header`), `: as it’s colliding with a paragraph we propose to prefix it with a hashtag`),
        ListItem(
          Bold(`Text input`),
          `: as it’s colliding with the button element so we propose to use only an empty text input`
        ),
        ListItem(Bold(`Link`), `: we’ll surround it with square brackets`),
        ListItem(Bold(`Labels`), `: will be detected as such only when associated with an input`),
        ListItem(Bold(`Paragraph`), `: if the text is not a label, header or link, it’s a paragraph`),
        ListItem(Bold(`Image`), `: can only be a rectangle or a circle with a cross inside`)
      ),

      AutoScaleImage({
        src: '/static/blog/enforcing-convention/scan.jpg',
        alt: 'A picture showing our future wireframe drawing guidelines',
      }),

      Caption(`Our future wireframe drawing guidelines`),

      Paragraph(
        `It was a hard decision to make but we strongly feel that the constraints we added will come with some important benefits which will overcome the limitations, such as:`
      ),

      UnorderedList(
        ListItem(`Make the annotation unambiguous `),
        ListItem(`Is it an image or a button?`),
        ListItem(`Is it a text input or a button?`)
      ),

      Title2(`Conclusion`),

      Paragraph(
        `For the moment, our vision API still follows the old guidelines but in our next version (coming soon), we’ll use the new ones. As always, we’d like to remind our readers that this is work in progress and it’s far from perfect but we’re eager for any feedback or ideas about how to make our Vision API better. Feel free to drop us a line on our `,
        ExternalLink('Twitter', 'https://twitter.com/teleporthqio'),
        ` account any time and follow us to check on our next updates.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
