import React from "react";

const SingleRequest = ({ item, handleDeleteRequest }) => {
  const { title, likeNumber, status, reviews, img } = item;
  return (
    <div className="bg-[#2C2C2C]  rounded-3xl relative ">
      <div className="">
        <img
          className="w-full h-[150px] rounded-t-lg rounded-b-[30px]"
          src={img}
        ></img>
      </div>

      <div className="font-Inter p-4 mb-8">
        <h2 className=" font-Inter text-lg font-semibold">
          {title?.split(" ")[0]} {title?.split(" ")[1]}
        </h2>
        <div className="flex  gap-4">
          <p>{likeNumber} likes</p>
          <p>{reviews} reviews</p>
        </div>
      </div>

      <div
        onClick={() => handleDeleteRequest(item)}
        className="absolute cursor-pointer bottom-0 left-0 rounded-t-[20px]   text-center w-full py-2 rounded bg-[#EB3656] hover:bg-[#870012] transition-all duration-300 items-center  font-Inter font-medium  text-sm  text-white"
      >
        Delete
      </div>
    </div>
  );
};

export default SingleRequest;
