import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
        ]
    }
]);

export default routes;