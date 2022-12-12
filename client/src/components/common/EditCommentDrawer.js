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
import { EditIcon } from '@chakra-ui/icons'

import React from 'react'
import UploadImage from '../helpers/UploadImage'

const EditCommentDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

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
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit a review</DrawerHeader>
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

export default EditCommentDrawer
