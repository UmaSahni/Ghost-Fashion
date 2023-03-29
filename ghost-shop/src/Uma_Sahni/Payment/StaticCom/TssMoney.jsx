import { Box, Flex, Image, Radio, Text } from "@chakra-ui/react";
import React from "react";

const TssMoney = () => {
  return (
    <Box
      p={"3"}
      alignItems={"center"}
      mt={"2"}
      marginBottom={"4"}
      height={"3rem"}
      bg="gray.200"
    >
      <Flex justifyContent={"space-between"}>
        <Flex>
          <Image
            height={"30px"}
            width={"30px"}
            src="https://tss-static-images.gumlet.io/icons/tss-money.png"
          />
          <Text>TSS Money</Text>
        </Flex>

        <Box>
          <Text textAlign={"end"}>(Balance: ₹ 0.00)</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TssMoney;
