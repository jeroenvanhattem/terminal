import {
  Flex,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react"
import { useState } from "react"
import File from "../../Interface/File"
import LinkButton from "../../Shared/LinkButton"
import Theme from "../../Theme"

const Foodsy = (props: any) => {
  const { setExperience } = props
  const [parentOffset, setParentOffset] = useState(true)

  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
      top={parentOffset ? 12 : 0}
      left={parentOffset ? 12 : 0}
      align={parentOffset ? 'unset' : 'center'}
      justify={parentOffset ? 'unset' : 'center'}
    >
      <File setActive={setExperience} setParentOffset={setParentOffset} name='foodsy.tsx'>
        <Flex
          my={2}
          flexDir='column'
          align='center'
          overflowY='scroll'
        >
          <Image my={2} src='/static/images/foodsy.svg' alt='foodsy logo' w={36} />

          <Heading my={2}>
            Skip the line!
          </Heading>

          <Flex maxW='800px' flexDir='column' textAlign='center'>
            <Text my={1} fontSize={18}>
              Foodsy is <b>the</b> food pre-order service in the Netherlands.
            </Text>
            <Text my={1} fontSize={18}>
              Foodsy is where I got my first real world fullstack experience. I got accepted into an internship here, even though I had zero experience and very little knowledge. I&#39;m still very grateful for that.
            </Text>
          </Flex>

          <Flex
            my={8}
          >
            <LinkButton url='https://foodsy.eu'>Foodsy</LinkButton>
          </Flex>
        </Flex>
      </File>
    </Flex>
  )
}

export default Foodsy