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
  NumberDecrementStepper
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getToken, isAuthenticated } from '../common/Auth'
import { REACT_APP_BASE_URL } from '../../environment'
import UploadImage from '../helpers/UploadImage'

const AddCommentDrawer = ({ mountaineeringRoute, setMountaineeringRoute }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  // ! Location Variables
  const { mountaineeringRouteId } = useParams()

  // ! State
  const [formFields, setFormFields] = useState({
    header: '',
    text: '',
    rating: '',
    images: ''
  })

  const [errors, setErrors] = useState(null)

  // ! Execution
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        ` ${REACT_APP_BASE_URL}/comments/`,
        { ...formFields, mountaineering_route: mountaineeringRouteId },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      setFormFields({ text: '', header: '', images: '', rating: '' })
      const { data } = await axios.get(
        `${REACT_APP_BASE_URL}/mountaineering_routes/${mountaineeringRouteId}/`
      )
      console.log({ data })
      setMountaineeringRoute(data)
      onClose()
      console.log(formFields)
    } catch (err) {
      console.log(err)
      console.log('hello ->', err.response.data)
      console.log('Form-<', formFields)
      setErrors(err.response.data)
    }
  }

  const handleChange = (e) => {
    console.log('This i e-> ', e)
    const updatedFormFields = { ...formFields }
    updatedFormFields[e.target.name] = e.target.value
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [e.target.name]: '', message: '' })
  }

  const handleRating = (int) => {
    const updatedFormFields = { ...formFields, rating: int }
    updatedFormFields['rating'] = int
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [int]: '', message: '' })
  }

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="blue"
        onClick={onOpen}
        bg={'blue.400'}
        color={'white'}
        _hover={{
          bg: 'blue.500'
        }}
      >
        Add Review
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
          <DrawerHeader borderBottomWidth="1px">Add a review</DrawerHeader>
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
                        <Text size="xs" color="tomato">
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
                        <Text size="xs" color="tomato">
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
                        <Text size="xs" color="tomato">
                          {errors.header}
                        </Text>
                      )}
                    </FormControl>
                    <FormLabel>Image Upload</FormLabel>
                    <Text color="gray.600" pb="1rem">
                      Add images here...
                    </Text>
                    <UploadImage
                      formFields={formFields}
                      setFormFields={setFormFields}
                    />
                    {errors && errors.images && (
                      <Text size="xs" color="tomato">
                        {errors.images}
                      </Text>
                    )}
                  </form>
                </Stack>
              </DrawerBody>
              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
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
                >
                  Submit
                </Button>
              </DrawerFooter>
            </>
          ) : (
            <>
              <Text>Please Register or Login to leave a review</Text>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                as={'a'}
                href={'/auth/register'}
              >
                Register
              </Button>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                as={'a'}
                href={'/auth/login'}
              >
                Login
              </Button>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AddCommentDrawer
