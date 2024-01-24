import { passionOne, roboto } from "@/app/fonts"
import {
  JsonAdjustColor,
  JsonBackground,
  JsonBorder,
  JsonFontSettings,
  JsonShadow,
  JsonTextAlignment,
} from "@/app/types/json-design.types"

export const getShadowStyles = (data: JsonShadow) => ({
  filter: data.useShadow
    ? `drop-shadow(${data.color} ${data.hShadow}px ${data.vShadow}px ${data.blur}px` +
      (data.spread ? `${data.spread}px` : "") +
      ")"
    : undefined,
})

export const getAdjustColorStyles = (data: JsonAdjustColor) => ({
  filter: data.useAdjustColor
    ? `brightness(${data.brightness}) contrast(${data.contrast}) saturate(${data.saturate}) hue(${data.hue})`
    : undefined,
})

export const getBorderStyles = (data?: JsonBorder) =>
  data
    ? {
        borderWidth: data.weight,
        borderColor: data.color,
        borderRadius: data.radius,
      }
    : {}

export const getTransformStyles = (data: {
  x: number
  y: number
  rotation: number
}) => ({
  transform: `translate(${data.x}px, ${data.y}px) rotate(${data.rotation}deg)`,
})

export const getFontStyles = (data?: JsonFontSettings) => {
  if (!data) return {}

  let fontFamily = undefined

  switch (data.fontFamily) {
    case "Roboto":
      fontFamily = roboto.style.fontFamily
      break
    case "Passion One":
      fontFamily = passionOne.style.fontFamily
      break
  }

  return { fontFamily, fontWeight: data.fontWeight, fontStyle: data.fontStyle }
}

export const getFilterStyles = (data: {
  dropShadow?: JsonShadow
  adjustColor?: JsonAdjustColor
}) => {
  const filter = [
    data.dropShadow && getShadowStyles(data.dropShadow).filter,
    data.adjustColor && getAdjustColorStyles(data.adjustColor).filter,
  ]
    .filter((styles) => !!styles)
    .join(" ")

  return { filter }
}

export const getDimensionsStyles = (data: {
  width: number
  height: number
}) => ({
  width: data.width,
  height: data.height,
})

export const getTextStyles = (data: {
  fontSize?: number
  lineHeight?: number
  letterSpacing?: number
  alignment?: JsonTextAlignment
  direction?: string
  color?: string
}) => ({
  fontSize: data.fontSize,
  lineHeight: data.lineHeight,
  letterSpacing: data.letterSpacing,
  textAlign: data.alignment,
  direction: data.direction as "rtl" | "ltr",
  color: data.color,
})

export const getBackgroundStyles = (data?: JsonBackground) => {
  if (!data || data.type === "none") return {}

  switch (data.type) {
    case "solid":
      return {
        backgroundColor: data.scolor,
      }
    case "image":
      return {
        backgroundImage: `url(${data.url})`,
        // TODO
      }
    case "lgrad":
      return {
        background: `linear-gradient(${
          data.backgroundRotation
        }turn, ${data.gradColors.map((g) => `${g.c} ${g.p}%`).join(", ")})`,
      }
    case "rgrad":
      return {
        background: `radial-gradient(at ${data.rgradPos}, ${data.gradColors
          .map((g) => `${g.c} ${g.p}%`)
          .join(", ")})`,
      }
  }
}
