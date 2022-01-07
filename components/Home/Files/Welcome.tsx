import { Flex } from "@chakra-ui/layout"
import File from "../../Interface/File"

const Welcome = (props: any) => {
  const { setActive } = props
  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
    >
      <File setActive={setActive} name='welcome.tsx'>
      </File>
    </Flex>
  )
}

export default Welcome