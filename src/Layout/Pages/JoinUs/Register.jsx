import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    signInUser,
    user,
    updateUserProfile,
    createUser,
    googleSignIn,
    logOut,
  } = useContext(AuthContext);

  console.log(user);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  reset();
                  new Swal(
                    "Thank you!",
                    "You have successfully completed your registration!",
                    "success"
                  );
                  navigate("/");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          })

          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate("/");
        // const userInfo = {
        //   email : res.user?.email,
        //   name : res.user?.displayName
        // }
        // axiosPublic.post('/users', userInfo)
        // .then(res => {
        //   console.log(res.data)
        //   navigate('/') ;
        // })
        // new Swal("Login Successful!", "Welcome back!", "success")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
      "https://www.bu.edu/dining/files/2017/10/GSU_PKG_FOOD_17-1870-DINING-015-1920x1080.jpg"
    )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="rounded  flex lg:justify-center lg:items-center h-full lg:h-[130vh]">
        <div className=" bg-white p-16">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded  ">
              <div className="mb-10 button mx-auto relative  bg-[#939A00] w-[250px] h-[45px] ">
                <div className="flex justify-center items-center font-semibold font-Inter  w-[250px] top-2 right-2 absolute h-[45px] border-4 border-[#939A00] text-[#939A00] bg-white">
                  Register Please
                </div>
              </div>

              <div>
                <div>
                  <h2 className="mt-6 text-2xl font-Inter font-bold  border-b-4 border-[#B7C011] max-w-min">
                    Name
                  </h2>
                  <input
                    className="  bg-[#FFF]   py-3 outline-none block  pb-3  border-b border-[#B7C011] w-[400px]"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                    name="name"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="mt-6 ">
                  <h2 className=" text-2xl font-Inter font-bold  border-b-4 border-[#B7C011] max-w-min">
                    Photo
                  </h2>
                  <input
                    className="bg-[#FFF]   py-3 outline-none block  pb-3 border-b border-[#B7C011] w-[400px]"
                    type="text"
                    placeholder="photo URL"
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">photo is required</span>
                  )}
                </div>

                <div className="mt-6">
                  <h2 className=" text-2xl font-Inter font-bold  border-b-4 border-[#B7C011] max-w-min">
                    Email
                  </h2>
                  <input
                    className="  bg-[#FFF]   py-3 outline-none block  pb-3 border-b border-[#B7C011] w-[400px]"
                    type="emial"
                    placeholder="Username or Email"
                    {...register("email", { required: true })}
                    name="email"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">email is required</span>
                  )}
                </div>

                <div className="relative">
                  <h2 className="mt-6 text-2xl font-Inter font-bold  border-b-4 border-[#B7C011] max-w-min">
                    Password
                  </h2>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="  bg-[#FFF]   py-3 outline-none block  pb-3 mb-8 border-b border-[#B7C011] w-[400px]"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be at least 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer absolute top-12 text-[] right-2"
                  >
                    {showPassword ? (
                      <AiFillEye className="text-[#939A00]"></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible className="text-[#939A00]"></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <input type="checkbox" name="terms" id="terms" />
                <label className="font-Inter text-[#D24821] font-medium">
                  {" "}
                  Accept our{" "}
                </label>
                <a className="font-Inter text-[#D24821] font-medium">
                  Terms and Conditions
                </a>
              </div>

              <button className="mb-2 relative  bg-[#cdd713] w-[400px] h-[40px] mx-auto">
                <div className="flex justify-center items-center font-semibold font-Inter  w-[400px] top-1 -right-1 absolute h-[40px] bg-[#939A00] text-white">
                  Continue
                </div>
              </button>

              <p className="mt-4 text-sm font-Inter text-black">
                Already have an account?{" "}
                <Link to="/login">
                  <a className="text-[#D24821] cursor-pointer"> Login </a>
                </Link>{" "}
              </p>

              <div className="flex w-[400px] items-center gap-2 mt-4">
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
                <p className="text-lg text-[#191A48]">Or</p>
                <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
              </div>
            </form>

            <div
              onClick={handleGoogleLogin}
              className="cursor-pointer justify-center flex items-center gap-2 mb-7 mt-2 py-2 text-base border  bg-[#939A00] w-[400px]"
            >
              <div className="flex items-center gap-2">
                <FcGoogle className="text-2xl"></FcGoogle>
                <h2 className="font-semibold text-white font-Inter">
                  Continue with Google
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
