import {
  Flex,
  Input,
  Text
} from "@chakra-ui/react"
import Theme from "../Theme"
import Typist from 'react-typist'
import MacButtons from "../Shared/MacButtons"
import { useEffect, useRef, useState } from "react"

const File = (props: any) => {
  const { children, name, setParentOffset, setActive } = props
  const [size, setSize] = useState({ width: '80%', height: '80%' })

  const makeBigger = () => {
    if (setParentOffset) {
      setParentOffset(false)
    }
    setSize({ width: '99%', height: '95%' })
  }

  const makeSmaller = () => {
    if (setParentOffset) {
      setParentOffset(true)
    }
    setSize({ width: '80%', height: '80%' })
  }

  return (
    <Flex
      w={size.width}
      h={size.height}
      pos='absolute'
      justify='center'
      align='center'
      fontFamily={'Open Sans'}
    >
      <Flex
        w={{ base: '100%', lg: size.width }}
        h={{ base: '100%', lg: size.height }}
        minW={{ base: '100%', lg: '700px' }}
        minH={{ base: '100%', lg: '600px' }}
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        bgColor={Theme()._900}
        flexDir='column'
      >
        <Flex m={2}>
          <Flex w={24}>
            <MacButtons onRed={() => setActive('')} onGreen={makeBigger} onOrange={makeSmaller} />
          </Flex>
          <Flex flexGrow={1} justify='center'>
            <Text fontSize={16}>{name}</Text>
          </Flex>
          <Flex w={24}>
          </Flex>
        </Flex>
        {children}
      </Flex >
    </Flex >
  )
}

export default File