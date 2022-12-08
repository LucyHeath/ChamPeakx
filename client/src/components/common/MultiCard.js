import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Button,
  IconButton,
  Image,
  Text,
  CardBody,
  CardFooter,
  Link
} from '@chakra-ui/react'

import { BsThreeDotsVertical } from 'react-icons/bs'

// BiChat,
//   BiLike,
//   BiShare

const MultiCard = () => {
  return (
    <Link to={'/mountaineeringRoutes/:mountaineeringRoutesId'}>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              {/* <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" /> */}
              <Box>
                <Heading size="lg">Aiguille du Midi</Heading>
                <Text fontSize="lg">Midi-Plan Traverse</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text noOfLines={[1, 4]}>
            This classic outing gives breath-taking views off the Massif. The
            route is mostly on snow, with rocky steps, and begins from the Midi
            Telepherique station. Many parties now reverse the route from the
            summit of the Aiguille Plan to the Midi, but some may prefer to
            descend to the Refuge Requin, thus completing a full traverse. Note
            that the seriousness of this route will vary massively depending on
            snow conditions underfoot.
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
          alt="Mountain"
        />
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            '& > button': {
              minW: '136px'
            }
          }}
        >
          <Button flex="1" variant="ghost">
            View
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>
          <Button flex="1" variant="ghost">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default MultiCard
