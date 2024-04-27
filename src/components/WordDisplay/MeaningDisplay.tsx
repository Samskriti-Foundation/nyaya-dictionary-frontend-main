import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import {
  useGetAntonymsQuery,
  useGetMeaningQuery,
  useGetSynonymsQuery,
} from "../../api/words.api"
import ErrorMessage from "../ErrorMessage"
import LoadingSpinner from "../LoadingSpinner"
import { NavLink } from "react-router-dom"

export default function MeaningDisplay({
  word,
  meaning_id,
}: {
  word: string
  meaning_id: number
}) {
  const { isLoading, error, data } = useGetMeaningQuery(word, meaning_id)

  const {
    isLoading: isSynonymsLoading,
    error: synonymsError,
    data: synonymsData,
  } = useGetSynonymsQuery(word, meaning_id)

  const {
    isLoading: isAntonymsLoading,
    error: antonymsError,
    data: antonymsData,
  } = useGetAntonymsQuery(word, meaning_id)

  return (
    <Box p={4}>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {isSynonymsLoading && <LoadingSpinner />}
      {synonymsError && <ErrorMessage error={synonymsError.message} />}
      {isAntonymsLoading && <LoadingSpinner />}
      {antonymsError && <ErrorMessage error={antonymsError.message} />}
      <Heading size="lg" py="2">
        Meaning
      </Heading>
      <Text>{data?.meaning}</Text>
      <Spacer h="2" />
      <Text pt={4} pb={2} fontWeight="bold">
        Synonyms:
      </Text>
      <Flex gap={4} flexWrap="wrap">
        {synonymsData && synonymsData.length > 0 ? (
          synonymsData.map((synonym, index) => (
            <NavLink
              style={{ textDecoration: "underline" }}
              to={`/words/${synonym.synonym}`}
              key={index}
            >
              {synonym.synonym}
            </NavLink>
          ))
        ) : (
          <Text>No synonyms</Text>
        )}
      </Flex>
      <Spacer h="2" />
      <Text pt={4} pb={2} fontWeight="bold">
        Antonyms:
      </Text>
      <Flex gap={4} flexWrap="wrap">
        {antonymsData && antonymsData.length > 0 ? (
          antonymsData.map((antonym, index) => (
            <NavLink
              style={{ textDecoration: "underline" }}
              to={`/words/${antonym.antonym}`}
              key={index}
            >
              {antonym.antonym}
            </NavLink>
          ))
        ) : (
          <Text>No antonyms</Text>
        )}
      </Flex>
    </Box>
  )
}
