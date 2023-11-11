import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../components/Products/Products";
import Order from "../components/Orders/Orders";
import Review from "../components/Review/Review";
import Inventory from "../components/Inventory/Inventory";
import { productsAndCartLoader } from "../components/productsAndCartLoader/productsAndCartLoader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {path: '/', element: <Products></Products>},
            {path: '/home', element: <Products></Products>},
            {path: '/order', 
            loader: productsAndCartLoader,
            element: <Order></Order>},
            {path: '/review', element: <Review></Review>},
            {path: '/introductory', element: <Inventory></Inventory>},
        ]
    }
])