import { CSSProperties, Key, ReactNode } from "react"
import {
  JsonTextProperties,
  JsonTextSlateConfigChildren,
  JsonTextSlateConfigNode,
  isSlateConfigNode,
} from "../../../types/json-design.types"
import {
  getDimensionsStyles,
  getFontStyles,
  getTextStyles,
  getTransformStyles,
} from "../utils/get-styles"

interface ElementTextProps {
  data: JsonTextProperties
}

const ElementText = (props: ElementTextProps) => {
  const { data } = props

  const commonStyle: CSSProperties = {
    position: "absolute",
    ...getTransformStyles(data),
    ...getDimensionsStyles(data),
    ...getTextStyles(data),
  }

  const renderSlateConfigNode = (node: JsonTextSlateConfigNode, key: Key) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p
            key={key}
            style={{
              ...commonStyle,
              ...getFontStyles(node.defaultFontSettings),
            }}
          >
            {renderSlateConfigNodeChildren(node.children)}
          </p>
        )
      default:
        return <p key={key}></p>
    }
  }

  const renderSlateConfigNodeChildren = (
    children: Array<JsonTextSlateConfigNode | JsonTextSlateConfigChildren>
  ): ReactNode => (
    <>
      {children.map((child, index) => {
        if (isSlateConfigNode(child)) {
          return renderSlateConfigNode(child, index)
        } else {
          return (
            <span
              key={index}
              style={{
                ...getFontStyles(child.fontSettings),
                ...getTextStyles(child),
              }}
            >
              {child.text}
            </span>
          )
        }
      })}
    </>
  )

  return renderSlateConfigNodeChildren(data.config.nodes)
}

export default ElementText
