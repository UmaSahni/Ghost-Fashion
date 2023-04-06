import {
  GITHUB_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REQERS_LOGIN_FAILURE,
  REQERS_LOGIN_REQUEST,
  REQERS_LOGIN_SUCCESS,
} from "./actonTypes";

const initstate = {
  isLoading: false,
  isError: false,
  auth: false,
  name: "",
  user: {},
  req_Auth:false
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
      return { ...state, isLoading: false, auth:false};
    case GITHUB_SUCCESS:
      return { ...state, isLoading: false, auth: true, user: payload };
    case REQERS_LOGIN_REQUEST : 
    return {...state, isLoading:true};
    case REQERS_LOGIN_SUCCESS :
      return {...state,isLoading:false , auth:true, name:payload};
    case REQERS_LOGIN_FAILURE:
      return {...state, isLoading:false, isError:true}
    default:
      return state;
  }
};

export { reducer };
// localStorage.setItem("auth", false);
// localStorage.setItem("user",payload)
// localStorage.getItem("user")
// localStorage.getItem("name")
// localStorage.getItem("auth")
// localStorage.setItem("auth",true)
// localStorage.setItem("name",payload)
// localStorage.setItem("auth",false)
// localStorage.setItem("name","")
// localStorage.setItem("user","")
