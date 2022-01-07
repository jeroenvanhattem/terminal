import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Theme from "../../Theme"

const Tab = (props: any) => {
  const { active, setActive, onClick, name } = props
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (active === name) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [active, name])

  return (
    <Flex
      w={56}
      borderTop={isActive ? `4px solid` : 'unset'}
      borderColor={Theme().pink}
      h={isActive ? 10 : 10}
      onClick={() => setActive(name)}
      cursor='pointer'
      color='#ccc'
    >
      <Text>{name}</Text>
    </Flex>
  )
}

export default Tab