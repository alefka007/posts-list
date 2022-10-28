import PostIdPage from "../pages/PostIdPage/PostIdPage";
import ErrorRoute from "../error/ErrorRoute";
import About from "../pages/About/About";
import Posts from "../pages/Posts/Posts";
import Login from '../pages/Login/Login';
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    {path: '/posts', element: <Posts />},
    {path: '/about', element: <About />},
    {path: '/posts/:id', element: <PostIdPage />},
    {path: '*', element: <ErrorRoute />},
    {path: '/', element: <Posts />},
]

export const publicRoutes = [
    {path: '/login', element: <Login />},
    {path: '/', element: <Navigate to='/login' replace />},
]