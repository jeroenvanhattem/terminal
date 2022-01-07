import {
  Flex,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Blink = (props: any) => {
  const { height } = props
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsActive(!isActive)
    }, 500)
  }, [isActive])

  return (
    <Flex
      h={height}
      display='inline'
    >
      {isActive &&
        <Flex
          fontFamily={'Roboto Mono'}
        >
          <Text>|</Text>
        </Flex>
      }
    </Flex>
  )
}

export default Blink