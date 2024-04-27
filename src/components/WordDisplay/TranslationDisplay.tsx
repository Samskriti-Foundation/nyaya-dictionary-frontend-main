import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useGetTranslationsQuery } from "../../api/words.api"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"

export default function TranslationDisplay({
  word,
  meaning_id,
}: {
  word: string
  meaning_id: number
}) {
  const { isLoading, error, data } = useGetTranslationsQuery(word, meaning_id)
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {data && data.length > 0 && (
        <AccordionItem>
          <AccordionButton>
            <Heading as="span" flex="1" textAlign="left" fontSize="2xl" py={1}>
              Translations
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="striped" textAlign="center">
              <Thead>
                <Tr>
                  <Th>Language</Th>
                  <Th>Translation</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((translation, index) => (
                  <Tr key={index}>
                    <Td>{translation.language}</Td>
                    <Td>{translation.translation}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      )}
    </>
  )
}
