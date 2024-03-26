import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Box,
  Text,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

import { IoIosArrowDroprightCircle } from "react-icons/io";


type Translations = {
  [key: string]: string[]
}

interface OtherDisplayProps {
  "etymologies": [string] | null,
  "derivations": [string] | null,
  "translations": Translations | null,
  "reference_nyaya_texts": {
    "source": string,
    "desription": string | null
  } | null
} 


export default function OtherDisplay(props: OtherDisplayProps | undefined) {
  return (
    <Box bg = "foreground" boxShadow = "md">
      <Accordion>

        {props?.etymologies && (
          <AccordionItem>
            <AccordionButton>
              <Heading as="span" flex='1' textAlign='left' fontSize = "2xl" py = {1}>
                Etymology
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <List spacing={3}>
                {props.etymologies.map((etymology, i) => (
                  <ListItem key = {i} py = {1} fontSize = "lg">
                    <ListIcon as={IoIosArrowDroprightCircle} color = "primary"/>
                    {etymology}
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        )}

        {props?.derivations && (
          <AccordionItem>
            <AccordionButton>
              <Heading as="span" flex='1' textAlign='left' fontSize = "2xl" py = {1}>
                Derivations
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <List spacing={3}>
              {props.derivations.map((derivation, i) => (
                <ListItem key = {i} py = {1} fontSize = "lg">
                  <ListIcon as={IoIosArrowDroprightCircle} color = "primary"/>
                  {derivation}
                </ListItem>
              ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        )}

        {props?.translations && (
          <AccordionItem>
            <AccordionButton>
              <Heading as="span" flex='1' textAlign='left' fontSize = "2xl" py = {1}>
                Translations
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Table variant = "striped" textAlign = "center">
                <Thead>
                  <Tr>
                    <Th>Language</Th>
                    <Th>Translation</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.entries(props.translations).map(([key, value], i) => (
                    <Tr key = {i}>
                      <Td>{key}</Td>
                      <Td>
                        <Flex gap = {2}>
                          {value.map((translation, j) => (
                            <Text key = {j}>{translation}</Text>
                          ))}
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </Box>
  )
}
