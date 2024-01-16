import "@smastrom/react-rating/style.css";
import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import UseMeal from "../../../../../Hooks/UseMeal";

import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AiOutlineLike } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import SocialLink from "../../../../../Shared/SocialLinks/SocialLink";
import Footer from "../../Footer/Footer";
// import "../TabCss/Tab.css";

const MealDetail = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [meals, loading] = UseMeal();
  const mealDetail = useLoaderData();
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
  } = mealDetail;

  const { register, handleSubmit } = useForm();

  const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?title=${name}`);
      return res.data;
    },
  });

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    if (user) {
      setIsLiked(!isLiked);
      const mealId = _id;
      const title = name;
      const state = isLiked;
      const mealInfo = { title, mealId, state };
      axiosPublic.post("/likedMeals", mealInfo).then((data) => {
        refetch();
        console.log(data.data);
      });
    }
    // else{
    //   navigate('/login')
    // }
  };

  const likeButtonStyle = {
    color: isLiked ? "#939A00" : "black",
  };

  const handleMealRequest = () => {
    if (user) {
      const title = name;
      const likeNumber = likes;
      const userName = user?.displayName;
      const userEmail = user?.email;
      const status = "pending";
      const reviews = allReviews.length;
      const requestedMealInfo = {
        title,
        likeNumber,
        status,
        reviews,
        userName,
        userEmail,
      };

      axiosSecure.post("/mealRequest", requestedMealInfo).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have done a Request",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You Need to Login First to request",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const userEmail = user?.email;
    const title = name;
    const likeNumber = likes;
    const reviewNumbers = allReviews.length;
    const review = data.review;
    const detailsId = _id;
    const reviewInfo = {
      title,
      likeNumber,
      reviewNumbers,
      review,
      userEmail,
      detailsId,
    };
    axiosSecure.post(`/reviews`, reviewInfo).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have added a Review",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
            ${image}
          )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-[78vh] flex justify-center items-center   font-Inter font-bold px-5 py-4  ">
        <div>
          <div className="bg-white p-4 text-6xl"> {name}</div>
          <div className="flex gap-3 justify-center bg-blend-color bg-[#121212B3] w-[500px] mx-auto">
            <div className="py-2 flex gap-3">
              <div>
                {" "}
                <FaClock className="mt-1.5 text-[#939A00] text-lg"></FaClock>
              </div>
              <div>
                <p className="text-lg font-semibold font-Inter text-white">
                  Post Time
                </p>
                <p className="text-lg font-semibold font-Inter text-white">
                  {postTime}
                </p>
              </div>
            </div>
            <div className="py-2 flex gap-3">
              <div>
                {" "}
                <BiCurrentLocation className="mt-1.5 text-[#939A00] text-2xl"></BiCurrentLocation>
              </div>
              <div>
                <p className="text-lg font-semibold font-Inter text-white">
                  Total Review
                </p>
                <p className="text-lg font-semibold font-Inter text-white">
                  {allReviews?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blend-color bg-[#121212B3] flex justify-around items-center">
        <div>
          <p className="text-lg font-semibold font-Inter text-white">{name}</p>
        </div>

        <div className="flex gap-10 ">
          <p className="text-lg font-semibold font-Inter text-white">About</p>
          <p className="text-lg font-semibold font-Inter text-white">
            Did you like it ?
          </p>
          <button onClick={handleLikeClick} style={likeButtonStyle}>
            <AiOutlineLike className="text-2xl text-[#939A00] -ml-8"></AiOutlineLike>
          </button>
        </div>

        <div>
          <div className="flex justify-center  w-[450px] mx-auto">
            <div className="py-2 flex gap-3">
              <div>
                {" "}
                <FaClock className="mt-1.5 text-[#939A00] text-lg"></FaClock>
              </div>
              <div>
                <p className="text-lg font-semibold font-Inter text-white">
                  Open today
                </p>
                <p className="text-lg font-semibold font-Inter text-white">
                  11:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="py-2 flex gap-3">
              <div>
                {" "}
                <BiCurrentLocation className="mt-1.5 text-[#939A00] text-2xl"></BiCurrentLocation>
              </div>
              <div>
                <p className="text-lg font-semibold font-Inter text-white">
                  Find it on
                </p>
                <p className="text-lg font-semibold font-Inter text-white">
                  Central Campus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[50vh] w-full">
        <div className="flex justify-center pt-2">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        </div>
        <h2 className="text-[17px] text-black w-2/3 pt-12 mx-auto font-semibold font-inter">
          {description}
        </h2>

        <div className="">
          <h2 className="text-2xl mb-5 text-black  pt-16  font-bold font-inter text-center">
            Ingredients :
          </h2>
          <div className="flex flex-wrap items-center w-[60%] mx-auto justify-center h-[50px]">
            {ingredient.map((item, index) => (
              <span
                key={index}
                className="mr-3 text-[17px] text-black font-semibold font-inter flex items-center gap-2"
              >
                {" "}
                <TiTick className="text-2xl text-[#939A00]"></TiTick> {item}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50vh] bg-blend-color bg-[#000000ab] ">
        <div className="w-3/6 mx-auto flex justify-center gap-20">
          <div className="flex-1">
            <h2 className="pt-10 pb-2 mb-10 font-inter text-center border-b-4 border-[#939A00] text-white text-3xl font-bold">
              Add Your Thoughts Here{" "}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="outline-none border-2 w-full  mb-3"
                {...register("review", { required: true })}
                id=""
                cols="40"
                rows="6"
              ></textarea>

              <div className="">
                <button className="inActive px-8 py-3 ">Make Review</button>
              </div>
            </form>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl pb-2  my-10  font-inter text-center border-b-4 border-[#939A00] text-white font-bold">
              Our Customers Opinion
            </h2>
            <div className="text-white font-Inter text-lg font-semibold">
              {allReviews.map((item) => (
                <li
                  className="list-none flex items-center gap-3 "
                  key={item._id}
                >
                  <MdOutlineRateReview className="text-[#939A00]"></MdOutlineRateReview>{" "}
                  {item.review}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
};

export default MealDetail;

{
  /* <div className="flex gap-10 lg:mx-36">
        <div className="w-4/6">
          <h2 className="my-10 font-Montserrat text-[#444] text-3xl font-bold">
            {name}
          </h2>
          <div className="flex mb-5 gap-3 items-center ">
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            <p className="text-[#005278] font-Montserrat font-medium text-lg">
              {" "}
              {likes} likes
            </p>

            <button onClick={handleLikeClick} style={likeButtonStyle}>
              <AiOutlineLike className="text-2xl ml-2"></AiOutlineLike>
            </button>
          </div>
          <div className="flex gap-2 items-center border-b pb-8">
            <img src="https://www.tasteofhome.com/wp-content/themes/bumblebee-toh-child/images/recipes/Symbol-Time.png"></img>
            <p className="font-Montserrat font-medium text-[#444] text-xl">
              Post Time{" "}
              <span className="font-normal text-gray-600 ml-3">{postTime}</span>
            </p>
          </div>

          <p className="text-[#454c58] font-Montserrat font-normal mt-7">
            {description}
          </p>

          <div className="flex gap-3 mt-10 rounded-lg bg-sky-200">
            <img className="rounded-l-lg" src={image}></img>
            <div className="flex items-center justify-center">
              <button onClick={handleMealRequest}>
                <AwesomeButton className="block" type="secondary">
                  Request Meal
                </AwesomeButton>
              </button>
            </div>
          </div>

          <h2 className="my-6 font-Montserrat text-[#444] text-2xl font-bold">
            Ingredients
          </h2>

          <div className="w-2/4">
            {ingredient.map((item, index) => (
              <p key={index} className="border-b border-gray-400 py-3">
                {" "}
                {item}{" "}
              </p>
            ))}
          </div>
        </div>

        <div className="w-2/6">
          <h2 className="my-10 font-Montserrat text-center  text-[#444] text-3xl font-bold">
            Add Your Thoughts Here{" "}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="outline-none border-2 w-full  mb-6"
              {...register("review", { required: true })}
              id=""
              cols="30"
              rows="5"
            ></textarea>

            <div className="flex justify-center">
              <button className=" px-8 py-3 border-2 bg-red-100">
                Make Review
              </button>
            </div>
          </form>

          <div>
            <h2 className="text-2xl my-10 text-center font-bold font-Montserrat">
              Our Customers Opinion
            </h2>
            {allReviews.map((item) => (
              <li key={item._id}>{item.review}</li>
            ))}
          </div>
        </div>
      </div> */
}
