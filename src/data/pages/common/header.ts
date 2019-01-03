import { Header, Link, Logo, Navigation, NavigationItem, Button } from '../../components'

export default Header(
  Link(
    [
      Logo(
        '/static/blog/assets/circle.svg',
        '/static/blog/assets/square.svg',
        '/static/blog/assets/triangle.svg',
        '/static/blog/assets/logowriting.svg'
      ),
    ],
    '/'
  ),
  Navigation(
    NavigationItem([Link('Home', '/')]),
    NavigationItem([Link('Vision', '/vision')]),
    NavigationItem([Link('About Us', '/about')]),
    NavigationItem([Link('Funding', '/funding')]),
    NavigationItem([Link('Blog', '/blog')], '#4a4a4a'),
    NavigationItem([Link(Button('Sign up'), '/sign-up')])
  )
)
