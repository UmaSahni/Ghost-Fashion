import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { MProductCard } from "./MProductCard";
import { Container, Flex, Grid, HStack, Stack, VStack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const MensProduct = () => {
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
    dispatch(getProducts(obj, "menSection"));
  }, [location.search]);
  console.log(products);

  return (
    <div>
      <Navbar />
      <Container maxW={"100%"} margin={"auto"}>
        <Stack w={"90%"} h={"350px"} margin={"auto"} mb={"10px"}>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020230317192609.jpg?format=webp&w=1500&dpr=1.1"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>

        <HStack w={"90%"} h={"800px"} margin={"auto"}>
          <VStack w={"20%"} h={"full"} margin={"auto"} border={"1px solid black"}>
            <Sidebar />
          </VStack>

          <HStack w={"80%"} h={"full"} margin={"auto"} border={"1px solid black"}>
            <Grid
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
              gap={30}
              w={"95%"}
              margin="auto"
            // marginTop={7}
            >
              {products?.map((el) => (
                <MProductCard {...el} />
              ))}
            </Grid>
          </HStack>
        </HStack>
      </Container>
    </div>
  );
};

// https://whimsical-vintage-angelfish.glitch.me/womendresses
