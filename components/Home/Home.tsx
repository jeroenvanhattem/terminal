import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import GUI from "../Interface/GUI"
import Theme from "../Theme"
import Desktop from "./Desktop/Desktop"
import Welcome from "./Files/Welcome"

const Home = () => {
  const [active, setActive] = useState('')

  useEffect(() => {
    console.log(active)
  }, [active])

  return (
    <GUI name={active}>
      <Desktop setActive={setActive} />
      {active === 'welcome.tsx' && <Welcome setActive={setActive} />}
    </GUI>
  )
}

export default Home