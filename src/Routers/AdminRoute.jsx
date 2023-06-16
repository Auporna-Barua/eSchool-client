import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(`isadmin: ${isAdmin}, is`);
    console.log("admin", isAdmin);
    const location = useLocation();

    if (isAdminLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (isAdmin[1] == "admin") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;