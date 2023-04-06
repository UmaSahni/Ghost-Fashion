import React, { useState } from 'react'
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
import CreditCard from './CreditCard'

const PayPage = () => {
  const [defaultIndex, setDefaultIndex] = useState(2);

  return (
    <div>
      <Accordion defaultIndex={defaultIndex} onChange={setDefaultIndex}>
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
                Wallets
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
              <Box  as="span" flex='1' textAlign='left'>
                Credit & Debit Card
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CreditCard/>
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
