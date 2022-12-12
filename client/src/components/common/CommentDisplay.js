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
import EditCommentDrawer from './EditCommentDrawer'
import { DeleteIcon } from '@chakra-ui/icons'
// import axios from 'axios'
// import { REACT_APP_BASE_URL } from '../../environment'
// import { getToken } from '../common/Auth'

const CommentDisplay = ({ owner, text, created_at, header, rating, id }) => {
  const date = new Date(created_at).toLocaleDateString()

  // const deleteComment = async (commentId) => {
  //   try {
  //     console.log('commentId -> ', commentId)
  //     const response = await axios.delete(
  //       `${REACT_APP_BASE_URL}/comments/${commentId}/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${getToken()}`
  //         }
  //       }
  //     )
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <Box overflowY="scroll" sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
      <Card
        // justifyContent="center"
        size="lg"
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
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
                <Text>{owner.username}</Text>
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
              <EditCommentDrawer />
              <Button
                leftIcon={<DeleteIcon />}
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500'
                }}
                onClick={() => deleteComment(id)}
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
