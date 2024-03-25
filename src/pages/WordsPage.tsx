import { Box } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar/SearchBar"
import {useParams} from "react-router-dom"
import WordDisplay from "../components/WordDisplay/WordDisplay";

export default function WordsPage() {
  const {word} = useParams()

  return (
    <Box minH = "calc(100vh - 60.8px)" bg = "background">
      <Box
        maxW = "800px"
        m = "auto"
				p = {8}
        >
      	<SearchBar/>
        <WordDisplay word = {word}/>
    	</Box>
    </Box>
  )
}
