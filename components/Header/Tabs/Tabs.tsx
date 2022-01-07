import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import Tab from "./Tab"

const Tabs = () => {
  const [active, setActive] = useState('home')
  return (
    <Flex
      align='flex-end'
    >
      <Tab active={active} setActive={setActive} name='home' />
      <Tab active={active} setActive={setActive} name='work' />
      <Tab active={active} setActive={setActive} name='about' />
    </Flex>
  )
}

export default Tabs