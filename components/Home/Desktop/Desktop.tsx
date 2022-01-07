import {
  Flex,
  Wrap
} from "@chakra-ui/react"
import File from "../../Interface/File"
import Theme from "../../Theme"
import Icon from "./Icon"
import FolderIcon from "./FolderIcon"
import Link from "./Link"

const Desktop = (props: any) => {
  const { setActive } = props
  return (
    <Flex
      bgColor={Theme()._800}
      w='100%'
      h='100%'
      p={16}
      flexDir={'column'}
    >
      <Flex>
        <Wrap>
          <Icon name='welcome.tsx' setActive={setActive} />
          <Icon name='about.tsx' setActive={setActive} />
          <FolderIcon name='experience' setActive={setActive} />
        </Wrap>
      </Flex>
      
      <Flex flexGrow={1} />
      
      <Flex>
        <Wrap>
          <Link name='github' setActive={setActive} />
          <Link name='linkedin' setActive={setActive} />
          <Link name='instagram' setActive={setActive} />
        </Wrap>
      </Flex>
    </Flex >
  )
}

export default Desktop