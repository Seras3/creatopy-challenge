import { JsonDesign } from "@/app/types/json-design.types"
import Element from "../element"
import Slide from "../slide"

export default function renderDesignElements(elements: JsonDesign["elements"]) {
  return elements.map((elem, index) => {
    switch (elem.type) {
      case "layer":
        return <Element key={index} data={elem} />
      case "slide":
        return <Slide key={index} data={elem} />
    }
  })
}
