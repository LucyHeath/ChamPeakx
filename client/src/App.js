/* eslint-disable no-unused-vars */
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/LandingPage'
import MountaineeringRoutesMultiPage from './components/pages/MountaineeringRoutesMultiPage'
import MountaineeringRouteSinglePage from './components/pages/MountaineeringRouteSinglePage'
import NotFound from './components/pages/NotFound'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import UserProfilePage from './components/pages/UserProfilePage.js'
import UpdatedMountaineeringRoutesPage from './components/pages/UpdatedMountaineeringRoutesPage'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/mountaineeringRoutes"
            element={<MountaineeringRoutesMultiPage />}
          />
          <Route
            path="/updatedMountaineeringRoutes"
            element={<UpdatedMountaineeringRoutesPage />}
          />
          <Route
            path="/mountaineeringRoutes/:mountaineeringRouteId"
            element={<MountaineeringRouteSinglePage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
