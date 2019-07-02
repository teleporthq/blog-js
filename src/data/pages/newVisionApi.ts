import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  ExternalLink,
  Hero,
  Page,
  Paragraph,
  Title,
  Title2,
  AuthorCardWrapper,
  Span,
  Caption,
} from '../components'

export default {
  name: 'newVisionApi',
  url: 'new-vision-api',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/new-vision-api/banner.png', 'The Second Version of Our Vision Api', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/dimitri.jpg',
          name: 'Dimitri Fichou',
          twitterHandle: '@DimitriFichou',
          twitterLink: 'https://twitter.com/@dimitrifichou',
        }),
        Span('Posted on July 2, 2019'),
      ]),
      Title('The Second Version of Our Vision Api'),

      Paragraph(
        ExternalLink(
          'A few months ago',
          'https://teleporthq.io/blog/enforcing-convention-for-wireframe-object-detection/'
        ),
        ', we introduced new conventions to facilitate the creation of a machine learning model that could interpret hand drawn wireframes. We wanted to decrease ambiguity for the human in charge of annotating each image needed to train the machine learning model.'
      ),

      Title2(`New Dataset`),

      Paragraph(
        `The resulting artifact is a guideline document we recommend to all of our API users in order to make the most of the technology.`
      ),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/1.jpg',
        alt: 'Our Hand Drawn Wireframe Guidelines',
      }),

      Caption(`Guideline`),

      Paragraph(
        `Once we understood what kind of data we were looking for, we started the momentous task of collecting enough data to train our model.`
      ),

      Paragraph(
        `Along with this effort, we had to balance two important conditions in machine learning, i.e. `,
        ExternalLink('bias and variance', 'http://scott.fortmann-roe.com/docs/BiasVariance.html'),
        `. On one hand, we needed guidelines to narrow in on something manageable for the model to learn (thus we reduced the annotation bias). On the other hand, we still needed  a variety of images, drawn by different people, in different colors etc... (we wanted a heterogeneous dataset). However, new images will be biased if the initial guidelines are not followed and thus, wrongfully predicted.`
      ),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/2.png',
        alt: 'A few wireframes of our new dataset',
      }),

      Caption(`A few wireframes of our new dataset (note the different lightings and layouts)`),

      Paragraph(
        `An important consideration in training machine learning models is the validity of the dataset (each class should be evenly represented, whenever possible). In studying the annotations in our dataset, we found that some classes are underrepresented, making it more difficult for the model to detect (table, rating, list, text area, stepper input). When carrying out the analysis, we also examined the size distribution for each element, a crucial characteristic in object detection datasets. Some elements are smaller, like links and radio buttons, and naturally these are harder to detect, while bigger elements, such as a container or an image, are easier to detect.`
      ),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/3.png',
        alt:
          'Size distribution for each element of our dataset; red and blue lines for 1% and 10% threshold respectively',
      }),

      Caption(
        `Size distribution for each element of our dataset; red and blue lines for 1% and 10% threshold respectively`
      ),

      Title2(`Results`),

      Paragraph(
        `It’s difficult to predict when we’ll have collected enough images for our model. It’s clear, however, that the quality of the model will increase proportionally with the amount of images used for training.  Because we consider the data collected so far to be sufficient for preliminary models, we decided to begin training before finalizing the first step in the data collection process.`
      ),

      Paragraph(
        `To evaluate our models, we used the mean average precision with an intersection over union or 50%  (mAP@IOU 0.5) - you can find more information `,
        ExternalLink('here', 'https://github.com/rafaelpadilla/Object-Detection-Metrics'),
        `. Using this metric, the performance for the first version of the API was 40%. In December, we released a version with 55% accuracy using synthetic data to improve the model. The model released with the current version is at 85% on the test set. However, we suspect this number is optimistic so we’re also putting together a complementary test set with a different team.`
      ),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/4.png',
        alt: 'Prediction comparison between the previous and the current version',
      }),

      Caption(`Prediction comparison between the previous (left) and the current version (right)`),

      Paragraph(
        `We still have work to do; the model has difficulty identifying wireframes containing many/multiple elements. Furthermore, the uneven dataset poses additional complexity when uncommon classes are used, such as sliders and ratings.`
      ),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/5-1.jpg',
        alt: 'A problematic wireframe with too many element',
      }),

      Caption(`A problematic wireframe with too many element`),

      AutoScaleImage({
        src: '/static/blog/new-vision-api/5-2.jpg',
        alt: 'A problematic wireframe with rare elements (a video, in this case) incorrectly detected',
      }),

      Caption(`A problematic wireframe with rare elements (a video, in this case) incorrectly detected`),

      Title2(`Machine Learning for Enhancement Not Replacement`),

      Paragraph(
        `As is often the case where artificial intelligence and machine learning are involved, the eventual result is a symbiotic relationship between the two entities instead of a replacement of the human by the machine. By the same token, this emerging technology requires a good deal of trial and error by the end user to capitalize on its promise.`
      ),

      Paragraph(
        `We are already working on the next version of the API, but, in the meantime, we welcome your comments and feedback. If you're interested to try it out, head on over to our `,
        ExternalLink(`GitHub repository`, `https://github.com/teleporthq/teleport-vision-api`),
        ` and request an API key.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
