import { Box } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar/SearchBar";

export default function HomePage() {
  return (
    <Box h = "calc(100vh - 60.8px)" bg = "primary.300">
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
