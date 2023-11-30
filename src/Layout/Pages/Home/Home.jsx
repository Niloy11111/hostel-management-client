

import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";

import MealsByCategory from "./MealsByCategory/MealsByCategory";
import Membership from "./Membership/Membership";



const Home = () => {
    return (
        <div>
         <Helmet>
        <title> Hostel | Home </title>
      
      </Helmet>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
           <Membership></Membership>
        </div>
    );
};

export default Home;