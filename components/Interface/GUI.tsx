import { useEffect, useRef, useState } from "react"
import {
  Flex,
  Input,
  Image,
  Text,
} from "@chakra-ui/react"
import {
  Code
} from 'react-feather'
import Header from "../Header/Header"
import Theme from "../Theme"
import Typist from 'react-typist'
import MacButtons from "../Header/MacButtons"

const GUI = (props: any) => {
  const { children, name } = props
  const [size, setSize] = useState({ width: '60%', height: '70%' })

  const makeBigger = () => {
    setSize({ width: '100%', height: '100%' })
  }

  const makeSmaller = () => {
    setSize({ width: '80%', height: '80%' })
  }

  return (
    <Flex
      w='100vw'
      maxW='100vw'
      h='100vh'
      maxH='100vh'
      justify='center'
      align='center'
      pos='relative'
      fontFamily={'Open Sans'}
    >
      <Flex
        w={{ base: '100%', lg: size.width }}
        h={{ base: '100%', lg: size.height }}
        minW={{ base: '100%', lg: '1200px' }}
        minH={{ base: '100%', lg: '800px' }}
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        bgColor={Theme()._900}
        pos='relative'
        flexDir='column'
      >
        <Flex p={2} h={10} align='center'>
          <Flex w={28} flexDir='row'>
            <Flex>
              <MacButtons onGreen={makeBigger} onOrange={makeSmaller} />
            </Flex>
          </Flex>
          <Flex flexGrow={1} justify='center'>
            <Text fontSize={16} fontWeight={500}>Dashy OS</Text>
          </Flex>
          <Flex w={28} mr={4} justify='flex-end'>
            <Code size={18} />
          </Flex>
        </Flex>
        <Flex
          w='100%'
          h='100%'
          pos='relative'
        >
          {children}
        </Flex>
      </Flex >
    </Flex >
  )
}

export default GUI