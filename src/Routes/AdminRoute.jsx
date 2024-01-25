import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";

const AdminRoute = ({ children }) => {
  const { user, loading, setLoading } = UseAuth();

  const [isAdmin, isAdminLoading] = UseAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-infinity loading-lg"></span>;
    // setLoading(false);
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default AdminRoute;
