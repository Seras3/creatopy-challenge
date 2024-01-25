import { JsonImageProperties } from "../../../types/json-design.types"
import Image from "next/image"
import {
  getTransformStyles,
  getFilterStyles,
  getDimensionsStyles,
} from "../utils/get-styles"

interface ElementImageProps {
  data: JsonImageProperties
}

const ElementImage = (props: ElementImageProps) => {
  const { data } = props

  return (
    <Image
      width={data.originalWidth}
      height={data.originalHeight}
      src={`${process.env.ASSETS_BASE_URL}/${data.url}`}
      alt={data.originalName ?? `Image ${data.url}`}
      style={{
        position: "absolute",
        objectFit: "cover",
        mixBlendMode: data.blendMode,
        ...getDimensionsStyles(data),
        ...getTransformStyles(data),
        ...getFilterStyles(data),
      }}
    />
  )
}

export default ElementImage
