import { JsonButtonProperties } from "../../../types/json-design.types"
import {
  getTransformStyles,
  getFontStyles,
  getDimensionsStyles,
  getTextStyles,
  getBorderStyles,
  getBackgroundStyles,
} from "../utils/get-styles"

interface ElementButtomProps {
  data: JsonButtonProperties
}

const ElementButton = (props: ElementButtomProps) => {
  const { data } = props

  return (
    <button
      type="button"
      style={{
        position: "absolute",
        ...getDimensionsStyles(data),
        ...getTransformStyles(data),
        ...getFontStyles(data.labelStyle),
        ...getTextStyles(data.labelStyle),
        ...getBorderStyles(data.border),
        // ...getBackgroundStyles({
        //   type: "rgrad",
        //   rgradPos: "center right",
        //   gradColors: [
        //     { c: "#aa0000", p: 20 },
        //     { c: "#00aabb", p: 90 },
        //   ],
        // }),
        //
        // ...getBackgroundStyles({
        //   type: "lgrad",
        //   backgroundRotation: 0.2,
        //   gradColors: [
        //     { c: "#aa0000", p: 20 },
        //     { c: "#00aabb", p: 90 },
        //   ],
        // }),
        ...getBackgroundStyles(data.backgroundColor),
      }}
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  )
}

export default ElementButton
