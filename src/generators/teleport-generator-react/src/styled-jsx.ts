import { ComponentCodeGenerator, FileSet, Target } from '@teleporthq/teleport-lib-js'
import { Content, ComponentGeneratorOptions } from '@teleporthq/teleport-lib-js/dist/types'
import upperFirst from 'lodash/upperFirst'
import { RendererMetadata } from './types'
import { StylesUtils } from './utils'
import { ComponentRenderer } from './renderers'

export default class StyledJSXReactComponentCodeGenerator extends ComponentCodeGenerator {
  public render(
    name: string,
    content: Content,
    dependencies: any = {},
    styles,
    props,
    target: Target,
    options?: ComponentGeneratorOptions
  ): FileSet | null {
    const { dynamicStyles, staticStyles } = StylesUtils.detectDynamicStyle(styles)
    const { styleMaps, styleString } = StylesUtils.generateInlineStyleForElement(name, dynamicStyles)

    /** prepare dependencies to be rendered */
    const dependenciesString = this.getDependenciesString(dependencies, options)

    const rendererMetadata: RendererMetadata = {
      content,
      isRoot: true,
      styleMaps,
      styles: staticStyles,
      target,
    }
    const jsx = ComponentRenderer.renderComponentJSX(rendererMetadata)

    const fileContent = generateFileContent(dependenciesString, name, props, styleString, jsx)

    const result = new FileSet()
    result.addFile(`${upperFirst(name)}.js`, fileContent)

    return result
  }

  private getDependenciesString(dependencies: any = {}, options?: ComponentGeneratorOptions): string {
    return Object.keys(dependencies)
      .map((libraryName) => this.renderDependency(libraryName, dependencies[libraryName], options))
      .join('\n    ')
  }
}

function generateFileContent(dependencies: string, name: string, props: any, style: string, jsx: string): string {
  const propsString = props && props.length > 0 ? `const { ${props.join(', ')} } = this.props` : ''

  return `
    import React, { Component } from 'react'
    ${dependencies}

    export default class ${upperFirst(name)} extends Component {
      render () {
        ${propsString}
        ${style}
        return (
          ${jsx}
        )
      }
    }
  `
}
