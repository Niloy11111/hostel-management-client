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
    <div className="mt-24">
      <div className=" bg-[#fff] w-[270px]  rounded-3xl ">
        <div className="  space-y-2 relative h-[120px]">
          <div className="absolute -top-24 left-9">
            <img
              className="  rounded-full   w-[200px] h-[200px]"
              src={image}
            ></img>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="space-y-1">
            <h2 className="font-bold font-Inter text-[#000]  text-[22px]">
              {name?.split(" ")[0]} {name?.split(" ")[1]}
            </h2>

            <Rating
              className="mx-auto"
              style={{ maxWidth: 130 }}
              value={rating}
              readOnly
            />

            <p className=" text-center font-inter">{category}</p>
          </div>
        </div>
        <p className="text-[#EB3656] text-center mt-10 pb-12 font-medium  font-Montserrat text-[19px]">
          USD ${price}
        </p>
      </div>
    </div>
  );
};

export default SingleMeal;
