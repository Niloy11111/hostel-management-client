import UseAuth from "../../../../Hooks/UseAuth";


const UserProfile = () => {
    const {user} = UseAuth() ;
    console.log(user)
    return (
        <div className="flex items-center justify-evenly border p-8">
      
            <img className="w-[240px] rounded-full" src={user?.photoURL}></img>
          
       

          <div>
          <h2 className="text-2xl text-center font-bold font-serif ">{user?.displayName}</h2>
            <h2 className="text-2xl font-bold font-serif ">{user?.email}</h2>
          </div>
          <div>
          <img className="w-[240px]" src="https://sistemidigestione.biz/wp-content/uploads/2020/04/bronze2.png"></img>
          </div>

        </div>
    );
};

export default UserProfile;