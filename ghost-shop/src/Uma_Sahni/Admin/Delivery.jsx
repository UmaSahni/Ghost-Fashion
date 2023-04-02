import React, { useEffect, useState } from "react";
import PageDesign from "./PageDesign";
import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProductDetails,
  GetProductDetails,
} from "../../Redux/AdminReducer/action";
import Timer from "./Timer";

const Delivery = () => {
  const store = useSelector((store) => store.adminReducer.detail);
  console.log(store, "This is Store");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProductDetails());
  }, []);

  const handleDelete = (id) => {
    dispatch(DeleteProductDetails(id)).then((res) => {
      dispatch(GetProductDetails()).then(() =>
        alert("Product Deleted Successfully")
      );
    });
  };
  return (
    <div style={{ backgroundColor: "#fbfbfb" }}>
      <PageDesign>
        {store.length > 0 &&
          store.map(
            ({
              street,
              state,
              city,
              zipcode,
              number,
              name,
              randomTime,
              id,
            }) => {
              return (
                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                  bg={"white"}
                  margin={"4"}
                  _hover={{ boxShadow: "md", cursor: "pointer" }}
                >
                  <VStack spacing="4" p="4">
                    <Box w="100%">
                      <Text fontSize="lg" fontWeight="bold">
                        Delivery Address
                      </Text>
                      <Text>
                        {" "}
                        {state} {city} {street} - {zipcode}{" "}
                      </Text>
                      <Text>
                        {" "}
                        Customer Name - <b>{name}</b>{" "}
                      </Text>
                      <Text> Card Number - {number}</Text>
                    </Box>
                    <Divider />
                    <Text>Time Left for Delivery</Text>
                    <Timer duration={randomTime} />
                    <Box w="100%">
                      <Text fontSize="lg" fontWeight="bold">
                        Product Details
                      </Text>
                      <VStack align="flex-start" spacing="2">
                        <Text fontWeight="bold">{"productName"}</Text>
                        <Text>{"productDescription"}</Text>

                        <HStack justify="space-between" w="100%">
                          <Badge
                            colorScheme="green"
                            fontSize="md"
                            fontWeight="bold"
                          >
                            {"productPrice"}
                          </Badge>
                          <Box>
                            <Text fontSize="sm" fontWeight="bold">
                              In stock
                            </Text>
                            <Button
                              colorScheme="red"
                              onClick={() => handleDelete(id)}
                            >
                              Delete
                            </Button>
                          </Box>
                        </HStack>
                      </VStack>
                    </Box>
                  </VStack>
                </Box>
              );
            }
          )}
      </PageDesign>
    </div>
  );
};

export default Delivery;
