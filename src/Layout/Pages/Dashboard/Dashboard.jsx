import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAd, FaBook, FaCalendar, FaExchangeAlt, FaHome, FaLeaf, FaList } from 'react-icons/fa';
import UseAdmin from "../../../Hooks/UseAdmin";

const Dashboard = () => {
 
    const [isAdmin] = UseAdmin() ;
    

    return (
        <div className="flex ">
            <div className="w-96 min-h-screen bg-[#fc4a1a] pl-20 pt-10"> 
                <ul className="menu space-y-2">
                    {
                        isAdmin ? 
                        <>
                         <li> 
                        <NavLink to='/dashboard/adminProfile'> 
                       <FaHome></FaHome>
                     Admin Profile</NavLink> </li>

                     <li> 
                        <NavLink to='/dashboard/manageUsers'> 
                       <FaCalendar></FaCalendar>
                        Manage Users</NavLink> </li>
                              
                    <li> 
                        <NavLink to='/dashboard/addMeal'> 
                       <FaCalendar></FaCalendar>
                        Add Meal</NavLink> </li>
                    <li> 
                        <NavLink to='/dashboard/allMeals'> 
                       <FaCalendar></FaCalendar>
                        all Meals</NavLink> </li>
                    <li> 
                        <NavLink to='/dashboard/allReviews'> 
                       <FaCalendar></FaCalendar>
                        all Reviews</NavLink> </li>
              
                    <li> 
                        <NavLink to='/dashboard/serveMeals'> 
                       <FaCalendar></FaCalendar>
                        Serve Meals</NavLink> </li>
                  
                    <li> 
                        <NavLink to='/dashboard/upcomingMeals'> 
                       <FaBook></FaBook>
                        Upcoming Meals</NavLink> </li>
                   
                    
                 
                        </> 
                        :
                        <>
                         <li> 
                        <NavLink to='/dashboard/userProfile'> 
                       <FaHome></FaHome>
                      My Profile</NavLink> </li>
                              
                    <li> 
                        <NavLink to='/dashboard/requestedMeals'> 
                       <FaCalendar></FaCalendar>
                        Requested Meals</NavLink> </li>


                    <li> 
                        <NavLink to='/dashboard/userReviews'> 
                       <FaAd></FaAd>
                        My Reviews</NavLink> </li>
                    

                        </>
                    }

               
                       

                </ul>

            </div>

            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;