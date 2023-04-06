import axios from "axios";
import { GITHUB_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REQERS_LOGIN_FAILURE, REQERS_LOGIN_REQUEST, REQERS_LOGIN_SUCCESS } from "./actonTypes";
import { LogOut, SignInWithGoogle, signInWithGitHub } from "../../Firebase";

const loginRequestAction = () => {
	return { type: LOGIN_REQUEST };
};
const loginSuccessAction = (payload) => {
	return { type: LOGIN_SUCCESS, payload };
};
const loginFailureAction = () => {
	return { type: LOGIN_FAILURE };
};


export const login = () => (dispatch) => {
	dispatch(loginRequestAction());
	return SignInWithGoogle()
	.then((res)=>{
		console.log(res)
		dispatch(loginSuccessAction(res.user.displayName))
	})
	.catch((err)=>dispatch(loginFailureAction()))

};

export const gitHubLogin =() =>(dispatch)=>{
	dispatch(loginRequestAction());
return	signInWithGitHub()
	.then((res)=>{
		console.log(res.user)
		dispatch({type:GITHUB_SUCCESS, payload:res.user})
	})
	.catch((err)=>dispatch(loginFailureAction()))
}



export const logout = () =>(dispatch)=>{
dispatch(loginRequestAction())
return LogOut().then((res)=>{
	console.log("SignOut Success")
	dispatch({type:LOGOUT_SUCCESS})
})
.catch((err)=>dispatch(loginFailureAction()))
}

export const ReqresLogin = (payload) =>(dispatch)=>{
dispatch({type:REQERS_LOGIN_REQUEST})
return axios.post(`https://reqres.in/api/login`, payload).then((res)=>{
	console.log(res)
	dispatch({type:REQERS_LOGIN_SUCCESS,payload: res.token})
}).catch((err)=>dispatch({type:REQERS_LOGIN_FAILURE}))
}

