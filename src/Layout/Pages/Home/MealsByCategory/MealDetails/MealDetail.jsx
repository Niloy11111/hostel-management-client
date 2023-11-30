import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import UseMeal from "../../../../../Hooks/UseMeal";
import UseAuth from "../../../../../Hooks/UseAuth";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";



const MealDetail = () => {
   const {user} = UseAuth() ;
   const navigate = useNavigate() ;
   const axiosSecure = UseAxiosSecure() ;
    const axiosPublic = useAxiosPublic() ;
    const [meals , loading ] = UseMeal() ;
    const mealDetail = useLoaderData() ;
    const { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
        image, _id } = mealDetail ;

    const { register, handleSubmit } = useForm() ;

    const {data : allReviews =  [], refetch} = useQuery({
        queryKey : ['reviews'] ,
        queryFn : async () => {
            const res = await axiosPublic.get(`/reviews?title=${name}`) ;
            return res.data ;
           
        }
        
    })

    console.log("all review",allReviews.length)

   

        const [isLiked, setIsLiked] = useState(false);
        const handleLikeClick = () => {

          if(user){
            setIsLiked(!isLiked); 
            const mealId = _id ;
            const title = name ;
            const state = isLiked ;
            const mealInfo = {title , mealId, state} ;
            axiosPublic.post('/likedMeals', mealInfo) 
            .then(data => {
               refetch() ;
              console.log(data.data)
            })
          }
          // else{
          //   navigate('/login')
          // }
          }
            

        const likeButtonStyle = {
            color: isLiked ? 'green' : 'black',
          };

          const handleMealRequest = () => {
            if(user){
              const title = name ;
              const likeNumber = likes ;
              const userName = user?.displayName ;
              const userEmail = user?.email ;
              const status = 'pending' ;
              const reviews = allReviews.length ;
              const requestedMealInfo = {
                title, likeNumber , status, reviews, userName, userEmail
              }
               
              axiosSecure.post('/mealRequest', requestedMealInfo ) 
              .then(data => {
                if(data.data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have done a Request",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              })
          
            }
            else{
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You Need to Login First to request",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/login')

            }
          }

          const onSubmit = async (data) => {
            console.log(data)
            const userEmail = user?.email ;
            const title = name ;
            const likeNumber = likes ;
            const reviewNumbers = allReviews.length ; 
            const review = data.review ;
            const detailsId = _id ;
            const reviewInfo = {
              title, likeNumber, reviewNumbers, review, userEmail, detailsId
            }
            axiosSecure.post(`/reviews`, reviewInfo ) 
              .then(data => {
                if(data.data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have added a Review",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch() ;
                 
                }
              })
            
          }

    return (
    
      <div className="flex gap-10">

<div className="w-4/6">
          <h2 className="my-10 font-Montserrat text-[#444] text-3xl font-bold">{name}</h2>
             <div className="flex mb-5 gap-3 items-center ">
             <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    /> 
   <p className="text-[#005278] font-Montserrat font-medium text-lg"> {likes} likes</p>

   <button onClick={handleLikeClick}
        style={likeButtonStyle}><AiOutlineLike className="text-2xl ml-2"></AiOutlineLike></button>
   
             </div>
             <div className="flex gap-2 items-center border-b pb-8">
                <img src="https://www.tasteofhome.com/wp-content/themes/bumblebee-toh-child/images/recipes/Symbol-Time.png"></img>
              <p className="font-Montserrat font-medium text-[#444] text-xl">Post Time <span className="font-normal text-gray-600 ml-3">{postTime}</span></p>
             </div>
            

             <p className="text-[#454c58] font-Montserrat font-normal mt-7">{description}</p>
             

           <div className="flex gap-3 mt-10 rounded-lg bg-sky-200">
           <img className="rounded-l-lg" src={image}></img>
            <div className="flex items-center justify-center">
        <button onClick={handleMealRequest}><AwesomeButton  className="block" type="secondary">Request Meal</AwesomeButton></button> 
      
        </div>
           </div>

            <h2 className="my-6 font-Montserrat text-[#444] text-2xl font-bold">Ingredients</h2>

            <div className="w-2/4">
                {
                    ingredient.map((item, index) => <p key={index} className="border-b border-gray-400 py-3"> {item} </p>)
                }
            </div>
        </div>

        <div className="w-2/6">
          <h2 className="my-10 font-Montserrat text-center  text-[#444] text-3xl font-bold">Add Your Thoughts Here </h2>

       
        
   <form onSubmit={handleSubmit(onSubmit)}>


      
      <textarea className="outline-none border-2 w-full  mb-6" {...register('review' , {required : true})} id="" cols="30" rows="5"></textarea>

      
       <div className="flex justify-center">
       <button className=" px-8 py-3 border-2 bg-red-100">Make Review</button>
       </div>
      
   </form>

        <div>
          <h2 className="text-2xl my-10 text-center font-bold font-Montserrat">Our Customers Opinion</h2>
          {
            allReviews.map(item => <li key={item._id}> 
            {item.review}
             </li>)
          }
        </div>
        </div>
      </div>
        
   
    );
};

export default MealDetail;