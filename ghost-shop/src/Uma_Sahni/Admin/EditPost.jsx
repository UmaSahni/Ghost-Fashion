import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuerySearch, getProduct } from "../../Redux/AdminReducer/action";
import ListProduct from "./ListProduct";


const EditPost = () => {
  const dispatch = useDispatch();
  const { isErrror, isLoading, product } = useSelector((store) => store.adminReducer);

const store = useSelector((store)=>store.adminReducer)

console.log(store)
  // console.log(product)
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("")
 
  
  
  useEffect(() => {
   dispatch(getProduct)
  }, []);


  const hnadleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(QuerySearch(query));
  }, [query]);

  const handleChange = (e) =>{
  setCategory(e.target.value)
  
  }
  const ref = useRef()
useEffect(()=>{
ref.current.focus()
},[])
  return (
    <div >
     
      <Heading size={"md"}>Edit Your Products From Here</Heading>
      <form>
        <Input
        m="3"
          width={"50vw"}
          onChange={hnadleSearch}
          placeholder="Search From Here"
          ref={ref}
        />
      </form>
    

      {isLoading ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          margin="auto"
          height={"100vh"}
        >
          {" "}
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_zjihqths.json"
            background="transparent"
            speed="2"
            style={{ width: "100px", height: " 100px" }}
            loop
            autoplay
          >
           
          </lottie-player>
           Your Page is loading please wait!!
        </Flex>
      ) : (
        product.map((e) => {
          return <ListProduct key={e.id} {...e} />;
        })
      )}
    </div>
  );
};

export default EditPost;
