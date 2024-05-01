import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"

import { searchWord } from "../../api/words.api"
import { useDebounce } from "../../hooks/useDebounce"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import Sanscript from "@indic-transliteration/sanscript"

const languages = ["English", "Sanskrit"]

export default function SearchBar({
  setSearchTermOut,
}: {
  setSearchTermOut?: React.Dispatch<React.SetStateAction<string>>
}) {
  const [langValue, setLangValue] = useState(languages[0])
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [englishSearchTerm, setEnglishSearchTerm] = useState("")
  const debouncedSearch = useDebounce(searchTerm, 300)

  const navigate = useNavigate()

  const { data: options } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => searchWord(debouncedSearch),
    enabled: debouncedSearch.length > 2,
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value == "") {
      setIsSearching(false)
      setSearchTerm("")
      setEnglishSearchTerm("")
      setSearchTermOut && setSearchTermOut("")
    } else {
      setIsSearching(true)
    }

    setEnglishSearchTerm((prev) => prev + value.charAt(value.length - 1))
    if (langValue === languages[0]) {
      setSearchTerm(value)
      setSearchTermOut && setSearchTermOut(value)
    } else {
      let transliteration = ""
      if ((e.nativeEvent as InputEvent).inputType === "deleteContentBackward") {
        setSearchTerm(value)
        const englishTransliteration = Sanscript.t(value, "devanagari", "hk")
        setEnglishSearchTerm(englishTransliteration)
      } else {
        // If any other key is pressed, transliterate the entire text
        transliteration = Sanscript.t(
          englishSearchTerm + value.charAt(value.length - 1),
          "hk",
          "devanagari"
        )
        setSearchTerm(transliteration)
        setSearchTermOut && setSearchTermOut(transliteration)
      }
    }
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === languages[0]) {
      setLangValue(languages[0])
      setSearchTerm(englishSearchTerm)
    } else {
      setLangValue(languages[1])
      const transliteration = Sanscript.t(englishSearchTerm, "hk", "devanagari")
      setSearchTerm(transliteration)
    }
  }

  return (
    <Flex
      flexDirection={"column"}
      boxShadow="lg"
      maxW="4xl"
      mx="auto"
      pos="relative"
    >
      <Flex w="100%">
        <Select
          value={langValue}
          onChange={(e) => handleSelectChange(e)}
          size={{ base: "md", md: "lg" }}
          bg="tertiary.400"
          color="background"
          roundedRight="none"
          w="200px"
          border="none"
          fontWeight="bold"
        >
          <option value={languages[0]} style={{ color: "black" }}>
            English
          </option>
          <option value={languages[1]} style={{ color: "black" }}>
            Sanskrit
          </option>
        </Select>
        <InputGroup>
          <Input
            placeholder="Search for words"
            _placeholder={{ opacity: "0.5" }}
            border="none"
            bg="white"
            type="search"
            value={searchTerm}
            size={{ base: "md", md: "lg" }}
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/words/${searchTerm}`)
                setIsSearching(false)
              }
            }}
          />
          <InputRightElement children={<FaSearch />} mt="1" opacity="0.5" />
        </InputGroup>
      </Flex>
      <Box
        w="100%"
        textAlign="center"
        bg="gray.100"
        color="primary.900"
        borderRadius="md"
        pos="absolute"
        top="48px"
      >
        {isSearching &&
          options?.map((option: [string, string], i: number) => (
            <Text
              key={i}
              p={2}
              color="black"
              _hover={{
                color: "foreground",
                bg: "tertiary.400",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`/words/${option[0]}`)
                setIsSearching(false)
              }}
            >
              {`${option[0]} | ${option[1]}`}
            </Text>
          ))}
      </Box>
    </Flex>
  )
}
