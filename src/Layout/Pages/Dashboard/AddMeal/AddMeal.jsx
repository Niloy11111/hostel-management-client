import { format,  parseISO } from "date-fns";

import { useForm } from "react-hook-form";
import { Fa500Px } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";


const AddMeal = () => {
  const axiosPublic = useAxiosPublic() ;
  const {user} = UseAuth() ;

  const { register, handleSubmit } = useForm();


  const onSubmitAddMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }
    
    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");
    console.log(formattedDateTime);
    const ingredientsArray = data.ingredients.split(', ').map((ingredient) => ingredient.trim());

    const mealInfo = {
      name: data.name,
      category : data.category ,
      price: parseFloat(data.price),
      postTime : formattedDateTime ,
      rating : parseFloat(data.rating),
      likes : parseFloat(data.like),
      review : parseFloat(data.review),
      adminName : data.adminName ,
      adminEmail : data.adminEmail ,
      ingredient :  ingredientsArray,  
      description: data.description,
      image : data.image 
    }
    const mealRes = await axiosPublic.post('/meals', mealInfo) ;
    console.log(mealRes.data)
    if(mealRes.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
        showConfirmButton: false,
        timer: 1500
      });
    }




  }

  const onSubmitUpcomingMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }
    
    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");
    console.log(formattedDateTime);
    const ingredientsArray = data.ingredients.split(', ').map((ingredient) => ingredient.trim());
    console.log(ingredientsArray)

    const upcomingMealInfo = {
      name: data.name,
      category : data.category ,
      price: parseFloat(data.price),
      postTime : formattedDateTime ,
      rating : parseFloat(data.rating),
      likes : parseFloat(data.like),
      review : parseFloat(data.review),
      adminName : data.adminName,
      adminEmail : data.adminEmail ,
      ingredient :  ingredientsArray,  
      description: data.description,
      image : data.image 
    }
    console.log(data)
    const upcomingMealRes = await axiosPublic.post('/upcomingMeals', upcomingMealInfo) ;
    console.log(upcomingMealRes.data)
    if(upcomingMealRes.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  return (
    <div>

      <div className="w-4/6 ">
        <ul>
          { }
        </ul>
        <form >

          <div className="form-control  my-6">
            <label className="label">
              <span className="label-text">Meal Name</span>
            </label>
            <input {...register('name', { required: true })}
              required
              type="text" placeholder="Type here" className="py-3 border pl-3 rounded outline-none input-bordered w-full " />
          </div>


          <div className="flex gap-5">
            {/* category  */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category </span>
              </label>

              <select defaultValue="default" {...register('category', { required: true })} className="py-3 border pl-3 rounded outline-none  w-full ">

                <option disabled value="default">Select a category </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch </option>
                <option value="Dinner">Dinner </option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input {...register('price', { required: true })}
                type="number" placeholder="Price" className="py-3 border pl-3 rounded outline-none w-full " />
            </div>


          </div>

          <div className="flex gap-4  mb-6">
            
           <div className="w-full">
            <h4 className=" mb-2">Date</h4>
           <input type="datetime-local"  {...register('date', { required: true })} className="py-3 border pl-3 rounded outline-none w-full" />
           </div>
           <div className="w-full">
           <h4 className=" mb-2">Rating</h4>
           <input type="number" defaultValue={0} {...register('rating', { required: true })} className="py-3 border pl-3 rounded outline-none w-full " />

           </div>

           <div className="w-full">
           <h4 className=" mb-2">Likes</h4>
           <input type="number" defaultValue={0} placeholder="Likes" {...register('like')} name="" id="" className="py-3 border pl-3 rounded outline-none w-full " />
           </div>
          </div>

          <div className="flex gap-4 mb-6">
            <input type="number" defaultValue={0} placeholder="Reviews" {...register('review')} name="" id="" className="py-3 border pl-3 rounded outline-none w-full" />
            <input type="text" placeholder="Distributor Name" {...register('adminName')} defaultValue={user?.displayName} name="" id="" className="py-3 border pl-3 rounded outline-none w-full" />
            <input type="text" defaultValue={user?.email} placeholder="Distributor Email" {...register('adminEmail')} name="" id="" className="py-3 border pl-3 rounded outline-none w-full" />

          </div>

          <textarea {...register('ingredients')} placeholder="Ingredients" className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6" ></textarea>


          <textarea {...register('description')} placeholder="Description" className="py-3 border pl-3 rounded outline-none textarea-lg w-full mb-6" ></textarea>

          <div>
            <input {...register('image', { required: true })}
              type="text" placeholder="imageURL" className="py-3 border pl-3 rounded outline-none w-full mb-6 " />
          </div>

          <button onClick={handleSubmit(onSubmitAddMeal)} className="btn">
            Add Meal <Fa500Px className="ml-4"></Fa500Px>
          </button>
          <button onClick={handleSubmit(onSubmitUpcomingMeal)} className="btn ml-4">
            Add To Upcoming <Fa500Px className=""></Fa500Px>
          </button>


        </form>
      </div>
    </div>
  );
};

export default AddMeal;