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
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/AdminPanel/ManageClasses/ManageClasses";
import AddClass from "../pages/instructors/AddClass/AddClass";
import MyClasses from "../pages/instructors/MyClasses/MyClasses";
import EditClass from "../pages/instructors/EditClass/EditClass";
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
                element: (
                    <PrivateRoute>
                        <AllUsers />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/manageClass',
                element: (
                    <PrivateRoute>
                        <ManageClasses />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/addClass',
                element: (
                    <PrivateRoute>
                        <AddClass />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/addClass',
                element: (
                    <PrivateRoute>
                        <AddClass />
                    </PrivateRoute>
                )
            },
            {
                path: '/dashboard/myClass',
                element: (
                    <PrivateRoute>
                        <MyClasses />
                    </PrivateRoute>
                )
            }, 
            {
                path: '/dashboard/editClass/:id',
                element: (
                    <PrivateRoute>
                        <EditClass />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/editClass/${params.id}`
                    ),
            },
        ]
    }
]);

export default router