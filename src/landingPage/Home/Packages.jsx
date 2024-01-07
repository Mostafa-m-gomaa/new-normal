import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { route } from "../../App";
import PackageCard from "../../components/PackageCard";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}education/packages?sort=-price`)
      .then((res) => setPackages(res.data.data));
  }, []);
  console.log(packages);
  return (
    <section
      className="py-16"
      id="packagesSection"
    >
      <div className="container mx-auto">
      <div className="flex my-12 items-center gap-8">
          <h2 className="leading-tight text-start w-full  text-2xl md:text-4xl lg:text-5xl">
الكورسات          </h2>

          <Link
            to={"/login"}
            className="py-3 whitespace-nowrap group flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
          >
            <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
            <span>ابدا الان</span>
          </Link>
        </div>
<div className="relative mt-32">
    {packages.map((data, index) => (
      <div
        key={index}
        style={{
          zIndex: 10 - index,
          transform: `translateY(${index * 20 - 50}px)`,
        }}
        className="sm:h-[480px] flex sm:flex-row flex-col  items-center gap-4 sm:gap-8 sticky bottom-[50px] mx-auto -translate-y-1 p-8 md:p-16 rounded-lg border border-mainBorders bg-main shadow-lg"
      >
        <img
          src={data.image}
          className="sm:w-[45%] max-h-full border-4 rounded-xl border-mainBorders"
          alt=""
        />{" "}
        <div className="sm:w-[50%]">
          <h3 className="text-2xl md:text-3xl font-semibold ">
          {data?.title}
          </h3>
          <h3 className="text-2xl md:text-3xl font-semibold ">
          ${data?.price}
          </h3>
          <p className="my-8 text-sm sm:text-base">
          {data?.description}
          </p>
          <Link
            to={"/login"}
            className="max-w-fit py-3 whitespace-nowrap group flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6 absolute left-20	"
          >
            <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
            <span>ابدا الان</span>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* <div
        className="absolute opacity-60 w-[100%] h-[100%] top-[50%]  right-[50%] translate-x-[50%] -translate-y-[50%]"
     
      />
      <div className="container relative z-[1]">
        <div className="flex my-12 items-center gap-8">
          <h2 className="leading-tight text-start w-full  text-2xl md:text-4xl lg:text-5xl">
الكورسات          </h2>

          <Link
            to={"/login"}
            className="py-3 whitespace-nowrap group flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
          >
            <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
            <span>ابدا الان</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages?.map((item, ind) => (
            <PackageCard key={item._id} ind={ind} data={item} />
          ))}
        </div>
         
      </div> */}
    </section>
  );
};

export default Packages;
