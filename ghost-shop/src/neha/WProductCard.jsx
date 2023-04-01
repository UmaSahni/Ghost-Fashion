import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const WProductCard = ({ images, product, price, category, id }) => {
  console.log(images);
  
  

  return (
    <Box  textAlign={"left"} color={"darkgray"} fontStyle={"bold"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"} >
      <img
        src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}
        // src={images[0]}
        alt="image"
        style={{ width: "100%", height: "320px" }}
      />

      <h6>{product}</h6>
      <hr/>
      {/* <h3>{id}</h3> */}
      <h2 style={
        {color: "gray",
        fontWeight: "bold"}
      } >Rs. {price}</h2>
      <p>{category.name}</p>
      {/* <Button color={"green"}>Add to Cart</Button> */}
    </Box>
  );
};

