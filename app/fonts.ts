import {Poppins} from "next/font/google"

export const font_poppins = Poppins({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins"
})