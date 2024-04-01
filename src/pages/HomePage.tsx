import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import WordsTable from "../components/WordDisplay/WordsTable";
import BaseLayout from "../layouts/BaseLayout";

import {
  Box
} from "@chakra-ui/react"

export default function HomePage() {
  const [searchTermOut, setSearchTermOut] = useState('')

  return (
    <BaseLayout>
      <SearchBar setSearchTermOut = {setSearchTermOut}/>
      <Box mt = "10">
        <WordsTable searchTermOut = {searchTermOut}/>
      </Box>
    </BaseLayout>
  )
  
  
}
