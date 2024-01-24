import { JsonSlide } from "../../types/json-design.types"
import renderDesignElements from "./utils/render-design-elements"

interface SlideProps {
  data: JsonSlide
}

const Slide = (props: SlideProps) => {
  const {
    data: { properties, elements },
  } = props

  return <div>{renderDesignElements(elements)}</div>
}

export default Slide
