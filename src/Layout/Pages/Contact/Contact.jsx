import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
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
    <div
      className=" -mx-16  lg:-mx-36 "
      style={{
        backgroundImage: `URL(
          "https://www.bu.edu/dining/files/2019/08/17-1869-DINING-023-1920x1080.jpg"
         )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-blend-color bg-[#000000ab] pt-20 ">
        <div className="flex mb-16 justify-center gap-40">
          <div className="relative bg-[#E0EB19] w-[350px] h-[100px] ">
            <div className="flex justify-center items-center font-bold font-Inter  w-[350px] top-4 right-4 absolute h-[100px] text-[#000000] bg-white text-6xl">
              Contact Us
            </div>
          </div>

          <div className="w-[300px]">
            <h2 className="text-lg font-bold text-white border-b-4 pb-2 border-[#E0EB19]">
              Also in About Us:
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
                <a
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
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white mb-16 w-3/6 mx-auto p-12">
          <h2 className="text-3xl font-Montserrat font-bold  ">
            Your Feedback Matters
          </h2>

          <p className="mt-6 font-medium font-Inter text-[#000000]">
            Got a question? Check out our FAQ!
          </p>

          <p className="mt-6 font-medium font-Inter text-[#000000]">
            How was your dining experience? Tell us what you think using our new
            survey system or use the contact form below.
          </p>

          <p className="mt-6 font-medium font-Inter text-[#000000]">
            {" "}
            If you would like more information, have questions about Meal Plans,
            or need help with anything involving <br />
            on-campus dining, please fill out our Contact Form and we will get
            back to you as soon as possible.
          </p>

          <h2 className="mt-6 text-2xl font-Montserrat font-bold  ">
            Contact Form
          </h2>

          <p className="mt-2 font-medium font-Inter text-[#000000]">
            We would love to hear from you! Please fill out this form and we
            will get in touch with you shortly.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-10  justify-between mt-8">
              <div className="w-full">
                <input
                  className="outline-none w-full pl-2 border py-1 "
                  type="text"
                  name="from_name"
                  id=""
                />
                <h4 className="mt-2 font-Inter font-semibold text-sm">Name</h4>
              </div>

              <div className="w-full">
                <input
                  className="outline-none w-full pl-2 border py-1 "
                  type="email"
                  name="from_email"
                  id=""
                />
                <h4 className="font-Inter font-semibold text-sm mt-2">Email</h4>
              </div>
            </div>

            <div className="my-8">
              <h4 className="font-Inter font-semibold text-sm mt-2 mb-5">
                You are <span className="text-[#CC0018]">*</span>
              </h4>
              {/* who you are  */}
              <input
                className="mr-2"
                type="radio"
                value="Student"
                name="info"
                id="student"
              />{" "}
              <span className="text-[#000] font-medium text-sm">Student</span>{" "}
              <br />
              <input
                className="mr-2"
                type="radio"
                value="Faculty"
                name="info"
                id="faculty"
              />
              <span
                htmlFor="faculty"
                className="text-[#000] font-medium text-sm"
              >
                {" "}
                Faculty
              </span>
              <br />
              <input
                className="mr-2"
                type="radio"
                value="Staff"
                name="info"
              />{" "}
              <span className="text-[#000] font-medium text-sm"> Staff</span>{" "}
              <br />
              <input
                className="mr-2"
                type="radio"
                value="Alumnus"
                name="info"
              />{" "}
              <span className="text-[#000] font-medium text-sm"> Alumnus</span>{" "}
              <br />
              <input
                className="mr-2"
                type="radio"
                value="Other"
                name="info"
              />{" "}
              <span className="text-[#000] font-medium text-sm"> Other</span>{" "}
              <br />
            </div>

            <div>
              <h4 className="mt-2 font-Inter font-semibold ">
                Question/Comment <span className="text-[#CC0018]">*</span>
              </h4>
              <textarea
                className="w-full mt-4 outline-none pl-2 border"
                name="message"
                id=""
                placeholder="Message"
                cols="50"
                rows="5"
              ></textarea>
            </div>

            <div className="cursor-pointer mt-8 relative bg-[#939A00] w-[100px] h-[40px] ">
              <div className="flex justify-center items-center font-semibold font-Inter  w-[100px] top-2 right-2 absolute h-[40px] border-4 border-[#939A00] text-[#939A00] bg-white">
                Submit
              </div>
            </div>
          </form>
        </div>

        <Footer></Footer>

        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Contact;
