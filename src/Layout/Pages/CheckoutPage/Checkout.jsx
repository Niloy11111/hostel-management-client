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

  return (
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
        "https://www.bu.edu/dining/files/2020/04/17-1870-DINING-035-1920x1080.jpg"
      )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-blend-color bg-[#000000ab] ">
        <div className="flex justify-center gap-40 pt-20">
          <div className="relative bg-[#E0EB19] w-[280px] h-[90px] ">
            <div className="flex justify-center items-center font-bold font-Inter  w-[280px] top-4 right-4 absolute h-[90px] text-[#000000] bg-white text-6xl">
              {item.planName}
            </div>
          </div>

          <div className="w-[300px]">
            <h2 className="text-lg font-bold font-Inter text-white border-b-4 pb-2 border-[#E0EB19]">
              Also in Ready To Go:
            </h2>
            <div>
              <ul className="flex flex-col mt-7 space-y-2">
                <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Contact Us
                </a>
                <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Social Media
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-2/4 mx-auto mt-20">
          <div className="bg-white p-12">
            <div className="">
              <p className="font-medium font-Inter text-[#000000]">
                {item.description}
              </p>
              <div className="border-b-4 pb-1 my-4 w-[350px]  border-[#B7C011]">
                <h2 className="mt-8 text-2xl font-Inter font-bold ">
                  {item.planName}
                </h2>
              </div>
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
