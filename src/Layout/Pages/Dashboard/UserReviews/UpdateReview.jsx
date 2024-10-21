import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const UpdateReview = () => {
  const axiosSecure = UseAxiosSecure();
  const item = useLoaderData();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const review = data.review;
    const reviewInfo = {
      newReview: review,
    };
    const reviewRes = await axiosSecure.patch(
      `/reviews/${item._id}`,
      reviewInfo
    );

    if (reviewRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Review has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <h2>update</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="outline-none border-2 w-full  mb-6"
          defaultValue={item?.review}
          {...register("review", { required: true })}
          id=""
          cols="30"
          rows="5"
        ></textarea>

        <button className=" px-8 py-3 border-2 bg-red-100">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
