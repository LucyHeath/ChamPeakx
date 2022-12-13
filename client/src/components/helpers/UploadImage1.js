import axios from 'axios'

import { Box } from '@chakra-ui/layout'

const UploadImage1 = ({ formFields, setFormFields }) => {
  const handleChange = async (event) => {
    try {
      // Create a new form data object
      const formData = new FormData()
      // Add file field on new object
      formData.append('file', event.target.files[0])
      // Add upload preset
      formData.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      )
      // Send data as Axios reqest to cloudinary API
      const { data } = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        formData
      )
      console.log(data.secure_url)
      // Add profile image to form data
      setFormFields({
        ...formFields,
        image1: data.secure_url
      })
      console.log({
        ...formFields,
        image1: data.secure_url
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Box>
        {formFields.image1 ? (
          <img src={formFields.image1} />
        ) : (
          <input
            name="image1"
            type="file"
            placeholder="Upload picture"
            onChange={handleChange}
          />
        )}
      </Box>
    </>
  )
}

export default UploadImage1
