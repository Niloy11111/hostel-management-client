import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const MealCard = ({ item }) => {
    const { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
        image, _id } = item;


    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();

    return (
        <div className="space-y-2">
         
            <img className="w-full h-[400px]"  src={image}></img>
            <h2 className="font-serif text-2xl font-normal">{name}</h2>
            <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    /> 
    <p className="font-serif text-2xl font-normal ">Price ${price}</p>

    <AwesomeButton type="primary">Explore More</AwesomeButton>
   
        </div>
    );
};

export default MealCard;