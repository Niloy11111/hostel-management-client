import { FaFacebook,FaInstagramSquare,FaYoutube, FaLinkedin , FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="-mx-36 h-[40vh] bg-[#1a2851] ">
          <footer className=" footer p-10 text-base-content flex justify-center gap-20">
          


         
               
             
  <nav>
  <div className=" text-[36px] flex flex-col text-[#FFF] font-bold font-serif">the 
         <span className="">muse</span>
         </div>
    <header className="footer-title">ABOUT THE MUSE</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="text-[#aee2f7]">
    <header className="footer-title">ABOUT THE MUSE</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Careers</a> 
    <a className="link link-hover">Contact Us</a> 
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Search Jobs</a>
    <a className="link link-hover">Browse Companies</a>
    <a className="link link-hover">Terms of Use</a>
  </nav> 
  <nav className="text-[#aee2f7]">
    <header className="footer-title">POPULAR JOBS</header> 
    <a className="link link-hover">New Your Jobs</a> 
    <a className="link link-hover">San Francisco Jobs</a> 
    <a className="link link-hover">Engineering Jobs</a>
    <a className="link link-hover">Marketing Jobs</a>
    <a className="link link-hover">Information Technology Jobs</a>
    <a className="link link-hover">Salaries</a>
  </nav> 
  <nav className="text-[#aee2f7]">
    <header className="footer-title">GET INVOLVED</header> 
    <a className="link link-hover">For Employers</a> 
    <a className="link link-hover">For Partners</a> 
    <a className="link link-hover"> The Muse Book: The New Rules of Work</a> 
    <a className="link link-hover">For Career Coaches</a>
    <a className="link link-hover">Marketing Jobs</a>
    <a className="link link-hover">Send Feedback About The Muse</a>
    <a className="link link-hover">Tell A Friend</a>
  </nav> 
  <nav className="text-[#aee2f7]">
   
    <div >
    <header className="footer-title">JOIN TEH CONVERSATION</header> 
           <ul className="flex gap-8">
           <a href="https:/facebook.com"> <FaFacebook className="text-3xl"></FaFacebook> </a> 
            <a href="https:/instagram.com"> <FaInstagramSquare className="text-3xl"></FaInstagramSquare> </a> 
            <a href="https:/twitter.com"> <FaTwitterSquare className="text-3xl"></FaTwitterSquare> </a>
            <a href="https:/linkedin.com"> <FaLinkedin className="text-3xl"></FaLinkedin> </a>
            <a href="https:/youtube.com"> <FaYoutube className="text-3xl"></FaYoutube>  </ a>
           </ul>
           </div>
  </nav> 



 
</footer>
      </div>
    );
};

export default Footer;