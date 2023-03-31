import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const WProductCard = ({ images, product, price, category, id }) => {
  console.log(images);
  return (
    <Box border={"2px solid black"} gap="20px"  >
      <img
        src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}
        alt="image"
        style={{ width: "100%", height: "300px" }}
      />

      <h3>{product}</h3>
      <h3>{id}</h3>
      <h2>Price: {price}</h2>
      <p>Category: {category.name}</p>
      <Button color={"green"}>Add to Cart</Button>
    </Box>
  );
};

{
  /* <Grid
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

</Grid> */
}
