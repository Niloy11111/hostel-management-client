import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AiOutlineLike } from "react-icons/ai";
import UseAuth from "../../../Hooks/UseAuth";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SingleUpcoming = ({meal}) => {
    
    const {user} = UseAuth() ;
    const navigate = useNavigate() ;
    const axiosPublic = useAxiosPublic() ;
    const { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
        image, _id } = meal ;
        const [isLiked, setIsLiked] = useState(false);
        const handleLikeClick = () => {

          if(user){
            setIsLiked(!isLiked); 
            const mealId = _id ;
            const title = name ;
            const state = isLiked ;
            const mealInfo = {title , mealId, state} ;
            axiosPublic.post('/likedMealsUpcoming', mealInfo) 
            .then(data => {
            //    refetch() ;
              console.log(data.data)
            })
          }
          else{
            navigate('/login')
          }
          }
          const likeButtonStyle = {
            color: isLiked ? 'green' : 'black',
          };
            

    return (
        <div className="space-y-2 border p-2">
            <img className="rounded-t-lg" src={image}></img>
            <h2 className="font-serif">{name}</h2>
            
            <p  className="font-serif">${price}</p>
            <Rating
      style={{ maxWidth: 120 }}
      value={rating}
      readOnly
    /> 
    <div className="flex gap-2">
    <button onClick={handleLikeClick}
        style={likeButtonStyle}><AiOutlineLike className="text-2xl ml-2"></AiOutlineLike></button>
        
         <h2 className="font-serif">  Likes {likes}  </h2>
    </div>
   
            
        </div>
    );
};

export default SingleUpcoming;