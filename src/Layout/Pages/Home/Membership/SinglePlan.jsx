import { PiArrowElbowRightLight } from "react-icons/pi";
import { AwesomeButton } from 'react-awesome-button';
import { Link } from "react-router-dom";

const SinglePlan = ({plan}) => {
    const {planName, advantages, description, price} = plan ;
    return (
        <Link to={`/checkout/${planName}`}>
        <div className="border p-6">
        <h2 className="text-5xl my-8 font-Montserrat font-bold text-center">{planName}</h2>
        {
            advantages.map((item, index) =>  <p
                key={index}
                className="mb-3 justify-center font-Montserrat font-normal text-sm flex items-center gap-3 "> <PiArrowElbowRightLight></PiArrowElbowRightLight> {item} </p>)
        }
      
      <div className="mt-32">
      <h2 className="text-5xl my-8 font-Montserrat font-bold text-center text-green-400">${price} Monthly</h2>
       <div className="flex justify-center">
       <button className=""><AwesomeButton  className="block" type="github">Make Deal</AwesomeButton></button></div> 
    </div>
      </div></Link>
    
    );
};

export default SinglePlan;