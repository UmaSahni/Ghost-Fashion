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
  Box
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AddProduct } from "../../Redux/AdminReducer/action";
const initialState = {
  product: "",
  images: [],
  category: {
    name:""
  },
  price:"",
  prodQty: ""
};

const NewPost = () => {
  const [price, setPrice] = useState(0);
  
  const [success, setSuccess] = useState(false)

useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);


  const store = useSelector((store)=>store.adminReducer)
  // console.log(store)
  const dispatch = useDispatch ()
const handleChange = (value) => {
  setPrice(value);
  setData(prevData => ({
    ...prevData,
    price: value*10
  }));
};

  const [data, setData] = useState(initialState);

  const handleonChange = (e) => {
  const { name, value } = e.target;
  // console.log(value)
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
  } else {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(data);
dispatch(AddProduct(data)).then((res)=>{
   setData(initialState);
   setSuccess(true)
})
  setData(initialState);
};

  return (
    <div style={{backgroundColor:"#fbfbfb"}} >
      <form onSubmit={handleSubmit}>
        <Input
          value={data.product}
          name="product"
          onChange={handleonChange}
          placeholder="Product Title"
          width={"50vw"}
       
          m="4"
        />
        <Input
          value={data.images}
          name="images"
          onChange={handleonChange}
          placeholder="Product Images"
          width={"50vw"}
          rows={3}
           m="4"
        />
        <Flex m="4" >
        <Select
          width={"50vw"}
          value={data.category.name}
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
        </Flex>

        <Flex m="4" >
        <Flex margin={"auto"} width={"50vw"} >
          <NumberInput maxW="100px" mr="2rem" value={price*10} onChange={handleChange}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Slider flex="1" focusThumbOnChange={false} value={price} onChange={handleChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={price*10} />
          </Slider>
        </Flex>
        </Flex>
        <Input name="prodQty" onChange={handleonChange} margin={"auto"} width={"50vw"} placeholder="Total No. of prodQty" />
        <br/>
        <Button m={"4"} colorScheme='telegram' type="submit">Submit</Button>
      
       {
        success &&  <Alert status='success'>
        <AlertIcon />
        Data uploaded to the server. Fire on!
        </Alert>
       }
       
      </form>
    </div>
  );
};

export default  NewPost;
