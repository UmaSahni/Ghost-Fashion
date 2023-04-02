import axios from "axios";
import { ADD_TO_CART } from "./actionTypes";

const addToCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  };
};

export const addToCart =(id, endpoint = "allproducts") =>(dispatch) => {
    axios
      .get(`https://whimsical-vintage-angelfish.glitch.me/${endpoint}/${id}`)
      .then((res) => {
        dispatch(addToCartAction(res.data))
      })
  };
