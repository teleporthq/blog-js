// define all the components of the blog
import AuthorCardComponent from './components/authorCard'
import AutoScaleImageComponent from './components/autoScaleImage'
import BodyComponent from './components/body'
import BoldComponent from './components/bold'
import ExternalLinkComponent from './components/externalLink'
import FooterComponent from './components/footer'
import GiphyComponent from './components/giphy'
import GistComponent from './components/gist'
import HeaderComponent from './components/header'
import HeroComponent from './components/hero'
import HorizontalLineComponent from './components/horizontalLine'
import ItalicComponent from './components/italic'
import ImageComponent from './components/image'
import LogoIconComponent from './components/logoIcon'
import ListItemComponent from './components/li'
import LogoComponent from './components/logo'
import NextLinkComponent from './components/nextLink'
import PageComponent from './components/page'
import ParagraphComponent from './components/paragraph'
import PreComponent from './components/pre'
import TitleComponent from './components/title'
import TitleComponent2 from './components/title2'
import VimeoComponent from './components/vimeo'
import UnorderedListComponent from './components/unorderedList'

// define target specific information
import targets from './targets'

// define all blog pages
import sketchPlugin from './pages/sketchPlugin'
import index from './pages/index'
import understandingTheWeb from './pages/understandingTheWeb'

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
    Image: ImageComponent,
    LogoIcon: LogoIconComponent,
    Footer: FooterComponent,
    Giphy: GiphyComponent,
    Gist: GistComponent,
    Header: HeaderComponent,
    Hero: HeroComponent,
    HorizontalLine: HorizontalLineComponent,
    ListItem: ListItemComponent,
    Logo: LogoComponent,
    NextLink: NextLinkComponent,
    Page: PageComponent,
    Paragraph: ParagraphComponent,
    Pre: PreComponent,
    Title: TitleComponent,
    Title2: TitleComponent2,
    UnorderedList: UnorderedListComponent,
    Vimeo: VimeoComponent
  },
  pages: {
    //@ts-ignore
    index,
    //@ts-ignore
    sketchPlugin,
    //@ts-ignore
    understandingTheWeb
  } 
}

export default project

