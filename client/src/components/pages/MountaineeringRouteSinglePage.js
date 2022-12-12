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
import { BsHouse } from 'react-icons/bs'
import { TbRoute } from 'react-icons/tb'
import { GiMountainClimbing } from 'react-icons/gi'
import { GiMuscleUp } from 'react-icons/gi'
import { BsBarChartSteps } from 'react-icons/bs'
import { FaMountain } from 'react-icons/fa'
import AddCommentDrawer from '../common/AddCommentDrawer'
import Difficulty from '../helpers/Difficulty'

const MountaineeringRouteSinglePage = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [mountaineeringRoute, setmountaineeringRoute] = useState(null)
  const [errors, setErrors] = useState(null)

  const { mountaineeringRouteId } = useParams()
  const navigate = useNavigate()

  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }
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
            <HStack justifyContent="space-evenly">
              <HStack>
                <FaMountain />
                <Heading pt="1rem" size="xl">
                  {mountaineeringRoute.peak}
                </Heading>
                <Text>{`(${mountaineeringRoute.height}m)`}</Text>
              </HStack>
              <HStack>
                <TbRoute />
                <Heading pt="1rem" size="xl">
                  {mountaineeringRoute.route}
                </Heading>
              </HStack>
            </HStack>
            <Card alignItems="center" size="lg">
              <CardBody display="flex" flexDirection="column" flexWrap="wrap">
                <Image
                  objectFit="cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
                  alt="Mountain"
                />
                <Stack mt="6" spacing="3">
                  <Divider orientation="horizontal" />
                  <HStack justifyContent="space-evenly">
                    <HStack>
                      <GiMountainClimbing
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      />
                      {isHovering && <Text p="8">Technical Grade</Text>}
                      <Text>{mountaineeringRoute.grade}</Text>
                    </HStack>
                    <HStack>
                      <GiMuscleUp
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      />
                      {isHovering && <Text p="8">Route Difficulty</Text>}
                      {/* {mountaineeringRoute.difficulty.map((d) => (
                        <Difficulty key={d.name} name={d.name} />
                      ))} */}
                      <ul>
                        {mountaineeringRoute.difficulty.map((d) => (
                          <Text ontSize="lg" pl="1rem" key={d.name}>
                            {d.name}
                          </Text>
                        ))}
                      </ul>
                    </HStack>
                    <HStack>
                      <BsHouse />
                      {mountaineeringRoute.hut === 'true' ? (
                        <Text>Hut on Route</Text>
                      ) : (
                        <Text>No Hut</Text>
                      )}
                    </HStack>
                  </HStack>
                  <Divider orientation="horizontal" />
                  <Text fontSize="2xl">{mountaineeringRoute.descripton}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <AddCommentDrawer />
              </CardFooter>
            </Card>
          </Box>
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
