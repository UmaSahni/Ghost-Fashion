import { Box } from '@chakra-ui/react';
import React from 'react';
import {Sidebar} from './Sidebar';
import {WomenList} from './WomenList';

export const ProductPage = () => {
  return (
    <Box w={"100%"} >
        <Box w={"15%"} border="1px solid black">
             <Sidebar/>
        </Box>
        <Box w={"85%"} border="1px solid black">
            <WomenList/>
        </Box>
        
    </Box>
  )
}


