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
import SelectedClass from "../pages/MySelectedClass/SelectedClass";
import EnrolledClass from "../pages/EnrolledClasses/EnrolledClass";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/PaymentHistrory/PaymentHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allUsers',
                element: (
                    <AllUsers />
                )
            },
            {
                path: '/dashboard/manageClass',
                element: (
                    <ManageClasses />
                )
            },

            {
                path: '/dashboard/addClass',
                element: (

                    <AddClass />

                )
            },
            {
                path: '/dashboard/myClass',
                element: (
                    <MyClasses />

                )
            },
            {
                path: '/dashboard/editClass/:id',
                element: (
                    <EditClass />

                ),
                loader: ({ params }) =>
                    fetch(
                        `https://e-school-mu.vercel.app/editClass/${params.id}`
                    ),
            },
            {
                path: '/dashboard/selectedclass',
                element: (
                    <SelectedClass />
                )
            },
            {
                path: '/dashboard/enrolledClass',
                element: (
                    <EnrolledClass />
                )
            },
            {
                path: '/dashboard/history',
                element: (
                    <PaymentHistory />
                )
            },
            {
                path: '/dashboard/payment/:id',
                element: (
                    <Payment />
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://e-school-mu.vercel.app/singleClass/${params.id}`
                    ),
            },
        ]
    }
]);

export default router