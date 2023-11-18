import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Book from "../components/Book/Book";
import Hotel from "../components/Hotel/Hotel";
import Trips from "../components/Trips/Trips";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
            { path: 'book', element: <Book></Book> },
            { path: 'trips', element: <Trips></Trips> },
            { path: 'hotel', element: <Hotel></Hotel> },
        ]
    }
])