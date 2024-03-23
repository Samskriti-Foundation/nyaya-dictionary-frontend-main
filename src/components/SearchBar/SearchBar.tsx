import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  Select,
  Text
} from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"

import { FaSearch } from "react-icons/fa"

const languages = ["English", "Sanskrit"]

export default function SearchBar() {
  const [langValue, setLangValue] = useState(languages[0])

  const animals = ["Tiger", "Elephant", "Dog", "Cat", "Snake", "Horse"]

  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: any) => {
    setIsSearching(!isSearching)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value
    value == languages[0] ? setLangValue(languages[0]) : setLangValue(languages[1])
  }
  
  return (
    <Flex flexDirection={"column"}>
      <Flex w = "100%">
        <Select
          value = {langValue}
          onChange = {(e) => handleSelectChange(e)}
          size = {{base: "md", md: "lg"}}
          bg = "primary.400"
          w = "200px"
          color = "primary.500"
          roundedRight = "none"
          roundedLeft = "full"
          border = "none"
          fontWeight="bold"
          >
            <option value={languages[0]}>English</option>
            <option value={languages[1]}>Sanskrit</option>
        </Select>
        <Input
          placeholder = "Search for words"
          _placeholder={{color: "primary.300"}}
          border = "none"
          bg = "primary.500"
          color = "primary.300"
          roundedRight = "none"
          roundedLeft = "none"
          size = {{base: "md", md: "lg"}}
          onChange = {(e) => handleSearch(e)}
        />
        <IconButton
          icon = {<Icon as = {FaSearch} name = "search"/>}
          aria-label="search-icon"
          color = "primary.500"
          bg = "primary.400"
          roundedRight = "full"
          _hover = {{color: "primary.900"}}
          _active = {{bg: "primary.400", color: "primary.900"}}
          size = {{base: "md", md: "lg"}}
        />
      </Flex>
      <Box
        w = "100%"
        textAlign= "center"
        bg = "primary.400"
        color = "primary.900"
        >
        {isSearching && animals.map((ani, i) => (
          <Text
            key = {i}
            p = {1}
            borderBottom={"1px solid"}
            borderBottomColor = {"primary.500"}
            _hover = {{color: "primary.300", bg : "primary.500"}}
            >{ani}
          </Text>
          )
        )}
      </Box>
    </Flex>
  )
}
