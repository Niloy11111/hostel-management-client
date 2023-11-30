import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const RequestedMeals = () => {
    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;
    
    const {data : requestedMeals =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['requestedMeals'] ,
        queryFn : async () => {
            const res = await axiosSecure.get(`/requestedMeals?userEmail=${user?.email}`) ;
            return res.data
        }
    })

    const handleDeleteRequest = (meal) => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
          if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/requestedMeals/${meal._id}`);
              // console.log(res.data);
              if (res.data.deletedCount > 0) {
                  // refetch to update the ui
                  refetch() ;
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${meal.title} has been deleted`,
                      showConfirmButton: false,
                      timer: 1500
                  });
              }


          }
      });
  }
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
          requestedMeals.map((meal, index) =><tr key={meal._id}>
              <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.title}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.likeNumber}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{meal.reviews}</td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
               Pending
              </td>
              <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
                <button onClick={() => handleDeleteRequest(meal)} className="text-sm text-[#444] font-normal font-Montserrat px-5 py-2  bg-red-600 rounded">Delete</button>
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