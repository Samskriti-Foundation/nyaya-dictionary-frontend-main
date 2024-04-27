import { Flex, HStack, Heading, Link, Spacer } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <Flex as="header" bg="foreground" boxShadow="md" p={4}>
      <Flex w={{ base: "100%", md: "80%" }} m="auto">
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          bgGradient="linear(to-l, primary.400, secondary.400)"
          bgClip="text"
        >
          <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }}>
            Nyaya Khosha
          </Link>
        </Heading>
        <Spacer />
        <HStack spacing={{ base: 4, md: 8 }} fontWeight="bold">
          <Link
            as={NavLink}
            to="/"
            _hover={{ color: "primary.500" }}
            _activeLink={{ color: "primary.400" }}
          >
            Home
          </Link>
          <Link
            as={NavLink}
            to="/about"
            _hover={{ color: "primary.500" }}
            _activeLink={{ color: "primary.400" }}
          >
            About
          </Link>
        </HStack>
      </Flex>
    </Flex>
  )
}
