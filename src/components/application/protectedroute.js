import { useNavigate, Navigate, Outlet } from "react-router-dom"
import { useEffect } from "react";

export const ProtectedRoute = ({ userrol }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (userrol !== 2) {
            navigate("/login")
        }
    }, [])

    return <Outlet />
}