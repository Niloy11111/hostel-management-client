import { format, parseISO } from "date-fns";

import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import groovyWalkAnimation from "../../../../../public/bannerAnimation/SsKQcPBeWP.json";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
const AddMeal = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();

  const { register, handleSubmit } = useForm();

  const onSubmitAddMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");
    console.log(formattedDateTime);
    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());

    const defaultRating = 0;
    const defaultLikes = 0;
    const defaultReviews = 0;

    const mealInfo = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      postTime: formattedDateTime,
      rating: data.rating ? parseFloat(data.rating) : defaultLikes,
      likes: data.like ? parseFloat(data.like) : defaultLikes,
      review: data.review ? parseFloat(data.review) : defaultReviews,
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      ingredient: ingredientsArray,
      description: data.description,
      image: data.image,
    };
    const mealRes = await axiosPublic.post("/meals", mealInfo);
    console.log(mealRes.data);
    if (mealRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onSubmitUpcomingMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");
    console.log(formattedDateTime);
    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());
    console.log(ingredientsArray);

    const upcomingMealInfo = {
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
    console.log(data);
    const upcomingMealRes = await axiosPublic.post(
      "/upcomingMeals",
      upcomingMealInfo
    );
    console.log(upcomingMealRes.data);
    if (upcomingMealRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
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
            Add a <span className="text-[#EB3656]">Meal</span>{" "}
          </h2>

          <Lottie
            className="w-[400px]"
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>

        <div className="w-3/6 ">
          <form className="w-full text-[#BFFCF9]">
            <div className="flex gap-5 w-full ">
              <div className=" w-full">
                <input
                  {...register("name", { required: true })}
                  required
                  type="text"
                  placeholder="Meal Name"
                  className="outline-none rounded-lg bg-[#161515]  w-full pl-2 border  border-[#BFFCF9] py-2 "
                />
              </div>

              <div className="w-full mb-12">
                <select
                  defaultValue="default"
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

            <div className="flex w-full gap-4  mb-6">
              <input
                type="datetime-local"
                {...register("date")}
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full "
              />

              <input
                type="number"
                placeholder="Rating"
                {...register("rating")}
                className="outline-none rounded-lg bg-[#161515]    pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              />

              <input
                type="number"
                placeholder="Likes"
                {...register("like")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]    pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              />
            </div>

            <div className="flex w-full gap-4 mb-6">
              <input
                type="number"
                placeholder="Reviews"
                {...register("review")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
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
                placeholder="Ingredients"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              ></textarea>

              <textarea
                {...register("description")}
                placeholder="Description"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              ></textarea>
            </div>

            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="imageURL"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border w-full border-[#BFFCF9] py-2 mb-7 "
              />
            </div>

            <button
              onClick={handleSubmit(onSubmitAddMeal)}
              className=" mt-4 px-6 lg:px-8 py-1 lg:py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 rounded-full bg-[#BFFCF9] text-[#000000] hover:text-white"
            >
              Add Meal
            </button>
            <button
              onClick={handleSubmit(onSubmitUpcomingMeal)}
              className="ml-4 mt-4 px-6 lg:px-8 py-1 lg:py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 rounded-full bg-[#BFFCF9] text-[#000000] hover:text-white"
            >
              Add To Upcoming
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
