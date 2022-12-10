import { Box } from '@chakra-ui/react'
// import axios from 'axios'

// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  // const navigate = useNavigate()

  // const [mountaineeringRoutes, setMountaineeringRoutes] = useState([])
  // const [errors, setErrors] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`${REACT_APP_BASE_URL}/mountaineering_routes/`)
  //       setMountaineeringRoutes(data)
  //     } catch (err) {
  //       console.log(err.message)
  //       setErrors(true)
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <Box>
      <p>Landing Page</p>
    </Box>
  )
}

export default LandingPage
