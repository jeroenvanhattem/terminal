import {
  Flex,
  Wrap
} from "@chakra-ui/react"
import File from "../../Interface/File"
import Theme from "../../Theme"
import Icon from "./Icon"

const Desktop = (props: any) => {
  const { setActive } = props
  return (
    <Flex
      bgColor={Theme()._800}
      w='100%'
      h='100%'
      p={16}
    >
      <Wrap>
        <Icon name='welcome.tsx' setActive={setActive} />
      </Wrap>
    </Flex >
  )
}

export default Desktop