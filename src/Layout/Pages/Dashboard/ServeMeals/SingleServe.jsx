import React from "react";
import { Link } from "react-router-dom";

const SingleServe = ({ item, handleServeMeal }) => {
  const { title, likeNumber, userEmail, userName, status } = item;
  return (
    <div className="bg-[#2C2C2C] rounded-3xl ">
      <div className="px-4 pb-4">
        <div className="p-2 font-Inter ">
          <h2 className=" mt-3 text-center font-Inter text-lg font-semibold">
            {title?.split(" ")[0]} {title?.split(" ")[1]}
          </h2>

          <p className="text-center">
            {" "}
            Position : {item.status === "delivered" ? "Delivered" : "Pending"}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-3 text-[#000000]">
          <button
            onClick={() => handleServeMeal(item)}
            className=" w-full rounded bg-[#EB3656] hover:bg-[#870012] transition-all duration-300 items-center py-1 font-Inter font-medium  text-sm  text-white"
          >
            {status === "delivered" ? " Served" : "Accept"}
          </button>
          <Link className="w-full" to={`/details/${item.detailsId}`}>
            <button className="py-1  hover:text-[#FFF]  font-Inter font-medium  text-sm w-full bg-[#BFFCF9] transition-all text-[#000000] duration-300 hover:bg-[#870012] rounded">
              View Meal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServe;
