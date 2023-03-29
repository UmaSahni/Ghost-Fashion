import { Box, Button, Image , Input, Text} from "@chakra-ui/react";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { signInWithGoogle, signInWithGitHub, authuser } from "../Firebase";
const UserSide = () => {
 
    return (
    <div>
      <Box
        display={"flex"}
        margin="auto"
        width="80%"
        // border="1px solid red"
        justifyContent={"space-between"}
      >
        <Button onClick={signInWithGoogle} width={"45%"} border={"1px solid gray"} bg={"#ffffff"}>
          <Image margin="1" width={"20%"}  src="./google.svg" />
           Google
        </Button> 
        <Button onClick={signInWithGitHub} width={"45%"} border={"1px solid gray"} bg={"#ffffff"}>
        <Image margin="1" width={"25%"}  src="./github.svg" />
          GitHub
        </Button>
      </Box>
      <Text m={"4"} fontSize={"sm"} fontWeight="bold" >
        -OR-
      </Text>
      <Input placeholder="Enter Phone Number" margin={"auto"} width={"80%"} />
      <Button margin={"4"} width={"80%"} colorScheme='red' >Proceed</Button>
    </div>
  );
};

export default UserSide;
