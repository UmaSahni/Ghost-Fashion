import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { MProductCard } from "./MProductCard";
import { Container, Flex, Grid, HStack, Stack, VStack } from "@chakra-ui/react";
import { Sidebar2 } from "./Sidebar2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
      _page: searchParams.get("page"),
      _limit: searchParams.get("page") && 8,
      q: searchParams.get("q"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj, "menSection"));
  }, [location.search]);
  console.log("products-",products);

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

      <HStack w={"90%"} h={"auto"} margin={"auto"} align={"flex-start"}>
        <VStack w={"20%"} h={"auto"} margin={"0"} mt={"15px"}>
          <Sidebar2 />
        </VStack>

        <HStack w={"80%"} h={"full"} margin={"auto"}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={30}
            w={"95%"}
            margin="auto"
            marginTop={7}
          >
            {products?.map((el, idx) => (
              <MProductCard key={idx} {...el} />
            ))}
          </Grid>
        </HStack>
      </HStack>
    </Container>
    <Footer/>
    </div>
  );
};

// https://whimsical-vintage-angelfish.glitch.me/womendresses
