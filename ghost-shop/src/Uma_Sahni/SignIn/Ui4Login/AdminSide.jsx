import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gitHubLogin } from "../../../Redux/authReducer/action";
import { useNavigate } from "react-router-dom";

// import {
//   signInWithGoogle,
//   signInWithGitHub,
//   LogOut,
//   authuser,
// } from "../../../Firebase";
const AdminSide = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const handleLogin = () =>{
  dispatch(gitHubLogin()).then(()=>navigate("/admin"))
}


  return (
    <div>
        
      <Box
        display={"flex"}
        margin="auto"
        width="80%"
        // border="1px solid red"
        justifyContent={"space-between"}
      >
      </Box>
      <Text m={"4"} fontSize={"sm"} fontWeight="bold">
        -OR-
      </Text>
      <Input placeholder="Enter Phone Number" margin={"auto"} width={"80%"} />
      <Button margin={"4"} width={"80%"} colorScheme="red" >
        Proceed
      </Button>
    </div>
  );
};

export default AdminSide;
