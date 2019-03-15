import { FinalFooter, AddressAndPhone, SocialButtons, SocialButton, Image } from '../../components'

export default FinalFooter(
  AddressAndPhone(`Evo Forge, Calea Motilor nr 84, Cluj-Napoca`, `Phone: +40 (0)364 101 203`),
  SocialButtons(
    SocialButton(
      Image({
        src: 'https://teleporthq.io/static/svg/linked-ico.svg',
        alt: 'Linkedin',
      }),
      `https://linkedin.com`
    ),

    SocialButton(
      Image({
        src: 'https://teleporthq.io/static/svg/spectrum.svg',
        alt: 'Spectrum',
      }),
      `https://spectrum.com`
    ),

    SocialButton(
      Image({
        src: 'https://teleporthq.io/static/svg/twitter-ico.svg',
        alt: 'Twitter',
      }),
      `https://twitter.com`
    )
  )
)
