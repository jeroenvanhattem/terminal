import {
  Flex,
  Input,
  Text
} from "@chakra-ui/react"
import Typist from 'react-typist'
import { useEffect, useRef, useState } from "react"
import Blink from '../Utils/Blink'
import Theme from "../Theme"
import Terminal from "../Interface/Terminal"

const Boot = (props: any) => {
  const { setBooted } = props
  const [advance, setAdvance] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const update = () => {
    if (inputRef?.current?.value.trim() === 'exec exploit') {
      setAdvance(true)
      inputRef?.current?.blur()
    }
  }

  const onFocus = () => {
    if (showInput) {
      inputRef?.current?.focus()
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowInput(true)
      inputRef?.current?.focus()
    }, 14000)
  }, [setShowInput])

  useEffect(() => {
    if (advance) {
      setTimeout(() => {
        setBooted(true)
      }, 12000)
    }
  }, [advance, setBooted])

  return (
    <Terminal setBooted={setBooted} onClick={onFocus}>
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
        <Flex flexDir='row' display={showInput ? 'unset' : 'none'}>
          root ~&nbsp;
          {/* <Blink height={12} /> */}
          <Input
            ref={inputRef}
            onChange={update}
            h={6}
            w='90%'
            m={0}
            p={0}
            autoFocus
            border='none'
            defaultValue=''
            _focus={{
              border: 'none'
            }
            }
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