import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const TableTotal = () => {
  return (
    <div>
<TableContainer border={"1px solid #E2E8F0"} >
  <Table  variant='simple'>
    <Thead>
      
    </Thead>
    <Tbody padding={1} >
      <Tr>
        <Td>Cart Total</Td>
        <Td isNumeric>₹ 9939.39</Td>
      </Tr>
      <Tr>
        <Td>Discount</Td>
        <Td isNumeric>- ₹ 200.00</Td>
      </Tr>
      <Tr>
        <Td>GST</Td>
        <Td isNumeric>₹ 943.61</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total Amount</Th>
        <Th isNumeric>₹ 10683.00</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default TableTotal