import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { WProductCard } from "./WProductCard";
import { Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const WomensProduct = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((store) => store.WomenReducer);

  console.log(searchParams.getAll("category"));

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);
    console.log(products)

  return (
    <Container maxW={"100%"}
    margin={"auto"}
    >
      <Stack w={"90%"} h={"350px"} margin={"auto"} mb={"10px"} >
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/801320230324143640.jpg?format=webp&w=1500&dpr=1.1" 
        style={{width:"100%",height:"100%"} }/>
      </Stack>

      <HStack w={"90%"} h={"800px"}  margin={"auto"} >
        <VStack
          w={"20%"}
          h={"full"}
          margin={"auto"}
          border={"1px solid black"}
        >
          <Sidebar/>
        </VStack>

        <Flex w={"80%"} h={"full"} margin={"auto"} border={"1px solid black"} flexWrap="wrap" justifyContent={"space-around"} >
          {
            products?.map((el) => <WProductCard {...el} />)
          }
        </Flex>

      </HStack>
    </Container>
  );
};


// https://whimsical-vintage-angelfish.glitch.me/womendresses