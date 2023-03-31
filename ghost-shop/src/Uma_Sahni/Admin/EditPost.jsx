import { Box, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/AdminReducer/action'
import ListProduct from './ListProduct'
import { useDebounce } from '../Hooks/useDebounce'

const GetData = (Search) =>{
    const URL = `https://whimsical-vintage-angelfish.glitch.me/womendresses?q=${Search}`
   return  fetch(URL)
}

const EditPost = () => {
 const dispatch  = useDispatch()
 const {isErrror, isLoading, product} = useSelector((store)=>store.adminReducer)
 const [state, setState] = useState([])

useEffect(()=>{
dispatch(getProduct)
 },[])

let {current:id} = useRef(null)
const handleSearch = (e) =>{


 let search = e.target.value
     id && clearTimeout(id)
     id = setTimeout(() => {
        GetData(search).then((res)=>res.json()).then((data)=>setState(console.log(data)))
     }, 1000);
}
console.log(state, "This is State")

 return (
    <div>
      <Heading size={"md"} >Edit Your Post From Here</Heading>
      <Input onChange={handleSearch} placeholder='Search From Here' />
     {
       isLoading ? <Flex justifyContent={"center"} alignItems={"center"} margin="auto" height={"100vh"} > <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_zjihqths.json"  background="transparent"  speed="2"  style={{width: "300px", height:" 300px"}} loop  autoplay></lottie-player></Flex> :
       product.map((e)=> {
        return (
         <ListProduct key={e.id} {...e} />
        )
       })
     }
    </div>
  )
}

export default EditPost