import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./checkOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK) ;
const Checkout = () => {
    const plan = useLoaderData() ;
    const [item] = plan ;

    return (
        <div className="flex gap-6 my-20">
          <div className="w-3/6">
          <h2 className="text-5xl my-8 font-Montserrat font-bold ">{item.planName}</h2>
          <p className="font-Montserrat text-[#444] max-w-max">
            {item.description}
          </p>
          </div>
           <div className="w-2/6 border p-8">
            <Elements stripe={stripePromise}> 
           <CheckOutForm item={item}></CheckOutForm>
            </Elements>
           </div>

        </div>
    );
};

export default Checkout;