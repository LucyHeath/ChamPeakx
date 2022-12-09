import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
  Textarea
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

import avatarImg from '../images/avatar.png'

const ProfileForm = () => {
  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        alignItems={'flex-start'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={10}
          my={12}
          mx={8}
        >
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={avatarImg}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <Text>Joe Bloggs</Text>
          <FormControl id="email" isRequired>
            <FormLabel>Bio</FormLabel>
            <Textarea
              placeholder="About you..."
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500'
              }}
            >
              Cancel
            </Button>
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
    </>
  )
}

export default ProfileForm
