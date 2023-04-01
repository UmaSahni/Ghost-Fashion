import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { signInWithGoogle, signInWithGitHub, authuser } from "../../Firebase";
import UserSide from "./Ui4Login/UserSide";
import AdminSide from "./Ui4Login/AdminSide";
const GooglePage = () => {
  return (
    <Flex bg={"#e6e7e8"} height={"100vh"} alignItems={"center"}>
      <Box
        backgroundColor={"white"}
        border={"1px solid #cacaca"}
        margin={"auto"}
        width={"30rem"}
      >
        <Text m="4" color={"#3f3c3c"} fontWeight={"bold"} fontSize="sm">
          Login with The Ghost Fashion
        </Text>
        {/* <Box mb={"3"} margin={"auto"} width={"80%"} p="2" bg={"teal"} > <Text>Login To Access all Feature</Text>  </Box> */}
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>User</Tab>
            <Tab>Admin</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UserSide />
            </TabPanel>
            <TabPanel>
           <AdminSide/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default GooglePage;
