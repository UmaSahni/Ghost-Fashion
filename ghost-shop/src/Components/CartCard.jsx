
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Select,
    Text,
    Stack,
  } from "@chakra-ui/react";

import React from "react";

const CartCard = ({images,price,exclusivePrice,category}) => {
    console.log(images)
  return (
    <>
      <Box
        border={"1px"}
        p="20px"
        borderColor="gray.300"
        borderRadius={"5px"}
        boxShadow="md"
      >
        <HStack height={"200px"}>
          <Box height={"100%"} width={"25%"}>
            <Image
              borderRadius={"5px"}
              boxShadow="md"
              height="100%"
              src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}?format=webp&w=376&dpr=1.0`}
              alt="dummy"
            />
          </Box>
          <Box height={"100%"} width={"70%"}>
            <Flex justifyContent={"space-between"}>
              <Heading
                align="left"
                // mt={{ base: "10px", md: "0px" }}
                fontSize={"16px"}
              >
                The Simpsons: Expressions
              </Heading>
              <Box>
                <HStack>
                  <Text fontSize={"16px"} fontWeight={"semibold"} align="left">
                    ₹ {exclusivePrice}
                  </Text>
                  <Text
                    align="left"
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                    }}
                  >
                    ₹ {price}
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"14px"} my={"8px"} align="left" color={"gray"}>
                {category.name}
              </Text>
              <Text align="left" color={"red"} fontSize={"14px"}>
                {"20% OFF"}
              </Text>
            </Flex>
            <HStack>
              <Select
                my={"8px"}
                mr={"10px"}
                width="120px"
                height="35px"
                fontSize={"13px"}
                fontWeight="bold"
                placeholder={`Size:m`}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </Select>
              <Select
                m={"10px"}
                width="120px"
                height="35px"
                fontSize={"13px"}
                fontWeight="bold"
                placeholder="Qty:1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </HStack>
          </Box>
        </HStack>
        <Stack
          w={"75%"}
          ml="25%"
          borderTop={"1px"}
          borderColor="gray.300"
          direction="row"
          spacing={4}
          justifyContent="end"
          pt={"10px"}
        >
          <Button size="sm" colorScheme="red" variant="outline">
            Remove
          </Button>
          <Button size="sm" variant="outline" colorScheme="teal">
            Move To Wishlist
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CartCard;
