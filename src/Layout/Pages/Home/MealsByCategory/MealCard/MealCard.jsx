import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-awesome-button/dist/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../../../Css/App.css";
import UseAuth from "../../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";

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
      <div className="meal relative  w-[330px] h-[330px] bg-white hover">
        <img className="h-full" src={image}></img>
        <div className="info bottom-0 absolute w-full bg-white h-1/2 flex justify-center items-center">
          <div>
            <h2 className="font-Inter text-xl font-bold text-center">{name}</h2>
            <div className="my-5 flex justify-center gap-8">
              <Rating
                className=""
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
              <p className="font-Inter text-xl font-semibold ">
                Price ${price}
              </p>
            </div>
            <Link to={`/details/${_id}`}>
              <div className="button relative invisible flex justify-center bg-[#cdd713] w-[120px] h-[40px] mx-auto">
                <div className="flex justify-center items-center font-semibold font-Inter  w-[120px] top-2 right-2 absolute h-[40px] bg-[#939A00] text-white">
                  Explore
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCard;
