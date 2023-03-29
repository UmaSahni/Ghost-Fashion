import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import LogoBox from './UpiBox'
import WalletBox from './WalletsBox'
import NetBanking from './NetBanking'

import CREDpay from './StaticCom/CREDpay'
const PayPage = () => {
  return (
    <div>
      <Accordion  >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          UPI
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <LogoBox/>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Walltes
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <WalletBox/>
    </AccordionPanel>
  </AccordionItem>


 <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Credit & Debit Card
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    This feature is currently not working
    </AccordionPanel>
  </AccordionItem>

   <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Netbanking
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <NetBanking/>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<CREDpay/>
    </div>
  )
}

export default PayPage