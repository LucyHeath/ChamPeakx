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
  ButtonGroup,
  HStack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  Tooltip,
  SimpleGrid,
  chakra,
  VStack,
  Avatar,
  Wrap,
  Center,
  WrapItem
} from '@chakra-ui/react'
import { AiOutlineCalendar } from 'react-icons/ai'
import EditCommentDrawer from './EditCommentDrawer'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
import { getToken } from '../common/Auth'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import React from 'react'
import StarRating from './StarRating'
import { isOwner } from '../common/Auth'
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

  console.log('this is owner -- >', owner)
  return (
    <>
      <Box mx="200px" alignItems="center" size="lg">
        <HStack pb="10px">
          <ButtonGroup spacing="2">
            {isOwner ? (
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
            <CardHeader display="flex" flexDirection="column">
              <VStack>
                <HStack>
                  <AiOutlineCalendar />
                  <Text size="md">{date}</Text>
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
              p="0"
              display="flex"
              flexDirection="column"
              alignItems="left"
              w="80%"
            >
              <HStack>
                <Heading>{header}</Heading>
                <StarRating rating={rating} />
              </HStack>
              <HStack>
                <Text>{`"${text}"`}</Text>
              </HStack>
            </CardBody>
            <CardFooter></CardFooter>
          </HStack>
        </Card>
      </Box>
      <Box mx="200px" mb="40px" alignItems="center" size="lg">
        <Card
          direction="column"
          // paddingX="300px"
          alignItems="centre"
          size="md"
          border="1px"
          borderColor="lightgrey"
          boxShadow="xl"
          p="6"
          rounded="md"
          mt="20px"
        >
          <SimpleGrid
            display="flex"
            justifyContent="center"
            // minChildWidth="100px"
            spacing="30px"
            columns={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 4 }}
          >
            {images ? (
              <>
                {!images ? (
                  <></>
                ) : (
                  <Box
                    bgImage={images}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image1 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image1}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image2 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image2}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image3 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image3}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
              </>
            ) : (
              <></>
            )}
          </SimpleGrid>
        </Card>
      </Box>
    </>
  )
}
export default CommentDisplay
