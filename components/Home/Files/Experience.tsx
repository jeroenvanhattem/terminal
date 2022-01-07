import { useEffect, useState } from "react"
import {
  Flex,
  Wrap,
  Text,
} from "@chakra-ui/layout"
import Icon from "../Desktop/Icon"
import Folder from "../../Interface/Folder"
import Dashy from "../Experience/Dashy"
import Foodsy from "../Experience/Foodsy"

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
        <Wrap>
          <Icon setActive={setExperience} name='dashy.tsx'>
            <Text onClick={() => setExperience('dashy')}>Dashy</Text>
          </Icon>
          <Icon setActive={setExperience} name='foodsy.tsx'>
            <Text onClick={() => setExperience('foodsy')}>Foodsy</Text>
          </Icon>
        </Wrap>
      </Folder>
      {experience === 'dashy.tsx' && <Dashy setExperience={setExperience} />}
      {experience === 'foodsy.tsx' && <Foodsy setExperience={setExperience} />}
    </Flex>
  )
}

export default Experience