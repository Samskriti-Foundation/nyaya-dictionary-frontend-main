import {Box, Heading, Button} from "@chakra-ui/react"
import {FaArrowAltCircleLeft} from "react-icons/fa"


export default function NoWord() {
  return (
    <Box textAlign="center">
      <Heading p = {4}>Word not found</Heading>
      <Button
        onClick = {() => window.history.back()}
        leftIcon = {<FaArrowAltCircleLeft/>}
        color = "background"
        bg = "primary"
        _hover = {{bg: "secondary"}}
        >Go Back
      </Button>
    </Box>
  )
}
