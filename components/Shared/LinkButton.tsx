import {
  Flex,
  Text,
} from "@chakra-ui/react"
import { Link as LinkIcon } from "react-feather"
import Theme from "../Theme"

const LinkButton = (props: any) => {
  const { children, url } = props
  return (
    <a href={url} target='_blank' rel="noreferrer" >
      <Flex
        py={2}
        px={4}
        m={2}
        border='1px solid'
        borderRadius={15}
        borderColor={Theme()._700}
        justify='center'
        align='center'
        cursor='pointer'
      >
        <LinkIcon size={20} strokeWidth={1.5} />
        <Text ml={2} fontSize={18}>{children}</Text>
      </Flex>
    </a >
  )
}

export default LinkButton