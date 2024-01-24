"use client"

import useWindowSize from "../utils/use-window-size"

export default function DesignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const windowSize = useWindowSize()

  return (
    <div
      style={
        windowSize && {
          maxWidth: windowSize.width,
          maxHeight: windowSize.height,
        }
      }
    >
      {children}
    </div>
  )
}
