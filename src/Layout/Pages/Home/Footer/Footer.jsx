const Footer = () => {
  return (
    <div className="h-[46vh] bg-blend-color bg-[#000000ab] ">
      {/*       
      <footer className=" footer p-10 text-base-content flex justify-center gap-20">
        <nav className="text-white">
          <div className=" text-[36px] flex flex-col text-[#FFF] font-bold font-serif">
            <span className="">foodtank</span>
          </div>
          <header className="footer-title text-white">
            ABOUT THE Foodtank
          </header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-[#aee2f7]">
          <header className="footer-title">ABOUT THE Foodtank</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Search Foods</a>
          <a className="link link-hover">Browse Companies</a>
          <a className="link link-hover">Terms of Use</a>
        </nav>
        <nav className="text-[#aee2f7]">
          <header className="footer-title">POPULAR FOODS</header>
          <a className="link link-hover">Chicken Potpie</a>
          <a className="link link-hover">Cast-Iron Skillet Steak</a>
          <a className="link link-hover">Southwestern Pork Chops</a>
          <a className="link link-hover">Best Lasagna</a>
          <a className="link link-hover">Greek Chicken Grain Bowl</a>
        </nav>
        <nav className="text-[#aee2f7]">
          <header className="footer-title">GET INVOLVED</header>
          <a className="link link-hover">Occasions</a>
          <a className="link link-hover">For Partners</a>
          <a className="link link-hover">
            {" "}
            The Muse Book: The New Rules of Work
          </a>
          <a className="link link-hover">Ingredients</a>
          <a className="link link-hover">Kitchen Tips</a>
          <a className="link link-hover">Send Feedback About The Muse</a>
          <a className="link link-hover">Our Employee Salaries</a>
          <a className="link link-hover">Tell A Friend</a>
        </nav>
        <nav className="text-[#aee2f7]">
          <div>
            <header className="footer-title">JOIN TEH CONVERSATION</header>
            <ul className="flex gap-8">
              <a href="https:/facebook.com">
                {" "}
                <FaFacebook className="text-3xl"></FaFacebook>{" "}
              </a>
              <a href="https:/instagram.com">
                {" "}
                <FaInstagramSquare className="text-3xl"></FaInstagramSquare>{" "}
              </a>
              <a href="https:/twitter.com">
                {" "}
                <FaTwitterSquare className="text-3xl"></FaTwitterSquare>{" "}
              </a>
              <a href="https:/linkedin.com">
                {" "}
                <FaLinkedin className="text-3xl"></FaLinkedin>{" "}
              </a>
              <a href="https:/youtube.com">
                {" "}
                <FaYoutube className="text-3xl"></FaYoutube>{" "}
              </a>
            </ul>
          </div>
        </nav>
      </footer> */}

      <div className="flex justify-center gap-20 pt-20">
        <div className=" w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#B7C011]">
            <h2 className=" text-[22px] font-bold text-white ">About Us</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white font-Inter link link-hover">
              Our People
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Contact Us
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Community Involvement
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Careers
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Project and Media Requests
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              In the Press
            </a>
          </ul>
        </div>
        <div className="w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#B7C011]">
            <h2 className="text-[22px] font-bold text-white ">
              Plans & Points
            </h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white font-Inter link link-hover">
              Meal Plans
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              FAQs
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Where to Use Meals & Points
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Where to Use Meals & Points
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Terrier Meal Share
            </a>
          </ul>
        </div>
        <div className="w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#B7C011]">
            <h2 className="text-[22px] font-bold text-white ">Catering</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white font-Inter link link-hover">
              Student Group Catering
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Plan a gathering, corporate event, or <br /> celebration
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Sustainability & Zero-Waste Events
            </a>
          </ul>
        </div>
        <div className="w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#B7C011]">
            <h2 className="text-[22px] font-bold text-white ">For Parents</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white font-Inter link link-hover">
              Give Convenience Points
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Follow our Social Media
            </a>
            <a className=" font-medium text-white font-Inter link link-hover">
              Submit a Family Recipe
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
