import { HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { Sidebar } from "./Sidebar";

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
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <HStack w={"90%"}
    margin={"auto"}
    height={"800px"}
    >
        <VStack className="sidebar" 
        w={"20%"}
        height={"full"}
        border="1px solid black"
        ><Sidebar/>
        </VStack>

        <HStack className="mensproduct" 
        w={"80%"}
        height={"800px"}
        border="1px solid black"
        ></HStack>
      {/* {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })} */}
    </HStack>
  );
};




