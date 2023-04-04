import React, { useEffect, useState } from "react";
import PageDesign from "./PageDesign";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
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
  const {cart,isLoading} = useSelector((store)=>store.cartReducer)
  // console.log(cart, "This is Store");
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
              cart

            }) => {
              // console.log(cart, "This is product name")
              let total  = 0
          for(let el of cart){
            total+=el.exclusivePrice
            
          }
          
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
                    <Timer duration={randomTime} id={id} />
                    <Box w="100%">
                      <Text fontSize="lg" fontWeight="bold">
                        Product Details
                      </Text>
                      <VStack align="flex-start" spacing="2">
                        <Box fontWeight="bold">{
                          cart.map(({product, exclusivePrice, images,category })=>{
                           
                           return <Box>  <Flex m="4" ><Image width={100} height={100} src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}/ > 
                           <Box ml={4} textAlign={"left"}  >
                             <Flex color={"GrayText"} > <Text color={"black"} >Title -</Text>  {product}</Flex>
                             <Flex color={"GrayText"} > <Text color={"black"} >Category -</Text>  {category.name}</Flex>
                             <Flex color={"GrayText"} > <Text color={"black"} >Price -</Text>  {exclusivePrice}</Flex>
                           </Box>
                             </Flex>
                             <Text></Text>
                             </Box>
                          })
                        }</Box>
                        
                        <HStack justify="space-between" w="100%">
                          <Badge
                            colorScheme="green"
                            fontSize="md"
                            fontWeight="bold"
                          >
                            

                         { `Total Price -
                            ${ total}`}
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
