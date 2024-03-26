import {
  Box,
  Heading,
  Button
} from "@chakra-ui/react"


import {FaArrowAltCircleLeft} from "react-icons/fa"
import BaseLayout from "../layouts/BaseLayout"

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <Box textAlign="center" p = {8}>
      <Heading p = {4}>404: Page Not Found</Heading>
      <Button
        onClick = {() => window.history.back()}
        leftIcon = {<FaArrowAltCircleLeft/>}
        color = "background"
        bg = "primary"
        _hover = {{bg: "secondary"}}
        >Go Back
      </Button>
    </Box>
    </BaseLayout>
  )
}
