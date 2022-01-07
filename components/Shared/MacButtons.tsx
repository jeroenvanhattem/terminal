import { Flex } from "@chakra-ui/react"
import Theme from "../Theme"

const MacButtons = (props: any) => {
  const { onRed, onOrange, onGreen } = props

  return (
    <Flex
      flexDir='row'
    >
      <Flex bgColor={Theme().mac.red} onClick={onRed} cursor='pointer' m={1} h='12px' w='12px' borderRadius={100} />
      <Flex bgColor={Theme().mac.orange} onClick={onOrange} cursor='pointer' m={1} h='12px' w='12px' borderRadius={100} />
      <Flex bgColor={Theme().mac.green} onClick={onGreen} cursor='pointer' m={1} h='12px' w='12px' borderRadius={100} />
    </Flex>
  )
}

export default MacButtons