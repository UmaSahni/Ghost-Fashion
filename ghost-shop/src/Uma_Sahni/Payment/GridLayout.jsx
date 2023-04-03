import { Box, Center, Flex, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import PaymentOption from "./PaymentOption";
import Total from "./ShowTotal/Total";
// import TssMoney from "./StaticCom/TssMoney";

const GridLayout = () => {
  return (
    <Box>
      <Box  margin={"auto"} width={"90%"} >
       
        <Box margin={"1rem"} color={"teal"} fontSize="0.8rem">
          {" "}
         <Span> MY BAG - - - - - - - - - - - - - ADDRESS</Span> - - - - - - - - - - - - -
          PAYMENT{" "}
         
        </Box>
 
          <SimpleGrid templateColumns='repeat(3, 1fr)' spacing="40px">
          <GridItem colSpan={2} border={"1px solid #E2E8F0"}  height="auto">
            <PaymentOption/> 
          </GridItem>
          <GridItem colSpan={1}>
            <Total/>
          </GridItem>
        </SimpleGrid>

       
      </Box>
    </Box>
  );
};

export default GridLayout;

const Span=styled.span`font-weight:bold`;