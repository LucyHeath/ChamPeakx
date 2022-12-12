/* eslint-disable no-unused-vars */
import SpinnerItem from '../common/SpinnerItem'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { REACT_APP_BASE_URL } from '../../environment'

import {
  SimpleGrid,
  Box,
  Heading,
  Card,
  CardHeader,
  Flex,
  Image,
  Text,
  CardBody,
  CardFooter,
  HStack
} from '@chakra-ui/react'

import FilterSearch from '../common/FilterSearch'

import { Link } from 'react-router-dom'

const MountaineeringRoutesMultiPage = () => {
  const [mountaineeringRoutes, setMountaineeringRoutes] = useState([])
  const [errors, setErrors] = useState(false)
  const [filteredMountaineeringRoutes, setFilteredMountaineeringRoutes] =
    useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_BASE_URL}/mountaineering_routes/`
        )
        setMountaineeringRoutes(data)
      } catch (err) {
        console.log(err.message)
        setErrors(true)
      }
    }
    getData()
  }, [])

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Heading py="2rem">Mountaineering Routes in Chamonix</Heading>
      </Box>
      <FilterSearch
        mountaineeringRoutes={mountaineeringRoutes}
        filteredMountaineeringRoutes={filteredMountaineeringRoutes}
        setFilteredMountaineeringRoutes={setFilteredMountaineeringRoutes}
      />
      {filteredMountaineeringRoutes.length ? (
        <SimpleGrid
          pt="2rem"
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(450px, 1fr))"
        >
          {filteredMountaineeringRoutes.map((m) => {
            const { peak, descripton, route, difficulty, images, id, height } =
              m
            return (
              <>
                <Link to={`/mountaineeringRoutes/${id}`}>
                  <Card maxW="md">
                    <CardHeader>
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Box>
                            <HStack>
                              <Heading pt="1rem" size="lg">
                                {peak}
                              </Heading>
                              <Text>{`(${height}m)`}</Text>
                            </HStack>
                            <Text pt="2rem" fontSize="lg">
                              {route}
                            </Text>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <HStack></HStack>
                    </CardBody>
                    <Image
                      objectFit="cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
                      alt="Mountain"
                    />
                    <CardFooter justify="center">
                      {difficulty.map((d) => (
                        <Text ontSize="lg" pl="1rem" key={d.name}>
                          {d.name}
                        </Text>
                      ))}
                    </CardFooter>
                  </Card>
                </Link>
              </>
            )
          })}
        </SimpleGrid>
      ) : errors ? (
        <h2>Something has gone wrong...</h2>
      ) : (
        <SpinnerItem />
      )}
    </Box>
  )
}
export default MountaineeringRoutesMultiPage
