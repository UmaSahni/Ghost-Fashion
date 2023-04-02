import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actonTypes";

const initstate = {
	isLoading: false,
	isError: false,
	auth: false,
	token: "",
};

const reducer = (state = initstate, { type, payload }) => {
    // console.log(payload)
	switch (type) {
		case LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return { ...state, isLoading: false, token: payload, auth: true };
		case LOGIN_FAILURE:
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
};

export {reducer};
