import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReqresLogin, gitHubLogin, login } from "../../../Redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
// import {
//   signInWithGoogle,
//   signInWithGitHub,
//   LogOut,
//   authuser,
// } from "../../../Firebase";
const UserSide = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state);
  // const store = useSelector((store) => console.log(store.authReducer));
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(login()).then(() => navigate(location.state));
  };
  const handleLoginGit = () => {
    dispatch(gitHubLogin()).then((res) => navigate(location.state));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleReqLogin = () => {
    console.log(email, password);
    const obj = {
      email,
      password,
    };
    dispatch(ReqresLogin(obj)).then((res)=>navigate(location.state))
  };

  return (
    <div>
      <Box
        display={"flex"}
        margin="auto"
        width="80%"
        // border="1px solid red"
        justifyContent={"space-between"}
      >
        <Button
          onClick={handleClick}
          width={"45%"}
          border={"1px solid gray"}
          bg={"#ffffff"}
        >
          <Image margin="1" width={"20%"} src="./google.svg" />
          Google
        </Button>
        <Button
          onClick={handleLoginGit}
          width={"45%"}
          border={"1px solid gray"}
          bg={"#ffffff"}
        >
          <Image margin="1" width={"25%"} src="./github.svg" />
          GitHub
        </Button>
      </Box>
      <Text m={"4"} fontSize={"sm"} fontWeight="bold">
        -OR-
      </Text>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
        margin={"auto"}
        width={"80%"}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        margin={"auto"}
        width={"80%"}
      />
      <Button
        onClick={handleReqLogin}
        margin={"4"}
        width={"80%"}
        colorScheme="red"
      >
        Proceed
      </Button>
    </div>
  );
};

export default UserSide;
