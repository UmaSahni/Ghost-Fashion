import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation
    let isAuth=localStorage.getItem("auth")
//   const { auth } = useSelector((store) => store.authReducer)||isAuth;
  return isAuth ? children : <Navigate to="/login" state={location}/>;
};

export default PrivateRoute;
