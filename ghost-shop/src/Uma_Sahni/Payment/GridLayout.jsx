import { Box, Center, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import PaymentOption from "./PaymentOption";
import Total from "./ShowTotal/Total";
// import TssMoney from "./StaticCom/TssMoney";

const GridLayout = () => {
  return (
    <Box>
      <Box  margin={"auto"} width={"80%"} >
       
        <Box margin={"1rem"} color={"teal"} fontSize="0.8rem" fontWeight="bold">
          {" "}
          MY BAG - - - - - - - - - - - - - ADDRESS - - - - - - - - - - - - -
          PAYMENT{" "}
         
        </Box>
 
          <SimpleGrid   columns={[1, 1, 1, 1, 1, 2]} spacing="40px">
          <Box width={"100%"} border={"1px solid #E2E8F0"}  height="auto">
            <PaymentOption/> 
          </Box>
          <Box   >
            <Total/>
          </Box>
        </SimpleGrid>

       
      </Box>
    </Box>
  );
};

export default GridLayout;
