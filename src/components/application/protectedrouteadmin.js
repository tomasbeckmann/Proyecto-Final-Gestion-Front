import { useNavigate, Navigate, Outlet } from "react-router-dom"

export const ProtectedRouteAdmin = ({userrol}) => {

    const Navigate = useNavigate();

    if( userrol === 1){
        return <Outlet/>
    } else {
        return <Navigate to="/login"/>
    }

}