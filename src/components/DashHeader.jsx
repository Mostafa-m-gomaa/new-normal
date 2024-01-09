import logo from "../assets/logo.png";
import logoone from "../assets/anotherLogo.png";
import { useContext, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import { AppContext } from "../App";
const DashHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme}=useContext(AppContext)
  const links = [
    { label: "الرئيسة", link: "/dashboard" },
    { label: "الكورسات", link: "/education" },
    { label: "الباقات", link: "/packages" },
    { label: "البث المباشر", link: "/lives" },
    { label: "تحليلات الأسواق", link: "/analytic" },
    { label: "شركاء النجاح", link: "/marketing" },
    { label: "المتجر", link: "/store" },
  ];
  return (
    <div className="border-b border-b-gray py-2">
      <div className="px-2 md:px-4 container mx-auto flex justify-between gap-8 py-3 items-center">
        <div className="hidden lg:flex items-center justify-center gap-2">
          <ProfileMenu />
          <ThemeChanger />
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-bars text-4xl"></i>
        </div>

        {isOpen && (
          <div className="fixed w-full h-full z-20 top-0 left-0 flex">
            <div className="bg-main w-fit p-12 max-h-screen overflow-auto">
              <button
                className="block w-fit mx-auto mb-4 text-4xl"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              {theme === "dark" ?  <Link to={"/dashboard"}>
                <img src={logoone} alt="Logo" className="h-24 mx-auto mb-4" />
              </Link> :  <Link to={"/dashboard"}>
                <img src={logo} alt="Logo" className="h-24 mx-auto mb-4" />
              </Link> }
            
              <ul className="flex flex-col mb-4  min-w-[200px] gap-4 text-xl font-semibold">
                {links.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      className={({ isActive }) =>
                        `${
                          isActive ? "border-b-gold" : "hover:border-b-gold"
                        } border-b border-mainBorders text-center pb-4 block`
                      }
                      to={link.link}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ProfileMenu />
              <div className="my-2 w-fit mx-auto">
                <ThemeChanger />
              </div>
            </div>
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              style={{ backdropFilter: "blur(10px)" }}
              className="cursor-pointer flex-1"
            />
          </div>
        )}
        <ul className=" hidden lg:flex items-center justify-center gap-2">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `p-1 text-sm rounded-lg  block w-full font-semibold whitespace-nowrap`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {theme === "dark" ?    <Link to={"/dashboard"}>
          <img src={logoone} alt="Logo" className="h-10" />
        </Link>:   <Link to={"/dashboard"}>
          <img src={logo} alt="Logo" className="h-10" />
        </Link>}
      
      </div>
    </div>
  );
};

export default DashHeader;


// ${
//   isActive ? "bg-gold" : "hover:bg-gold transition-all"
// } 