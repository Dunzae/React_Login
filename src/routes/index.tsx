import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/Home";
import LoginPage from "@pages/Login";
import RegisterPage from "@pages/Register";
import LogoutPage from "@pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import PostPage from "@pages/Post";
import BookmarkPage from "@pages/Bookmark";
import ProfilePage from "@pages/Profile";

const router = createBrowserRouter([
    // 모두가 접근할 수 있는 라우트
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },

    // 허가받은 사용자만 접근할 수 있는 라우트
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                // 홈 페이지
                path: "/",
                element: <HomePage />
            },
            {
                // 북마크 페이지
                path: "/bookmark",
                element: <BookmarkPage />
            },
            {
                // 게시글 페이지
                path: "/post",
                element: <PostPage />
            },
            {
                // 프로필 페이지
                path: "/profile",
                element: <ProfilePage />
            },
            {
                // 로그아웃 페이지
                path: "/logout",
                element: <LogoutPage />
            },
        ]
    },
])

export default router;