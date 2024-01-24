import { JsonDesign } from "@/app/types/json-design.types"
import Element from "../element"
import Slide from "../slide"

export default function renderDesignElements(elements: JsonDesign["elements"]) {
  return elements.map((elem) => {
    switch (elem.type) {
      case "layer":
        return <Element key={elem.properties.id} data={elem} />
      case "slide":
        return <Slide key={elem.properties.id} data={elem} />
    }
  })
}
