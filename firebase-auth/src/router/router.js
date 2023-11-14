import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {path: '/', element: <Home></Home>},
            {path: 'register', element: <Register></Register>},
            {path: 'signIn', element: <SignIn></SignIn>},
        ]
    }
])