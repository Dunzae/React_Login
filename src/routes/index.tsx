import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/Home";
import LoginPage from "@pages/Login";
import RegisterPage from "@pages/Register";
import LogoutPage from "@pages/Logout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    // 모두가 접근할 수 있는 라우트
    {
        path: "/introduction",
        element : <div>소개 페이지</div>
    },
    {
        path : "/profile",
        element : <div>프로필 페이지</div>
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path : "/logout",
        element : <LogoutPage />
    },
    // 허가받은 사용자만 접근할 수 있는 라우트
    {
        path : "/",
        element : <ProtectedRoute />,
        children : [
            {
                path : "/",
                element : <HomePage />
            },
            {
                path : "/write",
                element : <div>글 작성 페이지</div>
            },
            {
                path : "/read",
                element : <div>글 보기 페이지</div>
            },
            
        ]
    },
])

export default router;