/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unknown-property */
import CommentDisplay from '../common/CommentDisplay'
import SpinnerItem from '../common/SpinnerItem'
import React, { useState, useEffect, useCallback } from 'react'
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
  Tooltip,
  CardHeader,
  chakra
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
              <Card
                alignItems="center"
                size="lg"
                border="1px"
                borderColor="lightgrey"
                boxShadow="xl"
                p="6"
                rounded="md"
                mb="50px"
              >
                <CardHeader>
                  <HStack>
                    <HStack>
                      <Tooltip label="Peak Name" fontSize="md">
                        <Heading pt="1rem" size="xl" display="flex" pr="80px">
                          <chakra.span pr="30px">
                            <FaMountain />
                          </chakra.span>
                          {mountaineeringRoute.peak}
                          <chakra.span
                            pl="30px"
                            color="blue.500"
                          >{`(${mountaineeringRoute.height}m)`}</chakra.span>
                        </Heading>
                      </Tooltip>
                    </HStack>
                    <HStack>
                      <Tooltip label="Route Name" fontSize="md">
                        <Heading pt="1rem" size="xl" display="flex" pl="80px">
                          <chakra.span pr="30px">
                            <TbRoute />
                          </chakra.span>
                          {mountaineeringRoute.route}
                        </Heading>
                      </Tooltip>
                    </HStack>
                  </HStack>
                </CardHeader>
                <CardBody
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Image
                    w={['500px', '800px', '1000px']}
                    objectFit="cover"
                    src={mountaineeringRoute.image}
                    alt="Mountain"
                    borderRadius="4px"
                    pb="20px"
                  />
                  <Stack mt="6" spacing="3" w={['500px', '800px', '1500px']}>
                    <Divider orientation="horizontal" />

                    <HStack justifyContent="space-evenly">
                      <HStack>
                        <Tooltip label="Grade" fontSize="md">
                          <Heading display="flex" size="md">
                            <chakra.span pr="30px">
                              <GiMountainClimbing />
                            </chakra.span>
                            {mountaineeringRoute.grade}
                          </Heading>
                        </Tooltip>
                      </HStack>

                      <HStack>
                        <Tooltip label="Difficulty Level" fontSize="md">
                          <Heading display="flex" size="md">
                            <chakra.span pr="30px">
                              <GiMuscleUp />
                            </chakra.span>
                            {mountaineeringRoute.difficulty.map((d) => (
                              <Text fontSize="lg" pl="1rem" key={d.name}>
                                {d.name}
                              </Text>
                            ))}
                          </Heading>
                        </Tooltip>
                      </HStack>

                      <HStack>
                        <Tooltip
                          label="Refuge or Facillities Available on Route "
                          fontSize="md"
                        >
                          <Heading fontSize="md">
                            <chakra.span>
                              <BsHouse />
                            </chakra.span>
                          </Heading>
                        </Tooltip>
                        {mountaineeringRoute.hut === 'true' ? (
                          <Heading size="md">Hut on Route</Heading>
                        ) : (
                          <Heading size="md">No Hut</Heading>
                        )}
                      </HStack>
                    </HStack>
                    <Divider orientation="horizontal" />
                    <Text
                      px="20px"
                      fontSize="2xl"
                    >{`"${mountaineeringRoute.descripton}"`}</Text>
                  </Stack>
                </CardBody>
                <Divider orientation="horizontal" />
                <CardFooter>
                  <AddCommentDrawer
                    setMountaineeringRoute={setMountaineeringRoute}
                  />
                </CardFooter>
              </Card>
            </HStack>
          </Box>
          {mountaineeringRoute.comments.map((c) => (
            <CommentDisplay
              mt="50px"
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
              image2={c.image2}
              image3={c.image3}
              mountaineeringRoute={mountaineeringRoute}
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
