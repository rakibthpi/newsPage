import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layout/newsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0" replace={true} />,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ":teamId",
                element: <Catagory></Catagory>,
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.teamId}`),
            },
        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":paramId",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.paramId}`)
            },
        ],
    },
]);

export { router }