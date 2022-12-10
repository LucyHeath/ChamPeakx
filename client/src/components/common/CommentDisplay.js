/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  Box,
  Heading,
  Card,
  CardHeader,
  Button,
  Image,
  Text,
  CardBody,
  CardFooter,
  Stack,
  ButtonGroup,
  HStack,
  VStack
} from '@chakra-ui/react'

import commentImg from '../images/comment.jpeg'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { GiAlliedStar } from 'react-icons/gi'

const CommentDisplay = ({
  owner,
  text,
  created_at,
  id,
  first_name,
  last_name,
  header,
  rating
}) => {
  const date = new Date(created_at).toLocaleDateString()
  return (
    <Box overflowY="scroll" sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
      <Card
        // justifyContent="center"
        size="lg"
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        paddingX="50px"
        alignItems="flex-start"
      >
        <Stack width="100%">
          <CardHeader pl="50px">
            <HStack>
              <HStack pr="1rem">
                <AiOutlineCalendar />
                <Text>{date}</Text>
              </HStack>
              <HStack pl="2rem">
                <BsFillPersonFill />
                <Text>{`${owner.first_name} ${owner.last_name}`}</Text>
              </HStack>
            </HStack>
          </CardHeader>
          <CardBody display="flex">
            <HStack flexDirection="column" alignItems="left" w="80%">
              <HStack>
                <Heading size="md">{header}</Heading>
                <HStack>
                  <GiAlliedStar />
                  <Text>{`${rating} / 5 `}</Text>
                </HStack>
              </HStack>
              <Box
                overflowY="scroll"
                sx={{ '::-webkit-scrollbar': { display: 'none' } }}
              >
                <Text py="2">{text}</Text>
              </Box>
            </HStack>
            <VStack>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={commentImg}
                alt="review picture"
              />
            </VStack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                bg={'blue.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Edit Review
              </Button>
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500'
                }}
              >
                Delete Review
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}
export default CommentDisplay
