import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import TokenContext from "@constants/TokenContext";

function LogoutPage() {
    const token = useContext(TokenContext);
    useEffect(() => {
        token.setAccessToken(undefined);
        token.setRefreshToken(undefined);
        localStorage.removeItem("token");
    })

    return <Navigate to ="/login" />;
}

export default LogoutPage;