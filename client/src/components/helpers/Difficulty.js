/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'

const Difficulty = ({ difficulty }) => {
  // const [difficultyLevels, setDifficultyLevels] = useState([])

  // useEffect(() => {
  //   const getDifficulty = async () => {
  //     try {
  //       const { data } = await axios.get(`${REACT_APP_BASE_URL}/difficulty/`)
  //       setDifficultyLevels(data)
  //     } catch (err) {
  //       console.log(err.message)
  //       setErrors(true)
  //     }
  //   }
  //   getDifficulty()
  // }, [])

  // return (
  //   <>
  //     {difficultyLevels.map((d) => {
  //       const { name } = n
  //       return (
  //         <Text key={n} fontSize="lg" pl="1rem">
  //           {n}
  //         </Text>
  //       )
  //     })}
  //     {difficulty.map((d) => {
  //       return (
  //         <Text key={d} fontSize="lg" pl="1rem">
  //           {d}
  //         </Text>
  //       )
  //     })}
  //   </>
  // )

  return (
    <>
      <Text key={difficulty} fontSize="lg" pl="1rem">
        {difficulty}
      </Text>
    </>
  )
}

export default Difficulty
