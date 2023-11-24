import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";



const Main = () => {

    
    return (
        <div className='px-12 lg:px-36  bg-[#f7f7f7]'>
            <NavBar></NavBar>
           <Outlet></Outlet>  
        </div>
    );
};

export default Main;