/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react'
import { FormLabel, HStack, Input, Select } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { REACT_APP_BASE_URL } from '../../environment'
import axios from 'axios'

const FilterSearch = ({
  mountaineeringRoutes,
  setFilteredMountaineeringRoutes
}) => {
  const [input, setInput] = useState({
    search: ''
  })

  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  const [difficulties, setDifficulties] = useState([])

  useEffect(() => {
    const regex = new RegExp(input.search, 'i')
    const filteredArr = mountaineeringRoutes.filter((m) => {
      return (
        regex.test(m.peak) || regex.test(m.route)
        // &&
        // (m.difficulty.name === input.difficulty.name ||
        //   input.difficulty === 'All')
      )
    })
    setFilteredMountaineeringRoutes(filteredArr)
  }, [input, mountaineeringRoutes, setFilteredMountaineeringRoutes])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/difficulty/`)
      .then(({ data }) => setDifficulties(data))
      .catch((err) => console.log(err.response))
  }, [])

  useEffect(() => {
    if (selectedDifficulty && selectedDifficulty !== 'All') {
      axios
        .get(`${REACT_APP_BASE_URL}/difficulty/${selectedDifficulty}/`)
        .then(({ data }) => {
          console.log('routes from api are-->', data)
          const routesWithDifficulties = data.mountaineering_routes.map(
            (route) => {
              console.log('route is -->', route)
              const populatedDifficulties = difficulties.filter((d) =>
                route.difficulty.includes(d.id)
              )
              route.difficulty = populatedDifficulties
              return route
            }
          )
          setFilteredMountaineeringRoutes(routesWithDifficulties)
        })
    }
  }, [selectedDifficulty])

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value)
  }

  console.log(selectedDifficulty)
  return (
    <HStack justifyContent="center" flexDirection={['column', 'row']}>
      <HStack justifyContent="center">
        <FormLabel>
          <SearchIcon />
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Search Peak or Route"
          name="search"
          value={input.search}
          opacity="100%"
        />
      </HStack>
      <HStack>
        <Select
          onChange={handleDifficultyChange}
          name="difficulty"
          value={selectedDifficulty}
        >
          <option value="" disabled={true}>
            Select Difficulty
          </option>
          <option value="All">All</option>
          {difficulties.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </Select>
      </HStack>
    </HStack>
  )
}

export default FilterSearch
