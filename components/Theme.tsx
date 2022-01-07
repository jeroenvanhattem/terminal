import {
  useColorModeValue
} from '@chakra-ui/react'

const Theme = () => {
  const colors = {
    _100: useColorModeValue("brand.light.100", "brand.dark.100"),
    _200: useColorModeValue("brand.light.200", "brand.dark.200"),
    _300: useColorModeValue("brand.light.300", "brand.dark.300"),
    _400: useColorModeValue("brand.light.400", "brand.dark.400"),
    _500: useColorModeValue("brand.light.500", "brand.dark.500"),
    _600: useColorModeValue("brand.light.600", "brand.dark.600"),
    _700: useColorModeValue("brand.light.700", "brand.dark.700"),
    _800: useColorModeValue("brand.light.800", "brand.dark.800"),
    _900: useColorModeValue("brand.light.900", "brand.dark.900"),
    white: "brand.white",
    black: "brand.black",
    primary: "brand.primary",
    secondary: "brand.secondary",
    success: "brand.success",
    failure: "brand.failure",
    link: "brand.link",
    purple: "brand.purple",
    blue: "brand.blue",
    pink: "brand.pink",
    green: "brand.green",
    orange: "brand.orange",
    mac: {
      red: "brand.mac.red",
      orange: "brand.mac.orange",
      green: "brand.mac.green",
    },
    gradients: {
      blue: {
        first: "brand.gradients.blue.first",
        last: "brand.gradients.blue.last"
      },
      pink: {
        first: "brand.gradients.pink.first",
        last: "brand.gradients.pink.last",
      },
      green: {
        first: "brand.gradients.green.first",
        last: "brand.gradients.green.last"
      },
      orange: {
        first: "brand.gradients.orange.first",
        last: "brand.gradients.orange.last"
      }
    }
  }
  return colors
}

export default Theme