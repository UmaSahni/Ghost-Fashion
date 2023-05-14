import { BACKEND_LOGIN_FAILURE, BACKEND_LOGIN_REQUEST, BACKEND_LOGIN_SUCCESS, BACKEND_LOGOUT_SUCCESS, BACKEND_REGISTER_FAILURE, BACKEND_REGISTER_REQUEST, BACKEND_REGISTER_SUCCESS } from "./actonTypes";


const initstate = {
  isLoading: false,
  isError: false,
  auth: false,
  name: "",
  user: {},
  req_Auth:false,
  register:[]
};


const reducer = (state = initstate, { type, payload, object }) => {
  // console.log(payload)
  switch (type) {
   case BACKEND_REGISTER_REQUEST :{
    return {...state, isLoading:true}
   }
   case BACKEND_REGISTER_SUCCESS:{
    return {...state, register:payload, isLoading:false}
   }
   case BACKEND_REGISTER_FAILURE:{
    return {...state, isLoading:false, isError:true}
   }
   case BACKEND_LOGIN_REQUEST:{
    return {...state, isLoading:true}
   }
   case BACKEND_LOGIN_SUCCESS:{
    return {...state, isLoading:false, auth:true, token:payload, name:object.name}
   }
   case BACKEND_LOGIN_FAILURE:{
    return {...state, isLoading:false, isError:true}
   }
   case BACKEND_LOGOUT_SUCCESS :{
    return initstate
   }
    default:
      return state;
  }
};

export { reducer };

