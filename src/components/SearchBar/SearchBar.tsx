import {
  Flex,
  Icon,
  IconButton,
  Input,
  Select
} from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"

import { FaSearch } from "react-icons/fa"

const languages = ["English", "Sanskrit"]

export default function SearchBar() {
  const [langValue, setLangValue] = useState(languages[0])

  const [sanskritValue, setSanskritValue] = useState("")
  const [englishValue, setEnglishValue] = useState("")

  const handleTranslation = (e: ChangeEvent<HTMLInputElement>) => {
    setEnglishValue(e.target.value)
    console.log(englishValue)
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value
    value == languages[0] ? setLangValue(languages[0]) : setLangValue(languages[1])
  }

  return (
    <Flex>
      <Select
        value={langValue}
        onChange={(e) => handleChange(e)}
        size={{ base: "md", md: "lg" }}
        bg="primary.400"
        w="200px"
        color="primary.500"
        roundedRight="none"
        roundedLeft="full"
        border="none"
        fontWeight="bold"
      >
        <option value={languages[0]}>English</option>
        <option value={languages[1]}>Sanskrit</option>
      </Select>
      <Input
        placeholder="Search for words"
        _placeholder={{ color: "primary.300" }}
        border="none"
        bg="primary.500"
        color="primary.300"
        roundedRight="none"
        roundedLeft="none"
        size={{ base: "md", md: "lg" }}
        onChange={(e) => handleTranslation(e)}
      />
      <IconButton
        icon={<Icon as={FaSearch} name="search" />}
        aria-label="search-icon"
        color="primary.500"
        bg="primary.400"
        roundedRight="full"
        _hover={{ color: "primary.900" }}
        _active={{ bg: "primary.400", color: "primary.900" }}
        size={{ base: "md", md: "lg" }}
      />
    </Flex>
  )
}
