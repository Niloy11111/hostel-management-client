import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import SingleRequest from "./SingleRequest";

const RequestedMeals = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [requestedMeals, setRequestedMeals] = useState([]);

  // const res = axiosSecure.get(`/requestedMeals?userEmail=${user?.email}`);
  const url = `/requestedMeals?userEmail=${user?.email}`;

  useEffect(() => {
    axiosSecure
      .get(url)

      .then((res) => {
        console.log("result", res.data);
        setRequestedMeals(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [url]);

  // const { data: items = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(
  //       `/requestedMeals?userEmail=${user?.email}`
  //     );

  //     return res.data;
  //   },
  // });

  // console.log("items Now", items);

  // const {
  //   data: requestedMeals = [],
  //   isPending: loading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["requestedMeals"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(
  //       `/requestedMeals?userEmail=${user?.email}`
  //     );
  //     return res.data;
  //   },
  // });

  const handleDeleteRequest = (meal) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/requestedMeals/${meal._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui

          const newRequestedArray = requestedMeals.filter(
            (item) => item._id !== meal._id
          );
          setRequestedMeals(newRequestedArray);
          console.log("new after delete", newRequestedArray);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${meal.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white font-Inter font-extrabold">
        You have{" "}
        <span className="text-[#EB3656]">
          {" "}
          requested {requestedMeals?.length} Meals{" "}
        </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {requestedMeals?.map((item, index) => (
            <SingleRequest
              key={item._id}
              handleDeleteRequest={handleDeleteRequest}
              item={item}
            ></SingleRequest>
          ))}
        </div>
      </div>
      {/* 
      <div>
        <table className="table border w-full">
  
          <thead className="">
            <tr>
              <th className="text-center text-lg font-serif text-[#444]">#</th>
              <th className="text-center text-lg font-serif text-[#444]">
                Title
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Likes
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Reviews
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Status
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Cancel
              </th>
            </tr>
          </thead>
          <tbody>
            {requestedMeals?.map((meal, index) => (
              <tr key={meal._id}>
                <td className="text-sm text-[#444] font-normal font-Inter ">
                  {index + 1}
                </td>
                <td className="text-sm text-[#444] font-normal font-Inter text-center">
                  {meal.title}
                </td>
                <td className="text-sm text-[#444] font-normal font-Inter text-center">
                  {meal.likeNumber}
                </td>
                <td className="text-sm text-[#444] font-normal font-Inter text-center">
                  {meal.reviews}
                </td>
                <td className="text-sm text-[#444] font-normal font-Inter text-center">
                  Pending
                </td>
                <td className="text-sm text-[#444] font-normal font-Inter text-center">
                  <button
                    onClick={() => handleDeleteRequest(meal)}
                    className="text-sm text-[#444] font-normal font-Inter px-5 py-2  bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default RequestedMeals;
