import { Box } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar/SearchBar"

export default function HomePage() {
  return (
    <Box minH = "calc(100vh - 60.8px)" bg = "background">
      <Box
        maxW = "800px"
        m = "auto"
				p = {8}
        >
      	<SearchBar/>
    	</Box>
    </Box>
  )
}
