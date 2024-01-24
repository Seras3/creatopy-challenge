import { JsonElement } from "../../types/json-design.types"
import ElementButton from "./elements/element-button"
import ElementImage from "./elements/element-image"
import ElementText from "./elements/element-text"

interface ElementProps {
  data: JsonElement
}

const Element = (props: ElementProps) => {
  const { data } = props

  switch (data.layerType) {
    case "text":
      return <ElementText data={data.properties} />
    case "image":
      return <ElementImage data={data.properties} />
    case "button":
      return <ElementButton data={data.properties} />
    default:
      return <div>TODO: {data.layerType}</div>
  }
}

export default Element
