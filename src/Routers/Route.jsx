import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Error from "../pages/Error/Error"
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsers from "../pages/AdminPanel/AllUsers";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/logIn',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Registration />
            },
            {
                path: '/instructors',
                element: <Instructor />
            },
            {
                path: '/classes',
                element: <Classes />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />
            }
        ]
    }
]);

export default router