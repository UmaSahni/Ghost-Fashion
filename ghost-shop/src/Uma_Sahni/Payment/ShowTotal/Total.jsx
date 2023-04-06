import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LoadingModal from "./LoadingModal";
import TableTotal from "./TableTotal";

const Total = () => {
  
  return (
    <Box >
      <Button borderRadius={"none"} colorScheme="red" width={"100%"}>
        <LoadingModal />
      </Button>
      <Flex justifyContent={"flex-start"}>
        <Divider m={5} />
      </Flex>
      <Text textAlign={"start"} fontSize={"0.8rem"} color={"gray"}>
        BILLING DETAILS
      </Text>
     
      <TableTotal />
      
      <Box m={"4"}></Box>

      <Button mb={4}  borderRadius={"none"} colorScheme="red" width={"100%"}>
         <LoadingModal />
      </Button>
    </Box>
  );
};

export default Total;
