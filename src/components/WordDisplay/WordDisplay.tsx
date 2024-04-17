import { getWord } from "../../api/wordsApi"
import { useQuery } from "@tanstack/react-query"

import {
  Flex,
} from "@chakra-ui/react"

import NoWord from "./NoWord";
import MainWord from "./MainWord";
import OtherDisplay from "./OtherDisplay";

type Translations = {
  [key: string]: string[];
}

interface Word{
  id: number,
  sanskrit_word: string,
  english_transliteration: string,
  etymologies: [string] | null,
  derivations: [string] | null,
  translations: Translations,
  detailed_description: string | null,
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
    <Flex flexDirection="column" gap = {4} py = {8}>
      {data ?
        <>
          <MainWord
            sanskrit_word = {data.sanskrit_word}
            english_transliteration = {data.english_transliteration}
            detailed_description = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            synonyms = {data.synonyms}
            antonyms = {data.antonyms}
            />
            <OtherDisplay {...data}/>
        </>
        :
        <NoWord/>
      }
    </Flex>
  )
}
