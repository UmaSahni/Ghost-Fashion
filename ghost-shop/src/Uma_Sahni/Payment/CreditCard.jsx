import { Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useDispatch, useSelector } from 'react-redux';
import { PatchCreditCard } from '../../Redux/AdminReducer/action';
const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
    focus: '',
  });
  const dispatch = useDispatch()
  const store = useSelector((store)=>store.adminReducer.address.id)
 
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  

  const handleSubmit = ()=>{

    dispatch(PatchCreditCard(state,store))
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
          m={1}
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
       m={1}
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
       m={1}
       />
  
       <Input
       width={""}
       type="password"
       name="cvv"
       placeholder="CVV"
       value={state.cvv}
       onChange={handleInputChange}
       onFocus={handleInputFocus}
       m={1}
       />
       </Flex>
       <Button colorScheme='red' onClick={handleSubmit} >Comfirm</Button>
      </form>
    </div>
  );
}

export default PaymentForm;