import fs from 'fs-extra'
import Teleport from '@teleporthq/teleport-lib-js'
import TeleportElementsCore from '@teleporthq/teleport-elements-core'
import TeleportGeneratorNext from '@teleporthq/teleport-generator-next'
import TeleportGeneratorReact from '@teleporthq/teleport-generator-react'

const { definitions, mappingHtml, mappingReact, mappingNext } = TeleportElementsCore
import project from './data'

const teleport = new Teleport()

mappingHtml.maps.A = { type: 'a' }
mappingHtml.maps.Ul = { type: 'ul' }
mappingHtml.maps.Li = { type: 'li' }
mappingHtml.maps.Pre = { type: 'pre' }
mappingHtml.maps.Br = { type: 'br' }
mappingHtml.maps.Iframe = { type: 'iframe' }
mappingHtml.maps.Hr = { type: 'hr' }
mappingHtml.maps.Gist = {
  type: 'Gist',
  source: 'react-gist',
  defaultImport: true,
}
teleport.useLibrary(definitions)
teleport.useMapping(mappingHtml)
teleport.useMapping(mappingReact)
teleport.useMapping(mappingNext)

const GeneratorNext = new TeleportGeneratorNext()

teleport.useGenerator(GeneratorNext)
// @ts-ignore
teleport.useGenerator(new TeleportGeneratorReact())

const targetName = 'next'
// @ts-ignore
const projectFiles = teleport.target(targetName).generator.generateProject(project)

Object.keys(projectFiles.filesByName).map(async (file) => {
  const path = `dist/${file}`
  try {
    await fs.outputFile(path, projectFiles.filesByName[file])
  } catch (e) {
    // tslint:disable-next-line
    console.log(e.message)
  }
})

async function writeStatic() {
  try {
    await fs.copy('./src/static', 'dist/static')
    await fs.copy('./src/next.config.js', 'dist/next.config.js')
    await fs.outputFile('dist/static/blog/teleport.json', JSON.stringify(project, null, 2))
  } catch (error) {
    // tslint:disable-next-line
    console.error(error)
  }
}

writeStatic()
