import { FaUsers } from "react-icons/fa";
import UseMeal from "../../../../Hooks/UseMeal";
import { Link } from "react-router-dom";


const AllMeals = () => {
    const [meals , loading, refetch ] = UseMeal() ;

    // { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
    //     image, _id }

    return (
        <div>
            <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">Total Meals {meals.length}</h2> 
            <div className="overflow-x-auto">
  <table className="table border w-full">
    {/* head */}
    <thead>
      <tr>
        <th className="text-center text-lg font-serif text-[#444]">#</th>
        <th className="text-center text-lg font-serif text-[#444]">Name</th>
        <th className="text-center text-lg font-serif text-[#444]">Total Likes</th>
        <th className="text-center text-lg font-serif text-[#444]">Total Reviews</th>
        <th className="text-center text-lg font-serif text-[#444]">Distributor Name</th>
        <th className="text-center text-lg font-serif text-[#444]">Distributor Email</th>
        <th className="text-center text-lg font-serif text-[#444]">Update</th>
        <th className="text-center text-lg font-serif text-[#444]">Delete</th>
        <th className="text-center text-lg font-serif text-[#444]">View Meal</th>
        
      </tr>
    </thead>
    <tbody>
      {
        meals.map((meal, index) =><tr key={meal._id}>
            <th className="text-sm text-[#444] font-normal font-Montserrat text-center " >{index+ 1}</th>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >{meal.name}</td>
          
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >{meal.likes}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >{meal.review}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >{meal.adminName}</td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >{meal.adminEmail}</td>

            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >
       
          <Link to={`/dashboard/updateMeal/${meal._id}`}> <button className="bg-purple-500 p-2 rounded text-[#fff] ">Update</button></Link>
            </td>

            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >
             <button className="bg-red-500 p-2 rounded text-[#fff] ">Delete</button>
            </td>
            <td className="text-sm text-[#444] font-normal font-Montserrat text-center " >
           <Link to={`/details/${meal._id}`}>
           <button className="bg-blue-500 p-2 rounded text-[#fff] ">View Meal</button></Link>
            </td>

          </tr> )
      }
      
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllMeals;