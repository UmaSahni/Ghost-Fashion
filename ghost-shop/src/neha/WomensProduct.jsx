import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/WomenReducer/action";
import { WProductCard } from "./WProductCard";
import { Container, Flex, Grid, HStack, Stack, VStack } from "@chakra-ui/react";
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
    dispatch(getProducts(obj, "womenSection"));
  }, [location.search]);
  console.log(products);

  return (
    <Container maxW={"100%"} margin={"auto"}  >
      <Stack w={"90%"} h={"350px"} margin={"auto"} mb={"10px"}>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/801320230324143640.jpg?format=webp&w=1500&dpr=1.1"
          style={{ width: "100%", height: "100%" }}
        />
      </Stack>

      <HStack w={"90%"} h={"auto"} margin={"auto"} align={"flex-start"}>
        <VStack w={"20%"} h={"auto"} margin={"0"} mt={"30px"} >
          <Sidebar />
        </VStack>
            
            <HStack w={"80%"} h={"full"} margin={"auto"} >
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
                {products?.map((el) => (
                  <WProductCard {...el} />
                ))}
              </Grid>
              </HStack>

      </HStack>

    </Container>
  );
};

// https://whimsical-vintage-angelfish.glitch.me/womendresses
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   HStack,
//   Input,
//   Stack,
//   VStack,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";

// const categoryArray = [
//   "groceries",
//   "home-decoration",
//   "smartphones",
//   "laptops",
//   "skincare",
// ];

// const Sidebar = () => {
//   let [searchparams, setSearchparams] = useSearchParams();
//   let inital = searchparams.getAll("category");
//   let [category, setCategory] = useState(inital || []);
//   let orderinital = searchparams.get("order");
//   let [order, setOrder] = useState(orderinital || []);

//   let pageinital = searchparams.get("page");
//   let [page, setPage] = useState(pageinital || 1);

//   let searchinital = searchparams.get("q");

//   let [search, setSearch] = useState(searchinital || []);

//   const handlechange = (e) => {
//     if (e.target.checked) {
//       setCategory([...category, e.target.value]);
//     } else {
//       setCategory(category.filter((item) => item !== e.target.value));
//     }
//   };

//   const param = {
//     category,
//   };

//   useEffect(() => {
//     order && (param.order = order);
//     page && (param.page = page);
//     page && (param.limit = 10);
//     search && (param.q = search);
//     setSearchparams(param);
//   }, [category, order, page, search]);

//   return (
//     <Box m={4} border={"3px solid black"} h={"100vh"} p={4}>
//       <Stack w={"full"}>
//         {categoryArray.map((item, i) => (
//           <HStack key={i}>
//             <input
//               type={"checkbox"}
//               value={item}
//               onChange={handlechange}
//               checked={category.includes(item) ? true : false}
//             />
//             <label>{item}</label>
//           </HStack>
//         ))}
//         <hr />
//         <div onChange={(e) => setOrder(e.target.value)}>
//           <input
//             type="radio"
//             name="sort"
//             value="asc"
//             defaultChecked={order === "asc"}
//             style={{
//               backgroundColor: order === "asc" ? "green" : "white",
//               color: order === "asc" ? "white" : "black",
//               padding: "10px",
//               boxShadow: "md",
//               border: "none",
//               cursor: "pointer",
//             }}
//           />{" "}
//           Ascending <br />
//           <input
//             type="radio"
//             name="sort"
//             value="desc"
//             defaultChecked={order === "desc"}
//             style={{
//               backgroundColor: order === "desc" ? "green" : "white",
//               color: order === "desc" ? "white" : "black",
//               padding: "10px",
//               boxShadow: "md",
//               border: "none",
//               cursor: "pointer",
//             }}
//           />{" "}
//           Descending
//         </div>

//         <hr />

//         <div>
//           <h2>Page</h2>
//           <Button onClick={() => setPage(page - 1)} isDisabled={page == 1}>
//             prev
//           </Button>

//           <Button>
//             <h2>{page}</h2>
//           </Button>

//           <Button
//             onClick={() => setPage(+page + 1)}
//             isDisabled={page == Math.ceil(30 / 10)}
//           >
//             next
//           </Button>
//         </div>

//         <hr />
//         <h1>Search</h1>
//         <div>
//           <input
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//           />
//         </div>
//       </Stack>
//     </Box>
//   );
// };

// export default Sidebar;
