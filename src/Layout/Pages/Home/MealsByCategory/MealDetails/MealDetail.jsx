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
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { AiOutlineLike } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import groovyWalkAnimation from "../../../../../../public/bannerAnimation/is5WNsFx8i.json";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import SocialLink from "../../../../../Shared/SocialLinks/SocialLink";
import Footer from "../../Footer/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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

  console.log("details", mealDetail);

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
    <div>
      <div className=" my-20">
        <div className="relative">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <div className="">
                <div className="flex justify-center mb-5">
                  <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                </div>
                <h2 className="text-3xl lg:text-4xl text-center text-white font-Inter font-extrabold">
                  <span className=" text-[#EB3656] uppercase">
                    {" "}
                    {name?.split(" ")[0]} {name?.split(" ")[1]}
                  </span>
                </h2>
                <p className="w-[600px] text-center font-Inter mt-2 text-white">
                  {description?.slice(0, 210)}
                </p>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={handleMealRequest}
                    className=" px-8 py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 bg-[#EB3656] rounded text-white"
                  >
                    Make Request
                  </button>
                  <button
                    className="text-2xl p-2 text-white transition-all duration-200 hover:bg-[#870012] bg-[#EB3656] rounded flex justify-center items-center "
                    onClick={handleLikeClick}
                    style={likeButtonStyle}
                  >
                    <AiOutlineLike className="text-white"></AiOutlineLike>
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <img
                className="w-[700px] h-[700px] rounded-3xl"
                src={image}
              ></img>
            </div>
          </div>

          <div className="border border-[#444] bg-[#161515]  rounded-xl   w-2/3  absolute bottom-0 ">
            <div className="py-7 text-white">
              <div className="flex gap-5 justify-center">
                <h2 className="text-xl mb-2   font-medium font-Inter text-center">
                  Post Time {postTime}
                </h2>{" "}
                <span className="text-[#870012] ext-xl mb-2   font-medium font-Inter text-center">
                  ||
                </span>
                <h2 className="text-xl mb-2   font-medium font-Inter text-center">
                  Total Review {allReviews?.length}
                </h2>
                <span className="text-[#870012] ext-xl mb-2   font-medium font-Inter text-center">
                  ||
                </span>
                <h2 className="text-xl mb-2   font-medium font-Inter text-center">
                  Likes {likes}
                </h2>
              </div>
              <h2 className="text-2xl mb-2   font-bold font-Inter text-center">
                Ingredients :
              </h2>
              <div className="flex flex-wrap items-center  mx-auto justify-center ">
                {ingredient.slice(0, 4).map((item, index) => (
                  <span
                    key={index}
                    className="mr-3 text-[17px] font-Inter  font-medium font-inter flex items-center gap-2"
                  >
                    {" "}
                    <TiTick className="text-2xl text-[#870012]"></TiTick> {item}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-Inter uppercase text-center mt-10 text-white text-3xl lg:text-4xl font-bold ">
        Add Your <span className="text-[#EB3656]">Thoughts</span> Here{" "}
      </h2>

      <div className="flex items-center justify-center h-[40vh] gap-20">
        <div>
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="outline-none rounded-lg border-2 w-[600px]  mb-3 pl-5 pt-5 font-Inter text-sm"
                {...register("review", { required: true })}
                id=""
                cols="50"
                rows="6"
              ></textarea>

              <div className="">
                <button className=" px-8 py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 bg-[#40A2D8] rounded text-white">
                  Make Review
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <Lottie
            className=""
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>

      <div className="">
        <h2 className="font-Inter uppercase text-center my-10 text-white text-3xl lg:text-4xl font-bold ">
          Word from our <span className="text-[#EB3656]">customers</span>{" "}
        </h2>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {allReviews.map((item) => (
              <SwiperSlide className=" text-white " key={item._id}>
                <div className="bg-white w-9/12 h-[20vh] mx-auto rounded-xl flex justify-center items-center">
                  <p className="mx-10 text-black"> {item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
