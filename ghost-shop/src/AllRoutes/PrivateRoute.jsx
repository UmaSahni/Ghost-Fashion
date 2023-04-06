import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // let isAuth=localStorage.getItem("auth")
//   const { auth } = useSelector((store) => store.authReducer)||isAuth;
const isAuth = useSelector(store=>store.authReducer.auth)

  return isAuth ? children : <Navigate to="/login" state={location.pathname}/>;
};

export default PrivateRoute;
