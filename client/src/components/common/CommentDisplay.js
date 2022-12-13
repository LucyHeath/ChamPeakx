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
  VStack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  Tooltip,
  AspectRatio
} from '@chakra-ui/react'

import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import EditCommentDrawer from './EditCommentDrawer'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
import { getToken } from '../common/Auth'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import React from 'react'
import StarRating from './StarRating'
const CommentDisplay = ({
  owner,
  text,
  created_at,
  header,
  rating,
  id,
  images,
  getMountaineeringRoute
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const date = new Date(created_at).toLocaleDateString()

  // const dateOrderedComments = () => {
  //   orderedDates = new Date(created_at).sort((a, b) =>
  //     new Date(a) < new Date(b) ? 1 : -1
  //   )
  //   displayDate = orderedDates.toLocaleDateString()
  // }
  // dateOrderedComments()

  const deleteComment = async (commentId) => {
    try {
      console.log('commentId -> ', commentId)
      const response = await axios.delete(
        `${REACT_APP_BASE_URL}/comments/${commentId}/`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      getMountaineeringRoute()
    } catch (err) {
      console.log(err)
    }
  }

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
                <StarRating rating={rating} />
              </HStack>
              <Box
                overflowY="scroll"
                sx={{ '::-webkit-scrollbar': { display: 'none' } }}
              >
                <Text py="2">{text}</Text>
              </Box>
            </HStack>
            <VStack>
              {!images ? (
                <Text>No Pretty Pictures</Text>
              ) : (
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={images}
                  alt="review picture"
                />
              )}
            </VStack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <EditCommentDrawer
                id={id}
                header={header}
                text={text}
                images={images}
                rating={rating}
                getMountaineeringRoute={getMountaineeringRoute}
              />
              <Button
                leftIcon={<DeleteIcon />}
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500'
                }}
                onClick={onOpen}
              >
                Delete Review
              </Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />
                <AlertDialogContent>
                  <AlertDialogHeader>Discard Review?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Are you <em>sure</em> you want to delete this review?
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button
                      onClick={() => deleteComment(id)}
                      colorScheme="red"
                      ml={3}
                    >
                      Yes
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}
export default CommentDisplay
