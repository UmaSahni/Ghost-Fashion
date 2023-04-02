import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";



export const getProducts = (paramObj,endpoint="allproducts") => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get(`https://whimsical-vintage-angelfish.glitch.me/${endpoint}`, paramObj)
    .then((res) => {
      console.log("action data",res.data);
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//get single product

export const getSingleProduct =  (id,endpoint="allproducts") => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  return axios
    .get(`https://whimsical-vintage-angelfish.glitch.me/${endpoint}/${id}`)
    .then((res) => {
      return(res.data);
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
