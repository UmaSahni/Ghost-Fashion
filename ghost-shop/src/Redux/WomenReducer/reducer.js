import { ADD_TO_CART } from "../cartReducer/actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, isLoading: false, products: payload };

    default:
      return state;
  }
};
