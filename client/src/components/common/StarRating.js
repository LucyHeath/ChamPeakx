import { HStack, Tooltip } from '@chakra-ui/react'
import { FaSnowflake } from 'react-icons/fa'

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
                <FaSnowflake />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 2 ? (
              <HStack>
                <FaSnowflake />
                <FaSnowflake />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 3 ? (
              <HStack>
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 4 ? (
              <HStack>
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <HStack>
            {rating === 5 ? (
              <HStack>
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
                <FaSnowflake />
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
