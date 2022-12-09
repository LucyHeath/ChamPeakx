import ProfileForm from '../common/ProfileForm'
import CommentDisplay from '../common/CommentDisplay'
import { HStack, VStack, Heading } from '@chakra-ui/layout'

export default function UserProfileEdit() {
  return (
    <>
      <HStack alignItems="flex-start">
        <VStack>
          <Heading>Your Profile</Heading>
          <ProfileForm />
        </VStack>
        <VStack>
          <Heading>Your Comments: </Heading>
          <CommentDisplay />
        </VStack>
      </HStack>
    </>
  )
}
