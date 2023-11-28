import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";


const RequestedMeals = () => {
    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;
    const {data : requestedMeals =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['meals'] ,
        queryFn : async () => {
            const res = await axiosSecure.get(`/requestedMeals?userEmail=${user?.email}`) ;
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">Your Requested Meals {requestedMeals.length}</h2>

            <div>
              
              <table className="table border w-full">
      {/* head */}
      <thead className="">
        <tr >
          <th className="text-center text-lg font-serif text-[#444]">#</th>
          <th className="text-center text-lg font-serif text-[#444]">Title</th>
          <th className="text-center text-lg font-serif text-[#444]">Likes</th>
          <th className="text-center text-lg font-serif text-[#444]">Reviews</th>
          <th className="text-center text-lg font-serif text-[#444]">Status</th>
          <th className="text-center text-lg font-serif text-[#444]">Cancel</th>
         
        </tr>
      </thead>
      <tbody >
        {
          requestedMeals.map((meals, index) =><tr key={meals._id}>
              <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meals.title}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meals.likeNumber}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meals.reviewNumbers}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
               Pending
              </td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
                <button  className="text-sm text-[#444] font-normal font-Montserrat px-5 py-2  bg-red-600 rounded">Delete</button>
              </td>
              
  
            </tr> )
        }
        
       
      </tbody>
    </table>
              </div>
        </div>
    );
};

export default RequestedMeals;