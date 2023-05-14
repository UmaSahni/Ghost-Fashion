import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import PayPage from './PayPage'
import TssMoney from './StaticCom/TssMoney'
import AddressBox from './AddressBox'
import { useSelector } from 'react-redux'

const PaymentOption = () => {
  const store = useSelector((store)=>store)
 
  return (
    <div>
        <Heading size={"4px"} >Payment Option</Heading>
        <TssMoney/>
        <Box>
        <AddressBox/>
        </Box>
        <PayPage/>
    </div>
  )
}

export default PaymentOption