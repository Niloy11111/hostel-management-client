import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseMeal = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: meals = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/meals");
      return res.data;
    },
  });

  return [meals, loading, refetch];
};

export default UseMeal;
