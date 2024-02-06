import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div>
      <div className="pb-10 lg:pb-0 ">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:h-[125px]">
          <div>
            <h2 className=" text-white font-semibold">Dining Services</h2>
            <p className="text-[#EB3656] underline">Contact Us</p>
          </div>

          <div className="flex gap-5 my-5 lg:my-0">
            <div>
              <input
                type="text"
                className="py-1.5 border pl-3 w-[250px] lg:w-[400px] outline-none"
                placeholder="Search site"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="bg-[#EB3656] py-1.5 px-3 text-white font-bold font-Inter rounded">
                Search
              </button>
            </div>
          </div>

          <div>
            <ul className="flex gap-10">
              <a href="https:/instagram.com">
                <FaInstagram className="text-3xl text-[#EB3656] "></FaInstagram>
              </a>
              <a href="https:/twitter.com">
                <BsTwitterX className="text-3xl text-[#EB3656] "></BsTwitterX>
              </a>
              <a href="https:/facebook.com">
                <FaFacebookSquare className="text-3xl text-[#EB3656] "></FaFacebookSquare>
              </a>
              <a href="https:/youtube.com">
                <FaYoutube className="text-3xl text-[#EB3656] "></FaYoutube>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
