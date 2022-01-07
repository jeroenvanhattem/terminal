import { Flex, Heading, Text } from "@chakra-ui/layout"
import Theme from "../../Theme"

const Icon = (props: any) => {
  const { name, setActive } = props
  return (
    <Flex
      w={48}
      h={56}
      align='center'
      flexDir='column'
      onClick={() => setActive(name)}
      cursor='pointer'
    >
      <Flex
        w={'80%'}
        h={'80%'}
        bgColor={Theme()._900}
        borderRadius={15}
        align='center'
        justify='center'
      >
        <Heading>.{name.split('.')[1].toUpperCase()}</Heading>
      </Flex>
      <Flex flexGrow={1} />
      <Flex ml={2} align='center' justify='center'>
        <Text>{name}</Text>
      </Flex>
    </Flex>

  )
}

export default Icon