import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = UseAuth() ;

    const [isAdmin, isAdminLoading] = UseAdmin() ;
    
    const location = useLocation() ;
    
    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    
    if(user && isAdmin){
        return children ;
    }
    
        return <Navigate state={{from : location}} replace  to="/login"></Navigate>

};

export default AdminRoute;