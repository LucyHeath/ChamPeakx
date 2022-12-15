import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Tooltip,
  Heading,
  Text,
  HStack,
  chakra,
  Box
} from '@chakra-ui/react'

import { GiMountainClimbing } from 'react-icons/gi'
import { GiMuscleUp } from 'react-icons/gi'
import { BsHouse } from 'react-icons/bs'

const ClimbingGradesAccordian = ({ mountaineeringRoute }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <HStack
              justifyContent="space-evenly"
              as="span"
              flex="1"
              textAlign="left"
            >
              <HStack>
                <Tooltip label="Grade" fontSize="md">
                  <Heading display="flex" size="md">
                    <chakra.span pr="30px">
                      <GiMountainClimbing />
                    </chakra.span>
                    {mountaineeringRoute.grade}
                  </Heading>
                </Tooltip>
              </HStack>
              <HStack>
                <Tooltip label="Difficulty Level" fontSize="md">
                  <Heading display="flex" size="md">
                    <chakra.span pr="30px">
                      <GiMuscleUp />
                    </chakra.span>
                    {mountaineeringRoute.difficulty.map((d) => (
                      <Text fontSize="lg" pl="1rem" key={d.name}>
                        {d.name}
                      </Text>
                    ))}
                  </Heading>
                </Tooltip>
              </HStack>
              <HStack>
                <Tooltip
                  label="Refuge or Facillities Available on Route "
                  fontSize="md"
                >
                  <Heading fontSize="md">
                    <chakra.span>
                      <BsHouse />
                    </chakra.span>
                  </Heading>
                </Tooltip>
                {mountaineeringRoute.hut === 'true' ? (
                  <Heading size="md">Hut on Route</Heading>
                ) : (
                  <Heading size="md">No Hut</Heading>
                )}
              </HStack>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={4} pb={4}>
          <VStack>
            <Box
              bgImage="https://res.cloudinary.com/dq45dbeya/image/upload/v1671120729/Screenshot_2022-12-15_at_16.12.03_pcbgiz.png"
              bgPosition="center"
              bgRepeat="no-repeat"
              h={['100px', '200px', '300px', '550px']}
              w={['30px', '200px', '300px', '800px']}
              borderRadius="md"
              alt="table of climbing grades"
            ></Box>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default ClimbingGradesAccordian
