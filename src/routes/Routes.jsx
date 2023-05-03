import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login/Login";
import Registration from "../pages/login/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: 'data',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
            }
        ]
    }
])

export default router;