import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";

const SingleUpcoming = ({ meal }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
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
  } = meal;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    if (user) {
      setIsLiked(!isLiked);
      const mealId = _id;
      const title = name;
      const state = isLiked;
      const mealInfo = { title, mealId, state };
      axiosPublic.post("/likedMealsUpcoming", mealInfo).then((data) => {
        //    refetch() ;
        console.log(data.data);
      });
    } else {
      navigate("/login");
    }
  };
  const likeButtonStyle = {
    color: isLiked ? "green" : "black",
  };

  return (
    <div className="">
      <div className="">
        <img className="" src={image}></img>
      </div>

      <div className="bg-white p-4 mx-auto ">
        <h2 className="font-inter text-lg text-[#333d47] font-semibold mb-2">
          {name}
        </h2>

        <div className="flex items-center gap-3">
          <div>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>
          <div className="flex gap-2">
            <h2 className="font-inter text-sm text-[#6f7781] font-semibold">
              {likes} Likes{" "}
            </h2>
          </div>
          <p className="font-inter text-sm text-[#6f7781] font-semibold">
            ${price}
          </p>
        </div>
      </div>
      <div className="bg-blend-color h-[4vh] bg-[#000000ab] flex items-center justify-center ">
        <button
          className="text-white "
          onClick={handleLikeClick}
          style={likeButtonStyle}
        >
          <AiOutlineLike className=" text-white text-2xl ml-2"></AiOutlineLike>
        </button>
      </div>
    </div>
  );
};

export default SingleUpcoming;
