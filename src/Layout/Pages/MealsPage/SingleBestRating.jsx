import React from "react";

const SingleBestRating = ({ item }) => {
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

  return (
    <div className="bg-[#E0FEC1] px-1 rounded-full  lg:pt-2 pb-3">
      <img
        className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] mx-auto rounded-full "
        src={image}
      ></img>

      <h2 className="font-Inter text-sm text-center font-semibold lg:mt-5 mt-3">
        {category}
      </h2>
      <p className="font-bold text-sm text-center font-Inter">
        $ <span className="lg:text-base font-bold font-Inter">{price}</span>{" "}
      </p>
    </div>
  );
};

export default SingleBestRating;
