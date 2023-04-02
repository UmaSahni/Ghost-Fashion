import axios from "axios"
// import AlertBox from "../../Components/AlertBox"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_DETAILS_SUCCESS, Delete_Product_Success, GET_PRODUCT_DETAILS, Get_Product_Success, Patch_Credit_Card, Post_Address_Success, Query_Product_Success } from "./actionTypes"

export const AddProduct = (productData) => (dispatch)=> {
    dispatch({type:ADD_PRODUCT_REQUEST})
    
  return  axios.post("https://whimsical-vintage-angelfish.glitch.me/womendresses", productData )
    .then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS, payload:res})
        
    })
    .catch((err)=>dispatch({type:ADD_PRODUCT_FAILURE}))
}
// https://whimsical-vintage-angelfish.glitch.me/boyfriend
export const getProduct = (dispatch) =>{
    dispatch({type: ADD_PRODUCT_REQUEST})
 return  axios.get(`https://whimsical-vintage-angelfish.glitch.me/womendresses?_page=1&_limit=30` )
    .then((res)=>{
        console.log(res)
        dispatch({type:Get_Product_Success, payload:res.data})
    })
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const PatchProduct = (dataobj, id) =>(dispatch)=>{
dispatch({type:ADD_PRODUCT_REQUEST})
 return axios.patch(`https://whimsical-vintage-angelfish.glitch.me/womendresses/${id}`, dataobj)
.then(()=> {
    dispatch({type:PatchProduct, payload:dataobj})
})
.catch({type:ADD_PRODUCT_REQUEST})
}

export const DeleteProduct = (id) =>(dispatch) =>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    return axios.delete(`https://whimsical-vintage-angelfish.glitch.me/womendresses/${id}?_page=1&_limit=30`)
    .then(()=>dispatch({type: Delete_Product_Success}))
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const QuerySearch = (query) =>(dispatch) =>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    return axios.get(`https://whimsical-vintage-angelfish.glitch.me/womendresses/?q=${query}&_page=1&_limit=30`)
    .then((res)=>dispatch({type:Query_Product_Success, payload:res.data}))
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const PostAddress = (payload)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    return axios.post("https://whimsical-vintage-angelfish.glitch.me/user", payload)
    .then((res)=>dispatch({type:Post_Address_Success, payload:res.data}))
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const PatchCreditCard = (dataObj,id) =>(dispatch) =>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    return axios.patch(`https://whimsical-vintage-angelfish.glitch.me/user/${id}`, dataObj)
    .then(()=>dispatch({type:Patch_Credit_Card, payload:dataObj}))
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

// export const  =  (dispatch)=>{
//     dispatch({type:ADD_PRODUCT_REQUEST})
//    return  axios.get(``)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch({type:GET_PRODUCT_DETAILS,  payload:res.data})
//     })
//     .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
// }

export const GetProductDetails = () => (dispatch) =>{
    dispatch({type: ADD_PRODUCT_REQUEST})
 return  axios.get(`https://whimsical-vintage-angelfish.glitch.me/user` )
    .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_PRODUCT_DETAILS, payload:res.data})
    })
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}

export const DeleteProductDetails = (id) =>(dispatch) =>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    return axios.delete(`https://whimsical-vintage-angelfish.glitch.me/user/${id}`)
    .then(()=>dispatch({type: DELETE_PRODUCT_DETAILS_SUCCESS}))
    .catch(()=>dispatch({type:ADD_PRODUCT_FAILURE}))
}