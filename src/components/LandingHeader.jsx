import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logoone from "../assets/anotherLogo.png";
import ThemeChanger from "./ThemeChanger";
import { AppContext } from "../App";
const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme}=useContext(AppContext)

  const token = localStorage.getItem("token");
  useEffect(() => {
    // add event lestener to make a border bottom on scroll
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".landingNav");
      if (window.scrollY == 0) {
        nav.classList.remove("scrolled");
      } else {
        nav.classList.add("scrolled");
      }
    });
  }, []);
  const links = [
    { name: "الرئيسية", id: "mainSection", target: "/" },
    { name: "تعرف علينا", id: "aboutUsSection", target: "/about-us" },
    { name: "الخدمات", id: "productsSection", target: "/" },
    { name: "الباكدجات", id: "coursesSection", target: "/" },
    { name: "الكورسات", id: "packagesSection", target: "/" },
    { name: "المدونة", id: "blogSection", target: "/blog" },
  ];
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    // can i make it smooth scroll with long duration?

    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="bg-main sticky top-0 z-50 landingNav">
        <div className="flex  justify-between container mx-auto items-center">
          <div className="hidden lg:flex items-center justify-center gap-2">
            {!token ? (
              <Link
                to={"/login"}
                className="py-3 group flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
              >
                <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
                <span>ابدأ الان</span>
              </Link>
            ) : (
              <Link
                to={"/dashboard"}
                className="py-3 group flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
              >
                <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
                <span>اذهب للصفحة الرئيسية</span>
              </Link>
            )}
            <ThemeChanger />
          </div>
          <button
            className="lg:hidden text-4xl"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className="hidden lg:flex items-center justify-center gap-6 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => {
                    scrollToId(link.id);
                  }}
                  to={link.target}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
{theme === "dark" ?
<Link to={"/"}>
            <img src={logoone} className="h-16" alt="" />
          </Link>
:<Link to={"/"}>
<img src={logo} className="h-16" alt="" />
</Link>}
          
        </div>
        {isOpen && (
          <div className="fixed w-full h-full top-0 left-0 flex">
            <div className="bg-main w-fit p-12 max-h-screen overflow-auto">
              <button
                className="block w-fit mx-auto mb-4 text-4xl"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <ul className="flex flex-col mb-4  min-w-[200px] gap-4 text-xl font-semibold">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      className="border-b border-mainBorders text-center pb-4 block"
                      onClick={() => {
                        scrollToId(link.id);
                      }}
                      to={link.target}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={"/login"}
                className="py-3 group  items-center gap-2 rounded-full bg-mainText mx-auto block w-fit text-main text-sm font-medium px-6"
              >
                <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
                <span>ابدأ الان</span>
              </Link>
              <div className="w-fit my-4 mx-auto">
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
      </div>
      {/* <EconomicCalendar /> */}
    </>
  );
};

export default LandingHeader;
