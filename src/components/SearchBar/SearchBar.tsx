import {
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Select
} from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"

import { FaSearch } from "react-icons/fa"

const languages = ["English", "Sanskrit"]

export default function SearchBar() {
  const [langValue, setLangValue] = useState(languages[0])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value
    value == languages[0] ? setLangValue(languages[0]) : setLangValue(languages[1])
  }
  
  return (
    <Flex>
      
      <InputGroup size = {{base: "md", md: "lg"}}>
        <Select
          placeholder = {langValue}
          value = {langValue}
          onChange = {(e) => handleChange(e)}
          w = "150px"
          size = "lg"
          bg = "primary.500"
          color = "primary.300"
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
        />
        <InputRightElement>
          <IconButton
            icon = {<Icon as = {FaSearch} name = "search"/>}
            aria-label="search-icon"
            color = "primary.300"
            bg = "primary.500"
            _hover = {{bg: "primary.300", color: "primary.500"}}
            />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
