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
import { useGetNyayaTextReferencesQuery } from "../../api/words.api"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"

export default function NyayaTextReferenceDisplay({
  word,
  meaning_id,
}: {
  word: string
  meaning_id: number
}) {
  const { isLoading, error, data } = useGetNyayaTextReferencesQuery(
    word,
    meaning_id
  )
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {data && data.length > 0 && (
        <AccordionItem>
          <AccordionButton>
            <Heading as="span" flex="1" textAlign="left" fontSize="2xl" py={1}>
              Nyaya Text References
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="striped" textAlign="center">
              <Thead>
                <Tr>
                  <Th>Source</Th>
                  <Th>Description</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((nyaya, index) => (
                  <Tr key={index}>
                    <Td>{nyaya.source}</Td>
                    <Td>{nyaya.description}</Td>
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
