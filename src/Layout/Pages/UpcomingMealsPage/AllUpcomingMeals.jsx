import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";

import SingleUpcoming from "./SingleUpcoming";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";


const AllUpcomingMeals = () => {
    const {user} = UseAuth() ;
    const axiosPublic = useAxiosPublic() ;
    const {data : upcomingMeals =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['upcomingMeals'] ,
        queryFn : async () => {
            const res = await axiosPublic.get('/upcomingMeals') ;
            return res.data
        }
      
    })
    

    return (
        <div className="pb-20">
              <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">Total Upcoming Meals  {upcomingMeals?.length} </h2>

            <div className="grid grid-cols-4 gap-6">
                {
                    upcomingMeals?.map(meal => <SingleUpcoming
                    key={meal._id}
                    meal={meal}
                    ></SingleUpcoming>)
                }
            </div>
            
        </div>
    );
};

export default AllUpcomingMeals;