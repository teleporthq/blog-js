import AuthorCardComponent, { AuthorCard } from './components/AuthorCard'
import AutoScaleImageComponent, { AutoScaleImage } from './components/autoScaleImage'
import BodyComponent, { Body } from './components/body'
import BoldComponent, { Bold } from './components/Bold'
import ExternalLinkComponent, { ExternalLink } from './components/ExternalLink'
import FooterComponent, { Footer } from './components/footer'
import GiphyComponent, { Giphy } from './components/giphy'
import GistComponent, { Gist } from './components/gist'
import HeaderComponent, { Header }  from './components/header'
import HeroComponent, { Hero } from './components/hero'
import ItalicComponent, { Italic } from './components/italic'
import LogoIconComponent, { LogoIcon } from './components/logoIcon'
import ListItemComponent, { ListItem } from './components/li'
import LogoComponent, { Logo } from './components/logo'
import PageComponent, { Page } from './components/page'
import NextLinkComponent, { NextLink } from './components/nextLink'
import ParagraphComponent, { Paragraph } from './components/paragraph'
import TitleComponent, { Title } from './components/title'
import TitleComponent2, { Title2 } from './components/title2'
import VimeoComponent, { Vimeo } from './components/vimeo'
import UnorderedListComponent, { UnorderedList } from './components/unorderedList'
import targets from './targets'
import sketchPlugin from './pages/sketchPlugin'

//@ts-ignore
const project: TeleportProject = { 
  targets,
  components: {
    AutoScaleImage: AutoScaleImageComponent,
    AuthorCard: AuthorCardComponent,
    Body: BodyComponent,
    Bold: BoldComponent,
    ExternalLink: ExternalLinkComponent,
    Italic: ItalicComponent,
    LogoIcon: LogoIconComponent,
    Footer: FooterComponent,
    Giphy: GiphyComponent,
    Gist: GistComponent,
    Hero: HeroComponent,
    ListItem: ListItemComponent,
    Logo: LogoComponent,
    Header: HeaderComponent,
    NextLink: NextLinkComponent,
    Page: PageComponent,
    Paragraph: ParagraphComponent,
    Title: TitleComponent,
    Title2: TitleComponent2,
    UnorderedList: UnorderedListComponent,
    Vimeo: VimeoComponent
  },
  pages: {
    test: {
      name: 'test',
      url: 'test-link',
      content: Page(
        Header(Logo()),
        NextLink('test', 'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview')
      )
    },
    index: sketchPlugin
  } 
}

export default project

