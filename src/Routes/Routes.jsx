import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from './../pages/Login/Login';
import Register from "../pages/Register/Register";
import GlobalLoader from "../pages/Loader/GlobalLoader";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EventDetails from './../pages/EventDetails/EventDetails';
import MyProfile from "../pages/profile/MyProfile";
import Feedback from "../pages/FeedBack/Feedback";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: ()=> fetch('/EventData.json'),
                Component: Home,
                hydrateFallbackElement: <GlobalLoader></GlobalLoader>
                
            },
            {
                path: 'eventdetails/:id',
                loader: ()=> fetch('/EventData.json'),
                element: <PrivateRoute>
                    <EventDetails></EventDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <GlobalLoader></GlobalLoader>
            },
            {
                path: 'profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                    </PrivateRoute>
            },
            {
                path: 'feedback',
                loader: ()=> fetch('/FeedBackData.json'),
                element: <PrivateRoute>
                    <Feedback></Feedback>
                   </PrivateRoute>,
                hydrateFallbackElement: <GlobalLoader></GlobalLoader>

                
            },
            {
                path:'auth/login',
                Component: Login
            },
            {
                path:'auth/register',
                Component: Register
            
            },

            {
                path:'auth/forgetPassword',
                Component: ForgetPassword
            }
           
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);