import { Copy, Flags, Paragraph, ExternalLink, CopyText, Bold } from '../../components'
import Br from '../../elements/br'

export default Copy([
  Flags(),
  CopyText([
    Paragraph('Competitivi Împreună'),
    Paragraph(
      `Dezvoltarea produsului TIC Unicornspace, instrument de prototipare, design vizual și generator de cod cu aplicabilitate în sectoarele industrii creative, sănătate și tic pentru integrarea pe verticală a solutiilor TIC`
    ),
    Paragraph(
      'Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați ',
      Br,
      Bold(ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro'), '.')
    ),
    Paragraph(
      'Conținutul acestui material nu reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a Guvernului României.'
    ),
  ]),
])
