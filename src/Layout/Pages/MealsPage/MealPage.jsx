import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import UseMealsItem from "../../../Hooks/UseMealsItem";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import SingleMeal from "./SingleMeal";

const MealPage = () => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState("");

  const [asc, setAsc] = useState(true);
  const allMeals = UseMealsItem(asc, search);

  // const [meals , , , ] = UseMeal(asc) ;
  const [selectedOption, setSelectedOption] = useState("Dinner");
  const categoryValue = selectedOption.value;

  const filteredMeals = allMeals.filter(
    (meal) => meal.category === selectedOption.value
  );
  console.log(filteredMeals);

  const options = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];

  const onSubmit = async (data) => {
    console.log(data);
    setSearch(data.title);
  };

  return (
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
          "https://www.bu.edu/dining/files/2017/09/WESTCAMPUS_17-1870-DINING-039-1920x1080.jpg"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="">
        <div className="h-[75vh] flex justify-center items-center">
          <div className="max-w-max  text-6xl lg:text-6xl font-Inter font-bold px-8 py-3 bg-white text-[#000000]">
            Find Now
          </div>
        </div>

        {/* <div className="h-[10vh] bg-white">


        </div> */}

        <div className=" bg-white flex items-center h-[8vh] mb-20 justify-around">
          <div className=" flex gap-4">
            <h2 className="font-medium text-[#000] font-Montserrat text-[19px]">
              Filter By Category
            </h2>
            <Select
              className="w-[200px] "
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <div className="flex gap-8 items-center ">
            <h2 className="font-medium text-[#000] font-Montserrat text-[19px]">
              Filter By Price
            </h2>
            <div
              onClick={() => setAsc(!asc)}
              className="cursor-pointer button relative flex justify-center bg-[#939A00] w-[150px] h-[45px] mx-auto"
            >
              <div className="flex justify-center items-center font-semibold font-Inter  w-[150px] top-2 right-2 absolute h-[45px] border-4 border-[#939A00] text-[#939A00] bg-white">
                {asc ? "High to Low" : "Low to High"}{" "}
              </div>
            </div>
          </div>

          <div className=" bg-[#FFF] rounded border">
            <form onSubmit={handleSubmit(onSubmit)} className="flex" action="">
              <button
                type="submit"
                className="bg-[#939A00] text-white flex items-center rounded-lg m-1 justify-center w-[100px] h-[40px]  text-lg font-semibold "
              >
                {" "}
                <BsSearch></BsSearch>
              </button>
              <input
                {...register("title", { required: true })}
                name="title"
                id="field-id"
                className="pl-4 w-full outline-none "
                type="text"
                placeholder="Find Food"
              />
            </form>
          </div>

          {/* <div className=" gap-3 ">
            <h2 className="font-medium  font-Montserrat text-xl">
              Filter By Price
            </h2>
            <div
              onClick={() => setAsc(!asc)}
              className="button relative  bg-[#939A00]   mx-auto"
            >
              <div className="font-semibold font-Inter  top-2 right-2 absolute border-4 border-[#939A00] text-[#939A00] bg-white">
                {asc ? "Price : High to Low" : "Price : Low to High"}{" "}
              </div>
            </div>
            <button onClick={() => setAsc(!asc)} className="">
              <AwesomeButton type="primary">
                {asc ? "Price : High to Low" : "Price : Low to High"}{" "}
              </AwesomeButton>{" "}
            </button>
          </div>

          <div className=" bg-[#FFF] border-purple-500 rounded mt-12  border">
            <form onSubmit={handleSubmit(onSubmit)} className="flex" action="">
              <button
                type="submit"
                className="bg-[#FC4A1A] text-white flex items-center rounded-lg m-1 justify-center w-[100px] h-[50px]  text-lg font-semibold text-[#333F]"
              >
                {" "}
                <BsSearch></BsSearch>
              </button>
              <input
                {...register("title", { required: true })}
                name="title"
                id="field-id"
                className="pl-4 w-full outline-none "
                type="text"
                placeholder="Find Food"
              />
            </form>
          </div> */}
        </div>

        <div className="w-2/4 mb-20 mx-auto">
          {categoryValue ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredMeals.map((meal) => (
                <SingleMeal key={meal._id} meal={meal}></SingleMeal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {allMeals.map((meal) => (
                <SingleMeal key={meal._id} meal={meal}></SingleMeal>
              ))}
            </div>
          )}
        </div>

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default MealPage;
