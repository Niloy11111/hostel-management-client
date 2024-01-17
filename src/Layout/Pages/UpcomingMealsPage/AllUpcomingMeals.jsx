import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";

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
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
         "https://www.bu.edu/dining/files/2020/04/19-1172-DINING3-114.jpg"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <div className="h-[78vh] flex justify-center items-center   font-Inter font-bold px-5 py-4  ">
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
        </div>
      </div>

      <div className="h-[30vh] bg-white flex items-center">
        <p className="text-[#000] w-2/4  mx-auto font-inter text-lg text-center">
          Welcome to our Upcoming Meals Showcase! 🍽️ Get ready to embark on a
          culinary journey with our carefully curated selection of upcoming
          meals. Each dish is a masterpiece, crafted with passion and precision
          to tantalize your taste buds. From savory delights to sweet
          indulgences, our upcoming meals are a celebration of flavors and
          creativity. Explore the tantalizing previews below and mark your
          calendar for a gastronomic adventure. Our chefs are hard at work to
          bring you an unforgettable dining experience. Don't miss out on the
          opportunity to savor the extraordinary – your taste buds will thank
          you later!
        </p>
      </div>

      <div className="py-20 bg-blend-color bg-[#000000ab] ">
        <h2 className="text-3xl mb-10 text-white font-Montserrat font-bold text-center">
          Our Upcoming Meals{" "}
        </h2>

        <div className="grid grid-cols-4 w-7/12 mx-auto gap-6">
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
