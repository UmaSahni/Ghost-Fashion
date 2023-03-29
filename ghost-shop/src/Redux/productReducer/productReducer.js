import {
	FAILURE_REQUEST,
	GET_SUCCESS_REQUEST,
	LOADING_REQUEST,
	PATCH_SUCCESS_REQUEST,
	POST_SUCCESS_REQUEST,
} from "./actionTypes";

const initstate = {
	isLoading: true,
	isError: false,
	products: [],
};

const reducer = (state = initstate, { type, payload }) => {
	// console.log(payload)
	switch (type) {
		case LOADING_REQUEST:
			return { ...state, isLoading: true };
		case POST_SUCCESS_REQUEST:
			return {
				...state,
				isLoading: false,
				products: [...state.products, payload],
			};
		case FAILURE_REQUEST:
			return { ...state, isLoading: false, isError: true };
		//get
		case GET_SUCCESS_REQUEST:
			return {
				...state,
				isLoading: false,
				products: payload,
			};
		//patch
		case PATCH_SUCCESS_REQUEST:
			return {
				...state,
				isLoading: false,
				products: [...state.products, payload],
			};
		default:
			return state;
	}
};

export { reducer };
