import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { useGetDerivationsQuery } from "../../api/words.api"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"

export default function DerivationDisplay({
  word,
  meaning_id,
}: {
  word: string
  meaning_id: number
}) {
  const { error, isLoading, data } = useGetDerivationsQuery(word, meaning_id)

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      {data && data.length > 0 && (
        <AccordionItem>
          <AccordionButton>
            <Heading as="span" flex="1" textAlign="left" fontSize="2xl" py={1}>
              Derivations
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              {data.map((derivation, index) => (
                <ListItem key={index} py={1} fontSize="lg">
                  <ListIcon as={IoIosArrowDroprightCircle} />
                  {derivation.derivation}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      )}
    </>
  )
}
