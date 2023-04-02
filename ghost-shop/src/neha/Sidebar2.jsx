import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    Stack,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { useSearchParams } from "react-router-dom";
  
  const categoryArray = [
    "T-Shirts",
    "Shirts",
   ];
  
  export const Sidebar2 = () => {
    let [searchparams, setSearchparams] = useSearchParams();
    let inital = searchparams.getAll("category");
    let [category, setCategory] = useState(inital || []);
    let orderinital = searchparams.get("order");
    let [order, setOrder] = useState(orderinital || []);
  
    let pageinital = searchparams.get("page");
    let [page, setPage] = useState(pageinital || 1);
  
    let searchinital = searchparams.get("q");
  
    let [search, setSearch] = useState(searchinital || []);
  
    const handlechange = (e) => {
      if (e.target.checked) {
        setCategory([...category, e.target.value]);
      } else {
        setCategory(category.filter((item) => item !== e.target.value));
      }
    };
  
    const param = {
      category,
    };
  
    useEffect(() => {
      order && (param.order = order);
      page && (param.page = page);
      page && (param.limit = 10);
      search && (param.q = search);
      setSearchparams(param);
    }, [category, order, page, search]);
  
    return (
      <Box m={4} border={"2px solid darkgray"} h={"100vh"} p={4}
      maxW={{ base: "100%", md: "100%", lg: "100%" }}
      >
        <Stack w={"full"}>
          {categoryArray.map((item, i) => (
            <HStack key={i}>
              <input
                type={"checkbox"}
                value={item}
                onChange={handlechange}
                checked={category.includes(item) ? true : false}
              />
              <label>{item}</label>
            </HStack>
          ))}
          <hr />
          <div onChange={(e) => setOrder(e.target.value)}>
            <input
              type="radio"
              name="sort"
              value="asc"
              defaultChecked={order === "asc"}
              style={{
                backgroundColor: order === "asc" ? "green" : "white",
                color: order === "asc" ? "white" : "black",
                padding: "10px",
                boxShadow: "md",
                border: "none",
                cursor: "pointer",
              }}
            />{" "}
            Price: Low to High <br />
            <input
              type="radio"
              name="sort"
              value="desc"
              defaultChecked={order === "desc"}
              style={{
                backgroundColor: order === "desc" ? "green" : "white",
                color: order === "desc" ? "white" : "black",
                padding: "10px",
                boxShadow: "md",
                border: "none",
                cursor: "pointer",
              }}
            />{" "}
            Price: High to Low
          </div>
  
          <hr />
  
          <div>
            <h2>Page</h2>
            <Button onClick={() => setPage(page - 1)} isDisabled={page == 1} color={"rgb(225,27,35)"}>
              prev
            </Button>
  
            <Button color={"rgb(225,27,35)"}>
              <h2>{page}</h2>
            </Button>
  
            <Button
              onClick={() => setPage(+page + 1)}
              isDisabled={page == Math.ceil(60 / 10)}
              color={"rgb(225,27,35)"}
            >
              next
            </Button>
          </div>
  
          <hr />
          <h1>Search</h1>
          <div>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </Stack>
      </Box>
    );
  };
  
  
  