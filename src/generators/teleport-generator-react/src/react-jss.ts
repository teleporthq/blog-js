import { ComponentCodeGenerator, FileSet, Target } from '@teleporthq/teleport-lib-js'
import { Content, ComponentGeneratorOptions } from '@teleporthq/teleport-lib-js/dist/types'
import upperFirst from 'lodash/upperFirst'
import { StylesUtils } from './utils'
import { RendererMetadata } from './types'
import { ComponentRenderer } from './renderers'

export default class ReactJSSReactComponentCodeGenerator extends ComponentCodeGenerator {
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

    const componentMetadata: RendererMetadata = { content, target, styleMaps }
    const componentContent = ComponentRenderer.renderComponent(componentMetadata)

    /** if no props, initialise with empty array */
    const propsToRender = !props || !Object.keys(props).length ? [] : props

    /** and push the default classes prop */
    propsToRender.push('classes')

    /** styles object string */
    const stylesString = styles ? JSON.stringify(staticStyles, null, 4) : ''

    /** class content */
    const fileContentMetadata = {
      componentContent,
      dependenciesString,
      dynamicStylesString: styleString,
      name,
      propsToRender,
      stylesString,
    }
    const classFileContent = generateFileContent(fileContentMetadata)

    const result = new FileSet()

    result.addFile(`${upperFirst(name)}.js`, classFileContent)

    return result
  }

  private getDependenciesString(dependencies: any = {}, options?: ComponentGeneratorOptions): string {
    return Object.keys(dependencies)
      .map((libraryName) => this.renderDependency(libraryName, dependencies[libraryName], options))
      .join('\n    ')
  }
}

function generateFileContent(metadata): string {
  const { dependenciesString, name, propsToRender, componentContent, stylesString, dynamicStylesString } = metadata

  return `
    import React, { Component } from 'react'
    import injectSheet from 'react-jss'

    ${dependenciesString}

    class ${upperFirst(name)} extends Component {
      render () {
        const { ${propsToRender} } = this.props
        ${dynamicStylesString}
        return (
          ${componentContent}
        )
      }
    }

    const styles = ${stylesString}

    export default injectSheet(styles)(${upperFirst(name)})
  `
}
