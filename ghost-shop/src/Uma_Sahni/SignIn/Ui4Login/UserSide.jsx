import { Input, FormLabel, useToast, FormControl, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { register } from "../../../Redux/authReducer/action";

// ! This is Sign Up page

const UserSide = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();

  const Initial = {
    name: "",
    email: "",
    password: "",
    gender: "",
    confimPassword:""
  };
  const [state, setState] = useState(Initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((pre) => ({ ...pre, [name]: value }));

  };

const matchPassword = state.password === state.confimPassword
  
const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register(state))
      .then((res) => {
        // console.log(res)
        if (res.status == 201) {
          toast({
            position: "top",
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
           if (res.status == 400) {
          toast({
            position: "top",
            title: "Account did not created.",
            description:
              "Sorry an error occured in server. We will fix it soon",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        }
      })
      .catch((err) => {
        
          toast({
            position: "top",
            title: "Account did not created.",
            description:
              "Sorry an error occured in server. We will fix it soon",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        
      });
    setState(Initial);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired >
        <FormLabel>Name </FormLabel>
        <Input
          name="name"
          type="text"
          value={state.name}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Name"
        />

        <FormLabel>Email address</FormLabel>
        <Input
          name="email"
          type="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Email Address"
        />
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="text"
          value={state.password}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Password"
        />
         <FormLabel> Confirm Password</FormLabel>
        <Input
          name="confimPassword"
          type="text"
          value={state.confimPassword}
          onChange={(e) => handleChange(e)}
          placeholder="Confirm Your Password"
        />
        {
          matchPassword  ? "" : <Text color={"red"} >Confirm Password is incorrect</Text>
        }
        <FormLabel>Gender</FormLabel>
        <Input
          name="gender"
          type="text"
          value={state.gender}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Gender"
        />
        </FormControl>
        <Input
          type="submit"
          margin={"4"}
          width={"80%"}
          bg="#e53e3e"
          color="white"
        ></Input>

      </form>
    </div>
  );
};

export default UserSide;
