import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS, Get_Product_Success, Patch_Credit_Card, Patch_Product_Success, Post_Address_Success, Query_Product_Success } from "./actionTypes";

const initialState = {
    isLoading: false,
    isErrror: false,
    product:[],
    address:{},
    detail:[]
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
        case Query_Product_Success :{
             return {...state, isLoading: false, product:payload}
        }
        case Post_Address_Success : {
            return {...state, isLoading:false,address:payload }
        }
        case Patch_Credit_Card : {
            return {...state, isLoading:false, }
        }
        case GET_PRODUCT_DETAILS:{
            return {...state, isLoading:false,detail:payload }
        }
        case DELETE_PRODUCT_DETAILS_SUCCESS:{
            return {...state, isLoading:false}
        }
        default :{
            return state
        }
    }
}