import {BACKEND_REGISTER_REQUEST, BACKEND_REGISTER_SUCCESS, BACKEND_REGISTER_FAILURE, BACKEND_LOGIN_REQUEST, BACKEND_LOGIN_SUCCESS, BACKEND_LOGIN_FAILURE, BACKEND_LOGOUT_REQUEST, BACKEND_LOGOUT_SUCCESS} from "./actonTypes"
import axios from "axios"

export  const register = (object) =>(dispatch) =>{
	dispatch({type:BACKEND_REGISTER_REQUEST})
return	axios.post(`https://back-end-l7zr.onrender.com/api/register`, object)
.then((res)=>{ 
	console.log(res)
	dispatch({type:BACKEND_REGISTER_SUCCESS, payload:res.data})
	return res
	})
	.catch((err)=>dispatch({type:BACKEND_REGISTER_FAILURE}))

}

export const login = (object) =>(dispatch) =>{
	dispatch({ type:BACKEND_LOGIN_REQUEST})
	return axios.post(`https://back-end-l7zr.onrender.com/api/login`, object)
	.then((res)=>{
		console.log(res)
		dispatch({type:BACKEND_LOGIN_SUCCESS, payload:res.data.token, object})
		return res
	})
	.catch((err)=>{
		dispatch({type:BACKEND_LOGIN_FAILURE})
	return err
	})
}

export const logout = () =>(dispatch) =>{
	
	dispatch({type:BACKEND_LOGOUT_SUCCESS})
}