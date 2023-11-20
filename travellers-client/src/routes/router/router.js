import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import TravelDetails from "../../components/TravelDetails/TravelDetails";
import TermsAndConditon from "../../components/TermsAndConditon/TermsAndConditon";

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
                loader: ({params}) => fetch(`https://travellers-server.vercel.app/travellers/${params.id}`),
                element: <TravelDetails></TravelDetails>
            },
            {
                path: 'terms',
                element: <TermsAndConditon></TermsAndConditon>
            },
        ]
    }
])