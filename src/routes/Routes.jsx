import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layout/newsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Catagory></Catagory>,
                loader: () => fetch(`http://localhost:5000/news`),
            },
            {
                path: "/category/:teamId",
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
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.paramId}`)
            },
        ],
    },
]);

export { router }