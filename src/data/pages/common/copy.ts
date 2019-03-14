import { Copy, Span, Flags, Paragraph, ExternalLink } from '../../components'

export default Copy([
  Flags(),
  Paragraph('Competitivi Împreună'),
  Paragraph(
    `Dezvoltarea produsului TIC Unicornspace, instrument de prototipare, design vizual și generator de cod cu aplicabilitate în sectoarele industrii creative, sănătate și tic pentru integrarea pe verticală a solutiilor TIC`
  ),
  Paragraph(
    'Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați ',
    ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro'),
    '.'
  ),
  Paragraph(
    'Conținutul acestui material nu reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a Guvernului României.'
  ),
  Paragraph(Span('Evo Forge, Calea Motilor nr 84, Cluj-Napoca &nbsp;&nbsp;&nbsp;&nbsp; Phone: +40 (0)364 101 203')),
])
