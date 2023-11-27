import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const axiosSecure = UseAxiosSecure() ;

    const {data : users = [] , refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async () => {
           
           const res = await axiosSecure.get('/users' ) ;
            return res.data ;
        }
     })


     const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.modifiedCount > 0) {
            refetch() ;
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an admin now`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
       }

    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Membership</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =><tr key={user._id}>
            <th>{index+ 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>

           { user.role === 'admin' ? 'Admin' :
           
           <button onClick={() => handleMakeAdmin(user)} className="btn btn-lg bg-orange-400"><FaUsers className=" text-2xl text-white"></FaUsers> </button>}
            </td>

            <td>
           Pending
            </td>

          </tr> )
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;