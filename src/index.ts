import Teleport, { Generator } from '@teleporthq/teleport-lib-js'
import fs from 'fs' 
//@ts-ignore
import TeleportElementsCore from '@teleporthq/teleport-elements-core'
import TeleportGeneratorNext from '@teleporthq/teleport-generator-next'
import TeleportGeneratorReact from '@teleporthq/teleport-generator-react'

const { definitions, mappingHtml, mappingReact, mappingNext } = TeleportElementsCore
import project from './data'

const teleport = new Teleport()
  
mappingHtml.maps['A'] = { type: 'a' }
mappingHtml.maps['Ul'] = { type: 'ul' }
mappingHtml.maps['Li'] = { type: 'li' } 
mappingHtml.maps['Pre'] = { type: 'pre' } 
mappingHtml.maps['Br'] = { type: 'br' } 
mappingHtml.maps['Iframe'] = { type: 'iframe' }
mappingHtml.maps['Gist'] = {
  type: 'Gist',
  source: 'react-gist',      
  defaultImport: true
} 
teleport.useLibrary(definitions) 
teleport.useMapping(mappingHtml) 
teleport.useMapping(mappingReact)
teleport.useMapping(mappingNext) 

const GeneratorNext = new TeleportGeneratorNext()

teleport.useGenerator(GeneratorNext)
//@ts-ignore
teleport.useGenerator(new TeleportGeneratorReact())    
//@ts-ignore
const projectFiles = teleport.target('next').generator.generateProject(project)

Object.keys(projectFiles.filesByName).map(file => {
  console.log(file) 
  fs.writeFileSync('next/' + file, projectFiles.filesByName[file])
}) 


