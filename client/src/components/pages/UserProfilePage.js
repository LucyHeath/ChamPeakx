// /* eslint-disable no-unused-vars */
//This is currently not in use but i have started building it
// import CommentDisplay from '../common/CommentDisplay'
// import {
//   Button,
//   Flex,
//   FormLabel,
//   Stack,
//   useColorModeValue,
//   Image,
//   Center,
//   Text,
//   Textarea,
//   Box,
//   Heading,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   DrawerFooter,
//   HStack,
//   VStack,
//   FormControl
// } from '@chakra-ui/react'
// import { useDisclosure } from '@chakra-ui/react-use-disclosure'
// import { AddIcon } from '@chakra-ui/icons'
// import React from 'react'
// import { REACT_APP_BASE_URL } from '../../environment'
// // import avatarImg from '../images/avatar.png'
// import { useState, useEffect } from 'react'
// import { Link, useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { getToken } from '../common/Auth.js'
// import UploadImage from '../helpers/UploadImage'
// import { handleLogout } from '../common/Auth.js'

// const UserProfilePage = () => {
//   // ! State
//   const [user, setUser] = useState([])
//   const [errors, setErrors] = useState(false)
//   const [formData, setFormData] = useState({
//     image: '',
//     bio: ''
//   })

//   // ! Location
//   const { userId } = useParams()

//   // ! Navigation
//   const navigate = useNavigate()

//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const firstField = React.useRef()

//   // ! Execution
//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const { data } = await axios.get(
//           `${REACT_APP_BASE_URL}/auth/login/${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${getToken()}`
//             }
//           }
//         )
//         setUser(data)
//       } catch (err) {
//         console.log(err)
//         setErrors(true)
//       }
//     }
//     getUser()
//   }, [userId])

//   const handleChange = async (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     try {
//       await axios.put(`/auth/login/${userId}`, formData, {
//         headers: {
//           Authorization: `Bearer ${getToken()}`
//         }
//       })
//       const { data } = await axios.get(
//         `${REACT_APP_BASE_URL}/auth/login/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${getToken()}`
//           }
//         }
//       )
//       setUser(data)
//       setFormData({ ...formData, [event.target.name]: event.target.value })
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <>
//       <HStack alignItems="flex-start">
//         <VStack>
//           <Heading>Your Profile</Heading>
//           <Flex
//             minH={'100vh'}
//             width="30vw"
//             align={'center'}
//             alignItems={'flex-start'}
//           >
//             <Stack
//               spacing={4}
//               w={'full'}
//               maxW={'md'}
//               bg={useColorModeValue('white', 'gray.700')}
//               rounded={'xl'}
//               boxShadow={'lg'}
//               p={10}
//               my={12}
//               mx={8}
//             >
//               <VStack>
//                 <Center>
//                   <Text>{`Welcome ${user.first_name} ${user.last_name}`}</Text>
//                 </Center>
//                 <Center>
//                   <Image
//                     borderRadius="full"
//                     boxSize="150px"
//                     src={`${user.image}`}
//                     alt={`${user.first_name}'s profile picture`}
//                   />
//                 </Center>
//                 <Center>
//                   <Text>{user.bio}</Text>
//                 </Center>
//                 <Button
//                   leftIcon={<AddIcon />}
//                   colorScheme="blue"
//                   onClick={onOpen}
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500'
//                   }}
//                 >
//                   Update Profile
//                 </Button>
//                 <Drawer
//                   isOpen={isOpen}
//                   placement="left"
//                   initialFocusRef={firstField}
//                   onClose={onClose}
//                   size="sm"
//                 >
//                   <DrawerOverlay />
//                   <DrawerContent>
//                     <DrawerCloseButton />
//                     <DrawerHeader borderBottomWidth="1px">
//                       Update Your Profile
//                     </DrawerHeader>
//                     <DrawerBody>
//                       <Stack spacing="24px">
//                         <FormControl>
//                           <FormLabel>Bio</FormLabel>
//                           <Textarea
//                             id="bio"
//                             placeholder="About you"
//                             name="bio"
//                             onChange={handleChange}
//                             value={formData.bio}
//                           />
//                         </FormControl>
//                         <FormControl>
//                           <FormLabel>Profile Image Upload</FormLabel>
//                           <UploadImage
//                             imageFormData={formData}
//                             setFormData={setFormData}
//                             handleSubmit={handleSubmit}
//                           />
//                         </FormControl>
//                       </Stack>
//                     </DrawerBody>
//                     <DrawerFooter pb="100px" borderTopWidth="1px">
//                       <Button variant="outline" mr={3} onClick={onClose}>
//                         Cancel
//                       </Button>
//                       <Button
//                         bg={'blue.400'}
//                         color={'white'}
//                         _hover={{
//                           bg: 'blue.500'
//                         }}
//                         type="submit"
//                         onClick={handleSubmit}
//                       >
//                         Submit
//                       </Button>
//                     </DrawerFooter>
//                   </DrawerContent>
//                 </Drawer>
//               </VStack>
//             </Stack>
//           </Flex>
//         </VStack>
//         <VStack>
//           <Heading>Your Reviews</Heading>
//           <Flex
//             minH={'100vh'}
//             width="60vw"
//             align={'center'}
//             alignItems={'flex-start'}
//           >
//             <Stack
//               spacing={4}
//               w={'full'}
//               maxW={'md'}
//               bg={useColorModeValue('white', 'gray.700')}
//               rounded={'xl'}
//               boxShadow={'lg'}
//               p={10}
//               my={12}
//               mx={8}
//             ></Stack>
//           </Flex>
//         </VStack>
//       </HStack>
//     </>
//   )
// }

// export default UserProfilePage

// const deleteComment = async (mountaineeringRouteId, commentId) => {
//   try {
//     console.log('mountaineeringRouteId -> ', mountaineeringRouteId)
//     console.log('commentId -> ', commentId)
//     console.log('user Id ->', user.id)
//     const response = await axios.delete(
//       `${REACT_APP_BASE_URL}/mountaineeringRoutes/${mountaineeringRouteId}/comment/${commentId}/`,
//       {
//         headers: {
//           Authorization: `Bearer ${getToken()}`
//         }
//       }
//     )
//     const { data } = await axios.get(
//       `${REACT_APP_BASE_URL}/users/${userId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${getToken()}`
//         }
//       }
//     )
//     setUser(data)
//   } catch (err) {
//     console.log(err)
//   }
// }
