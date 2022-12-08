/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unknown-property */
import SpinnerItem from '../common/SpinnerItem'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReviewInput from '../common/ReviewInput'
import {
  Link,
  Box,
  Heading,
  Card,
  CardHeader,
  Flex,
  Button,
  IconButton,
  Image,
  Text,
  CardBody,
  CardFooter
} from '@chakra-ui/react'

const MountaineeringRouteSinglePage = () => {
  // ! State
  const [mountaineeringRoute, setmountaineeringRoute] = useState(null)

  // ! Location
  const { id } = useParams()
  const navigate = useNavigate()

  // ! Execution
  useEffect(() => {
    const getMountaineeringRoute = async () => {
      try {
        const { data } = await axios.get(`/api/mountaineeringRoute/${id}`)
        setmountaineeringRoute(data)
      } catch (err) {
        console.log(err)
      }
    }
    getMountaineeringRoute()
  }, [id])

  return (
    <Box>
      {mountaineeringRoute ? (
        <>
          <Heading>{mountaineeringRoute.peak}</Heading>
          <ReviewInput
            mountaineeringRoute={mountaineeringRoute}
            setmountaineeringRoute={setmountaineeringRoute}
          />
        </>
      ) : (
        <SpinnerItem />
      )}
    </Box>
  )
}

export default MountaineeringRouteSinglePage
