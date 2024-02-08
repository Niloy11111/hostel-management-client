import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import groovyWalkAnimation from "../../../../public/bannerAnimation/UXsWHFSAaz.json";
import "../../../../src/Css/App.css";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xajljns",
        "template_6f0tixi",
        form.current,
        "kHJAh1kbTL5cecFfo"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20">
      <Helmet>
        <title>Contact | CampusBite</title>
      </Helmet>
      <div
        className="flex justify-center gap-20
   "
      >
        <div className="">
          <form ref={form} onSubmit={sendEmail} className="container">
            <div className="flex gap-10  justify-between container">
              <div className="relative">
                <input
                  className="outline-none rounded-lg bg-[#161515] w-[300px]  pl-2 border border-[#BFFCF9] py-2 mb-7 text-white"
                  type="text"
                  name="first-name"
                  id=""
                  required
                />

                <label className="mb-4 absolute left-3 top-2 text-white font-Inter font-semibold transition-all duration-200  ">
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="outline-none rounded-lg bg-[#161515] w-[300px] text-white  pl-2 border border-[#BFFCF9] py-2 mb-7"
                  type="text"
                  name="last-name"
                  id=""
                  required
                />
                <label className="mb-4 absolute left-3 top-2 text-white font-Inter font-semibold  transition-all duration-200 ">
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative ">
              <input
                className="outline-none rounded-lg text-white bg-[#161515] w-full  pl-2 border border-[#BFFCF9] py-2 mb-7 "
                type="email"
                name="user_email"
                id=""
                required
              />
              <label className="font-Inter font-semibold  mb-4 absolute left-3 top-2 text-white transition-all duration-200 ">
                Email
              </label>
            </div>
            <div className="relative ">
              <input
                className="outline-none rounded-lg w-full text-white bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7"
                type="number"
                name="user-phone"
                id=""
                required
              />
              <label className="font-Inter font-semibold  mb-4 absolute left-3 top-2 text-white transition-all duration-200 ">
                Phone
              </label>
            </div>

            <div className=" font-Inter font-semibold text-sm mb-8  text-white ">
              <h4 className="mb-2">
                You are <span className="text-[#CC0018]">*</span>
              </h4>
              <input
                className="mr-2 "
                type="radio"
                value="Student"
                name="info"
                id="student"
              />{" "}
              <span className=" font-medium text-sm mr-2">Student</span>
              <input
                className="mr-2"
                type="radio"
                value="Faculty"
                name="info"
                id="faculty"
              />
              <span htmlFor="faculty" className=" font-medium text-sm mr-2">
                {" "}
                Faculty
              </span>
              <input
                className="mr-2"
                type="radio"
                value="Staff"
                name="info"
              />{" "}
              <span className=" font-medium text-sm"> Staff</span> <br />
              <input
                className="mr-2"
                type="radio"
                value="Alumnus"
                name="info"
              />{" "}
              <span className=" font-medium text-sm mr-2"> Alumnus</span>
              <input
                className="mr-2"
                type="radio"
                value="Other"
                name="info"
              />{" "}
              <span className=" font-medium text-sm"> Other</span> <br />
            </div>

            <div className="relative ">
              <textarea
                className=" mb-4 outline-none rounded-lg text-white bg-[#161515] pl-2 border border-[#BFFCF9] w-full"
                name="message"
                id=""
                cols="50"
                rows="5"
                required
              ></textarea>
              <label className="mb-4 absolute transition-all duration-200  left-3 top-2 text-white font-Inter font-semibold ">
                Question <span className="text-[#CC0018]">*</span>
              </label>
            </div>

            <button className="bg-[#BFFCF9] text-[#000000] px-8 py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-150 rounded-full hover:text-white">
              Send Message
            </button>
          </form>
        </div>

        <div className="">
          <Lottie
            className=""
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>

      <Footer></Footer>

      <SocialLink></SocialLink>
    </div>
  );
};

export default Contact;
