import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../PriveteRoute/PrivateRoute";
import ReSearch from "../components/ReSearch/ReSearch";
import Profile from "../components/Profile/Profile";
import Assignment from "../components/Assignment/Assignment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <PrivateRoute><Home></Home></PrivateRoute> },
            { path: 'login', element: < Login ></Login > },
            { path: 'register', element: < Register ></Register > },
            { path: 'research', element: <PrivateRoute><ReSearch></ReSearch> </PrivateRoute>},
            { path: 'profile', element: <PrivateRoute><Profile></Profile> </PrivateRoute>},
            { path: 'assignment', element: <PrivateRoute><Assignment></Assignment> </PrivateRoute>},
        ]
    }
])