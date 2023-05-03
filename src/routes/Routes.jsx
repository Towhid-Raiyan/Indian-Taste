import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'data',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
            }
        ]
    }
])

export default router;