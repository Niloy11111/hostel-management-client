
import { NavLink } from "react-router-dom";



const NavBar = () => {

    

      const user = false ;

    const navlinksBeforeLogin = <>
        <li>
            <NavLink to="/"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>HOME</NavLink>
        </li>

        <li>
            <NavLink to="/allMeals"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>MEALS</NavLink>
        </li>

        <li>
            <NavLink to="/upcomingMeals"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>UPCOMING MEALS</NavLink>
        </li>

        <li>
            <NavLink to='/login'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>JOIN US</NavLink>
        </li>

    </>

    const navLinks = <>
        <li className="">
            <NavLink to="/"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>HOME</NavLink>
        </li>
 
        <li>
            <NavLink to="/allMeals"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>MEALS</NavLink>
        </li>

        <li>
            <NavLink to="/upcomingMeals"  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#1d2d5a] text-[#FFF] px-3 py-3 rounded" : ""
            }>UPCOMING MEALS</NavLink>
        </li>


       

        {/* <img className="w-[55px] rounded-full" src={user?.photoURL}></img> */}

       <li>
       <div className="dropdown hidden lg:block dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-[60px] rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                </li>
                <li>
                    <button className="btn btn-sm  btn-ghost"
                       
                    >Logout</button>

                </li>
            </ul>
        </div>

       </li>

    </>
    return (
        <div className="flex px-10 -mx-12 lg:-mx-36 items-center flex-col lg:flex-row py-3 lg:py-4 justify-between  ">

            {/* <div className="flex items-center">
               <h2 className="text-3xl font-bold font-serif"> Job Portal</h2>
            </div> */}

            <div className="navbar-start flex items-center">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-sm font-inter font-medium  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li> */}
                        {
                            user ? navLinks : navlinksBeforeLogin
                        }

                    </ul>
                </div>
              {/* <div className="logo flex gap-1 items-center">
                <div className="flex">
                <div className="w-[25px] rounded-tr-full  h-[35px] bg-[#FFF]"></div>
                <div className="w-[25px] rounded-tl-full  h-[35px] bg-[#1d2d5a]"></div>
                </div>


         <div className=" text-[27px] flex flex-col text-[#1d2d5a] font-bold font-serif">the 
         <span className="-mt-6">muse</span>
         </div>
               
                </div> */}
                <div>
                    <img className="w-[100px]" src="https://nus.edu.sg/osa/assets/images/logo.png"></img>
                </div>

            </div>

            <div className="flex justify-center">
                <ul className="hidden text-sm font-inter font-medium lg:flex justify-center items-center text-[#0B0B0B]  flex-col lg:flex-row gap-1 lg:gap-8  font-Inter">


                    {
                        user ? navLinks : navlinksBeforeLogin
                    }

                    {/* <NavLink to="/addProduct" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
}><li>Add Product</li></NavLink>

        <NavLink to="/myCart" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
}><li>My Cart</li></NavLink> */}




                </ul>
            </div>



        </div>

    );
};

export default NavBar;