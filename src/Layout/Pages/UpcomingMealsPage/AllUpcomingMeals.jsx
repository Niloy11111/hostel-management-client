import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";

import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/bannerAnimation/Animation - 1707063121384.json";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import SingleUpcoming from "./SingleUpcoming";

const AllUpcomingMeals = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: upcomingMeals = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingMeals");
      return res.data;
    },
  });

  return (
    <div>
      {/* <div className="h-[78vh] flex justify-center items-center   font-Inter font-bold px-5 py-4  ">
          <div>
            <div className="bg-white text-center p-4 text-6xl w-[500px]">
              {" "}
              What Next{" "}
            </div>
            <div className="flex gap-3 justify-center bg-blend-color bg-[#121212B3] w-2/3 mx-auto">
              <div className="py-2 flex gap-3">
                <div className="flex gap-2 items-center ">
                  <p className="text-lg font-semibold font-Inter text-white">
                    Total Upcoming Meals
                  </p>
                  <p className="text-lg font-semibold font-Inter text-white ">
                    <span className="text-base">|</span> {upcomingMeals?.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      <div className="flex justify-between ">
        <div className="flex items-center">
          <div className="">
            <h2 className="text-3xl lg:text-4xl text-center text-white font-Inter font-extrabold">
              UPCOMING
              <span className=" text-[#EB3656] "> FOOD</span>
            </h2>
            <p className="w-[600px] text-center font-Inter mt-2 text-white">
              Welcome to our Upcoming Meals Showcase! Get ready to embark on a
              culinary journey with our carefully curated selection of upcoming
              meals. Each dish is a masterpiece, crafted with passion and
              precision to tantalize your taste buds.
            </p>
            <div className="flex justify-center">
              <button className=" mt-8 px-8 py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 bg-[#EB3656] rounded-full text-white">
                Let's Eat Healthy
              </button>
            </div>
          </div>
        </div>

        <div>
          <Lottie
            className=""
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl mb-10 text-white font-Montserrat font-bold text-center">
          LIKE YOUR <span className="text-[#EB3656]">FAVORITE</span> ONE{" "}
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {upcomingMeals?.map((meal) => (
            <SingleUpcoming key={meal._id} meal={meal}></SingleUpcoming>
          ))}
        </div>
      </div>

      <Footer></Footer>

      <SocialLink></SocialLink>
    </div>
  );
};

export default AllUpcomingMeals;
