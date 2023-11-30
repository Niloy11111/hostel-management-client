import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseMeal from "../../../../Hooks/UseMeal";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";


const ServeMeals = () => {
    
  const [meals , , , ] = UseMeal() ;
  const axiosSecure = UseAxiosSecure() ;

    const {user} = UseAuth() ;
    const axiosPublic = useAxiosPublic() ;
    const {data : allRequests =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['requestedMeals'] ,
        queryFn : async () => {
            const res = await axiosSecure.get('/requestedMeals') ;
            return res.data
        }
    })
    const handleServeMeal = (request) => {
        axiosSecure.patch(`/requestedMeals/${request._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.modifiedCount > 0) {
            refetch() ;
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${request.title} has been delivered now`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
  }
    return (
        <div>
            <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">Total Requests {allRequests?.length} </h2>

            <div>
              
            <table className="table border w-full">
    {/* head */}
    <thead className="">
      <tr >
        <th className="text-center text-lg font-serif text-[#444]">#</th>
        <th className="text-center text-lg font-serif text-[#444]">Title</th>
        <th className="text-center text-lg font-serif text-[#444]">User Name</th>
        <th className="text-center text-lg font-serif text-[#444]">User Email </th>
        <th className="text-center text-lg font-serif text-[#444]">Status</th>
        <th className="text-center text-lg font-serif text-[#444]">Serve Meals</th>
      </tr>
    </thead>
    <tbody >
      {
        allRequests?.map((request, index) =><tr key={request._id}>
            <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{request.title}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{request.userName}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{request.userEmail}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
                {
                    request.status === 'delivered' ?  "Delivered" : "Pending"

                }
             </td>
            
            <td className="text-sm  font-normal font-Montserrat text-center">
              <button onClick={() => handleServeMeal(request)} className="text-[#fff]  selection:text-sm  font-normal font-Montserrat px-5 py-2  bg-purple-600 rounded">Serve</button>
            </td>
           

          </tr> )
      }
      
     
    </tbody>
  </table>
            </div>
            
        </div>
    );
};

export default ServeMeals;