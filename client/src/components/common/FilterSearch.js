/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const FilterSearch = ({
  mountaineeringRoutes,
  setFilteredMountaineeringRoutes
}) => {
  const [input, setInput] = useState({
    search: '',
    difficulty: 'All'
  })
  useEffect(() => {
    const regex = new RegExp(input.search, 'i')
    const filteredArr = mountaineeringRoutes.filter((m) => {
      return (
        regex.test(m.peak) &&
        (m.difficulty === input.difficulty || input.difficulty === 'All')
      )
    })
    setFilteredMountaineeringRoutes(filteredArr)
  }, [input, mountaineeringRoutes, setFilteredMountaineeringRoutes])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <Box>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Peak or Route"
        name="search"
        value={input.search}
      />
      <select
        onChange={handleChange}
        name="difficulty"
        value={input.countryCode}
        placeholder="Select Difficulty Level"
      >
        <option value="All">All</option>
        <option value="Acclimatisation">Acclimatisation</option>
        <option value="Easy">Easy</option>
        <option value="Mid-Grade">Mid-Grade</option>
        <option value="Hard">Hard</option>
        <option value="Extreme">Extreme</option>
      </select>
    </Box>
  )
}

export default FilterSearch
