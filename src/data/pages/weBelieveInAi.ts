import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Bold,
  ExternalLink,
  Hero,
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
        Span('Posted on Jan 21'),
      ]),
      Title('We believe in AI-powered code generation'),
      Paragraph(
        'In September 2018, after one year of research and development, we released ',
        ExternalLink('this video', 'https://www.youtube.com/watch?v=ZD8Cnzc6KlY'),
        ' which demonstrates preliminary results of our automatic code generation engine. To our greatest surprise, the video has become viral, being seen more than 2 million times in the first weeks of its publication on our social media channels and has received really enthusiastic feedback.'
      ),
      ExternalLink(
        AutoScaleImage({
          src: '/static/blog/VideoThumbnail.png',
          alt: 'Thumbnail of our viral video',
        }),
        'https://www.youtube.com/watch?v=ZD8Cnzc6KlY'
      ),
      Paragraph(
        'To speak frankly, we dearly needed that external confirmation to get us going because the road to get there was quite bumpy. We felt alone in the dark many times. This is why we’d like to share some thoughts about the beginning of our adventure in this blog post and, hopefully, encourage other software development teams to embrace machine learning in their development culture: despite many challenges, there’s a bright light at the end of the tunnel!'
      ),
      Title2('The origins'),
      Paragraph(
        'As you might expect, one does not suddenly wake up one morning with the idea of automatically generating code with machine learning. It takes some idea collisions to get there.'
      ),
      Paragraph(
        'In our case, the process was quite long and was initiated by some random work with chatbots and conversational interfaces at the end of 2015 while most of us were still working in the JavaScript department at ',
        ExternalLink('Evozon', 'https://www.evozon.com/'),
        '. That work never got into production but remained the excitement of the conversational experience.'
      ),
      Paragraph(
        'A few weeks after, our working context brought us to evaluate the possibility of building a SaaS VDE (Visual Development Environment). If we would do it, we knew that we would need to do something remarkable enough in order to have the tiniest chance of success and justify the risk of starting a new venture. While asking ourselves these questions, the following idea emerged: ',
        Bold(
          'what if we could build an AI-powered conversational agent with which we could just have a simple discussion and which, during that discussion, would build our website in real-time, design, code and all? '
        )
      ),
      Title2('Back to reality'),
      Paragraph(
        'After quickly building a prototype which was faking everything but allowed us to visualize the experience - and made us all dream and smile - we got back to reality. It seemed completely out of reach.'
      ),
      Paragraph(
        'Besides the inherent complexity of such a project, none of us could even see the full building path. At that moment we realized how much developers are like builders. Good builders know that any construction needs a good plan and a given and logical order of execution. Then, how to approach things when the final project is more like an idea and its magnitude so big?'
      ),
      Title2('Faith and little steps'),
      Paragraph(
        'When you don’t have the required preliminary knowledge about how to reach your goal you’ll have to try things, new things. As soon as problems arise on these new paths - and they will -  you’ll be very tempted to give up everything, and each problem will become a good reason to do so. The only way to resist the temptation of giving up is to have faith that you will overcome any difficulties in the end.'
      ),
      Paragraph(
        'Then, you’ll have to start with little steps in order to win your first small battles. Each of these small victories strengthens your faith and brings you a step closer to your end goal, revealing new path options for the next steps.'
      ),
      Title2('User Interface Definition Language (UIDL)'),
      Paragraph(
        'This is why we decided to start our journey with something we were familiar with and we understood well. We knew from the beginning that we would want to be able to generate code in any language and therefore, we needed to use an intermediary representation layer of a user interface which would be code agnostic. This is by no means something new in the industry and after some research about how others did it, we built our own version of such a representation. This representation is a JavaScript object that respects what we call a User Interface Definition Language. You can think about each representation as a JSON. (Our blog is built with it, click ',
        ExternalLink('here', 'https://teleporthq.io/static/blog/teleport.json'),
        ' to see how it looks like).'
      ),
      Title2('Code Generators'),
      Paragraph(
        'Once we’ve defined our UIDL, we attacked the code generation part. The requirements for our code generation engine were to be able to generate state-of-the-art code from a UIDL object, in real-time, and for any language or framework.'
      ),
      Paragraph(
        'Given our JavaScript professional background, we started with React. The experiment went well and today we’re already supporting React/Next, Vue/Nuxt. In the near future, we’re looking forward to starting working on React Native. We’ll talk more about our journey with the code generators in a future blog post.'
      ),
      Title2('Machine Learning and Object Detection'),
      Paragraph(
        'Once we had our UIDL and code generators working together we were ready to move on to the next step: Object Detection.'
      ),
      Paragraph(
        'We were lucky since the IT industry massively uses wireframes for prototyping user interfaces. To get started, that meant that we had to train an object detection engine to “only” recognize about 20 types of objects which represent the basic building blocks of user interfaces. After a couple of months of data acquisition and training, we were able to build the first version of our ',
        ExternalLink('Vision API', 'https://github.com/teleporthq/teleport-vision-api'),
        ' which returns a list of detected objects and their relative position inside a given image.'
      ),
      Title2('The Keystone'),
      Paragraph(
        `At this stage, we were having everything we needed except something essential: it's the part that transforms the absolute position of elements into a tree representation… Essentially that’s the trickiest part which corresponds to the complex knowledge that front-end developers need to acquire in order to make the right architecture decisions.`
      ),
      Paragraph(
        `This is where the most beautiful part of this journey started, where ML and 'normal' algorithms meet and create the magic by starting to make the right user interface architecture decisions. This last technological block is the keystone to a future in which front-end developers will be considerably augmented by technology and which will allow user interface professionals to spend much more time on the user experience of the products they’re building instead of the inner technicalities. We believe that this will generate a lot of value for everybody and we're committed to working very hard to bring that future closer.`
      ),
      Paragraph(`To summarize things, here's is how we see things working:`),
      Paragraph('Vision API/Object Detection -> Architecture Decisions -> UIDL -> Code Generation'),
      Title2('Conclusion'),
      Paragraph(
        'Our journey is just at the beginning and we’ll continue to invest heavily in Research & Development. We’re convinced that in the next years Machine Learning and AI will transform irrevocably - and for the better - the way software, and more specifically how user interfaces will be built. This will liberate considerable amounts of valuable human time which will be put to better use.'
      ),
      Paragraph(
        'We’d also like to use this opportunity to mention Tony Beltramelli’s work which has inspired many teams to start on this exciting path. Thank you Tony! ;)'
      ),
      Paragraph(
        'Please know also that we’re relentlessly working on our core technology blocks and we’re excited to announce that we’ll release our SaaS platform by the end of Q1 2019. If you’re interested, please follow us on ',
        ExternalLink('Twitter', 'https://twitter.com/TeleportHQio'),
        '.'
      ),
      Paragraph(
        'Last but not least, we’d be extremely interested to know more about your thoughts regarding our progress so far and the potential you see in this technology blocks. If you have opinions, questions or would be interested in collaborating or working with us, please drop us a line, we love to discuss with curious people!'
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
