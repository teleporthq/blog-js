import { Copy, Span, Flags, Paragraph, ExternalLink } from '../../components'

export default Copy([
  Flags(),
  Paragraph('Competitivi Împreună'),
  Paragraph(
    `Dezvoltarea produsului TIC Unicornspace, instrument de prototipare, design vizual și generator de cod cu aplicabilitate în sectoarele industrii creative, sănătate și tic pentru integrarea pe verticală a solutiilor TIC`
  ),
  Paragraph(
    'For information regarding other co-financed projects within European Union, please visit ',
    ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')
  ),
  Paragraph(
    "The content of this material does not necessary represent the oficial statement of the European Union or Romania's Government."
  ),
  Paragraph(Span('Evo Forge, Calea Motilor nr 84, Cluj-Napoca &nbsp;&nbsp;&nbsp;&nbsp; Phone: +40 (0)364 101 203')),
])
