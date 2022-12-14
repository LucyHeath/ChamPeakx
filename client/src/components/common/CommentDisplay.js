/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  Box,
  Heading,
  Card,
  CardHeader,
  Button,
  Text,
  CardBody,
  CardFooter,
  ButtonGroup,
  HStack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  SimpleGrid,
  VStack,
  Avatar,
  chakra
} from '@chakra-ui/react'
import { AiOutlineCalendar } from 'react-icons/ai'
import EditCommentDrawer from './EditCommentDrawer'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
import { getToken, getPayload } from '../common/Auth'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import React from 'react'
import StarRating from './StarRating'
import ImageDisplay from './ImageDisplay'
// import { isOwner } from '../common/Auth'

const CommentDisplay = ({
  owner,
  text,
  created_at,
  header,
  rating,
  id,
  images,
  image1,
  image2,
  image3,
  getMountaineeringRoute
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const date = new Date(created_at).toLocaleDateString()

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
    <>
      <Box mx="200px" alignItems="center" size="lg">
        <HStack pb="10px">
          <ButtonGroup spacing="2">
            {getPayload().sub === owner.id ? (
              <>
                <EditCommentDrawer
                  id={id}
                  header={header}
                  text={text}
                  images={images}
                  image1={image1}
                  image2={image2}
                  image3={image3}
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
              </>
            ) : (
              <></>
            )}
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
        </HStack>
        <Card
          direction="column"
          paddingX="300px"
          alignItems="flex-start"
          size="md"
          border="1px"
          borderColor="lightgrey"
          boxShadow="xl"
          p="0px"
          rounded="md"
        >
          <HStack
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
          >
            <CardHeader p="30px" display="flex" flexDirection="column">
              <VStack>
                <HStack pb="20px">
                  <AiOutlineCalendar />
                  <Text fontSize="md">{date}</Text>
                </HStack>
                <HStack>
                  <Avatar bg="blue.500" size="xl" />
                </HStack>
                <Text as="b" fontSize="lg">
                  {owner.username}
                </Text>
              </VStack>
            </CardHeader>
            <CardBody
              px="30px"
              pb="30px"
              display="flex"
              flexDirection="column"
              alignItems="left"
              w="80%"
            >
              <VStack pl="20px" alignItems="left">
                <chakra.span size="2">
                  <StarRating rating={rating} />
                </chakra.span>
                <Heading>{header}</Heading>
                <Text>{`"${text}"`}</Text>
              </VStack>
            </CardBody>
            <CardFooter></CardFooter>
          </HStack>
        </Card>
      </Box>
      <ImageDisplay images={images} image1={image1} image2={image2} image3={image3}/>
    </>
  )
}
export default CommentDisplay
