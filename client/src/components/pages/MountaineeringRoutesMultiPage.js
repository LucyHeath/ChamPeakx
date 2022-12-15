/* eslint-disable no-unused-vars */
import SpinnerItem from '../common/SpinnerItem'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
  HStack,
  Stack,
  chakra,
  VStack,
  Divider
} from '@chakra-ui/react'
import FilterSearch from '../common/FilterSearch'
import { Link } from 'react-router-dom'

const MountaineeringRoutesMultiPage = () => {
  const [mountaineeringRoutes, setMountaineeringRoutes] = useState([])
  const [errors, setErrors] = useState(false)
  const [filteredMountaineeringRoutes, setFilteredMountaineeringRoutes] = useState([])

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
    <Box minH={'100vh'}>
      <VStack
        bgImage="url(https://res.cloudinary.com/dq45dbeya/image/upload/v1671033795/cham_iazlej.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        alignItems="center"
        pb="30px"
        pt="40px"
      >
        <chakra.h1
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW="1200px"
          py="40px"
        >
          <chakra.span
            color="black"
            bg="linear-gradient(transparent 20%, white 80%)"
          >
            The Best Insights into the Best Mountaineering in the Chamonix
            Valley
          </chakra.span>
        </chakra.h1>
        <VStack
          bgColor="white"
          borderRadius="4px"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mb="50px"
          pos="relative"
          top="0"
          zIndex={2}
          maxW="1000px"
          opacity="85%"
        >
          <Text
            maxW="550px"
            fontSize="xl"
            textAlign="center"
            color="black"
            fontWeight="bold"
          >
            Search our route guides to find the lates updates and beta to help
            you plan your next adventure
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            w={{ base: '100%', sm: 'auto' }}
            spacing={5}
          >
            <FilterSearch
              mountaineeringRoutes={mountaineeringRoutes}
              filteredMountaineeringRoutes={filteredMountaineeringRoutes}
              setFilteredMountaineeringRoutes={setFilteredMountaineeringRoutes}
            />
          </Stack>
        </VStack>
      </VStack>
      {filteredMountaineeringRoutes.length ? (
        <SimpleGrid
          // columns={{ sm: 2, md: 3, lg: 4 }}
          pt="2rem"
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(550px, 1fr))"
          gap={10}
          justifyItems="center"
          px="40px"
        >
          {filteredMountaineeringRoutes.map((m) => {
            const { peak, route, difficulty, image, id, height } = m
            return (
              <React.Fragment key={id}>
                <Link to={`/mountaineeringRoutes/${id}`}>
                  <Card
                    maxW="lg"
                    px={{ xs: '0', sm: 'auto' }}
                    my="20px"
                    border="1px"
                    borderColor="lightgrey"
                    boxShadow="xl"
                    p="6"
                    rounded="md"
                  >
                    <CardHeader>
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="3"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Box>
                            <HStack>
                              <Heading pt="1rem" size="lg">
                                {peak}
                              </Heading>
                              <Text
                                color="blue.500"
                                fontWeight="bold"
                              >{`(${height}m)`}</Text>
                            </HStack>
                            <Divider />
                            <Text pt="2rem" fontSize="lg">
                              {route}
                            </Text>
                          </Box>
                          <Divider />
                        </Flex>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Image
                        objectFit="cover"
                        src={image}
                        alt="Mountain"
                        borderRadius="4px"
                        h={['20rem', '25rem']}
                      />
                    </CardBody>
                    <Divider />
                    <CardFooter justify="center">
                      {difficulty.map((d) => (
                        <Text
                          color="blue.500"
                          fontSize="lg"
                          pl="1rem"
                          key={d.name}
                          fontWeight="bold"
                        >
                          {d.name}
                        </Text>
                      ))}
                    </CardFooter>
                  </Card>
                </Link>
              </React.Fragment>
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
