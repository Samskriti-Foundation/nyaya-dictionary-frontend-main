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
import { useGetExamplesQuery } from "../../api/words.api"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"

export default function ExampleDisplay({
  word,
  meaning_id,
}: {
  word: string
  meaning_id: number
}) {
  const { isLoading, error, data } = useGetExamplesQuery(word, meaning_id)
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {data && data.length > 0 && (
        <AccordionItem>
          <AccordionButton>
            <Heading as="span" flex="1" textAlign="left" fontSize="2xl" py={1}>
              Examples
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="striped" textAlign="center">
              <Thead>
                <Tr>
                  <Th>Example Sentence</Th>
                  <Th>Applicable Modern Context</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((example, index) => (
                  <Tr key={index}>
                    <Td>{example.example_sentence}</Td>
                    <Td>{example.applicable_modern_context}</Td>
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
