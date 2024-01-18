import { Link, NavLink } from "react-router-dom";

import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const [isAdmin] = UseAdmin();
  const { user, logOut } = UseAuth();

  const navlinksBeforeLogin = (
    <>
      <li className="px-3">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          <div className="mb-2 relative flex justify-center bg-[#cdd713] w-[120px] h-[40px] mx-auto">
            <div className="flex justify-center items-center font-semibold font-Inter  w-[120px] top-2 right-2 absolute h-[40px] bg-[#939A00] text-white">
              Join Now
            </div>
          </div>
        </NavLink>
      </li>
    </>
  );

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-4 text-lg font-Inter font-semibold py-3 border-[#F2AC6B]"
              : "border-b-4 text-lg font-Inter font-semibold py-3"
          }
        >
          Contact Us
        </NavLink>
      </li>

      <li>
        <div className="dropdown hidden lg:block dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-[60px] rounded-full">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-sm  btn-ghost">
                {user?.displayName}
              </button>
            </li>
            {user && isAdmin && (
              <li className="ml-10">
                <Link to="/dashboard/adminProfile">Dashboard</Link>
              </li>
            )}
            {user && !isAdmin && (
              <li className="ml-10">
                <Link to="/dashboard/userProfile">Dashboard</Link>
              </li>
            )}
            <li>
              <button onClick={logOut} className="btn btn-sm  btn-ghost">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  return (
    <div className="flex px-5 -mx-12 lg:-mx-36 bg-[#FFFFFF] items-center flex-col lg:flex-row py-3 lg:py-10 justify-between  ">
      <div className="navbar-start flex items-center">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="text-sm font-inter font-medium  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {user ? navLinks : navlinksBeforeLogin}
          </ul>
        </div>

        <div className="">
          <h2 className="font-semibold font-Inter text-xl">
            Melbourne University{" "}
            <span className="font-normal">Dining Services</span>{" "}
          </h2>
        </div>
      </div>

      <div className="">
        <ul className="hidden text-sm font-inter font-medium lg:flex justify-center items-center text-[#0B0B0B]  flex-col lg:flex-row gap-1 lg:gap-8  font-Inter">
          {user ? navLinks : navlinksBeforeLogin}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
