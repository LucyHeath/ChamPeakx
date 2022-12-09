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
  HStack
} from '@chakra-ui/react'

import commentImg from '../images/comment.jpeg'

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
        justifyContent="center"
        size="sm"
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        paddingX="50px"
      >
        <Stack>
          <CardHeader>
            <HStack>
              <Text pt="1rem">{date}</Text>
              <Text pt="1rem">{`Written by ${owner.first_name} ${owner.last_name}`}</Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Heading pb="1rem" size="md">
              {header}
            </Heading>
            <Text pt="1rem">{`Route rating = ${rating} / 5 `}</Text>
            <Box
              overflowY="scroll"
              sx={{ '::-webkit-scrollbar': { display: 'none' } }}
            >
              <Text py="2">{text}</Text>
            </Box>
          </CardBody>
          <HStack>
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={commentImg}
              alt="review picture"
            />
          </HStack>
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
