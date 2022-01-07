import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import GUI from "../Interface/GUI"
import Theme from "../Theme"
import Desktop from "./Desktop/Desktop"
import Welcome from "./Files/Welcome"
import Experience from "./Files/Experience"
import Music from "./Files/Music"
import About from "./Files/About"

const Home = () => {
  const [active, setActive] = useState('')

  useEffect(() => {
    console.log(active)
  }, [active])

  return (
    <GUI name={active}>
      <Desktop setActive={setActive} />
      {active === 'welcome.tsx' && <Welcome setActive={setActive} />}
      {active === 'music.tsx' && <Music setActive={setActive} />}
      {active === 'about.tsx' && <About setActive={setActive} />}
      {active === 'experience' && <Experience setActive={setActive} />}
    </GUI>
  )
}

export default Home