const SingleUpcoming = ({ item }) => {
  const { name, category, image, likes, price, postTime } = item;
  return (
    <div className="bg-[#2C2C2C] rounded-3xl p-4 relative">
      <p className="bg-[#161515]  text-sm absolute py-1 w-[87%] top-4 rounded-t-xl px-1 text-center">
        {postTime}
      </p>

      <div className="">
        <div
          style={{
            backgroundImage: `URL(${image})`,
          }}
          className="flex  items-center justify-center bg-no-repeat bg-cover w-full h-[200px]  rounded-3xl"
        >
          <h2 className=" bg-[#870012] px-3 py-1 rounded text-white   font-semibold ">
            Likes {likes}
          </h2>
        </div>
      </div>

      <div className=" ">
        <div className="p-2  ">
          <h2 className=" mt-3  text-lg font-semibold">
            {name?.split(" ")[0]} {name?.split(" ")[1]}
          </h2>
          <div className="flex justify-between ">
            <p> {category} </p>
            <p>
              {" "}
              $ <span>{price}</span>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-[#000000]">
          <button className=" w-full rounded bg-[#EB3656] hover:bg-[#870012] transition-all duration-300 items-center py-1  font-medium  text-sm  text-white">
            Production
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUpcoming;
