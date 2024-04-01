import {
  Box,
  Flex,
  Button,
  Input,
  Select,
  Text
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"

import { FaSearch } from "react-icons/fa"
import { searchWord } from "../../api/wordsApi"

import { useDebounce } from "../../hooks/useDebounce"

import { useNavigate } from "react-router-dom"

const languages = ["English", "Sanskrit"]

export default function SearchBar({setSearchTermOut}: {setSearchTermOut?: React.Dispatch<React.SetStateAction<string>>}) {
  const [langValue, setLangValue] = useState(languages[0])
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const navigate = useNavigate()

  const {data: options} = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => searchWord(debouncedSearch),
    enabled: debouncedSearch.length > 2
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value == "" ? setIsSearching(false) : setIsSearching(true)
    setSearchTerm(e.target.value)
    setSearchTermOut && setSearchTermOut(e.target.value)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value
    value == languages[0] ? setLangValue(languages[0]) : setLangValue(languages[1])
  }

  return (
    <Flex flexDirection={"column"} boxShadow="lg" maxW = "4xl" mx = "auto" pos = "relative">
      <Flex w = "100%">
        <Select
          value = {langValue}
          onChange = {(e) => handleSelectChange(e)}
          size = {{base: "md", md: "lg"}}
          bg = "primary"
          color = "background"
          roundedRight = "none"
          w = "200px"
          border = "none"
          fontWeight="bold"
          >
            <option value={languages[0]} style = {{color: "black"}}>English</option>
            <option value={languages[1]} style = {{color: "primary"}}>Sanskrit</option>
        </Select>
        <Input
          placeholder = "Search for words"
          _placeholder={{color: "primary", opacity: "0.5"}}
          border = "none"
          bg = "foreground"
          color = "primary"
          size = {{base: "md", md: "lg"}}
          onChange = {(e) => handleSearch(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/words/${searchTerm}`)
              setIsSearching(false)
            }
          }}
        />
        <Button
          aria-label="search-icon"
          color = "background"
          roundedLeft = "none"
          bg = "primary"
          _hover = {{bg: "secondary"}}
          _active = {{bg: "primary.400", color: "primary.900"}}
          size = {{base: "md", md: "lg"}}
          onClick = {() => {navigate(`/words/${searchTerm}`); setIsSearching(false)}}
        ><FaSearch size = "28px"/></Button>
      </Flex>
      <Box
        w = "100%"
        textAlign= "center"
        bg = "primary.400"
        color = "primary.900"
        borderRadius = "md"
        pos = "absolute"
        top = "48px"
        >
        {isSearching && options?.map((option: [string, string], i: number) => (
          <Text
            key = {i}
            p = {2}
            bg = "#E2E8F0"
            color = "primary"
            _hover = {{color: "foreground", bg : "secondary", cursor: "pointer"}}
            onClick = {() => {navigate(`/words/${option[0]}`); setIsSearching(false)}}
            >{`${option[0]} | ${option[1]}`}
          </Text>
          )
        )}
      </Box>
    </Flex>
  )
}
