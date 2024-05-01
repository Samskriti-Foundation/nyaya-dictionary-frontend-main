import {
  Text,
  Flex,
  Box,
  Heading,
  Select,
  Spacer,
  Button,
  Divider,
  Accordion,
} from "@chakra-ui/react"
import { useGetWordQuery } from "../../api/words.api"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import MeaningDisplay from "./MeaningDisplay"
import { useEffect, useState } from "react"
import EtymologyDisplay from "./EtymologyDisplay"
import DerivationDisplay from "./DerivationDisplay"
import TranslationDisplay from "./TranslationDisplay"
import ExampleDisplay from "./ExampleDisplay"
import NyayaTextReferenceDisplay from "./NyayaTextReferenceDisplay"

export default function WordDisplay({ word }: { word: string }) {
  const [meaningId, setMeaningId] = useState(1)
  const { isLoading, error, data } = useGetWordQuery(word)

  useEffect(() => {
    setMeaningId(data?.meaning_ids[0] || 1)
  }, [data?.meaning_ids])

  return (
    <Box mt="8" bg="white" boxShadow="md" p={4} w="80%" mx="auto" rounded="md">
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {data ? (
        <Box>
          <Heading textAlign="center" fontSize="4xl" fontWeight="bold">
            {data.sanskrit_word} | {data.english_transliteration}
          </Heading>
          <Spacer h="8" />
          <Flex
            justifyContent="center"
            alignItems="center"
            w="50%"
            mx="auto"
            wrap="wrap"
            gap="2"
          >
            <Text fontWeight="bold" fontSize="lg">
              Select Meaning:
            </Text>
            <Select
              w="240px"
              value={meaningId}
              onChange={(e) => setMeaningId(Number(e.target.value))}
            >
              {data.meaning_ids?.map((meaning_id, index) => (
                <option key={meaning_id} value={meaning_id}>
                  {`Meaning ${index + 1}`}
                </option>
              ))}
            </Select>
          </Flex>
          <Spacer h="2" />
          <MeaningDisplay word={word} meaning_id={meaningId} />
          <Divider />
          <Accordion gap="2">
            <EtymologyDisplay word={word} meaning_id={meaningId} />
            <Divider />
            <DerivationDisplay word={word} meaning_id={meaningId} />
            <Divider />
            <TranslationDisplay word={word} meaning_id={meaningId} />
            <Divider />
            <ExampleDisplay word={word} meaning_id={meaningId} />
            <Divider />
            <NyayaTextReferenceDisplay word={word} meaning_id={meaningId} />
          </Accordion>
        </Box>
      ) : (
        <Box textAlign="center">
          <Heading p={4}>Word not found</Heading>
          <Button
            onClick={() => window.history.back()}
            leftIcon={<FaArrowAltCircleLeft />}
            color="background"
            bg="primary.400"
            _hover={{ bg: "primary.500" }}
          >
            Go Back
          </Button>
        </Box>
      )}
    </Box>
  )
}
