import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Bold,
  ExternalLink,
  Hero,
  Italic,
  Page,
  Paragraph,
  Title,
  Title2,
  AuthorCardWrapper,
  Span,
} from '../components'

export default {
  name: 'weBelieveInAi',
  url: 'we-believe-in-AI-powered-code-generation',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/weBelieveInAI.png', 'we believe in AI', '#000000'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/paul.jpg',
          name: 'Paul Brie',
          twitterHandle: '@aelythe',
          twitterLink: 'https://twitter.com/@aelythe',
        }),
        Span('Posted on January 22, 2019'),
      ]),
      Title('We believe in AI-powered code generation'),
      Paragraph(
        'In September 2018, teleportHQ released ',
        ExternalLink('this 30-second video', 'https://www.youtube.com/watch?v=ZD8Cnzc6KlY'),
        ' demonstrating preliminary results of our automatic code generation engine.'
      ),
      ExternalLink(
        AutoScaleImage({
          src: '/static/blog/VideoThumbnail.png',
          alt: 'Thumbnail of our viral video',
        }),
        'https://www.youtube.com/watch?v=ZD8Cnzc6KlY'
      ),
      Paragraph(
        'Within a couple of days, the video went viral with over 2 million views. The viewers posted enthusiastic comments on our social media channels (',
        ExternalLink('Facebook', 'https://www.facebook.com/teleportHQ/'),
        ', ',
        ExternalLink('LinkedIn', 'https://www.linkedin.com/company/11541493'),
        ', ',
        ExternalLink('Twitter', 'https://twitter.com/TeleportHQio'),
        '). The market reaction exceeded our wildest expectations. It was a great - and much appreciated - reward for our team.'
      ),
      Paragraph(
        'But to be honest, our journey was far from being perfect. The preceding months of research and development were really bumpy. We doubted a lot and felt alone in the dark many times. That external confirmation came as a huge relief: we finally knew that we were on something.'
      ),
      Paragraph(
        `When you do R&D activities, you have to be ready to throw everything away and start again as many times as needed. We were ready for that. But we learned that there's something else we were not ready for: `,
        Bold('deal with uncertainty.')
      ),

      Title2('Fuzzy Logic'),
      Paragraph(
        `Developers know that each line of code generates immediate and predictable results. It is either working or not. There's no intermediary state. And when it is working it provides immediate satisfaction. I always found this aspect of coding very rewarding.`
      ),
      Paragraph(
        'However, when it comes to machine learning things are quite different. You need to work with fuzzy logic and confidence scores. '
      ),
      Paragraph(Italic(`- But, wait a minute!... Is it working, or not?`)),
      Paragraph(Bold('Well, yes, most of the time...')),
      Paragraph(
        `The lack of precision of such an answer is nerve-wracking for a developer. It just does not make sense to use an imprecise machine learning output to generate precise code.`
      ),
      Paragraph(
        `At first, indeed, it is very counter intuitive. It took us a lot of time to integrate machine learning in our development (and binary) culture. But once you combine the developer and data-scientist perspectives - and learn how to add the necessary algorithmic layers to deal with the uncertainty - there's no coming back. It is an open path to unlimited value creation.`
      ),
      Paragraph(
        `This is why we thought to share some thoughts about the beginning of our adventure. We would like to encourage other software development teams to embrace machine learning in their development culture. Despite many challenges, there's a bright light at the end of the tunnel!`
      ),
      Title2('The origins'),
      Paragraph(
        'As you might expect, one does not suddenly wake up one morning with the idea of automatically generating code with machine learning. It takes some idea collisions to get there.'
      ),
      Paragraph(
        'In our case, the process was quite long. It was initiated by some random work with chatbots and conversational interfaces. At that time, in 2015, most of us were still working in the JavaScript department at ',
        ExternalLink('Evozon', 'https://www.evozon.com/'),
        '. That work never got into production but we all remained in a state of excitement: it opened a lot of new perspectives about how we could build new user experiences.'
      ),
      Paragraph(
        `Then, our working context brought us to think about the possibility of building a SaaS VDE (Visual Development Environment). If we would do it, we knew that we would need to do something remarkable. Building a new product without a unique and strong value proposition would be a waste of our time and money.`
      ),
      Paragraph(
        `While asking ourselves these questions, an interesting idea emerged. `,
        Bold(
          `What if our platform could embed a AI-powered conversational agent which would build our website in real-time, design and code?`
        )
      ),
      Paragraph(
        'We decided to built a prototype which faked all the features we dreamed of. It allowed us to visualise and refine the experience. It made us all dream and smile!'
      ),
      Title2('Back to reality'),
      Paragraph(
        'However, such a product seemed completely out of reach. Besides the inherent complexity of the project, none of us could even see the full building path. At that moment we realised how much developers are like builders. Good builders know that any construction needs a good plan and a given and logical order of execution. Then, how to approach things when the final project is more like an idea and its size so big?'
      ),

      Title2('Faith and little steps'),
      Paragraph(
        `When you don't have the required preliminary knowledge about how to reach your goal you'll have to try things. New things. As soon as problems arise on these new paths - and they will - you'll be very tempted to give up everything. Each problem will become a good reason to do so. The only way to resist the temptation of giving up is to have faith that you will overcome any difficulties in the end.`
      ),
      Paragraph(
        `Then, you'll have to start with little steps and, hopefully, win a couple of battles. Each small victory strengthens your faith and brings you a step closer to your end goal. Each victory, even small, will reveal unexpected new path options for the next steps. In the end, everything is about a fine balance between dreaming and executing.`
      ),
      Title2('User Interface Definition Language (UIDL)'),
      Paragraph(
        `This is why we decided to start our journey with something we were familiar with and we understood well. We knew from the beginning that we would want to be able to generate code in any language. This meant that we needed to use an intermediary code-agnostic representation layer of our user interface. This is by no means something new in the industry. Atfer taking inspiration from others, we built our own version of such a representation. It basically is a JavaScript object which respects our `,
        Bold(`User Interface Definition Language (UIDL)`),
        ` format. You can think about each representation as a JSON. (Our blog is built with it, click `,
        ExternalLink('here', 'https://teleporthq.io/static/blog/teleport.json'),
        ' to see how it looks like).'
      ),
      Title2('Code Generators'),
      Paragraph(
        `Once we've defined our UIDL, we attacked the code generation engines. We knew that they should be able to generate state-of-the-art code from a UIDL object, in real-time, and for any language or framework.`
      ),
      Paragraph(
        `Given our JavaScript professional background, we started with React. The experiment went well and today we're already supporting React/Next, Vue/Nuxt. By the end of the year we're expecting to support React Native as well. We'll talk more about our journey with the code generators in a future blog post.`
      ),

      Title2('Machine Learning and Object Detection'),
      Paragraph(
        'Once we had our UIDL and code generators working together we were ready to move on to the next step: Object Detection.'
      ),
      Paragraph(
        `Thankfully, the IT industry massively uses wireframes for prototyping user interfaces. We trained an object detection engine to "only" recognize about 20 types of objects which represent the basic building blocks of user interfaces. After a couple of months of data acquisition and training, we were able to build the first version of our `,
        ExternalLink('Vision API', 'https://github.com/teleporthq/teleport-vision-api'),
        '. It returns a list of detected objects with their respective position from a given image.'
      ),
      AutoScaleImage({
        src: '/static/blog/VisionAPI2.jpg',
        alt: 'A wireframe drawn in ink on a napkin',
      }),
      Title2('The Keystone'),
      Paragraph(
        `At that stage, we were able to detect the relative position of elements. Then, we needed to attack the hard part which is to transform the absolute position of elements into a tree representation. And that's a different story. That's the part which corresponds to the complex knowledge that front-end developers need to acquire in order to make the right architecture decisions. Years of work.`
      ),
      Paragraph(
        `This is where the most beautiful part of this journey started. It is where ML and usual algorithms converge and create the magic by starting to make the right user interface architecture decisions. And it is exactly where we're putting all our efforts. We see this last technological block as the keystone to the future of front-end development.`
      ),
      Paragraph(
        `In this future, front-end developers will be considerably augmented by technology. They will spend much more time on the user experience of the products they're building instead of the inner technicalities. This will generate a lot of value for everybody and we're committed to working very hard to bring that future closer.`
      ),
      Paragraph(`To summarize things, here's is how our workflow is working:`),
      AutoScaleImage({
        src: '/static/blog/VisionAPI-ObjectDetection.png',
        alt:
          'An image showing the path of Wireframes to Detected Object through VISION API, then to UIDL through Architecture Decisions and finally reaching the Code Phase with the use of Code Generation.',
      }),
      Title2('Conclusion'),
      Paragraph(
        `Our journey is just at the beginning and we're investing heavily in R&D. We're convinced that in the next years ML and AI will transform irrevocably - and for the better -  how user interfaces will be built. This will free up considerable amounts of valuable human time which will be put to better use.`
      ),
      Paragraph(
        `We're relentlessly working on our core technology blocks and we're excited to announce that we'll release our SaaS platform and our latest versions of our Open Source code generators by the end of Q1 2019. If you're interested, please follow us on `,
        ExternalLink('Twitter', 'https://twitter.com/TeleportHQio'),
        '.'
      ),
      Paragraph(
        `Last but not least, we'd be extremely interested to know more about your thoughts regarding our progress so far.  If you see potential in these technology blocks, drop us a line. We love to discuss with curious people and we're happy to consider any collaboration opportunities!`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
