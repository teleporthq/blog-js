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
import HeroSmallComponent from './components/heroSmall'
import HorizontalLineComponent from './components/horizontalLine'
import ItalicComponent from './components/italic'
import ImageComponent from './components/image'
import ListItemComponent from './components/li'
import LogoComponent from './components/logo'
import LinkComponent from './components/link'
import PageComponent from './components/page'
import ParagraphComponent from './components/paragraph'
import PreComponent from './components/pre'
import TitleComponent from './components/title'
import TitleComponent2 from './components/title2'
import VimeoComponent from './components/vimeo'
import UnorderedListComponent from './components/unorderedList'
import SpanComponent from './components/span'
import NavigationItemComponent from './components/navigationItem'
import NavigationComponent from './components/navigation'
import FooterLinksComponent from './components/footerLinks'
import FooterRegisterComponent from './components/footerRegister'
import FooterInfoComponent from './components/footerInfo'
import TitleComponent3 from './components/title3'
import ButtonComponent from './components/button'
import CopyComponent from './components/copy'
import AuthorCardWrapperComponent from './components/authorCardWrapper'
import SmallTextComponent from './components/smallText'
import InfoTextComponent from './components/infoText'

// define target specific information
import targets from './targets'

// define all blog pages
import sketchPlugin from './pages/sketchPlugin'
import index from './pages/index'
import understandingTheWeb from './pages/understandingTheWeb'

const project: TeleportProject = {
  targets,
  components: {
    AutoScaleImage: AutoScaleImageComponent,
    AuthorCard: AuthorCardComponent,
    AuthorCardWrapper: AuthorCardWrapperComponent,
    Body: BodyComponent,
    Bold: BoldComponent,
    ExternalLink: ExternalLinkComponent,
    Italic: ItalicComponent,
    Image: ImageComponent,
    Footer: FooterComponent,
    Giphy: GiphyComponent,
    Gist: GistComponent,
    Header: HeaderComponent,
    Hero: HeroComponent,
    HeroSmall: HeroSmallComponent,
    HorizontalLine: HorizontalLineComponent,
    ListItem: ListItemComponent,
    Logo: LogoComponent,
    Link: LinkComponent,
    Page: PageComponent,
    Paragraph: ParagraphComponent,
    Pre: PreComponent,
    Title: TitleComponent,
    Title2: TitleComponent2,
    Title3: TitleComponent3,
    UnorderedList: UnorderedListComponent,
    Vimeo: VimeoComponent,
    Navigation: NavigationComponent,
    Span: SpanComponent,
    NavigationItem: NavigationItemComponent,
    FooterInfo: FooterInfoComponent,
    FooterRegister: FooterRegisterComponent,
    FooterLinks: FooterLinksComponent,
    Button: ButtonComponent,
    Copy: CopyComponent,
    SmallText: SmallTextComponent,
    InfoText: InfoTextComponent,
  },
  pages: {
    // @ts-ignore
    index,
    // @ts-ignore
    sketchPlugin,
    // @ts-ignore
    understandingTheWeb,
  },
}

export default project
