import {
  FaEye,
  FaListAlt,
  FaMedal,
  FaPray,
  FaRecordVinyl,
  FaRedRiver,
  FaRegQuestionCircle,
  FaServer,
  FaUpload,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../../Hooks/UseAdmin";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();

  return (
    <div className="bg-[#161515] text-white">
      <div className="flex">
        <div className="w-96 min-h-screen bg-[#2B2D42]  pl-20 pt-10">
          <ul className="menu space-y-2">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminProfile">
                    <FaPray></FaPray>
                    Admin Profile
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUser></FaUser>
                    Manage Users
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/addMeal">
                    <FaMedal></FaMedal>
                    Add Meal
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/dashboard/allMeals">
                    <FaListAlt></FaListAlt>
                    All Meals
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/dashboard/allReviews">
                    <FaRedRiver></FaRedRiver>
                    All Reviews
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/serveMeals">
                    <FaServer></FaServer>
                    Serve Meals
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/upcomingMeals">
                    <FaUpload></FaUpload>
                    Upcoming Meals
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/dashboard/analytics">
                    <FaUpload></FaUpload>
                    Membership Analytics
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/">
                    <FaEye></FaEye>
                    Go Home
                  </NavLink>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FaPray></FaPray>
                    My Profile
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/requestedMeals">
                    <FaRegQuestionCircle></FaRegQuestionCircle>
                    Requested Meals
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/userReviews">
                    <FaRecordVinyl></FaRecordVinyl>
                    My Reviews
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/">
                    <FaEye></FaEye>
                    Go Home
                  </NavLink>{" "}
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex-1 p-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
