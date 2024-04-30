import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Company from "../pages/Company";
import Resources from "../pages/Resources";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {   path:'/',
    element:<Layout></Layout>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/home',
        element:<Home></Home>  
    },
    {
        path:'/company',
        element:<Company></Company>  
    },
    {
        path:'/resources',
        element:<Resources></Resources>  
    },
    {
        path:'/about',
        element:<About></About>  
    },
    {
        path:'/contact',
        element:<Contact></Contact>  
    },

]

    }
])

export default router;