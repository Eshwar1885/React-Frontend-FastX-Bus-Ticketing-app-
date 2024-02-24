import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute(){
    var isLoggedIn = sessionStorage.getItem('token')
    return(
        isLoggedIn?<Outlet/>:<Navigate to='./login'/>
    );
}

export default PrivateRoute;