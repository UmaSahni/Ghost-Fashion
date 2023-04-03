import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { WProductCard } from "./WProductCard";
import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Sidebar1 } from "./Sidebar1";

export const WomensProduct = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, isLoading } = useSelector((store) => store.WomenReducer);

  console.log("from women products ", searchParams.getAll("category"));

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
    dispatch(getProducts(obj, "womenSection"));
  }, [location.search]);
  // console.log(products);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Spinner
  //         thickness="4px"
  //         speed="0.65s"
  //         emptyColor="gray.200"
  //         color="blue.500"
  //         size="xl"
  //       />
  //     </>
  //   );
  // }

  return (
    <div>
      <Navbar />
      <Container maxW={"100%"} margin={"auto"}>
        <Stack w={"90%"} h={"350px"} margin={"auto"} mb={"10px"}>
          <img
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/801320230324143640.jpg?format=webp&w=1500&dpr=1.1"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>

        <HStack w={"90%"} h={"auto"} margin={"auto"} align={"flex-start"}>
          <VStack w={"20%"} h={"auto"} margin={"0"} mt={"15px"}>
            <Sidebar1 />
          </VStack>

          <HStack w={"80%"} h={"full"} margin={"auto"}>
            <Grid
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
              gap={30}
              w={"95%"}
              margin="auto"
              marginTop={7}
            >
              {(isLoading)?
                <>
                  <Spinner  
                  ml={"300px"}          
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </>:
                products?.map((el) => (
                  <WProductCard {...el} />
                ))

              }
            </Grid>
          </HStack>
        </HStack>
      </Container>
      <Footer />
    </div>
  );
};
