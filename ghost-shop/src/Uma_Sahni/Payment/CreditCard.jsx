import { Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }
console.log(state)
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <Input
         width={"20rem"}
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <br />
       <Input
       width={"20rem"}
       type="text"
       name="name"
       placeholder="Name"
       value={state.name}
       onChange={handleInputChange}
       onFocus={handleInputFocus}
       />
       <br />
       <Flex margin={"auto"} w={"300px"} justifyContent={"space-between"} >
       <Input
       width={""}
       type="number"
       name="expiry"
       placeholder="Valid Thru"
       value={state.expiry}
       onChange={handleInputChange}
       onFocus={handleInputFocus}
       />
  
       <Input
       width={""}
       type="password"
       name="cvv"
       placeholder="CVV"
       value={state.cvv}
       onChange={handleInputChange}
       onFocus={handleInputFocus}
       />
       </Flex>
       <Button>Comfirm</Button>
      </form>
    </div>
  );
}

export default PaymentForm;