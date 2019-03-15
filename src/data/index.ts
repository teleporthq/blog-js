// define all the components of the blog
import AuthorCardComponent from './components/authorCard'
import AutoScaleImageComponent from './components/autoScaleImage'
import BodyComponent from './components/body'
import BoldComponent from './components/bold'
import CaptionComponent from './components/caption'
import ExternalLinkComponent from './components/externalLink'
import FlagsComponent from './components/flags'
import FooterComponent from './components/footer'
import FinalFooterComponent from './components/finalFooter'
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
import CopyTextComponent from './components/copyText'
import AuthorCardWrapperComponent from './components/authorCardWrapper'
import SmallTextComponent from './components/smallText'
import InfoTextComponent from './components/infoText'
import NextPrevComponent from './components/nextPrev'

// define target specific information
import targets from './targets'

// define all blog pages
import index from './pages/index'
import understandingTheWeb from './pages/understandingTheWeb'
import dataScienceInternship from './pages/dataScienceInternship'
import weBelieveInAi from './pages/weBelieveInAi'
import journeyPart1 from './pages/journeyPart1'
import journeyPart2 from './pages/journeyPart2'
import journeyPart3 from './pages/journeyPart3'
import journeyPart4 from './pages/journeyPart4'
import journeyPart5 from './pages/journeyPart5'
import journeyPart6 from './pages/journeyPart6'
import journeyPart7 from './pages/journeyPart7'
import journeyPart8 from './pages/journeyPart8'
import journeyPart9 from './pages/journeyPart9'
import journeyPart10 from './pages/journeyPart10'
import twoBillionWebsites from './pages/twoBillionWebsites'
import userInterfaceBuildingProcess from './pages/userInterfaceBuildingProcess'
import aLimitedSupplyOfDevelopers from './pages/aLimitedSupplyOfDevelopers'
import aMentalExoSkeleton from './pages/aMentalExoSkeleton'
import furtherThanAutomation from './pages/furtherThanAutomation'
import accumulatingKnowledge from './pages/accumulatingKnowledge'
import oneLanguageForEveryUI from './pages/oneLanguageForEveryUI'
import theUIDLProject from './pages/theUIDLProject'
import qualityFirst from './pages/qualityFirst'
import transparentProcessAndPlanning from './pages/transparentProcessAndPlanning'
import jsonSchema from './pages/jsonSchema'
import componentUidl from './pages/componentUidl'
import typeScriptInterfaces from './pages/typeScriptInterfaces'
import teleportHQCodeGenerators from './pages/teleportHQCodeGenerators'
import nodeTypes from './pages/nodeTypes'
import enforcingConventionForWireframeObjectDetection from './pages/enforcingConventionForWireframeObjectDetection'
import introductionToCodeGeneration from './pages/introductionToCodeGeneration'
import setup from './pages/setup'
import generateReactCode from './pages/generateReactCode'
import addingStyles from './pages/addingStyles'
import styleFlavors from './pages/styleFlavors'
import vueExample from './pages/vueExample'
import dependencies from './pages/dependencies'
import quickstart from './pages/quickstart'

const project: TeleportProject = {
  targets,
  components: {
    AutoScaleImage: AutoScaleImageComponent,
    AuthorCard: AuthorCardComponent,
    AuthorCardWrapper: AuthorCardWrapperComponent,
    Body: BodyComponent,
    Bold: BoldComponent,
    Caption: CaptionComponent,
    ExternalLink: ExternalLinkComponent,
    Italic: ItalicComponent,
    Image: ImageComponent,
    Footer: FooterComponent,
    FinalFooter: FinalFooterComponent,
    Flags: FlagsComponent,
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
    NextPrev: NextPrevComponent,
    FooterInfo: FooterInfoComponent,
    FooterRegister: FooterRegisterComponent,
    FooterLinks: FooterLinksComponent,
    Button: ButtonComponent,
    Copy: CopyComponent,
    CopyText: CopyTextComponent,
    SmallText: SmallTextComponent,
    InfoText: InfoTextComponent,
  },
  pages: {
    // @ts-ignore
    index,
    // @ts-ignore
    understandingTheWeb,
    // @ts-ignore
    dataScienceInternship,
    // @ts-ignore
    weBelieveInAi,
    // @ts-ignore
    journeyPart1,
    // @ts-ignore
    journeyPart2,
    // @ts-ignore
    journeyPart3,
    // @ts-ignore
    journeyPart4,
    // @ts-ignore
    journeyPart5,
    // @ts-ignore
    journeyPart6,
    // @ts-ignore
    journeyPart7,
    // @ts-ignore
    journeyPart8,
    // @ts-ignore
    journeyPart9,
    // @ts-ignore
    journeyPart10,
    // @ts-ignore
    twoBillionWebsites,
    // @ts-ignore
    userInterfaceBuildingProcess,
    // @ts-ignore
    aLimitedSupplyOfDevelopers,
    // @ts-ignore
    aMentalExoSkeleton,
    // @ts-ignore
    furtherThanAutomation,
    // @ts-ignore
    accumulatingKnowledge,
    // @ts-ignore
    oneLanguageForEveryUI,
    // @ts-ignore
    theUIDLProject,
    // @ts-ignore
    qualityFirst,
    // @ts-ignore
    transparentProcessAndPlanning,
    // @ts-ignore
    jsonSchema,
    // @ts-ignore
    nodeTypes,
    // @ts-ignore
    componentUidl,
    // @ts-ignore
    typeScriptInterfaces,
    // @ts-ignore
    teleportHQCodeGenerators,
    // @ts-ignore
    enforcingConventionForWireframeObjectDetection,
    // @ts-ignore
    introductionToCodeGeneration,
    // @ts-ignore
    setup,
    // @ts-ignore
    generateReactCode,
    // @ts-ignore
    addingStyles,
    // @ts-ignore
    styleFlavors,
    // @ts-ignore
    vueExample,
    // @ts-ignore
    dependencies,
    // @ts-ignore
    quickstart,
  },
}

export default project
