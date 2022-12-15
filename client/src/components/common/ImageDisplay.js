import {
  Box,
  Card,
  SimpleGrid
} from '@chakra-ui/react'
const ImageDisplay = ({ images, image1, image2, image3 }) => {

  return (
    <>
      {images ? (
        <>
          <Box mx="200px" mb="40px" alignItems="center" size="lg">
            <Card
              direction="column"
              alignItems="centre"
              size="md"
              border="1px"
              borderColor="lightgrey"
              boxShadow="xl"
              p="6"
              rounded="md"
              mt="20px"
            >
              <SimpleGrid
                display="flex"
                justifyContent="center"
                minChildWidth="100px"
                spacing="30px"
                columns={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 4 }}
              >
                {!images ? (
                  <></>
                ) : (
                  <Box
                    bgImage={images}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image1 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image1}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image2 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image2}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
                {!image3 ? (
                  <></>
                ) : (
                  <Box
                    bgImage={image3}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxSize={['100px', '200px', '300px', '350px']}
                    borderRadius="md"
                  ></Box>
                )}
              </SimpleGrid>
            </Card>
          </Box>
        </>
      ) : (
        <Box py="20px"></Box>
      )}
    </>
  )
}
export default ImageDisplay
