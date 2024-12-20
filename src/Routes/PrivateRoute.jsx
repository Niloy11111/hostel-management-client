import Lottie from "lottie-react";
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import banner from "../assets/bannerAnimation/loading.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <div className="addFlex lg:h-[70vh]">
        <Lottie className="w-[300px]" animationData={banner} loop={true} />
      </div>
    );
  }

  if (!user && !loading) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
