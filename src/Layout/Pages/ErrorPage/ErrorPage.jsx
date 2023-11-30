
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
           <div>
            <img src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.1973595152.1687198433&semt=ais'></img>
           <h1 className='text-[#FF444A] text-4xl font-bold mb-8 text-center'>404 - Not Found!</h1>
            <NavLink to="/">
                
              <div className='flex justify-center'>
              <button className='text-lg text-[#FFF] font-semibold px-7 py-3 bg-[#21AA81] rounded-lg'>
               Go Home
               </button>
              </div>
                
                </NavLink>
           </div>
        </div>
    );
};

export default ErrorPage;