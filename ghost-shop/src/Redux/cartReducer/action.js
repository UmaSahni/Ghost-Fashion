import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const removeFromCartAction = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const AddToCart =
  (id, endpoint = "allproducts") =>
  (dispatch) => {
    axios
      .get(`https://whimsical-vintage-angelfish.glitch.me/${endpoint}/${id}`)
      .then((res) => {
        console.log(res.data)
        dispatch(addToCartAction(res.data));
      });
  };

