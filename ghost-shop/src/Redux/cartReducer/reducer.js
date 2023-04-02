import { ADD_TO_CART } from "./actionTypes";

const initialState = {
  isLoading: true,
  isError: false,
  cart: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_TO_CART:
      return { ...state, isLoading: false, cart: [...state.cart,payload],cartlength:state.cart.length };

    default:
      return state;
  }
};
