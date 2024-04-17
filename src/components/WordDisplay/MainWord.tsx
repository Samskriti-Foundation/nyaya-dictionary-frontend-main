import {
  Box,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

interface MainWordProps{
  sanskrit_word: string,
  english_transliteration: string,
  detailed_description: string | null,
  synonyms: [string],
  antonyms: [string]
}

export default function MainWord(props: MainWordProps) {
  return (
    <Box bg = "foreground" boxShadow = "md" p = {4} gap = {4}>
      <Heading
        fontSize = {{base: "2xl", md: "3xl"}}
        textAlign = "center"
        py = {2}
        >{`${props.sanskrit_word} | ${props.english_transliteration}`}
      </Heading>
      <Text py = {2}>{props.detailed_description}</Text>
      <Text pt = {4} pb = {2} fontWeight = "bold">Synonyms:</Text>
      <Flex gap = {4} flexWrap = "wrap">
        {props.synonyms?.map((synonym, i) => (
          <NavLink
            style = {{textDecoration: "underline"}}
            to = {`/words/${synonym}`}
            key = {i}>{synonym}
          </NavLink>
        ))}
      </Flex>
      <Text pt = {4} pb = {2} fontWeight = "bold">Antonyms:</Text>
      <Flex gap = {4} flexWrap = "wrap">
        {props.antonyms?.map((antonym, i) => (
          <NavLink
            style = {{textDecoration: "underline"}}  
            to = {`/words/${antonym}`}
            key = {i}>
            {antonym}
          </NavLink>
        ))}
      </Flex>
    </Box>
  )
}
