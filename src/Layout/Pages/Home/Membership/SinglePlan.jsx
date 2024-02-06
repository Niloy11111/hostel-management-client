import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../../../Css/App.css";

const SinglePlan = ({ plan }) => {
  const { planName, advantages, description, price } = plan;
  return (
    <div className="singlePlan rounded-xl relative">
      <div className="box p-8 border-2 border-[#1e1f23] bg-[#2a2b2f] rounded-xl mx-3 lg:mx-5 my-5 h-[500px] lg:h-[500px] text-white">
        <h2 className="text-xl font-Inter">{planName}</h2>

        <h2 className="text-3xl lg:text-4xl font-medium mt-1 mb-4 lg:mb-8 font-Inter">
          ${price}
          <span className="text-base font-normal">/Monthly</span>
        </h2>
        <div className="h-[280px] ">
          <h2 className="text-xl font-semibold font-Inter mb-3">FEATURES</h2>
          {advantages.map((item, index) => (
            <div
              key={index}
              className="text-sm mb-1 lg:mb-3 flex items-center  font-Inter  gap-3  "
            >
              {" "}
              <IoCheckmarkCircle className="text-[#EB3656] mr-4"></IoCheckmarkCircle>{" "}
              <p className="flex-1 -ml-3 lg:hidden block">
                {item.slice(0, 90)}{" "}
              </p>
              <p className="flex-1 -ml-3 lg:block hidden">{item} </p>
            </div>
          ))}
        </div>
        <Link to={`/checkout/${planName}`}>
          <button className="bg-[#EB3656]   lg:block hidden lg:mt-9 w-full font-Inter font-semibold py-3  rounded-lg">
            Make Deal
          </button>
        </Link>
        <Link to={`/checkout/${planName}`}>
          <button className="bg-[#EB3656]   lg:hidden block  w-[250px] absolute bottom-2 left-10 mx-auto font-Inter font-semibold py-3  rounded-lg">
            Make Deal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePlan;
