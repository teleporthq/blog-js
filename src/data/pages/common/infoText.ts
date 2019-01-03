import { InfoText, Paragraph, ExternalLink } from '../../components'

export default InfoText([
  Paragraph(
    'Our blog’s code is automatically generated from a  ',
    ExternalLink('teleport project definition', 'https://teleporthq.io/static/blog/teleport.json'),
    '. The blog is open-source and you can learn more about how the technology works from our ',
    ExternalLink('github repo', 'https://github.com/teleporthq/blog'),
    '.'
  ),
])
