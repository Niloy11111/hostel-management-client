import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div>
      <div className="bg-white  ">
        <div className="flex justify-around items-center h-[125px]">
          <div>
            <h2 className=" text-black font-semibold">Dining Services</h2>
            <p className="text-[#939A00] underline">Contact Us</p>
          </div>

          <div className="flex gap-5">
            <div>
              <input
                type="text"
                className="py-1.5 border pl-3 w-[400px]"
                placeholder="Search site"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="bg-[#939A00] py-1.5 px-3 text-white font-bold">
                Search
              </button>
            </div>
          </div>

          <div>
            <ul className="flex gap-10">
              <a href="https:/instagram.com">
                <FaInstagram className="text-3xl text-[#939A00] "></FaInstagram>
              </a>
              <a href="https:/twitter.com">
                <BsTwitterX className="text-3xl text-[#939A00] "></BsTwitterX>
              </a>
              <a href="https:/facebook.com">
                <FaFacebookSquare className="text-3xl text-[#939A00] "></FaFacebookSquare>
              </a>
              <a href="https:/youtube.com">
                <FaYoutube className="text-3xl text-[#939A00] "></FaYoutube>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
