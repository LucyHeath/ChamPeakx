import { Text } from '@chakra-ui/react'

const DisplayError = ({ errorText }) => {
  return <> {errorText && <Text color="red">{errorText}</Text>}</>
}
export default DisplayError
