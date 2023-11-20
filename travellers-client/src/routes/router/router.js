import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import TravelDetails from "../../components/TravelDetails/TravelDetails";
import TermsAndConditon from "../../components/TermsAndConditon/TermsAndConditon";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Profile from "../../components/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travellers-server.vercel.app/travellers'),
                element: <Home></Home>
            },
            {
                path: '/travellers/:id',
                loader: ({ params }) => fetch(`https://travellers-server.vercel.app/travellers/${params.id}`),
                element: <PrivateRouter><TravelDetails></TravelDetails></PrivateRouter>
            },
            {
                path: 'terms',
                element: <TermsAndConditon></TermsAndConditon>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    }
])