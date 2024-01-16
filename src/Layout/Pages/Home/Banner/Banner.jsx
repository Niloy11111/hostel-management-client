// bg-[#4abdac] bg-[#FC4A1A] bg-[#4abdac] bg-[#fc4a1a]
const Banner = () => {
  return (
    <div className=" h-[75vh] flex items-center relative ">
      {/* <div className="flex gap-24 lg:h-[70vh]  justify-between  ">
        <div className=" flex-1 ">
          <div className="flex justify-center items-center h-full">
            <div className="mb-24">
              <h2 className=" text-white text-3xl lg:text-6xl font-Inter font-bold">
                Hostel & Meal
                <br />
                Plan <span className="text-red-400 italic">Rates.</span>{" "}
              </h2>
              
              <p className=" mt-4 lg:mt-6 font-inter text-[#494e5d]">
                Where Appetites Align with Quality, Convenience, and Campus Life
              </p>
              <div className="mt-6 border-2 flex rounded-lg py-1 lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#005C98]">
                <button
                  type="submit"
                  className=" text-white flex items-center justify-center w-[50px] h-[50px] rounded-lg ml-2 text-lg font-semibold text-[#333F]"
                >
                  {" "}
                  <BsSearch></BsSearch>
                </button>
                <input
                  name="category"
                  id="field-id"
                  className="pl-4 outline-none "
                  type="text"
                  placeholder="Find Foods"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative ">
          <img
            className="w-[650px] absolute top-24 -left-32"
            src="https://nus.edu.sg/osa/images/default-source/osa/1.1/hostel-admission/mealplans.jpg?sfvrsn=ea81ea7a_2"
          ></img>
        </div>
      </div> */}
      <div className="text-6xl lg:text-6xl font-Inter font-bold px-5 py-4 bg-white absolute right-96">
        Plans & <span className="text-[#E37714]">Points</span>
      </div>
    </div>
  );
};

export default Banner;
