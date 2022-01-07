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
  const [size, setSize] = useState({ width: '1200px', height: '800px' })

  const makeBigger = () => {
    setSize({ width: '80%', height: '80%' })
  }

  const makeSmaller = () => {
    setSize({ width: '1200px', height: '800px' })
  }

  return (
    <Flex
      w='100vw'
      maxW='100vw'
      h='100vh'
      maxH='100vh'
      justify='center'
      align='center'
      fontFamily={'Open Sans'}
    >
      <Flex
        w={size.width}
        h={size.height}
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        bgColor={Theme()._900}
        flexDir='column'
      >
        <Flex p={2} h={10} align='center'>
          <Flex w={28} flexDir='row'>
            <Flex>
              <MacButtons onGreen={makeBigger} onOrange={makeSmaller} />
            </Flex>
          </Flex>
          <Flex flexGrow={1} justify='center'>
            <Text fontSize={16} fontWeight={500}>{name}</Text>
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