import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview";
import AddService from "../components/AddService";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Blog from "../components/Blog";
import EditReview from "../components/EditReview";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import MyReviews from "../components/MyReviews";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import Main from "../layout/Main";
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { 
                path: '/', 
                element: <Home></Home> ,
                loader: () => {
                    return fetch(`https://service-review-assignment-11-server-side.vercel.app/services`)
                }
            },
            { 
                path: '/home', 
                element: <Home></Home>,
                loader: () => {
                    return fetch(`https://service-review-assignment-11-server-side.vercel.app/services`)
                }
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { 
                path: '/services', 
                element: <Services></Services>,
                loader: () => {
                    return fetch(`https://service-review-assignment-11-server-side.vercel.app/services`)
                }
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/faq', element: <Faq></Faq> },
            { 
                path: '/add_service', 
                element: <PrivateRoute><AddService></AddService></PrivateRoute> 
            },
            { 
                path: '/my_reviews', 
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> 
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => {
                    return fetch(`https://service-review-assignment-11-server-side.vercel.app/service/${params.id}`)
                }
            },
            {
                path: '/add_review/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({params}) => {
                    return fetch(`https://service-review-assignment-11-server-side.vercel.app/service/${params.id}`)
                }
            },
            {
                path: '/edit_review/:id',
                element: <EditReview></EditReview>,
            }
        ]
    }
]);

export default routes;