/* eslint-disable no-unused-vars */
import {
  Box,
  Stack,
  Flex,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
  Textarea,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark
} from '@chakra-ui/react'

import { useState } from 'react'

const CommentForm = () => {
  const [sliderValue, setSliderValue] = useState([30, 80])

  return (
    <>
      <Box>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Leave a review</Heading>
                <FormControl>
                  <FormLabel>Title: </FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Review: </FormLabel>
                  <Textarea
                    placeholder="Share your experience..."
                    _placeholder={{ color: 'gray.500' }}
                  />
                </FormControl>
                <RangeSlider
                  aria-label={['min', 'max']}
                  colorScheme="blue"
                  defaultValue={[0, 5]}
                >
                  <RangeSliderMark value={0} mt="1" ml="0" fontSize="sm">
                    0
                  </RangeSliderMark>
                  <RangeSliderMark value={1} mt="1" ml="1" fontSize="sm">
                    1
                  </RangeSliderMark>
                  <RangeSliderMark value={2} mt="1" ml="-2.5" fontSize="sm">
                    2
                  </RangeSliderMark>
                  <RangeSliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                    3
                  </RangeSliderMark>
                  <RangeSliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                    4
                  </RangeSliderMark>
                  <RangeSliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                    5
                  </RangeSliderMark>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSliderTrack>
                </RangeSlider>
                <Text>Image Upload</Text>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  ></Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                      bg: 'blue.500'
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default CommentForm
