import { Box, Button, FormLabel, Image, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../../Redux/authReducer/action";

// ! This is Login Page

const AdminSide = () => {
   const toast = useToast()

  const [state, setState] = useState({ email: "", password: "", name:"" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = () => {
    console.log(state)
    // & Data is dispatched here
    dispatch(login(state)).then((res)=>{
      console.log(res.status)
       if(res.status == 200){
          toast({
          title: 'Login successfull',
          description: "Welcome back ",
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
        })
        console.log(location)
        navigate(location.state)
        }
      if(res.response.status == 401){
         toast({
          title: 'Wrong Information',
          description: "The Information provided is not correct please check it once",
          status: 'warning',
          duration: 9000,
          position: 'top',
          isClosable: true,
        })
      }
      if(res.response.status == 400){
         toast({
          title: 'Server is Down',
          description: "Due to heavy traffic sometime server's response is slow. You can wait for some time or try after a while.",
          status: 'info',
          duration: 9000,
          position: 'top',
          isClosable: true,
        })
      }
      if(res.response.status == 402){
          toast({
          title: 'User Not Found',
          description: "We did not find any user by this credentials. If this is by mistake then kindly please signup first",
          status: 'warning',
          duration: 9000,
          position: 'top',
          isClosable: true,
        })
       
      }
    }).catch((res)=>{
      console.log(res)
    })
  };
  
  
  const handleChange = (e) =>{
   const {value, name} = e.target
   setState((pre)=>({...pre, [name]:value}))
  }

  return (
    <div>
      <Box
        display={"flex"}
        margin="auto"
        width="80%"
        // border="1px solid red"
        justifyContent={"space-between"}
      ></Box>
       <FormLabel>
        Name
        <Input placeholder="Enter Your Name" margin={"auto"} name="name" value={state.name}  onChange={(e)=>handleChange(e)} />
      </FormLabel>
      
      <FormLabel>
        Email Address
        <Input placeholder="Enter Email Address" margin={"auto"} name="email" value={state.email}  onChange={(e)=>handleChange(e)} />
      </FormLabel>

      <FormLabel>
        Password
        <Input placeholder="Enter Password" margin={"auto"} name="password" value={state.password} onChange={(e)=>handleChange(e)} />
      </FormLabel>
    
      <Button onClick={handleLogin} margin={"4"} width={"80%"} colorScheme="red">
        Proceed
      </Button>
     
    </div>
  );
};

export default AdminSide;
