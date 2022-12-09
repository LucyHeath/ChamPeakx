import notFoundImg from '../images/404.jpeg'
import { Image, Box } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Image
        alt={'404 not found image'}
        objectFit={'cover'}
        src={notFoundImg}
        h="100vh"
        w="100vw"
      />
    </Box>
  )
}
export default NotFound
