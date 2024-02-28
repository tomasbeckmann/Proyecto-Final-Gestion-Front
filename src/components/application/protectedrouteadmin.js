import { useNavigate, Navigate, Outlet } from "react-router-dom"
import { useEffect } from "react";

export const ProtectedRouteAdmin = ({userrol}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (userrol !== 1) {
            navigate("/login")
        }
   
    }, [])
    return <Outlet />

}