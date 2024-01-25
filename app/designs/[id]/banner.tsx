"use client"

import useWindowSize from "@/app/utils/use-window-size"
import { CSSProperties, ReactNode, useMemo } from "react"
import { getDimensionsStyles, getTransformStyles } from "./utils/get-styles"

interface BannerProps {
  width: number
  height: number
  children: ReactNode
  style: CSSProperties
}

const Banner = (props: BannerProps) => {
  const windowSize = useWindowSize()

  const scaleRatio = windowSize
    ? Math.min(windowSize.width / props.width, windowSize.height / props.height)
    : 1

  const borderHelperStyle = useMemo(
    () =>
      props.style.border
        ? {
            left: -1,
            top: -1,
          }
        : {},
    [props.style.border]
  )

  return (
    <div
      style={{
        overflow: "hidden",
        transformOrigin: "0px 0px 0px",
        ...getDimensionsStyles(props),
        ...getTransformStyles({ scale: scaleRatio }),
        ...props.style,
      }}
    >
      <div
        style={{
          position: "absolute",
          ...getDimensionsStyles(props),
          ...borderHelperStyle,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Banner
