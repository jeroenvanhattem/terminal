import {
  Flex,
  Input,
  Text
} from "@chakra-ui/react"
import Header from "../Header/Header"
import Theme from "../Theme"
import Typist from 'react-typist'
import MacButtons from "../Header/MacButtons"
import { useEffect, useRef, useState } from "react"

const Terminal = (props: any) => {
  const { children, setBooted } = props
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
      <Flex pos='absolute' top={4} right={4} cursor='pointer' onClick={() => setBooted(true)}>Click here to skip the booting sequence</Flex>
      <Flex
        w='800px'
        h='500px'
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        bgColor={Theme()._900}
        flexDir='column'
      >
        <Flex m={2}>
          <MacButtons />
        </Flex>
        {children}
      </Flex >
    </Flex >
  )
}

export default Terminal