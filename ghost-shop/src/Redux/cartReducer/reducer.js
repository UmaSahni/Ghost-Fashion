import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  isLoading: true,
  isError: false,
  cart: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_TO_CART:
      return { ...state, isLoading: false, cart: [...state.cart,payload] };
    case REMOVE_FROM_CART:
      let item=state.cart.filter((item)=>item.id!=payload)
      return { ...state, isLoading: false, cart: [...item] };

    default:
      return state;
  }
};
