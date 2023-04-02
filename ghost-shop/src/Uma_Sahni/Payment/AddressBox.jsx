import React, { useState } from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';

const AddressBox = () => {
  const [addressInput, setAddressInput] = useState(
    {
        street:"",
        state:"",
        city:"",
        zipcode:""
    }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressInput((prevAddressInput) => ({
      ...prevAddressInput,
      [name]: value,
    }));
  };

  const handleUpdateAddress = () => {
    console.log('Updated address:', addressInput);
    // You can replace the console.log statement with your own logic to update the address in the app state or database.
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
