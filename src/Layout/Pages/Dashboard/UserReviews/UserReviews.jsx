import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth";



const UserReviews = () => {
    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;
    const {data : reviews =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['meals'] ,
        queryFn : async () => {
            const res = await axiosSecure.get(`/reviews?userEmail=${user?.email}`) ;
            return res.data
        }
    })
    return (
        <div>
            <h2 className="my-5 text-3xl text-center">Your Review {reviews.length} </h2>

            <div>
              
            <table className="table border w-full">
    {/* head */}
    <thead className="">
      <tr >
        <th className="text-center text-lg font-serif text-[#444]">#</th>
        <th className="text-center text-lg font-serif text-[#444]">Title</th>
        <th className="text-center text-lg font-serif text-[#444]">Likes</th>
        <th className="text-center text-lg font-serif text-[#444]">Reviews</th>
        <th className="text-center text-lg font-serif text-[#444]">Edit</th>
        <th className="text-center text-lg font-serif text-[#444]">Delete</th>
        <th className="text-center text-lg font-serif text-[#444]">View Meal</th>
      </tr>
    </thead>
    <tbody >
      {
        reviews.map((review, index) =><tr key={review._id}>
            <td className="text-sm text-[#444] font-normal font-Montserrat " >{index+ 1}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{review.title}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{review.likeNumber}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">{review.reviewNumbers}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
              <button className="text-sm text-[#444] font-normal font-Montserrat px-5 py-2 bg-blue-600   rounded">Edit</button>
            </td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
              <button  className="text-sm text-[#444] font-normal font-Montserrat px-5 py-2  bg-red-600 rounded">Delete</button>
            </td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center">
              <button  className="text-sm text-[#444] font-normal font-Montserrat px-5 py-2 bg-orange-600 rounded">View Meal</button>
            </td>

          </tr> )
      }
      
     
    </tbody>
  </table>
            </div>
            
        </div>
    );
};

export default UserReviews;