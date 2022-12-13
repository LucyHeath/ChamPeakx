import { HStack, Tooltip } from '@chakra-ui/react'
import { GiAlliedStar } from 'react-icons/gi'

const StarRating = ({ rating }) => {
  return (
    <HStack>
      <Tooltip label="Rating" fontSize="md">
        <span>
          <HStack>
            {rating === 0 ? <HStack display="flex"></HStack> : <></>}
          </HStack>
          <HStack>
            {rating === 1 ? (
              <HStack>
                <GiAlliedStar />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 2 ? (
              <HStack>
                <GiAlliedStar />
                <GiAlliedStar />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 3 ? (
              <HStack>
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 4 ? (
              <HStack>
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 5 ? (
              <HStack>
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
                <GiAlliedStar />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
        </span>
      </Tooltip>
    </HStack>
  )
}

export default StarRating
