import { extendTheme, ThemeConfig} from "@chakra-ui/react"
import colors from "./colors"

const theme = extendTheme({
  initialColorMode: "dark",
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors,
} as ThemeConfig)

export default theme