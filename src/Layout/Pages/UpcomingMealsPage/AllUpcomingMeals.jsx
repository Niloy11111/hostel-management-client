import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";

import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Upcoming Meals | CampusBite</title>
      </Helmet>

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
              <button className="bg-[#BFFCF9] text-[#000000] mt-8 px-8 py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200  rounded-full hover:text-white">
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
        <h2 className="text-3xl mb-10 text-white font-Inter font-bold text-center">
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
