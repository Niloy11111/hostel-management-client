import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import UseMeal from "../../../Hooks/UseMeal";
import UseMealsItem from "../../../Hooks/UseMealsItem";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import SingleBestRating from "./SingleBestRating";
import SingleMeal from "./SingleMeal";
const MealPage = () => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState("");

  const [asc, setAsc] = useState(true);
  const allMeals = UseMealsItem(asc, search);
  const [meals] = UseMeal();

  // const [meals , , , ] = UseMeal(asc) ;
  const [selectedOption, setSelectedOption] = useState("Dinner");
  const categoryValue = selectedOption.value;

  const bestRatingMeals = meals.filter((item) => item?.rating > 3);

  console.log("best", bestRatingMeals);

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
  };

  return (
    <div className="mt-16">
      <div className="">
        <h2 className="text-white text-3xl lg:text-4xl text-center  font-Inter font-bold  ">
          Eat Quality <span className="text-[#EB3656]"> Food</span>
        </h2>

        <div className="flex justify-between mt-20">
          <div className="flex items-center">
            <div>
              <p className="my-5 text-white font-Inter font-medium">
                Welcome to CampusBite Meals page{" "}
              </p>

              <p className="mb-7 text-white font-Inter font-medium">
                CampusBite a name that Fuel campus life with delicious bites!
                Explore a world of diverse, healthy, <br /> and convenient food
                options
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[30px]"
                    src="https://i.ibb.co/qxknKhC/checkmark.png"
                  ></img>
                  <p className=" text-white text-sm font-Inter font-medium">
                    The food here uses 100% natural preservatives
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[30px] "
                    src="https://i.ibb.co/qxknKhC/checkmark.png"
                  ></img>
                  <p className=" text-white text-sm font-Inter font-medium">
                    The package here is very up to date and safe
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[30px]"
                    src="https://i.ibb.co/qxknKhC/checkmark.png"
                  ></img>
                  <p className=" text-white text-sm font-Inter font-medium">
                    A comfortable place to hang out with your friends.
                  </p>
                </div>
              </div>
              <div className="border  w-2/3 rounded mt-16">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" flex "
                  action=""
                >
                  <button
                    type="submit"
                    className="bg-[#EB3656] hover:bg-[#870012] transition-all duration-150 text-white flex items-center  justify-center w-[100px] h-[40px]  text-lg font-semibold "
                  >
                    {" "}
                    <BsSearch></BsSearch>
                  </button>
                  <input
                    {...register("title", { required: true })}
                    name="title"
                    id="field-id"
                    className="pl-4 w-full outline-none"
                    type="text"
                    placeholder="Find Food"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="absolute z-10 top-[310px] right-[530px]">
              <img
                className="w-[330px] h-[480px] rounded-xl"
                src="https://i.ibb.co/Mp5LL3p/platting-4282016-1280.jpg"
              ></img>
            </div>
            <div className="mt-16">
              <img
                className="w-[330px] h-[480px] rounded-xl"
                src="https://i.ibb.co/4K4PbqN/table-2600954-1280.jpg"
              ></img>
            </div>
          </div>
        </div>

        {/* <div className=" bg-white flex items-center mt-24 h-[8vh] mb-20 justify-around">
          <div className=" flex gap-4">
            <h2 className="font-medium text-[#000] font-Montserrat text-[19px]">
              Filter By Category
            </h2>
            <Select
              className="w-[200px] flex"
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
        </div> */}

        <div className="border-b mt-20 mb-12 border-[#444] pb-10">
          <h2 className="text-white text-3xl lg:text-4xl text-center  font-Inter font-bold  ">
            Our <span className="text-[#EB3656]"> Specials</span>
          </h2>
        </div>

        <div className="flex justify-between ">
          <div>
            <div className="  bg-white  p-6 w-[480px]  mt-24 pb-20 rounded-3xl">
              <div className="flex gap-16 ">
                <div className=" bg-[#FFF]  ">
                  <div className=" gap-4">
                    <h2 className="font-bold text-center mb-4 text-[#000] font-Inter text-[19px]">
                      Filter By Category
                    </h2>
                    <Select
                      className="w-[200px] "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-center mb-4 text-[#000] font-Inter  text-[19px]">
                    Filter By Price
                  </h2>
                  <button
                    onClick={() => setAsc(!asc)}
                    className="cursor-pointer px-10  py-2 rounded button  bg-[#161515] hover:bg-[#444] text-white"
                  >
                    {asc ? "High to Low" : "Low to High"}{" "}
                  </button>
                </div>
              </div>

              <h2 className="font-bold text-center mb-10 text-[#000] font-Inter text-3xl lg:text-4xl  mt-36 ">
                Best Rating Meal
              </h2>
              <div className=" ">
                <Slider {...settings} className="">
                  {bestRatingMeals.map((item) => (
                    <SingleBestRating
                      key={item._id}
                      item={item}
                    ></SingleBestRating>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="mb-20 ">
            {categoryValue ? (
              <div className="grid grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                  <SingleMeal key={meal._id} meal={meal}></SingleMeal>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {allMeals.map((meal) => (
                  <SingleMeal key={meal._id} meal={meal}></SingleMeal>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default MealPage;
