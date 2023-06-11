import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
// import LoginPage from "../Pages/LoginPage/LoginPage";
// import SignUp from "../Pages/SignUpPage/SignUp";
// import DashboardLayout from "../Layouts/DashboardLayout";
// import AllUsers from "../Pages/AdminPanel/Allusers";
import MainLayout from "../Layouts/MainLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: '/logIn',
            //     element: <LoginPage></LoginPage>
            // },
            // {
            //     path: '/signUp',
            //     element: <SignUp></SignUp>
            // }
        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <DashboardLayout></DashboardLayout>,
    //     children: [
    //         {
    //             path: '/dashboard/allUsers',
    //             element: <AllUsers></AllUsers>
    //         }
    //     ]
    // }
]);

export default router