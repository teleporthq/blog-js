import { ComponentCodeGenerator, FileSet, Target } from '@teleporthq/teleport-lib-js'
import { Content, ComponentGeneratorOptions } from '@teleporthq/teleport-lib-js/dist/types'
import styleTransformers from '@teleporthq/teleport-lib-js/dist/transformers/styles'
const { jsstocss } = styleTransformers
import upperFirst from 'lodash/upperFirst'
import { RendererMetadata } from './types'
import { ComponentRenderer } from './renderers'
import { StylesUtils } from './utils'

export default class CSSModulesReactComponentCodeGenerator extends ComponentCodeGenerator {
  public render(
    name: string,
    content: Content,
    dependencies: any = {},
    styles,
    props,
    target: Target,
    options?: ComponentGeneratorOptions
  ): FileSet | null {
    /** prepare dependencies to be rendered */
    const dependenciesString = this.getDependenciesString(dependencies, options)

    const { dynamicStyles, staticStyles } = StylesUtils.detectDynamicStyle(styles)
    const { styleMaps, styleString } = StylesUtils.generateInlineStyleForElement(name, dynamicStyles)

    const renderMetadata: RendererMetadata = { content, target, styleMaps }
    const componentContent = ComponentRenderer.renderComponent(renderMetadata)

    const classFileContent = generateFileContent(dependenciesString, name, props, componentContent, styleString)
    const styleFileContent = jsstocss.stylesheet(staticStyles).css

    const result = new FileSet()
    result.addFile(`${upperFirst(name)}/index.js`, classFileContent)
    result.addFile(`${upperFirst(name)}/styles.css`, styleFileContent)

    return result
  }

  private getDependenciesString(dependencies: any = {}, options?: ComponentGeneratorOptions): string {
    return Object.keys(dependencies)
      .map((libraryName) => this.renderDependency(libraryName, dependencies[libraryName], options))
      .join('\n    ')
  }
}

function generateFileContent(dependencies: string, name: string, props: any, content: string, style: string): string {
  const propsString = props && props.length > 0 ? `const { ${props.join(', ')} } = this.props` : ''

  return `
    import React, { Component } from 'react'
    import styles from './styles.css'
    ${dependencies}

    export default class ${upperFirst(name)} extends Component {
      render () {
        ${propsString}
        ${style}
        return (
          ${content}
        )
      }
    }
  `
}
