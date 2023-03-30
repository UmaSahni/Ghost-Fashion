<<<<<<< HEAD
import { PRODUCT_FAILURE, PRODUCT_REQUEST,PRODUCT_SUCCESS } from "./actionTypes";

const initialState = {
     isLoading: false,
     isError: false,
    products: [],
};
export const reducer = (state = initialState, {type, payload}) => {
       switch(type){
          case PRODUCT_REQUEST: 
            return {...state, isLoading: true}
          case PRODUCT_SUCCESS: 
            return {...state, isLoading: false, products: payload}
          case PRODUCT_FAILURE: 
            return {...state, isLoading: false, isError: true}
         
          default:
            return state;
       }
};
=======

import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
>>>>>>> bf80b955044215750607f61a3388798ed975e314
