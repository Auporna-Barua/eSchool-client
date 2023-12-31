import { useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('access-token');
    const { refetch, data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            if (!user) {
                return []
            }
            const res = await fetch(`https://e-school-mu.vercel.app/allUsers/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            const data = await res.json();
            return data.role
        }
    })
    return [refetch, isAdmin, isAdminLoading]
}
export default useAdmin;