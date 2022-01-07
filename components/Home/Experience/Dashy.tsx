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

const Dashy = (props: any) => {
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
      <File setActive={setExperience} setParentOffset={setParentOffset} name='dashy.tsx'>
        <Flex
          my={2}
          flexDir='column'
          align='center'
          overflowY='scroll'
        >
          <Image my={2} src='/static/images/logo_full_dark.png' alt='dashy logo' w={36} />
          <Image my={2} src='/static/images/dashy.png' alt='dashy dashboard' w={'80%'} maxW='1200px' borderRadius={15} border='1px solid' borderColor={Theme()._700} />

          <Heading my={2}>
            The most customizable personal dashboard.
          </Heading>

          <Flex maxW='800px' flexDir='column' textAlign='center'>
            <Text my={1} fontSize={18}>
              Now that&#39;s an ambitious promise, isn&#39;t it?
            </Text>
            <Text my={1} fontSize={18}>
              Dashy is where most of my spare time goes to. It started out as a project to practice with React, Node and Typescript before my internship started.
              I must admit it got kinda out of hand, as I spend about 40 hours a week on it (on top of my 40 hour internship).
            </Text>
            <Text my={1} fontSize={18}>
              I&#39;m aiming to make Dashy more than just a side project. I&#39;m working very hard on adding features and fixing bugs to eventually go live. You can actually sign up for the newsletter on the link below here if you want to stay updated!
            </Text>
          </Flex>

          <Flex
            my={8}
          >
            <LinkButton url='https://dashy.me'>Dashy</LinkButton>
          </Flex>
        </Flex>
      </File>
    </Flex>
  )
}

export default Dashy