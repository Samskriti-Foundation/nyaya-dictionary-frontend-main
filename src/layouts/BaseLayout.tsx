import { Box, IconButton } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";

import { FaArrowAltCircleUp } from "react-icons/fa";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box minH="100vh" bg = "background">
      <Box pos = "sticky" top = "0" zIndex={200}>
        <Navbar />
      </Box>
      <Box maxW="4xl" as = "main" mx="auto" p={4}>
        <SearchBar />
        {children}
      </Box>
      <Box
        pos = "fixed"
        bottom = "4"
        right = "4"
        display = {{base: "block", md: "none"}}
      >
        <IconButton
          icon = {<FaArrowAltCircleUp/>}
          aria-label="Go Back"
          bg = "primary"
          color = "background"
          _hover = {{bg: "secondary"}}
          onClick = {() => window.scrollTo({top: 0, behavior: 'smooth'})}
          />
      </Box>
    </Box>
  );
}
