import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get(`https://whimsical-vintage-angelfish.glitch.me/boyfriend`, paramObj)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
