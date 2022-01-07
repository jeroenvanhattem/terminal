import { Flex } from "@chakra-ui/react"
import Header from "../Header/Header"
import Theme from "../Theme"

const Home = () => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bgColor={Theme()._900}
      flexDir='column'
    >
      Welcome to the mainframe.
    </Flex>
  )
}

export default Home