import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Bold,
  ExternalLink,
  Footer,
  Giphy,
  Gist,
  Header,
  HorizontalLine,
  Hero,
  Italic, 
  Image,
  LogoIcon,
  ListItem,
  Logo,
  Page,
  Paragraph,
  Title,
  Title2,
  Vimeo,
  UnorderedList,
  NextLink
} from '../components'


export default {
  name: 'index',
  url: 'test',
  content: Page(
    Header(Logo()),
    Body(
      Title('Blog Port', 'center'),
      Paragraph(
        NextLink(
          Title2('Hello! we’ve built a real-time Sketch-to-code engine (with live preview)'),
          'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview'
        ),
        HorizontalLine(),
        NextLink(
          Title2('Understanding The Web'),
          'understanding-the-web-parsing-web-pages-semantically'
        )
      ),
    ), 
    Footer(
      ExternalLink(LogoIcon('static/svg/teleport-icon.svg'), 'https://teleporthq.io'),
      ExternalLink(LogoIcon('static/svg/github-icon.svg'), 'https://github.com/teleporthq'),
      ExternalLink(LogoIcon('static/svg/twitter-icon.svg'), 'https://twitter.com/teleporthqio'),
    )
  )
}