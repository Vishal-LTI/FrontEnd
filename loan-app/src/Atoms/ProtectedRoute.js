// ProtectedRoute.js

import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "../Styles/protectedRoutes.css";
import Error401 from "../Pages/statusPages/Error401";


const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);
  const userInfo = user ? user.userInfo : null;

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {

    return <Error401 />;

    
  }

  // returns child route elements
  return <Outlet />;
};

export default ProtectedRoute;
