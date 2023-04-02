import { Box, Button, Image,Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const MProductCard = ({ images, product, price, category, id }) => {
const navigate=useNavigate()
  // console.log(images);
const handleClick=()=>{
  navigate(`/details/${id}`)
  console.log(id);
}

  return (
    <Box onClick={handleClick} textAlign={"left"} color={"darkgray"} fontStyle={"bold"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}>

      <Image
        src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}
        // src={images[0]}
        alt="image"
        width={'90%'}
        h='320px'
        objectFit='cover'
      />

      <Text as='h6' isTruncated>{product}</Text>
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

