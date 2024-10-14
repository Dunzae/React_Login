import {
    createBrowserRouter,
} from "react-router-dom";
import LoginPage from "@pages/Login";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    }
])

export default router;