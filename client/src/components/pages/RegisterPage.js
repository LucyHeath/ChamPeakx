/* eslint-disable no-unused-vars */
// const RegisterPage = () => {
//   return (
//     <div>
//       <h1>RegisterPage</h1>
//     </div>
//   )
// }
// export default RegisterPage

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from '@chakra-ui/react'

import registerImg from '../images/register.jpeg'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up for an account</Heading>
          <FormControl id="firstName" isRequired>
            <FormLabel>First name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Last name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password confirmation</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            ></Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={registerImg} />
      </Flex>
    </Stack>
  )
}
