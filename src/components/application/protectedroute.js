import { useNavigate, Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({userrol}) => {

    const Navigate = useNavigate();

    if( userrol === 2){
        return <Outlet/>
    } else {
        return <Navigate to="login"/>
    }

}