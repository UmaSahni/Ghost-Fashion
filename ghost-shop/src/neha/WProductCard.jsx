import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const WProductCard = ({ images, product, price, category, id }) => {
  // console.log(images);
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/details/${id}`)
    console.log(id);
  }
  return (
    <Link to={`/details/${id}`}>
      <Box
      onClick={handleClick}
        textAlign={"left"}
        color={"darkgray"}
        fontStyle={"bold"}
        boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
        w={"90%"}
      >
        <Image
          src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}
          // src={images[0]}
          alt="image"
          width={'100%'}
          h='320px'
          objectFit='cover'
        />

        <Text as='h6' isTruncated>{product}</Text>
        <hr />
        {/* <h3>{id}</h3> */}
        <h2 style={{ color: "gray", fontWeight: "bold" }}>Rs. {price}</h2>
        <p>{category.name}</p>
        {/* <Button color={"green"}>Add to Cart</Button> */}
      </Box>
    </Link>
  );
};
