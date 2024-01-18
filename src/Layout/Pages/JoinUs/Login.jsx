import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { signInUser, user, googleSignIn } = useContext(AuthContext);

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

    signInUser(email, password)
      .then((res) => {
        console.log("from sign in", res.user);
        new Swal("Login Successful!", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
        new Swal("Login Successful!", "Welcome back!", "success");
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
      <div className="bg-blend-color bg-[#000000ab] py-16 ">
        <div className="flex justify-center gap-40">
          <div className="relative bg-[#E0EB19] w-[400px] h-[100px] ">
            <div className="flex justify-center items-center font-bold font-Inter  w-[400px] top-4 right-4 absolute h-[100px] text-[#000000] bg-white text-6xl">
              Ready To Go
            </div>
          </div>

          <div className="w-[300px]">
            <h2 className="text-lg font-bold font-Inter text-white border-b-4 pb-2 border-[#E0EB19]">
              Also in Ready To Go:
            </h2>
            <div>
              <ul className="flex flex-col mt-7 space-y-2">
                <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Contact Us
                </a>
                <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Social Media
                </a>
                {/* <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Our People
                </a>
                <a
                  className="text-[#D6D6D6] font-Inter font-medium border-b border-[#444] pb-4"
                  href=""
                >
                  Community Involvement
                </a>
                <a
                  className="text-[#D6D6D6] font-Inter font-medium pb-4"
                  href=""
                >
                  Careers
                </a> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white mb-16 w-3/6 mx-auto p-16 my-20 ">
          <p className="font-medium font-Inter text-[#000000]">
            Order a lunch or dinner Rhetty To Go meal by 6:00 pm for pick up as
            early as 10:00 am the following day.
          </p>

          <div className="flex justify-around mt-20 mb-16">
            <div className="w-[250px]">
              <h2 className="text-3xl font-Inter font-bold text-center text-[#E37714]">
                Plan Ahead
              </h2>
              <div className="h-[4px] mt-4 w-[80px] bg-[#EE913C] mx-auto"></div>
              <p className="font-medium font-Inter text-[#000000] text-center mt-5">
                Order for tomorrow, next week, or even a month in advance. The
                choice is yours.
              </p>
            </div>
            <div className="w-[250px]">
              <h2 className="text-3xl font-Inter font-bold text-center  text-[#E37714]">
                Feeling Sick?
              </h2>
              <div className="h-[4px] mt-4 w-[80px] bg-[#EE913C] mx-auto"></div>
              <p className="font-medium font-Inter text-[#000000] text-center mt-5">
                Order a flu meal—a special assortment of soothing foods like
                bananas, rice, soup, tea, or yogurt your flu buddy can bring to
                you so you can focus on feeling better.
              </p>
            </div>
            <div className="w-[250px]">
              <h2 className="text-3xl font-Inter font-bold text-center  text-[#E37714]">
                Feeling Sick?
              </h2>
              <div className="h-[4px] mt-4 w-[80px] bg-[#EE913C] mx-auto"></div>
              <p className="font-medium font-Inter text-[#000000] text-center mt-5">
                Order a flu meal—a special assortment of soothing foods like
                bananas, rice, soup, tea, or yogurt your flu buddy can bring to
                you so you can focus on feeling better.
              </p>
            </div>
          </div>

          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="mb-10 button relative  bg-[#939A00] w-[250px] h-[45px] mx-auto">
                <div className="flex justify-center items-center font-semibold font-Inter  w-[250px] top-2 right-2 absolute h-[45px] border-4 border-[#939A00] text-[#939A00] bg-white">
                  Log in here to start
                </div>
              </div>

              <div>
                <h2 className="mt-6 text-2xl font-Inter font-bold  border-b-4 border-[#B7C011] max-w-min">
                  Email
                </h2>
                <input
                  className="bg-[#FFF]  py-2 outline-none  border-b border-[#B7C011] w-[400px]  block pb-3"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}

                <div className="relative mb-4 w-[400px]">
                  <h2 className="mt-6 border-b-4 border-[#B7C011] max-w-min text-2xl font-Inter font-bold  ">
                    Password
                  </h2>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border-b border-[#B7C011] w-[400px]  py-2 outline-none block pb-3  bg-[#FFF]"
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
                <a className="text-[#D24821] font-Inter font-medium">
                  Terms and Conditions
                </a>
              </div>

              <button className="mb-2 relative  bg-[#cdd713] w-[400px] h-[40px] mx-auto">
                <div className="flex justify-center items-center font-semibold font-Inter  w-[400px] top-1 -right-1 absolute h-[40px] bg-[#939A00] text-white">
                  Continue
                </div>
              </button>

              <p className="mt-4 text-sm font-Inter text-black">
                Don't have an account?{" "}
                <Link to="/register">
                  <a className="text-[#D24821] cursor-pointer"> Register </a>
                </Link>{" "}
              </p>
            </form>

            <div className="flex w-[400px] items-center gap-2 ">
              <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
              <p className="text-lg text-[#191A48]">Or</p>
              <div className="bg-[#191A48] h-[1px] w-[200px]"></div>
            </div>

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

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Login;
