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
  UnorderedList
} from '../components'


export default {
  name: 'index',
  url: 'test',
  content: Page(
    Header(Logo()),
    Hero('static/teleport-sketch-plugin.png', 'teleportHQ Sketch plugin'),
    Body('Hello'), 
    Footer(
      ExternalLink(LogoIcon('static/svg/teleport-icon.svg'), 'https://teleporthq.io'),
      ExternalLink(LogoIcon('static/svg/github-icon.svg'), 'https://github.com/teleporthq'),
      ExternalLink(LogoIcon('static/svg/twitter-icon.svg'), 'https://twitter.com/teleporthqio'),
    )
  )
}