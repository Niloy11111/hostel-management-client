import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import banner from "../../../assets/bannerAnimation/Animation - 1707063121384.json";
import Footer from "../Home/Footer/Footer";
import SingleUpcoming from "./SingleUpcoming";
const AllUpcomingMeals = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: upcomingMeals = [],
    isLoading: loading,
    refetch: upcomingRefetch,
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

      <div className="addFlexBetween gap-4 lg:gap-10 flex-col-reverse lg:flex-row  ">
        <div className="addFlexItems lg:w-2/4 ">
          <div className="">
            <h2 className="text-3xl lg:text-4xl text-center   font-extrabold">
              UPCOMING
              <span className=" text-p1 "> FOOD</span>
            </h2>
            <p className=" text-center  mt-2 ">
              Welcome to our Upcoming Meals Showcase! Get ready to embark on a
              culinary journey with our carefully curated selection of upcoming
              meals. Each dish is a masterpiece, crafted with passion and
              precision to tantalize your taste buds.
            </p>
            <Link to={`/allMeals`}>
              <div className="addFlexJustify">
                <button className="btnAll mt-4 px-6 lg:px-8 py-1 lg:py-2   font-medium  transition-all duration-200 rounded bg-p1 ">
                  <span className=""> Eat Healthy </span>
                </button>{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          {" "}
          <Lottie className="" animationData={banner} loop={true} />
        </div>
      </div>

      <div className="mb-20 mt-10 lg:mt-0">
        <h2 className="text-2xl lg:text-3xl mb-10   font-bold text-center">
          LIKE YOUR <span className="text-p1">FAVORITE</span> ONE{" "}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {upcomingMeals?.map((meal) => (
            <SingleUpcoming
              key={meal._id}
              upcomingMeals={upcomingMeals}
              upcomingRefetch={upcomingRefetch}
              meal={meal}
            ></SingleUpcoming>
          ))}
        </div>
      </div>

      <Footer></Footer>

      <SocialLink></SocialLink>
    </div>
  );
};

export default AllUpcomingMeals;
