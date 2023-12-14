import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xajljns', 'template_6f0tixi', form.current, 'kHJAh1kbTL5cecFfo')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500
          });
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
       <div>
         <div className="h-[70vh] bg-blend-overlay bg-[rgb(46,48,50)] -mx-36" style={{
            backgroundImage: `url('https://dining.rochester.edu/wp-content/uploads/2018/07/syd-wachs-128767-unsplash-2100x900-c-default.jpg')`,
            backgroundSize: 'cover',
            // Other styles if needed
        }}>
            <div className="h-full flex justify-center items-center">
                <h2 className="text-6xl text-white">Contact Us</h2>
            </div>
        
        </div>
        
        <h2 className="text-[rgb(58,68,73)] text-center my-10 text-xl">If you would like more information, have questions about Meal Plans, or need help with anything involving <br />on-campus dining, please contact us:</h2>

        <div className="w-2/3 mx-auto mb-20">

            <h2 className="text-2xl font-Inter font-medium text-center mb-10">WE ARE WAITING FOR YOUR VALUABLE FEEDBACK</h2>

        <form ref={form} onSubmit={sendEmail}>

                        
<div className="mt-5 flex gap-5">
<input className="outline-none pl-2 rounded-lg border-2 border-[##FFFFFF] py-3 w-full" placeholder="Name" type="text"  name="from_name" id="" />
<input className="outline-none pl-2 rounded-lg border-2 py-3 w-full" placeholder="Email" type="email"  name="from_email" id="" />
</div>

<textarea className="w-full mt-4 outline-none pl-2 rounded-lg border-2" name="message" id="" placeholder="Message" cols="50" rows="5"></textarea>

<button className="py-3 px-6 bg-[#0071BA] font-medium font-Inter text-white rounded mt-5">Send Message</button>
</form>
        </div>

       </div>
        
        
    );
};

export default Contact;