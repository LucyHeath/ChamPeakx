import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
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
  Textarea
} from '@chakra-ui/react'
import registerImg from '../images/register.jpeg'
import UploadImage from '../helpers/UploadImage'

const RegisterPage = () => {
  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  const [formFields, setFormFields] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    bio: '',
    profile_image: ''
  })
  // const [error, setError] = useState('')

  // ! Executions
  const handleSubmit = async (e) => {
    console.log('we called the handle submit ')
    e.preventDefault()
    try {
      await axios.post(`${REACT_APP_BASE_URL}/auth/register/`, formFields)
      console.log('form submitted')
      // navigate to login page after request has completed
      navigate('/auth/login')
    } catch (err) {
      console.log(err)
      // setError(err.response.data.message)
      // console.log(err.response.data.message)
      // setError({ ...error, [e.target.name]: '', message: '' })
    }
  }

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
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
                name="first_name"
                onChange={handleChange}
                value={formFields.first_name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Bloggs"
                type="text"
                name="last_name"
                onChange={handleChange}
                value={formFields.last_name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="MountainMan"
                type="text"
                name="username"
                onChange={handleChange}
                value={formFields.username}
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
                placeholder="must be greater than 8 characters"
                type="password"
                name="password"
                onChange={handleChange}
                value={formFields.password}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm password</FormLabel>
              <Input
                placeholder="must be greater than 8 characters"
                type="password"
                name="password_confirmation"
                onChange={handleChange}
                value={formFields.password_confirmation}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea max="500" id="desc" placeholder="About you" />
            </FormControl>
            <FormControl>
              <FormLabel>Image Upload</FormLabel>
              {/* <Text color="gray.600" pb="1rem">
                Add a profile image
              </Text> */}
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
                onClick={handleSubmit}
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
