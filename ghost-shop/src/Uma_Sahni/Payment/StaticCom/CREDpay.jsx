import { Box, Flex, Image, Radio, Text } from "@chakra-ui/react";
import React from "react";

const CREDpay = () => {
  return (
    <div>
      <Box  padding={"5"} >
        <Flex justifyContent={"space-between"} >
            <Flex>
        <Image width={"30px"} src="https://d704ayip06922.cloudfront.net/prod-rewards-assets-data/8271e0702a8911ecb92ec74c5090c4d1.png" />
        <Text>CRED pay</Text>
            </Flex>
         <Box>
        <Radio isDisabled />
         </Box>
        </Flex>
       <Text m={1} color="gray" textAlign={"start"} size={"2"} >You're not eligible for this payment option</Text>
      </Box>
    </div>
  );
};

export default CREDpay;
