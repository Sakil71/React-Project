import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import Contacts from "../components/Contacts/Contacts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://api.slingacademy.com/v1/sample-data/photos'),
                element: <Home></Home>
            },
            { path: 'register', element: <Register></Register> },
            { path: 'signIn', element: <SignIn></SignIn> },
            { path: 'contacts', element: <PrivateRoute><Contacts></Contacts></PrivateRoute>},
        ]
    }
])