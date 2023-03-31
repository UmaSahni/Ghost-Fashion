import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Select,
  Textarea,
  Alert,
  AlertIcon,
  Heading,
  Box,
  Image
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AddProduct, PatchProduct, getProduct } from "../../Redux/AdminReducer/action";
import { useParams } from "react-router-dom";


const SingleEdit = () => {
const {id} = useParams()
const [price, setPrice] = useState(0);
const [success, setSuccess] = useState(false)
const dispatch = useDispatch ()
const {product, isErrror} = useSelector((store)=>store.adminReducer)
const [data, setData] = useState({});

useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
}, [success]);

const handleChange = (value) => {
  setPrice(value);
  setData(prevData => ({
    ...prevData,
    price: value
  }));
};

  const handleonChange = (e) => {
  const { name, value } = e.target;
  if (name === "category") {
    setData((prevData) => ({
      ...prevData,
      category: { name: value },
    }));
  } else if (name === "images") {
    setData((prevData) => ({
      ...prevData,
      images: [value],
    }));
  } 
  else {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};


console.log(product)
useEffect(()=>{
const data = product.find((e)=>e.id == id)
setData(data)
},[])
 
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(data);
 dispatch(PatchProduct(data,id))
 .then(()=>{
  setSuccess(true)
 })

};
  return (
    <div>
      <Heading> Product Id: {id}</Heading>
    
      
{
  data && <form onSubmit={handleSubmit}>
        <Input
          value={data.product}
          name="product"
          onChange={handleonChange}
          placeholder="Product Title"
          width={"50vw"}
        />
        <br/>
        <Input
          value={data.images}
          name="images"
          onChange={handleonChange}
          placeholder="Product Images"
          width={"50vw"}
          rows={3}
        />
         <br/>
        <Select
          width={"50vw"}
          value={data.category}
          name="category"
          placeholder="Select Category"
          onChange={handleonChange}
          margin="auto"
        >
          <option value="Polo Dresses">Polo Dresses</option>
          <option value="Women T-Shirt Dresses">Women T-Shirt Dresses</option>
          <option value="Drop Shoulder Pocket Dresses">Drop Shoulder Pocket Dresses</option>
          <option value="Pocket Dresses">Pocket Dresses</option>
          <option value="Women Shirt Dresses">Women Shirt Dresses</option>
          <option value="Women Gathered Dresses">Women Gathered Dresses</option>
          <option value="Women Rugby Polo Dresses">Women Rugby Polo Dresses</option>
          
        </Select>
       
        <Flex margin={"auto"} width={"50vw"} >
          <NumberInput maxW="100px" mr="2rem" value={data.price} onChange={handleChange}>
            <NumberInputField max={10000} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Slider max={10000} flex="1" focusThumbOnChange={false} value={data.price} onChange={handleChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={data.price} />
          </Slider>
        </Flex>
        <Input name="prodQty" 
        onChange={handleonChange} 
        margin={"auto"} width={"50vw"} value={data.prodQty} placeholder="Total No. of Product Quantity" />
        <br/>
        <Button type="submit">Submit</Button>
      
       {
        success &&  <Alert margin={"auto"} width={"50%"} status='success'>
        <AlertIcon />
        Product is Updated Successfully!!
        </Alert> 
       }
       
      </form>
}

      
    </div>
  );
};

export default SingleEdit;
