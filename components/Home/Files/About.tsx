import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout"
// @ts-ignore
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
          w='100%'
        >
          <Flex
            flexDir='column'
            align='center'
            textAlign='center'
            w={{base: '80%', xl: '60%'}}
          >
            <Heading>About me</Heading>
            <Text my={2}>
              So, hey. I&#39;m Jeroen, {age} years old. I live near Utrecht, The Netherlands.
             Currently I&#39;m doing my graduation internship at Foodsy for my Software Development major at the University of Applied Sciences in Utrecht.
             I&#39;ve done 5 years of Computer Science after eventually switching to Software Development for my last year.
            </Text>
            <Text my={2}>
              So what techniques do I use? I love React (Next.js), Node.js and Typescript. I use this trinity for every project I start. Like my main project Dashy (more about that in the experience folder).
            </Text>
            <Text my={2}>
              Aside from coding, I spent most of my time playing sports (football, the real football), working out, studying and at times gaming, either PC or VR (Oculus Quest). I visit Ajax matches whenever I can and also love going to concerts.
            </Text>
          </Flex>
        </Flex>
      </File>
    </Flex>
  )
}

export default About