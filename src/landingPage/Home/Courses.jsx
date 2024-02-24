import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { route } from "../../App";

import AnotherCard from "../../components/anotherCard";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`${route}education/packages`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data.data);
      });
  }, []);
  function convertTime(durationInDays) {
    if (durationInDays > 1000) {
      return "مدي الحياة";
    }
    if (durationInDays >= 365) {
      const years = Math.floor(durationInDays / 365);
      return `${years} سنة`;
    } else if (durationInDays >= 30) {
      const months = Math.floor(durationInDays / 30);
      return `${months} شهر`;
    } else if (durationInDays >= 7) {
      const weeks = Math.floor(durationInDays / 7);
      return `${weeks} أسبوع`;
    } else {
      return `${durationInDays} يوم`;
    }
  }
  console.log(courses);
  return (
    <section className="pt-16" id="coursesSection">
      <div className="container ">
        <h2 className="flex-1 leading-tight mx-auto  md:text-4xl text-3xl lg:text-5xl text-center mb-10">
         الباقات{" "}
        </h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses?.map((item, ind) => (
           item.type === "package" ?  <AnotherCard key={item._id} ind={ind} data={item} />:null
          ))}
        </div>
        {/* <div className="max-w-[95vw] mx-auto overflow-x-auto overflow-y-visible my-16">
          <table className="w-full ">
            <thead className="whitespace-nowrap">
              <tr>
                <th className=" p-6 "></th>
                {courses.map((course) => (
                  <th className="p-6" key={course._id}>
                    {course.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-4 border-mainBorders bg-betMain">
              <tr>
                <td className="border border-mainBorders p-6 ">سعر الكورس</td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    {course.price}$
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border border-mainBorders p-6 ">
                  مده صلاحية الكورس
                </td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    {convertTime(course.expirationTime)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border border-mainBorders p-6 ">
                  سعر إعاده التجديد
                </td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    {course.renewPrice}$
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border border-mainBorders p-6 ">وصف الكورس</td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    {course.description}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border border-mainBorders p-6 ">
                  قنوات التيليجرام
                </td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    {course?.telegramChannelNames?.join(" - ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border border-mainBorders p-6 ">شراء الكورس</td>

                {courses.map((course) => (
                  <td
                    key={course._id}
                    className="border border-mainBorders p-6 "
                  >
                    <Link
                      to="/login"
                      className="px-4 py-1 whitespace-nowrap rounded-full text-main bg-mainText  text-lg "
                    >
                      اشتري الان
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
      {/* <div className="container relative">
        <div className="flex items-center justify-center w-full h-full absolute">
          <div className="flex flex-col  gap-6 md:gap-8 lg:gap-12 text-center justify-center">
            <Link
              href="/"
              className="md:text-5xl sm:text-4xl text-3xl lg:text-6xl font-semibold"
            >
              <img src={logo} alt="" className="w-32 mx-auto" />
            </Link>
            <h2 className="md:text-3xl sm:text-2xl text-xl lg:text-4xl font-semibold">
              GET USED TO THE FUTURE
            </h2>
            <Link
              to={"/login"}
              className="py-3 group hidden lg:flex w-fit mx-auto items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
            >
              <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
              <span>ابدأ الان</span>
            </Link>
          </div>
        </div>
        <img
          src="https://framerusercontent.com/images/AkPhOA2lSM257qMb7nZ10lgkk.jpg?scale-down-to=2048"
          className="rounded-lg "
          alt=""
        />
      </div> */}
    </section>
  );
};

export default Courses;
