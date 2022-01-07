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

const Boot = (props: any) => {
  const { setBooted } = props
  const [advance, setAdvance] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const update = () => {
    if (inputRef?.current?.value === 'exec exploit') {
      setAdvance(true)
    }
  }

  useEffect(() => {
    if (advance) {
      setTimeout(() => {
        setBooted(true)
      }, 12000)
    }
  }, [advance])

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
        <Flex ml={4} flexDir='column'>
          <Typist>
            root ~ booting system <br />
            <Typist.Delay ms={1500} />
            root ~ mainframe loaded <br />
            <Typist.Delay ms={300} />
            root ~ found vulnerability <br />
            <Typist.Delay ms={300} />
            root ~ run `exec exploit` to run the exploit and enter the system <br />
          </Typist>
          <Flex flexDir='row'>
            root ~&nbsp;
            <Input
              ref={inputRef}
              onChange={update}
              h={6}
              w={64}
              m={0}
              p={0}
              autoFocus
              border='none'
              defaultValue=''
            />
          </Flex>
        </Flex >

        {advance &&
          <Flex ml={4} flexDir='column'>
            <Typist>
              root ~ running exploit &nbsp;
              <Typist.Delay ms={1000} />
              .
              <Typist.Delay ms={1000} />
              .
              <Typist.Delay ms={1000} />
              . <br />
              <Typist.Delay ms={300} />
              <Text color={Theme().success}>root ~ all systems ready <br /><br /><br /></Text>
              <Typist.Delay ms={300} />
              root ~ patching you into mainframe <br />
            </Typist>
          </Flex >}
      </Flex >
    </Flex >
  )
}

export default Boot