import { getWord } from "../../api/wordsApi"
import { useQuery } from "@tanstack/react-query"


import {
  Heading,
  Box,
  Flex,
  OrderedList,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa";


interface Word{
  id: number,
  sanskrit_word: string,
  english_word: string,
  etymologies: [string] | null,
  derivations: [string] | null,
  translation: {
    english_translation: string | null,
    kannada_translation: string | null,
    hindi_translation: string | null,
    detailedDescription: string | null
  } | null,
  reference_nyaya_texts: {
    source: string,
    desription: string | null
  } | null,
  synonyms: [string],
  antonyms: [string]
}

export default function WordDisplay({word}: {word: string | undefined}) {
  const {data}: {data: Word | undefined} = useQuery({
    queryKey: ["word", word],
    queryFn: () => getWord(word),
  })

  return (
    <Box py = {8} color = "primary.500">
      {data ? (
        <Flex flexDir = "column"gap = {6}>
          <Heading>{data.sanskrit_word} | {data.english_word}</Heading>
          {data.etymologies && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Etymology:</Heading>
            <OrderedList spacing={4}>
            {data.etymologies.map((etymology, index) => <ListItem key = {index}>{etymology}</ListItem>)}
            </OrderedList>
          </Box>
          )}
          {data.derivations && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Derivation:</Heading>
            <OrderedList spacing={4}>
            {data.derivations.map((derivation, index) => <ListItem key = {index}>{derivation}</ListItem>)}
            </OrderedList>
          </Box>
          )}
          {data.translation && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Translation:</Heading>
            <UnorderedList spacing={4}>
              <ListItem>English: {data.translation.english_translation}</ListItem>
              <ListItem>Kannada: {data.translation.kannada_translation}</ListItem>
              <ListItem>Hindi: {data.translation.hindi_translation}</ListItem>
            </UnorderedList>
          </Box>
          )}
          {data.reference_nyaya_texts && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Reference:</Heading>
            <UnorderedList spacing={4}>
              <ListItem>Source: {data.reference_nyaya_texts.source}</ListItem>
              <ListItem>Description: {data.reference_nyaya_texts.desription}</ListItem>
            </UnorderedList>
          </Box>
          )}
          {data.synonyms.length > 0 && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Synonyms:</Heading>
            <Flex gap = {2} wrap="wrap">
            {data.synonyms.map((synonym, index) => <NavLink style = {{textDecoration: "underline"}} to = {`/words/${synonym}`} key = {index}>{synonym}</NavLink>)}
            </Flex>
          </Box>
          )}
          {data.antonyms.length > 0 && (
            <Box>
            <Heading as = "h3" size = "md" pb = {4}>Antonyms:</Heading>
            <Flex gap = {2} wrap="wrap">
            {data.antonyms.map((antonym, index) => <NavLink style = {{textDecoration: "underline"}} to = {`/words/${antonym}`} key = {index}>{antonym}</NavLink>)}
            </Flex>
          </Box>
          )}
        </Flex>
      )
      :
      <Box textAlign="center">
        <Heading p = {4}>Word not found</Heading>
        <Button
          onClick = {() => window.history.back()}
          leftIcon = {<FaArrowAltCircleLeft/>}
          color = "primary.300"
          bg = "primary.500"
          _hover = {{bg: "primary.900"}}
          >Go Back</Button>
      </Box>
      }
    </Box>
  )
}
