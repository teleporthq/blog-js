import {
  FinalFooter,
  AddressAndPhone,
  SocialButtons,
  SocialButton,
  Image,
  HiddenContainer,
  Container,
} from '../../components'

export default FinalFooter(
  HiddenContainer(),
  Container(
    AddressAndPhone(`Evo Forge, Calea Motilor nr 84, Cluj-Napoca`, `Phone: +40 (0)364 101 203`),
    SocialButtons(
      SocialButton(
        Image({
          src: 'https://teleporthq.io/static/svg/linked-ico.svg',
          alt: 'Linkedin',
        }),
        `https://www.linkedin.com/company/11541493`
      ),

      SocialButton(
        Image({
          src: 'https://teleporthq.io/static/svg/spectrum.svg',
          alt: 'Spectrum',
        }),
        `https://spectrum.chat/teleporthq`
      ),

      SocialButton(
        Image({
          src: 'https://teleporthq.io/static/svg/twitter-ico.svg',
          alt: 'Twitter',
        }),
        `https://twitter.com/teleporthqio`
      )
    )
  )
)
