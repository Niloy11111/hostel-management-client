import {BsSearch} from "react-icons/bs";
import Select from 'react-select';
import SingleMeal from "./SingleMeal";
import { useState } from "react";
import UseMealsItem from '../../../Hooks/UseMealsItem';
import { useForm } from "react-hook-form";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const MealPage = () => {

    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState('');
    
    const [asc , setAsc] = useState(true) ;
    const allMeals = UseMealsItem(asc, search) ;

    // const [meals , , , ] = UseMeal(asc) ;
    const [selectedOption, setSelectedOption] = useState('Dinner');
    const categoryValue = selectedOption.value ;

    const filteredMeals = allMeals.filter(meal => meal.category === selectedOption.value)
    console.log(filteredMeals)
    
    const options = [
      
        { value: 'Breakfast', label: 'Breakfast' },
        { value: 'Lunch', label: 'Lunch' },
        { value: 'Dinner', label: 'Dinner' },
      ];
   
      const onSubmit = async (data) => {
        console.log(data) 
       setSearch(data.title)
     
        
    }
 
  

    return (
        <div className="pb-20">
           <h2 className="text-3xl my-8 font-Montserrat font-bold text-center">All Meals Here</h2>

      
         <div className="flex w-full items-center gap-8 my-12 justify-between">
         <div className="w-2/6">
            <h2 className="font-medium my-5 font-Montserrat text-xl">Filter By Category</h2>
           <Select className='w-full rounded-lg p-2 bg-green-300 '
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
           </div>

     <div>
     <h2 className="font-medium my-4 font-Montserrat text-xl">Filter By Price</h2>
     <button onClick={() => setAsc(!asc)} className=''><AwesomeButton type="primary">{
        asc ? 'Price : High to Low' : 'Price : Low to High'
      } </AwesomeButton> </button>
     </div>

      
<div className=' bg-[#FFF] border-purple-500 rounded mt-12  w-2/6 border'>
    
                       <form onSubmit={handleSubmit(onSubmit)}className="flex" action="">
                       <button type="submit" className='bg-[#FC4A1A] text-white flex items-center rounded-lg m-1 justify-center w-[100px] h-[50px]  text-lg font-semibold text-[#333F]'> <BsSearch></BsSearch></button>
                        <input {...register('title' , {required : true})}  name='title' id='field-id' className='pl-4 w-full outline-none ' type="text" placeholder='Find Food' />
                       </form>
                    </div>
         </div>

          {
            categoryValue ?
            <div className="grid grid-cols-3 gap-6">
            {
                filteredMeals.map(meal => <SingleMeal
                key={meal._id}
                meal={meal}
                ></SingleMeal> )
            }
           </div>
            : <div className="grid grid-cols-3 gap-6">
            {
                allMeals.map(meal => <SingleMeal
                key={meal._id}
                meal={meal}
                ></SingleMeal> )
            }
           </div> 
           
          }


            
        </div>
    );
};

export default MealPage;