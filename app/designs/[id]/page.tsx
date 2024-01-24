import { CSSProperties } from "react"
import { JsonDesign } from "../../types/json-design.types"

import renderDesignElements from "./utils/render-design-elements"
import { getDimensionsStyles } from "./utils/get-styles"

interface AdPageProps {
  params: { id: string }
  design: any
}

type JsonDesignResponse = {
  hash: string
  userId: number
  banner: JsonDesign
}

const AdPage = async ({ params }: AdPageProps) => {
  const res = await fetch(
    `${process.env.CREATOPY_API_BASE_URL}/designs/${params.id}/json`
  )
  const designResponse: JsonDesignResponse = await res.json()

  const containerProps = designResponse.banner.properties

  const containerStyles: CSSProperties = {
    ...getDimensionsStyles(containerProps),
    backgroundColor:
      containerProps.backgroundColor?.type === "solid"
        ? containerProps.backgroundColor.scolor
        : undefined,
    transform: `scale(2, 2)`,
    transformOrigin: `0px 0px 0px`,
  }

  return (
    <div style={containerStyles}>
      {renderDesignElements(designResponse.banner.elements)}
    </div>
  )
}

export default AdPage
