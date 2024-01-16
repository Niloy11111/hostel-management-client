import { useQuery } from "@tanstack/react-query";
import "react-awesome-button/dist/styles.css";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import SinglePlan from "./SinglePlan";

const Membership = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: plansInfo = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const res = await axiosPublic.get("/plans");
      return res.data;
    },
  });
  return (
    <div className="mx-16 mt-20 lg:mx-64">
      <h2 className="text-4xl font-inter text-white font-bold text-center">
        Would like to be a member?
      </h2>
      <div className="grid grid-cols-3 gap-6 py-20">
        {plansInfo.map((plan) => (
          <SinglePlan key={plan._id} plan={plan}></SinglePlan>
        ))}
      </div>
    </div>
  );
};

export default Membership;
