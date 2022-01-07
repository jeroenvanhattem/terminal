import { useEffect, useState } from "react"
import {
  Flex,
  Text
} from "@chakra-ui/layout"
import Icon from "../Desktop/Icon"
import Folder from "../../Interface/Folder"
import Dashy from "../Experience/Dashy"

const Experience = (props: any) => {
  const { setActive } = props
  const [experience, setExperience] = useState('')

  useEffect(() => {
    console.log(experience)
  }, [experience])

  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
    >
      <Folder name='experience' setActive={setActive}>
        <Icon setActive={setExperience} name='dashy.tsx'>
          <Text onClick={() => setExperience('dashy')}>Dashy</Text>
        </Icon>
      </Folder>
      {experience === 'dashy.tsx' && <Dashy setExperience={setExperience} />}
    </Flex>
  )
}

export default Experience