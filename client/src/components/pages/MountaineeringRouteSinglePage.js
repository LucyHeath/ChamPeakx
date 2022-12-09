/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unknown-property */
import CommentDisplay from '../common/CommentDisplay'
import SpinnerItem from '../common/SpinnerItem'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
import {
  Link,
  Box,
  Icon,
  Heading,
  Card,
  CardHeader,
  Flex,
  Button,
  IconButton,
  Image,
  Text,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  HStack
} from '@chakra-ui/react'
import Difficulty from '../helpers/Difficulty'
import { BsHouse } from 'react-icons/bs'
import CommentForm from '../common/CommentForm'

const MountaineeringRouteSinglePage = () => {
  const [mountaineeringRoute, setmountaineeringRoute] = useState(null)
  const [errors, setErrors] = useState(null)

  const { mountaineeringRouteId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getMountaineeringRoute = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_BASE_URL}/mountaineering_routes/${mountaineeringRouteId}/`
        )
        console.log({ data })
        setmountaineeringRoute(data)
      } catch (err) {
        console.log(err)
      }
    }
    getMountaineeringRoute()
  }, [mountaineeringRouteId])

  return (
    <Box>
      {mountaineeringRoute ? (
        <>
          <Box>
            <HStack justifyContent="space-around">
              <HStack>
                <Heading pt="1rem" size="lg">
                  {mountaineeringRoute.peak}
                </Heading>
                <Text>{`(${mountaineeringRoute.height}m)`}</Text>
              </HStack>
              <Heading>{mountaineeringRoute.route}</Heading>
              <Difficulty />
            </HStack>
            <Card alignItems="center" size="lg">
              <CardBody display="flex" flexDirection="column" flexWrap="wrap">
                <Image
                  objectFit="cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
                  alt="Mountain"
                />
                <Stack mt="6" spacing="3">
                  <HStack>
                    <Text>{mountaineeringRoute.grade}</Text>
                    {mountaineeringRoute.hut} === true ? (
                    <Icon as={BsHouse} w={8} h={8} color="blue.900" />) : (<></>
                    )
                  </HStack>
                  <Text color="blue.600" fontSize="2xl">
                    {mountaineeringRoute.description}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Add Review
                </Button>
              </CardFooter>
            </Card>
            <Box></Box>
          </Box>
          <Divider orientation="horizontal" />
          <CommentForm />
          {mountaineeringRoute.comments.map((c) => (
            <CommentDisplay
              key={c.id}
              owner={c.owner}
              text={c.text}
              created_at={c.created_at}
              id={c.id}
              rating={c.rating}
              header={c.header}
            />
          ))}
        </>
      ) : errors ? (
        <h2>Something has gone wrong...</h2>
      ) : (
        <SpinnerItem />
      )}
    </Box>
  )
}

export default MountaineeringRouteSinglePage
