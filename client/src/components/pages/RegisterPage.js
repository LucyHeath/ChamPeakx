import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  Textarea
} from '@chakra-ui/react'

import registerImg from '../images/register.jpeg'
import UploadImage from '../helpers/UploadImage'

const RegisterPage = () => {
  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  // const [error, setError] = useState('')
  // ! Executions
  //
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // send off form data to our API
      await axios.post(`${REACT_APP_BASE_URL}/register/`, formFields)
      // navigate to login page after request has completed
      navigate('/login')
    } catch (err) {
      // setError(err.response.data.message)
      // console.log(err.response.data.message)
      // setError({ ...error, [e.target.name]: '', message: '' })
    }
    console.log('form submitted')
  }

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up for an account</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="Joe"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formFields.firstName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Bloggs"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formFields.lastName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="test@test.com"
                type="email"
                name="email"
                onChange={handleChange}
                value={formFields.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="*********"
                type="password"
                name="password"
                onChange={handleChange}
                value={formFields.password}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm password</FormLabel>
              <Input
                placeholder="*********"
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                value={formFields.passwordConfirmation}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea max="500" id="desc" placeholder="About you" />
            </FormControl>
            <FormControl>
              <FormLabel>Image Upload</FormLabel>
              <Text color="gray.600" pb="1rem">
                Add a profile image
              </Text>
              <UploadImage />
            </FormControl>
            <FormErrorMessage>
              {/* {error && <small className="text-danger">{error}</small>} */}
            </FormErrorMessage>
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
                type="submit"
                onClick={() => navigateToLogin()}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={registerImg} />
      </Flex>
    </Stack>
  )
}

export default RegisterPage
