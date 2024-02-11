import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-awesome-button/dist/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../../../Css/App.css";
import UseAuth from "../../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import "../MealCard/MealCard.css";
const MealCard = ({ item }) => {
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
  } = item;

  console.log("sam rating", rating);

  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();

  return (
    <>
      <div className="meal relative h-[330px]  ">
        <img className="h-full w-full rounded-3xl" src={image}></img>
        <div className="rounded-3xl info bottom-0 absolute w-full bg-[#EB3656]  h-1/3 flex justify-center items-center">
          <div className="w-[90%]">
            <h2 className="font-Inter mt-4 text-white text-xl font-bold text-center">
              {name?.split(" ")[0]} {name?.split(" ")[1]}
            </h2>
            <div className=" flex justify-center gap-8">
              <Rating
                className=""
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
              <p className="font-Inter text-white text-xl font-semibold ">
                Price ${price}
              </p>
            </div>
            <div className="flex justify-center">
              <Link to={`/details/${_id}`}>
                <button className="py-2 px-5 mt-3 invisible text-white  mx-auto rounded font-Inter bg-[#161515]">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCard;
