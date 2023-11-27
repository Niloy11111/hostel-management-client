

import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MealsByCategory from "./MealsByCategory/MealsByCategory";



const Home = () => {
    return (
        <div>
         <Helmet>
        <title> Hostel | Home </title>
      
      </Helmet>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;