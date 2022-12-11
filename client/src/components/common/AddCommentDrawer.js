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
import UploadImage from '../helpers/UploadImage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../common/Auth'

const AddCommentDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  const [formFields, setFormFields] = useState({
    text: '',
    header: '',
    rating: '',
    images: ''
  })

  const [errors, setErrors] = useState(null)

  // ! Execution
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('GET TOKEN ->', getToken())
      const { data } = await axios.post(
        'https://breadbored-uk.herokuapp.com/breads',
        formFields,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      )
      console.log('SUCCESS ->', data._id)
      navigate(`/bread/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
      setErrors(err.response.data)
    }
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
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add a review</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <FormControl isRequired>
                <FormLabel htmlFor="username">Title</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Give your review a great title!"
                  isRequired
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea id="desc" placeholder="Write about the route..." />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Rating</FormLabel>
                <Text>How many stars out of 5 would you give this route?</Text>
                <NumberInput size="md" maxW={24} min={0} max={5}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              {/* <RangeSlider
                  aria-label={['min', 'max']}
                  colorScheme="blue"
                  defaultValue={[0, 5]}
                >
                  <RangeSliderMark value={0} mt="1" ml="0" fontSize="sm">
                    0
                  </RangeSliderMark>
                  <RangeSliderMark value={20} mt="1" ml="1" fontSize="sm">
                    1
                  </RangeSliderMark>
                  <RangeSliderMark value={40} mt="1" ml="-2.5" fontSize="sm">
                    2
                  </RangeSliderMark>
                  <RangeSliderMark value={60} mt="1" ml="-2.5" fontSize="sm">
                    3
                  </RangeSliderMark>
                  <RangeSliderMark value={80} mt="1" ml="-2.5" fontSize="sm">
                    4
                  </RangeSliderMark>
                  <RangeSliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                    5
                  </RangeSliderMark>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSliderTrack>
                </RangeSlider> */}

              <FormLabel>Image Upload</FormLabel>
              <Text color="gray.600" pb="1rem">
                Add up to 10 images
              </Text>
              <UploadImage />
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
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default AddCommentDrawer
