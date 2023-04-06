import React, { useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { billDetail } from '../../../harshal/Cart'
const TableTotal = () => {
  const {cart_total,discount,gst,total_amount,}=billDetail||0
  return (
    <div>
<TableContainer border={"1px solid #E2E8F0"} >
  <Table  variant='simple'>
    <Thead>
      
    </Thead>
    <Tbody padding={1} >
      <Tr>
        <Td>Cart Total</Td>
        <Td isNumeric>₹ {cart_total}</Td>
      </Tr>
      <Tr>
        <Td>Discount</Td>
        <Td isNumeric>- ₹ {discount}</Td>
      </Tr>
      <Tr>
        <Td>GST</Td>
        <Td isNumeric>₹ {gst}</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total Amount</Th>
        <Th isNumeric>₹ {total_amount}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default TableTotal