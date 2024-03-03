import { Navigate, Outlet } from "react-router-dom"

function PrivateRouteBookingHistory(){
    var isLoggedIn = sessionStorage.getItem('token')
    return(
        isLoggedIn?<Outlet/>:<Navigate to='/login'/>
    );
}

export default PrivateRouteBookingHistory;