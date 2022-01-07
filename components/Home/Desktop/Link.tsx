import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
import {
  GitHub,
  Linkedin,
  Instagram,
} from 'react-feather'
import Theme from "../../Theme"

const Link = (props: any) => {
  const { name, setActive } = props

  const getIcon = () => {
    switch (name) {
      case 'github':
        return <GitHub size={48} />
      case 'linkedin':
        return <Linkedin size={48} />
      case 'instagram':
        return <Instagram size={48} />
    }
  }

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
        border='1px solid'
        borderColor={Theme()._700}
        align='center'
        justify='center'
      >
        <Heading>{getIcon()}</Heading>
      </Flex>
      <Flex flexGrow={1} />
      <Flex ml={2} align='center' justify='center'>
        <Text>{name}</Text>
      </Flex>
    </Flex>

  )
}

export default Link