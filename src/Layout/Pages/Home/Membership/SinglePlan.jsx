import { PiArrowElbowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../../../../Css/App.css";

const SinglePlan = ({ plan }) => {
  const { planName, advantages, description, price } = plan;
  return (
    <div className="border p-6 h-[700px] mx-2 bg-white ">
      <h2 className="text-5xl my-8 font-Montserrat font-medium text-center text-[#E37714]">
        {planName}
      </h2>
      <div className="h-3/6">
        {advantages.map((item, index) => (
          <p
            key={index}
            className="mb-3 justify-center font-inter font-semibold flex items-center gap-3  "
          >
            {" "}
            <PiArrowElbowRightLight className=""></PiArrowElbowRightLight>{" "}
            {item}{" "}
          </p>
        ))}
      </div>

      <div className="memberCard">
        <h2 className="text-5xl my-8 font-Montserrat font-medium text-center ">
          ${price} Monthly
        </h2>
        <Link to={`/checkout/${planName}`}>
          <div className="flex justify-center">
            <div className="button relative flex justify-center bg-[#E37714] w-[130px] h-[45px] mx-auto">
              <div className="flex justify-center items-center font-semibold font-Inter  w-[130px] top-2 right-2 absolute h-[45px] border-4 border-[#E37714] text-[#E37714] bg-white">
                Make Deal
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SinglePlan;
