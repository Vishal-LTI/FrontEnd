// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/errorPage.css";

const ProtectedRoute = () => {
  const user= useSelector((state) => state.user);
  const userInfo = user?user.userInfo:null;

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className="d-flex justify-content-center 
      align-items-center" style={{height:'100%'}}>
        <div className="col-md-12 text-center">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#db0011" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>
          </h1>
          <h1>Unauthorized!!</h1>
          <h3>Access Denied</h3>
          <p>
            Sorry, you are not authorized to access this page.
          </p>
          <NavLink to='/login' style={{ color: "#db0011" }}>Login</NavLink> to gain access
        </div>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute