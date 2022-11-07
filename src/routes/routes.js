import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
        ]
    }
]);

export default routes;