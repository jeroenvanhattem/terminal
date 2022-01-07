import { Flex } from "@chakra-ui/react"
import Theme from "../Theme"
import MacButtons from "./MacButtons"
import Tabs from "./Tabs/Tabs"

const Header = () => {
  return (
    <Flex
      w='100vw'
      h={10}
      flexDir='row'
      bgColor={Theme()._900}
    >
      <Flex
        ml={2}
        mr={10}
        align='center'
      >
        <MacButtons />
      </Flex>
      <Flex
        align='center'
      >
        <Tabs />
      </Flex>
    </Flex >
  )
}

export default Header