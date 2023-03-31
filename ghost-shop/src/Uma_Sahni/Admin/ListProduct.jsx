import { Flex, Image, Box, Text, Button, AlertDescription, AlertTitle, AlertIcon, Alert } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DeleteProduct, getProduct } from "../../Redux/AdminReducer/action";

const ListProduct = ({ id, product, price, images, sortOrder }) => {
 const [time, setTime] = useState(false)
 useEffect(()=>{
    let interID = setTimeout(()=>{
        setTime(true)
    }, 3000)
    return clearInterval(interID)
 }, [time])
    const dispatch = useDispatch()
 
 const handleDelete = () =>{
    dispatch(DeleteProduct(id))
    .then((res)=>{
        dispatch(getProduct)
        .then(()=>{
          alert("Product Deleted Successfully")
        })
        console.log("success")
    })
 }

// Edit Product

const handleEdit = (id) =>{

}

    return (
    <Box
      p={4}
      mb={4}
      border="1px solid #E2E8F0"
      borderRadius={4}
      backgroundColor="#fffff"
      _hover={{ boxShadow: "md", cursor: "pointer" }}
    >
        <Box border={"1px solid gray"}  justifyContent="space-between" display={"flex"} alignItems="center" > 
          <Image
            width={20}
            src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${images[0]}`}
            mr={4}
          />
          <Text  fontSize="lg"> Product-id : {id}</Text>
            <Text fontSize="lg">Title : {product}</Text>
             <Text color="green" fontSize="lg">Total Order: {sortOrder}</Text>
            <Text  fontSize="lg" color="gray.500">
             Price: {price}
            </Text>
            <Link to={`/admin/${id}`} >
             <Button onClick={handleEdit} >Edit</Button>
            </Link>
           
          <Button onClick={handleDelete} >Delete</Button>
        </Box>
    </Box>
  );
};

export default ListProduct;
