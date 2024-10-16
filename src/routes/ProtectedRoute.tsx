import { useContext, useMemo } from "react";
import { Outlet, Navigate } from "react-router-dom";
import TokenContext from "@constants/TokenContext";

function ProtectedRoute() {
    const token = useContext(TokenContext);
    const isLogin = useMemo(() => token.accessToken !== undefined && token.refreshToken !== undefined, [token])

    if (isLogin) return <Outlet />
    return <Navigate to="/login" />
}

export default ProtectedRoute;