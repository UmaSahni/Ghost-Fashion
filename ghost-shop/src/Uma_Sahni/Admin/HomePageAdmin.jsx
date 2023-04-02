import { Box, Flex, Heading, Tooltip } from '@chakra-ui/react'
import React from 'react'
import NewPost from './NewPost'

const HomePageAdmin = () => {
  return (
    <div>
      <Flex justifyContent={"center"}  >
      <Heading display={"inline"} > Welcome To  <Heading display={"inline"} color={"red"} > The Ghost Fashion </Heading>Admin Page</Heading>
      </Flex>
      <Tooltip hasArrow arrowSize={15}  isOpen label="Hey, You can Quickly add new product from here!" aria-label='A tooltip'>
       Quick Guide
      </Tooltip>
      <Box mt={8}>
<NewPost/>
      </Box>
       
    </div>
  )
}

export default HomePageAdmin