import { PiArrowElbowRightLight } from "react-icons/pi";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SinglePlan from "./SinglePlan";


const Membership = () => {
    const {user} = UseAuth() ;
    const axiosPublic = useAxiosPublic() ;
    const {data : plansInfo =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['plans'] ,
        queryFn : async () => {
            const res = await axiosPublic.get('/plans') ;
            return res.data
        }
    })
    return (
      <div>
          <h2 className="text-5xl font-Montserrat font-bold text-center">Be A Member</h2>
        <div className="grid grid-cols-3 gap-6 py-20">

            {
                plansInfo.map(plan =>  <SinglePlan
                key={plan._id}
                plan={plan}
                ></SinglePlan>)
            }

            
        </div>
      </div>
    );
};

export default Membership;