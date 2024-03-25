import {
    Flex,
    HStack,
    Heading,
    Link,
    Spacer,
    Box
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      as = "nav"
      bg = "foreground"
      boxShadow = "lg"
      p = {4}
      >
      <Flex
        w = {{base: "100%", md: "80%"}}
        m = "auto"
        >
        <Heading 
          fontSize={{base: "xl", md: "2xl"}}
          bgGradient='linear(to-l, primary, secondary)'
          bgClip='text'
          ><Link 
            as = {NavLink}
            to = "/"
            _hover = {{textDecoration: "none"}}
            >Nyaya Khosha
          </Link>
        </Heading>
        <Spacer/>
        <HStack
          spacing = {{base: 4, md: 8}}
          fontWeight= "bold"
          >
          <Link
            as = {NavLink}
            to = "/"
            _hover = {{color: "secondary"}}
            _activeLink = {{color: "primary"}}
            >Home
          </Link>
          <Link
            as = {NavLink}
            to = "/about"
            _hover = {{color: "secondary"}}
            _activeLink = {{color: "primary"}}
            >About
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}