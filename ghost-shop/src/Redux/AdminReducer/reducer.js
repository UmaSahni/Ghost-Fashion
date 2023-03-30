import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, Get_Product_Success, Patch_Product_Success } from "./actionTypes";

const initialState = {
    isLoading: false,
    isErrror: false,
    product:[]
}


export const reducer = (state = initialState , {type, payload}) =>{
    switch(type){
        case ADD_PRODUCT_REQUEST :{
            return {...state, isLoading: true}
        }
        case ADD_PRODUCT_SUCCESS :{
            return {...state, isLoading: false, isErrror: false}
        }
        case ADD_PRODUCT_FAILURE :{
            return {...state, isLoading: false, isErrror: true}
        }
        case Get_Product_Success:{
            return {...state, isLoading: false, product:payload}
        }
        case Patch_Product_Success : {
            return {...state, isLoading:false, }
        }
        default :{
            return state
        }
    }
}