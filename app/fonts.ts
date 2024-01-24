import { Inter, Passion_One, Roboto } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const passionOne = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})
