import { format, parseISO } from "date-fns";
import { useLoaderData } from "react-router-dom";
import UseAuth from "../../../../Hooks/UseAuth";

import { useForm } from "react-hook-form";
import { Fa500Px } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

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

  const defaultIngredients = ingredient.join(", ");

  const { register, handleSubmit } = useForm();

  const onSubmitUpdateMeal = async (data) => {
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
    <div>
      <div className="w-4/6 ">
        <h2 className="text-3xl my-8 font-Inter font-bold text-center">
          Update Meal{" "}
        </h2>

        <ul>{}</ul>
        <form>
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
            {/* category  */}

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
            {/* price */}
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
    </div>
  );
};

export default UpdateMeal;
