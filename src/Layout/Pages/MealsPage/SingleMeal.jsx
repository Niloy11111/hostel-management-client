import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const SingleMeal = ({meal}) => {
      const { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
        image, _id } = meal ;
    return (
        <div className="flex gap-10 bg-[#fff] p-4 border rounded">
        <div>
        <img className="w-[100px] rounded-[30px] h-[100px]" src={image}></img>
        </div>

           <div className="space-y-2">
           <h2 className="text-lg font-Montserrat font-medium">{name}</h2>
            <p className="text-sm bg-purple-300 max-w-max px-2 py-1 rounded-lg">{category}</p>
            <p>Price : ${price}</p>
            <Rating
      style={{ maxWidth: 130 }}
      value={rating}
      readOnly
    /> 

           </div>
        </div>
    );
};

export default SingleMeal;