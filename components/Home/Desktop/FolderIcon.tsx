import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
import {
  Folder
} from 'react-feather'
import Theme from "../../Theme"

const FolderIcon = (props: any) => {
  const { name, setActive } = props
  return (
    <Flex
      w={48}
      h={56}
      my={4}
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
        <Folder size={48} />
      </Flex>
      <Flex flexGrow={1} />
      <Flex ml={2} align='center' justify='center'>
        <Text>{name}</Text>
      </Flex>
    </Flex>

  )
}

export default FolderIcon