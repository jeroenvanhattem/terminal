import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
import getAge from 'get-age'
import File from "../../Interface/File"

const About = (props: any) => {
  const { setActive } = props

  const age = getAge('1998-09-17')
  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
    >
      <File setActive={setActive} name='about.tsx'>
        <Flex
          flexDir='column'
          align='center'

        >
          <Heading>So, hey</Heading>
          <Text>I&#39;m Jeroen, {age} years old. I live near Utrecht, The Netherlands.</Text>
        </Flex>
      </File>
    </Flex>
  )
}

export default About