import { Flex } from "@chakra-ui/react"
import Header from "../Header/Header"
import Theme from "../Theme"
import Typist from 'react-typist'
import MacButtons from "../Header/MacButtons"

const Boot = () => {
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
            root ~ Booting system &nbsp;
            <Typist.Delay ms={1500} />
            .
            <Typist.Delay ms={1500} />
            .
            <Typist.Delay ms={1500} />
            . <br />
            <Typist.Delay ms={1500} />
            root ~ Mainframe loaded <br />
            <Typist.Delay ms={300} />
            root ~ Breaching security <br />
            <Typist.Delay ms={300} />
            root ~ Patching <br />
            <Typist.Delay ms={300} />
            root ~ All systems ready <br /><br /><br />
            <Typist.Delay ms={300} />
            root ~ Press any key to enter system. <br />
          </Typist>
        </Flex >
      </Flex >
    </Flex >
  )
}

export default Boot