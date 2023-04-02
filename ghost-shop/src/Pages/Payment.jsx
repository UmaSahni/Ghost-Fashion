import React from 'react'
import GridLayout from '../Uma_Sahni/Payment/GridLayout'
import { Box, Text  } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Payment = () => {
  return (
    <div>
      <Box
     
      zIndex={100}
      >
     <Navbar/>
      </Box>
      
        <GridLayout/>
       
   <Footer/>
    </div>
  )
}

export default Payment