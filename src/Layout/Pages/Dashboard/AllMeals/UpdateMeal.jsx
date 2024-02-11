import { parseISO } from "date-fns";
import Lottie from "lottie-react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import banner from "../../../../assets/lottie/SsKQcPBeWP.json";
const UpdateMeal = () => {
  const mealInfo = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const {
    name,
    category,
    price,
    postTime,
    rating,
    likes,
    review,
    adminName,
    adminEmail,
    ingredient,
    description,
    image,
    _id,
  } = mealInfo;

  console.log("reviews form user", review);
  const formattedDate = moment(postTime, "MMM Do YY").format("YYYY-MM-DD");

  const defaultIngredients = ingredient.join(", ");

  const { register, handleSubmit } = useForm();

  const onSubmitUpdateMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = moment(data.date).format("MMM Do YY");
    console.log(formattedDateTime);
    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());

    const updatedMealInfo = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      postTime: formattedDateTime,
      rating: parseFloat(data.rating),
      likes: parseFloat(data.like),
      review: parseFloat(data.review),
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      ingredient: ingredientsArray,
      description: data.description,
      image: data.image,
    };

    console.log(updatedMealInfo);

    const updateMealRes = await axiosSecure.put(
      `/updateMeals/${_id}`,
      updatedMealInfo
    );
    console.log(updateMealRes.data);
    if (updateMealRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="font-Inter h-full">
      <div className="flex h-full justify-center gap-10 items-center">
        <div>
          <h2 className="text-4xl font-Inter  font-extrabold text-center uppercase">
            Update <span className="text-[#EB3656]">Meal</span>{" "}
          </h2>

          <Lottie className="w-[400px]" animationData={banner} loop={true} />
        </div>

        <div className="w-3/6 relative">
          <form className="w-full text-[#BFFCF9]">
            <div className="flex gap-5 w-full mb-6">
              <div className=" w-full">
                <input
                  {...register("name", { required: true })}
                  required
                  type="text"
                  defaultValue={name}
                  placeholder="Meal Name"
                  className="outline-none rounded-lg bg-[#161515]  w-full pl-2 border  border-[#BFFCF9] py-2 "
                />
              </div>

              <div className="w-full ">
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="outline-none rounded-lg bg-[#161515] w-full pl-2 border   border-[#BFFCF9] py-2 "
                >
                  <option disabled value="default">
                    Select a category{" "}
                  </option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch </option>
                  <option value="Dinner">Dinner </option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-4 ">
              <input
                type="date"
                defaultValue={formattedDate}
                {...register("date")}
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 w-full "
              />

              <input
                type="number"
                defaultValue={rating}
                {...register("rating")}
                className="outline-none  rounded-lg bg-[#161515]   pl-2 border border-[#BFFCF9] py-2 w-full"
              />

              <input
                type="number"
                defaultValue={likes}
                placeholder="Likes"
                {...register("like")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]   pl-2 border border-[#BFFCF9] py-2 w-full"
              />
            </div>

            <div className="flex w-full gap-4 mt-6">
              <input
                type="number"
                defaultValue={review}
                {...register("review")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2"
              />
              <input
                type="number"
                defaultValue={price}
                {...register("price")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2  "
              />
            </div>

            <div className="flex w-full gap-4 mt-12">
              <input
                type="text"
                placeholder="Distributor Name"
                {...register("adminName")}
                defaultValue={user?.displayName}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="Distributor Email"
                {...register("adminEmail")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
            </div>

            <div className="flex gap-5 w-full">
              <textarea
                {...register("ingredients")}
                defaultValue={defaultIngredients}
                placeholder="Ingredients"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              ></textarea>

              <textarea
                {...register("description")}
                defaultValue={description}
                cols="10"
                rows="5"
                placeholder="Description"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] mb-7 py-2 w-full"
              ></textarea>
            </div>

            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="text"
                defaultValue={image}
                placeholder="imageURL"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border w-full border-[#BFFCF9] py-2 mb-7 "
              />
            </div>

            <button
              onClick={handleSubmit(onSubmitUpdateMeal)}
              className=" mt- px-6 lg:px-8 py-1 lg:py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 rounded-full bg-[#BFFCF9] text-[#000000] hover:text-white"
            >
              Update Meal
            </button>
          </form>
          <h2 className="text-white top-[13.5%] left-[38%] absolute">Rating</h2>
          <h2 className="text-white top-[13.5%] right-[23%] absolute">Likes</h2>
          <h2 className="text-white top-[25.5%] left-7 absolute">Reviews</h2>
        </div>
      </div>

      {/* <div className="w-4/6 ">
        <h2 className="text-3xl my-8 font-Inter font-bold text-center">
          Update Meal{" "}
        </h2>

        <div>
          <form className="w-full text-[#BFFCF9]">
            <div className="form-control  my-6">
              <label className="label">
                <span className="label-text">Meal Name</span>
              </label>
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                required
                type="text"
                placeholder="Type here"
                className="py-3 border pl-3 rounded outline-none input-bordered w-full "
              />
            </div>

            <div className="flex gap-5">
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category </span>
                </label>

                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="py-3 border pl-3 rounded outline-none  w-full "
                >
                  <option disabled value="default">
                    Select a category{" "}
                  </option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch </option>
                  <option value="Dinner">Dinner </option>
                </select>
              </div>

              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  defaultValue={price}
                  type="number"
                  placeholder="Price"
                  className="py-3 border pl-3 rounded outline-none w-full "
                />
              </div>
            </div>

            <div className="flex gap-4  mb-6">
              <div className="w-full">
                <h4 className=" mb-2">Date</h4>
                <input
                  type="datetime-local"
                  {...register("date", { required: true })}
                  defaultValue={postTime}
                  className="py-3 border pl-3 rounded outline-none w-full"
                />
              </div>
              <div className="w-full">
                <h4 className=" mb-2">Rating</h4>
                <input
                  type="number"
                  defaultValue={rating}
                  {...register("rating", { required: true })}
                  className="py-3 border pl-3 rounded outline-none w-full "
                />
              </div>

              <div className="w-full">
                <h4 className=" mb-2">Likes</h4>
                <input
                  type="number"
                  defaultValue={likes}
                  placeholder="Likes"
                  {...register("like")}
                  name=""
                  id=""
                  className="py-3 border pl-3 rounded outline-none w-full "
                />
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="w-full">
                <h4 className=" mb-2">Reviews</h4>
                <input
                  type="number"
                  defaultValue={review}
                  placeholder="Reviews"
                  {...register("review")}
                  name=""
                  id=""
                  className="py-3 border pl-3 rounded outline-none w-full"
                />
              </div>
              <div className="w-full">
                <h4 className=" mb-2">Distributor Name</h4>
                <input
                  type="text"
                  placeholder="Distributor Name"
                  {...register("adminName")}
                  defaultValue={adminName}
                  name=""
                  id=""
                  className="py-3 border pl-3 rounded outline-none w-full"
                />
              </div>
              <div className="w-full">
                <h4 className=" mb-2">Distributor Email</h4>
                <input
                  type="text"
                  defaultValue={adminEmail}
                  placeholder="Distributor Email"
                  {...register("adminEmail")}
                  name=""
                  id=""
                  className="py-3 border pl-3 rounded outline-none w-full"
                />
              </div>
            </div>

            <textarea
              {...register("ingredients")}
              placeholder="Ingredients"
              defaultValue={defaultIngredients}
              className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6"
            ></textarea>

            <textarea
              {...register("description")}
              placeholder="Description"
              defaultValue={description}
              className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6"
            ></textarea>

            <div>
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="imageURL"
                defaultValue={image}
                className="py-3 border pl-3 rounded outline-none w-full mb-6 "
              />
            </div>

            <button onClick={handleSubmit(onSubmitUpdateMeal)} className="btn">
              Update Meal <Fa500Px className="ml-4"></Fa500Px>
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default UpdateMeal;
