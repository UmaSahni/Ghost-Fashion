import React from "react";
import GooglePage from "../Uma_Sahni/SignIn/GooglePage";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <div>
      <Box zIndex={100}>
        <Navbar />
      </Box>

      <GooglePage />
      <Footer />
    </div>
  );
};

export default Login;
