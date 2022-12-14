/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import {
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
  Textarea,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  VStack,
  Box,
  Image,
  HStack
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import { EditIcon } from '@chakra-ui/icons'
import React from 'react'
import UploadImage from '../helpers/UploadImage'
import { useState } from 'react'
import axios from 'axios'
import { getToken, isAuthenticated } from '../common/Auth'
import { REACT_APP_BASE_URL } from '../../environment'
import UploadImage1 from '../helpers/UploadImage1'
import UploadImage2 from '../helpers/UploadImage2'
import UploadImage3 from '../helpers/UploadImage3'

const EditCommentDrawer = ({
  text,
  header,
  rating,
  images,
  image1,
  image2,
  image3,
  id,
  getMountaineeringRoute
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const toast = useToast()

  // ! State
  const [formFields, setFormFields] = useState({
    header: header,
    text: text,
    rating: rating,
    images: '',
    image1: '',
    image2: '',
    image3: ''
  })

  const [errors, setErrors] = useState(null)

  // ! Execution

  const handleSubmit = async (e) => {
    const updatedFormFields =
      formFields.images &&
      formFields.image1 &&
      formFields.image2 &&
      formFields.image3 
        ? { ...formFields }
        : {
            ...formFields,
            images: images,
            image1: image1,
            image2: image2,
            image3: image3
          }
    e.preventDefault()
    try {
      console.log('This is the id-->', id)
      await axios.put(
        ` ${REACT_APP_BASE_URL}/comments/${id}/`,
        { ...updatedFormFields },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      getMountaineeringRoute()
      onClose()
      console.log(formFields)
      toast({
        title: 'Comment Updated',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    } catch (err) {
      console.log(err)
      console.log('edit fail -->', err.response.data)
      console.log('edit Form', formFields)
      setErrors(err.response.data)
    }
  }

  const handleChange = (e) => {
    const updatedFormFields = { ...formFields }
    updatedFormFields[e.target.name] = e.target.value
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleRating = (int) => {
    const updatedFormFields = { ...formFields, rating: int }
    updatedFormFields['rating'] = int
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [int]: '' })
  }

  return (
    <>
      <Button
        leftIcon={<EditIcon />}
        colorScheme="blue"
        onClick={onOpen}
        w="full"
        _hover={{
          bg: 'blue.500'
        }}
        bg={'blue.400'}
      >
        Edit Review
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit your review</DrawerHeader>
          {isAuthenticated() ? (
            <>
              <DrawerBody>
                <Stack spacing="24px">
                  <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                      <FormLabel>Title</FormLabel>
                      <Input
                        ref={firstField}
                        name="header"
                        placeholder="Give your review a great title!"
                        onChange={handleChange}
                        value={formFields.header}
                      />
                      {errors && errors.header && (
                        <Text size="xs" color="red">
                          {errors.header}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="text"
                        placeholder="Write about the route..."
                        onChange={handleChange}
                        value={formFields.text}
                      />
                      {errors && errors.text && (
                        <Text size="xs" color="red">
                          {errors.text}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Rating</FormLabel>
                      <Text>
                        How many stars out of 5 would you give this route?
                      </Text>
                      <NumberInput
                        size="md"
                        name="rating"
                        maxW={24}
                        min={0}
                        max={5}
                        onChange={handleRating}
                        value={formFields.rating}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {errors && errors.rating && (
                        <Text size="xs" color="red">
                          {errors.rating}
                        </Text>
                      )}
                    </FormControl>
                    <FormLabel mt="20px">Image Upload</FormLabel>
                    <Text color="gray.600" pb="1rem">
                      Add images here...
                    </Text>
                    <UploadImage
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                    <UploadImage1
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                    <UploadImage2
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                    <UploadImage3
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                    {errors && errors.images && (
                      <Text size="xs" color="red">
                        {errors.images}
                      </Text>
                    )}
                  </form>
                </Stack>
              </DrawerBody>
              <DrawerFooter pb="60px" borderTopWidth="1px">
                <Button size="lg" variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  type="submit"
                  onClick={handleSubmit}
                  size="lg"
                >
                  Submit
                </Button>
              </DrawerFooter>
            </>
          ) : (
            <>
              <VStack>
                <Text
                  color="blue.500"
                  fontSize="xl"
                  my="20px"
                  textAlign="center"
                >
                  Please sign in to edit a review
                </Text>
                <Box boxSize="md">
                  <Image
                    src="https://res.cloudinary.com/dq45dbeya/image/upload/v1671097524/istockphoto-1083813666-612x612_onugjr.jpg"
                    alt="mountaineers"
                  />
                </Box>
                <HStack>
                  <Button
                    m="20px"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500'
                    }}
                    as={'a'}
                    href={'/auth/login'}
                    size="lg"
                  >
                    Login
                  </Button>
                </HStack>
              </VStack>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default EditCommentDrawer
