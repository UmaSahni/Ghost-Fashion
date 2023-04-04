import React, { useState } from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { PostAddress } from '../../Redux/AdminReducer/action';
 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomTime = getRandomInt(90000) 
const AddressBox = () => {
  const [addressInput, setAddressInput] = useState(
    {
        street:"",
        state:"",
        city:"",
        zipcode:""
    }
  );
 

  const dispatch = useDispatch()
  const cart = useSelector((store)=>store.cartReducer.cart)
   console.log(cart)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressInput((prevAddressInput) => ({
      ...prevAddressInput,
      randomTime,
      cart,
      [name]: value,
    }));
  };
 
  
  const handleUpdateAddress = () => {
    console.log('Updated address:', addressInput);
    dispatch(PostAddress(addressInput))
   
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      mb={4}
      
    >
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
     Add Your   Address
      </Text>
      <Input
        mb={2}
        name="street"
        value={addressInput.street}
        onChange={handleInputChange}
        placeholder="Street"
       
      />
      <Input
        mb={2}
        name="state"
        value={addressInput.suite}
        onChange={handleInputChange}
        placeholder="State"
      />
      <Input
        mb={2}
        name="city"
        value={addressInput.city}
        onChange={handleInputChange}
        placeholder="City"
      />
      <Input
        mb={2}
        name="zipcode"
        value={addressInput.zipcode}
        onChange={handleInputChange}
        placeholder="Zipcode"
      />
      <Button onClick={handleUpdateAddress}>Save Address</Button>
    </Box>
  );
};

export default AddressBox;
