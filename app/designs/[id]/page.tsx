import { JsonDesign } from "../../types/json-design.types"

import renderDesignElements from "./utils/render-design-elements"
import {
  getBackgroundDesignStyles,
  getDimensionsStyles,
} from "./utils/get-styles"
import Banner from "./banner"

interface AdPageProps {
  params: { id: string }
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

  return (
    <Banner
      width={containerProps.width}
      height={containerProps.height}
      style={{ ...getBackgroundDesignStyles(containerProps.backgroundColor) }}
    >
      {renderDesignElements(designResponse.banner.elements)}
    </Banner>
  )
}

export default AdPage
