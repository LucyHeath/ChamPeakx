/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react'
import {
  FormLabel,
  HStack,
  Input,
  Select,
  RadioGroup,
  Stack,
  Radio
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
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
        (regex.test(m.peak) || regex.test(m.route)) &&
        (m.difficulty === input.difficulty || input.difficulty === 'All')
      )
    })
    setFilteredMountaineeringRoutes(filteredArr)
  }, [input, mountaineeringRoutes, setFilteredMountaineeringRoutes])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <HStack justifyContent="center">
      <HStack justifyContent="center">
        <FormLabel>
          <SearchIcon /> Route or Peak
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Search Peak or Route"
          name="search"
          value={input.search}
          outline
        />
      </HStack>
      <HStack>
        <FormLabel>Difficulty level</FormLabel>
        <Select
          onChange={handleChange}
          name="difficulty"
          value={input.difficulty}
          placeholder="Select Difficulty"
        >
          <option value="" disabled={true}>
            Select Difficulty
          </option>
          <option value="All">All</option>
          <option value="Acclimatisation">Acclimatisation</option>
          <option value="Easy">Easy</option>
          <option value="Mid-Grade">Mid-Grade</option>
          <option value="Hard">Hard</option>
          <option value="Extreme">Extreme</option>
        </Select>
        {/* <RadioGroup
          defaultValue="1"
          onChange={handleChange}
          name="difficulty"
          value={input.difficulty}
          placeholder="Select Difficulty"
        >
          <Stack spacing={4} direction="row">
            <Radio value="1">Radio 1</Radio>
            <Radio value="2">Radio 2</Radio>
            <Radio value="3">Radio 3</Radio>
            <Radio value="4">Radio 3</Radio>
            <Radio value="5">Radio 3</Radio>
          </Stack>
        </RadioGroup> */}
      </HStack>
    </HStack>
  )
}

export default FilterSearch
