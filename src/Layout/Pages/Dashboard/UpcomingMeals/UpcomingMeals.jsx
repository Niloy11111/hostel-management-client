import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseMeal from "../../../../Hooks/UseMeal";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";



const UpcomingMeals = () => {
    
  const [meals , , , ] = UseMeal() ;

    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;
    const {data : upcomingMeals =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['upcomingMeals'] ,
        queryFn : async () => {
            const res = await axiosSecure.get('/upcomingMeals') ;
            return res.data
        }
      
    })
    
    return (
        <div>
            <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">All Upcoming Meals {upcomingMeals?.length} </h2>

            <div>
              
            <table className="table border w-full">
    {/* head */}
    <thead className="">
      <tr >
        <th className="text-center text-lg font-serif text-[#444]">#</th>
  
        <th className="text-center text-lg font-serif text-[#444]">Title</th>
        <th className="text-center text-lg font-serif text-[#444]">Category</th>
        <th className="text-center text-lg font-serif text-[#444]">Reviews</th>
        <th className="text-center text-lg font-serif text-[#444]">Likes</th>
        <th className="text-center text-lg font-serif text-[#444]">Publish</th>
       
      </tr>
    </thead>
    <tbody >
      {
        upcomingMeals?.map((meal, index) =><tr key={meal._id}>
            <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.name}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.category}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.review}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center"> {meal.likes}</td>

            
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
              <button  className="text-[#fff]  selection:text-sm  font-normal font-Montserrat px-5 py-2  bg-red-600 rounded">Production</button>
            </td>
            <td className="text-sm  font-normal font-Montserrat text-center">
              
            
            </td>

          </tr> )
      }
      
     
    </tbody>
  </table>
            </div>
            
        </div>
    );
};

export default UpcomingMeals;
