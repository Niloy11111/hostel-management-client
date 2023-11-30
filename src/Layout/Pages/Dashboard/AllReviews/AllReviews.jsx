import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseMeal from "../../../../Hooks/UseMeal";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";



const AllReviews = () => {
    
  const [meals , , , ] = UseMeal() ;
  const axiosPublic = useAxiosPublic() ;
    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;
    const {data : reviews =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['reviews'] ,
        queryFn : async () => {
            const res = await axiosSecure.get('/reviews') ;
            return res.data
        }
    })
    const handleDeleteReview = (review) => {
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
              const res = await axiosPublic.delete(`/reviews/${review._id}`);
              // console.log(res.data);
              if (res.data.deletedCount > 0) {
                  // refetch to update the ui
                  refetch() ;
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${review.title} has been deleted`,
                      showConfirmButton: false,
                      timer: 1500
                  });
              }


          }
      });
  }
    return (
        <div>
            <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">Total Review {reviews?.length} </h2>

            <div>
              
            <table className="table border w-full">
    {/* head */}
    <thead className="">
      <tr >
        <th className="text-center text-lg font-serif text-[#444]">#</th>
        <th className="text-center text-lg font-serif text-[#444]">Title</th>
        <th className="text-center text-lg font-serif text-[#444]">Likes</th>
        <th className="text-center text-lg font-serif text-[#444]">Reviews</th>
        <th className="text-center text-lg font-serif text-[#444]">Delete</th>
        <th className="text-center text-lg font-serif text-[#444]">View Meal</th>
      </tr>
    </thead>
    <tbody >
      {
        reviews?.map((review, index) =><tr key={review._id}>
            <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{review.title}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{review.likeNumber}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{reviews?.length}</td>
            
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
              <button onClick={() => handleDeleteReview(review)} className="text-[#fff]  selection:text-sm  font-normal font-Montserrat px-5 py-2  bg-red-600 rounded">Delete</button>
            </td>
            <td className="text-sm  font-normal font-Montserrat text-center">
              
             <Link to={`/details/${review.detailsId}`}>
             <button  className="text-sm text-[#FFF] font-normal font-Montserrat px-5 py-2 bg-orange-600 rounded">View Meal</button></Link>
            </td>

          </tr> )
      }
      
     
    </tbody>
  </table>
            </div>
            
        </div>
    );
};

export default AllReviews;