/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unknown-property */
import CommentDisplay from '../common/CommentDisplay'
import SpinnerItem from '../common/SpinnerItem'
import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { REACT_APP_BASE_URL } from '../../environment'
import {
  Box,
  Heading,
  Card,
  Image,
  Text,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  HStack,
  VStack,
  Tooltip
} from '@chakra-ui/react'
import { BsHouse } from 'react-icons/bs'
import { TbRoute } from 'react-icons/tb'
import { GiMountainClimbing } from 'react-icons/gi'
import { GiMuscleUp } from 'react-icons/gi'
import { FaMountain } from 'react-icons/fa'
import AddCommentDrawer from '../common/AddCommentDrawer'

const MountaineeringRouteSinglePage = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [mountaineeringRoute, setMountaineeringRoute] = useState(null)
  const [errors, setErrors] = useState(null)

  const { mountaineeringRouteId } = useParams()
  const navigate = useNavigate()

  const getMountaineeringRoute = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_BASE_URL}/mountaineering_routes/${mountaineeringRouteId}/`
      )
      console.log({ data })
      setMountaineeringRoute(data)
    } catch (err) {
      console.log(err)
    }
  }, [mountaineeringRouteId])

  // if getmountaineering changes, then use effect will run
  useEffect(() => {
    getMountaineeringRoute()
  }, [getMountaineeringRoute])

  return (
    <Box minH={'100vh'}>
      {mountaineeringRoute ? (
        <>
          <Box>
            <HStack justifyContent="space-evenly">
              <HStack>
                <Tooltip label="Peak Name" fontSize="md">
                  <span>
                    <FaMountain />
                  </span>
                </Tooltip>
                <Heading pt="1rem" size="xl">
                  {mountaineeringRoute.peak}
                </Heading>
                <Text>{`(${mountaineeringRoute.height}m)`}</Text>
              </HStack>
              <HStack>
                <Tooltip label="Route Name" fontSize="md">
                  <span>
                    <TbRoute />
                  </span>
                </Tooltip>
                <Heading pt="1rem" size="xl">
                  {mountaineeringRoute.route}
                </Heading>
              </HStack>
            </HStack>
            <Card alignItems="center" size="lg">
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  w={['500px', '800px', '1000px', '1200px', '1500px']}
                  objectFit="cover"
                  src={mountaineeringRoute.image}
                  alt="Mountain"
                />
                <Stack mt="6" spacing="3">
                  <Divider orientation="horizontal" />
                  <HStack justifyContent="space-evenly">
                    <HStack>
                      <Tooltip label="Grade" fontSize="md">
                        <span>
                          <GiMountainClimbing />
                        </span>
                      </Tooltip>
                      <Text>{mountaineeringRoute.grade}</Text>
                    </HStack>
                    <HStack>
                      <Tooltip label="Difficulty Level" fontSize="md">
                        <span>
                          <GiMuscleUp />
                        </span>
                      </Tooltip>
                      {mountaineeringRoute.difficulty.map((d) => (
                        <Text ontSize="lg" pl="1rem" key={d.name}>
                          {d.name}
                        </Text>
                      ))}
                    </HStack>
                    <HStack>
                      <Tooltip
                        label="Refuge or Facillities Available on Route "
                        fontSize="md"
                      >
                        <span>
                          <BsHouse />
                        </span>
                      </Tooltip>
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
                <AddCommentDrawer
                  setMountaineeringRoute={setMountaineeringRoute}
                />
              </CardFooter>
            </Card>
          </Box>
          {mountaineeringRoute.comments.map((c) => (
            <CommentDisplay
              getMountaineeringRoute={getMountaineeringRoute}
              key={c.id}
              owner={c.owner}
              text={c.text}
              created_at={c.created_at}
              id={c.id}
              rating={c.rating}
              header={c.header}
              images={c.images}
              image1={c.image1}
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
