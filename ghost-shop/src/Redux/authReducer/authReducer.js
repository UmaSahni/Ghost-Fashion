import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actonTypes";

const initstate = {
	isLoading: false,
	isError: false,
	auth: false,
	name: "",

};

const reducer = (state = initstate, { type, payload }) => {
    // console.log(payload)
	switch (type) {
		case LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return { ...state, isLoading: false, name: payload, auth: true };
		case LOGIN_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case LOGOUT_SUCCESS:
			return {...state, isLoading:false, auth:false}
			default:
			return state;
	}
};

export {reducer};
