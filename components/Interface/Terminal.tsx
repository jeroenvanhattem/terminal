import {
  Flex,
  Input,
  Text
} from "@chakra-ui/react"
import Theme from "../Theme"
import Typist from 'react-typist'
import MacButtons from "../Shared/MacButtons"
import { useEffect, useRef, useState } from "react"

const Terminal = (props: any) => {
  const { children, setBooted, onClick } = props
  const [size, setSize] = useState({ width: '800px', height: '500px' })

  const makeBigger = () => {
    setSize({ width: '80%', height: '80%' })
  }

  const makeSmaller = () => {
    setSize({ width: '800px', height: '500px' })
  }

  return (
    <Flex
      w='100vw'
      maxW='100vw'
      h='100vh'
      maxH='100vh'
      justify='center'
      align='center'
      fontFamily={'Roboto Mono'}
    >
      <Flex pos='absolute' top={4} right={{ base: 'unset', md: 4 }} cursor='pointer' onClick={() => setBooted(true)}>Click here to skip the booting sequence</Flex>
      <Flex
        w={size.width}
        h={size.height}
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        bgColor={Theme()._900}
        flexDir='column'
        onClick={onClick ? onClick : null}
      >
        <Flex p={2} h={10}>
          <MacButtons onGreen={makeBigger} onOrange={makeSmaller} />
        </Flex>
        {children}
      </Flex >
    </Flex >
  )
}

export default Terminal