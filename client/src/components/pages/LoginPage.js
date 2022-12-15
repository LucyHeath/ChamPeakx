/* eslint-disable no-unused-vars */
// import SpinnerItem from '../common/SpinnerItem'
import { REACT_APP_BASE_URL } from '../../environment'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { setToken, getToken } from '../common/Auth'
import DisplayError from '../common/DisplayError'

const LoginPage = ({ owner }) => {

  const navigate = useNavigate()
  const toast = useToast()
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState('')

  const handleSubmit = async (e) => {
    console.log('called handle submit')
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${REACT_APP_BASE_URL}/auth/login/`,
        formFields
      )
      setToken(data.token)
      // navigate to home after successful login
      toast({
        title: 'Logged in',
        description: `${data.message}!`,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      navigate('/mountaineeringRoutes')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.detail)
    }
  }

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <form onSubmit={handleSubmit}>
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
                  placeholder="********"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formFields.password}
                />
              </FormControl>
              <DisplayError errorText={errors} />
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
                  owner={owner}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src="https://res.cloudinary.com/dq45dbeya/image/upload/v1671064936/1314971421_941846373BI_cjfhoh.jpg"
          />
        </Flex>
      </Stack>
    </>
  )
}

export default LoginPage
