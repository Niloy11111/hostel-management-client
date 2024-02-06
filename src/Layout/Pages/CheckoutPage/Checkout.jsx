import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import CheckOutForm from "./checkOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Checkout = () => {
  const plan = useLoaderData();
  const [item] = plan;

  console.log(plan);

  return (
    <div className="my-20">
      <h2 className="text-3xl lg:text-4xl uppercase text-center mb-10 lg:mb-10  text-white font-Inter font-extrabold">
        Payment <span className=" text-[#EB3656] "> Details</span>
      </h2>
      <div className="h-[70vh] bg-white rounded-3xl w-2/3 mx-auto p-10">
        <div className="relative">
          <div className="bg-[#20272D] flex justify-center items-center h-[17vh] rounded-3xl">
            <div>
              {" "}
              <h2 className="text-white mb-1  font-Inter">You have selected</h2>
              <h2 className="text-white text-center text-2xl font-Inter font-bold">
                {item.planName}
              </h2>
            </div>
          </div>

          <div className="flex justify-center items-center h-[13vh] w-4/6 mx-auto -mt-8 bg-white shadow-xl rounded-3xl">
            <div>
              <h2 className="text-center text-3xl font-Inter font-bold text-[#EB3656]">
                $ {item.price}
              </h2>
              <p className=" text-center font-Inter font-bold">
                For each additional user billed monthly
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <h2 className="font-semibold font-Inter mt-8 mb-5">We Accept</h2>

            <div className="flex gap-4">
              <img
                className="w-[80px] h-[80px] rounded-xl"
                src="https://i.ibb.co/ykChZxf/Visa-Straight.png"
              ></img>
              <img
                className="w-[80px] h-[80px] rounded-xl"
                src="https://i.ibb.co/x3HfnTM/Mastercard-Curved.png"
              ></img>
              <img
                className="w-[80px] h-[80px] rounded-xl"
                src="https://i.ibb.co/8NdBnxF/Discover-Straight.png"
              ></img>
              <img
                className="w-[80px] h-[80px] rounded-xl"
                src="https://i.ibb.co/j4y84Zj/Delta-Curved.png"
              ></img>
            </div>
            <div className="w-[350px]">
              <Elements stripe={stripePromise}>
                <CheckOutForm item={item}></CheckOutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
};

export default Checkout;
