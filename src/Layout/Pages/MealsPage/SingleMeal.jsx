import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleMeal = ({ meal }) => {
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
  return (
    <div className="flex justify-between bg-[#fff] border ">
      <div className="flex-1 flex items-center space-y-2 p-6">
        <div>
          <h2 className="font-medium text-[#939a00] font-Montserrat text-[22px]">
            {name}
          </h2>
          {/* <p className="text-sm bg-purple-300 max-w-max px-2 py-1 rounded-lg">
          {category}
        </p> */}
          <p className="font-medium text-[#000] font-Montserrat text-[19px]">
            Price : ${price}
          </p>
          <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
        </div>
      </div>
      <div className="flex-1  flex justify-center items-center">
        <p className="text-[#444] w-[140px] flex items-center justify-center h-[50px] border-4 border-[#939a00] font-inter">
          {category}
        </p>
      </div>

      <div className="flex-1">
        <img className="w-full h-[200px]" src={image}></img>
      </div>
    </div>
  );
};

export default SingleMeal;
