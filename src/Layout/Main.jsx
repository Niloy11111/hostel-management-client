import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="lg:px-64 px-12 bg-[#161515] ">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
