import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
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
        <Flex
          flexDir='column'
          align='center'
        >
          <Heading>Welcome</Heading>
          <Text>
            Make yourself at home. Fun fact, I made this website in 1 evening.
          </Text>
        </Flex>
      </File>
    </Flex>
  )
}

export default Welcome