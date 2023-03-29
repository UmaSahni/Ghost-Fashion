import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actonTypes";

const loginRequestAction = () => {
	return { type: LOGIN_REQUEST };
};
const loginSuccessAction = (payload) => {
	return { type: LOGIN_SUCCESS, payload };
};
const loginFailureAction = () => {
	return { type: LOGIN_FAILURE };
};

//------------------------------------------------------------
export const login = (payload) => (dispatch) => {
	dispatch(loginRequestAction());
	return axios
		.post("", payload)
		.then((res) => dispatch(loginSuccessAction()))
		.catch(() => dispatch(loginFailureAction()));
};
