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
import Terminal from "../Interface/Terminal"

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
  }, [advance, setBooted])

  return (
    <Terminal setBooted={setBooted}>
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
    </Terminal>
  )
}

export default Boot