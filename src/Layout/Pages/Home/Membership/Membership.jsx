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
{/* 
            <div className="border p-6">
                <h2 className="text-5xl my-8 font-Montserrat font-bold text-center">Silver</h2>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Emphasize budget-friendly meals suitable for students. </p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Highlight a set of essential meals to keep students energized.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> include occasional snacks perfect for study sessions. </p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Grant access to an online community cookbook with budget-friendly recipes.</p>
              <div className="mt-32">
              <h2 className="text-5xl my-8 font-Montserrat font-bold text-center text-green-400">$499 Monthly</h2>
               <div className="flex justify-center">
               <button className=""><AwesomeButton  className="block" type="github">Request Meal</AwesomeButton></button></div> 
            </div>
              </div>
            
            <div className="border p-6">
                <h2 className="text-5xl my-8 font-Montserrat font-bold text-center">Gold</h2>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight>Showcase a broader range of meals, including international and specialty options </p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight>Allow members to customize meals to their liking, exploring different flavors.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Provide access to a library of exclusive recipes not available to Silver members.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Deliver a weekly newsletter featuring food trends, new recipes, and culinary tips.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Offer special discounts on premium ingredients or add-ons.</p>
                <h2 className="text-5xl my-8 font-Montserrat font-bold text-center text-green-400">$799 Monthly</h2>
               <div className="flex justify-center">
               <button className=""><AwesomeButton  className="block" type="github">Request Meal</AwesomeButton></button></div> 
            </div>
            
            <div className="border p-6">
                <h2 className="text-5xl my-8 font-Montserrat font-bold text-center">Platinum</h2>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Feature gourmet and chef-special meals, showcasing culinary expertise.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> Allow for extensive customization, ensuring meals cater to specific tastes and dietary needs.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight>Provide the opportunity to participate in exclusive taste-testing sessions for new menu items.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight>Offer a one-time personalized consultation with a chef for meal planning advice.</p>
                <p className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight>Include VIP access to culinary events or workshops.</p>
                <h2 className="text-5xl my-8 font-Montserrat font-bold text-center text-green-400">$999 Monthly</h2>
               <div className="flex justify-center">
               <button className=""><AwesomeButton  className="block" type="github">Request Meal</AwesomeButton></button></div> 
            </div> */}
            
        </div>
      </div>
    );
};

export default Membership;