import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure, { axiosSecure } from "../../../../Hooks/UseAxiosSecure";


const UserProfile = () => {
    const {user} = UseAuth() ;
    const axiosSecure = UseAxiosSecure() ;

    const {data : payments} = useQuery({
      queryKey : ['payments', user.email],
      queryFn : async () => {
          const res = await axiosSecure.get(`/payments/${user.email}`)
          return res.data
      }
  })

    return (
        <div className="flex items-center justify-evenly border p-8">
      
            <img className="w-[240px] rounded-full" src={user?.photoURL}></img>
          
       

          <div>
          <h2 className="text-2xl text-center font-bold font-serif ">{user?.displayName}</h2>
            <h2 className="text-2xl font-bold font-serif ">{user?.email}</h2>
          </div>
          <div>
           {
            payments?.[0]?.plan ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerVlWdDMzEWMBGpW85lvyTZkmyS6Uv417mg&usqp=CAU"></img> :   <img className="w-[240px]" src="https://sistemidigestione.biz/wp-content/uploads/2020/04/bronze2.png"></img>
           }
        
          </div>

        </div>
    );
};

export default UserProfile;