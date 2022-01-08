import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
import Theme from "../../Theme"

const Icon = (props: any) => {
  const { name, setActive } = props
  return (
    <Flex
      w={48}
      h={56}
      my={4}
      align='center'
      flexDir='column'
    >
      <Flex
        w={'80%'}
        h={'80%'}
        bgColor={Theme()._900}
        border='1px solid'
        borderColor={Theme()._700}
        borderRadius={15}
        align='center'
        justify='center'
        onClick={() => setActive(name)}
        cursor='pointer'
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