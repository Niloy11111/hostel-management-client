import { Helmet } from "react-helmet";

import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MealsByCategory from "./MealsByCategory/MealsByCategory";
import Membership from "./Membership/Membership";
import Description from "./Shortdescription/Description";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(
            "https://www.bu.edu/dining/files/2021/08/Meal-Plans-21-1.png"
          )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className=" -mx-16  lg:-mx-36 "
    >
      <Helmet>
        <title> Foodtank | Home </title>
      </Helmet>
      <Banner></Banner>
      <div className="">
        <Description></Description>
      </div>

      <div className="bg-blend-color bg-[#121212B3]">
        <MealsByCategory></MealsByCategory>
        <Membership></Membership>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
