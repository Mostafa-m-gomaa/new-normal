import { useEffect, useRef, useState } from "react";
import DashboardSlide from "../components/DashboardSlide";
import PostCard from "../components/PostCard";
import { route } from "../App";
import EconomicCalendar from "../components/EconomicCalendar";
import trading from "../assets/trading.png";
import teamwork from "../assets/teamwork.png";
import training from "../assets/training.png";
import './store/dash.css'
import Faqs from "../landingPage/Home/Faqs";
const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [ads, setAds] = useState([]);
  const token = localStorage.getItem("token");
  const [num1,setNum1]=useState(0)
  const [num2,setNum2]=useState(0)
  const [num3,setNum3]=useState(0)

  // pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(0);
  const contianer = useRef();
  useEffect(() => {
    fetch(`${route}advertisements`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAds(data.data);
      });
  }, [token]);
  useEffect(() => {
    fetch(
      `${route}analytic/posts?sharedTo=home&page=${currentPage}&sort=-createdAt`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setPagesNumber(data.paginationResult.numberOfPages);
      });
  }, [token]);


  // ...

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (num1 < 40) {
  //       setNum1((prevCount) => prevCount + 1);
  //     }
  //   }, 0.001);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (num1 < 4000) {
        setNum1((prevCount) => prevCount + 5);
      } else {
        clearInterval(interval); // Stop the interval when num1 reaches 40
      }
    }, 0.01); // Adjust the interval delay as needed, e.g., 100 milliseconds

    return () => clearInterval(interval);
  }, [num1]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (num2 < 23624) {
        setNum2((prevCount) => prevCount + 100);
      } else {
        clearInterval(interval); // Stop the interval when num1 reaches 40
      }
    }, 0.001); // Adjust the interval delay as needed, e.g., 100 milliseconds

    return () => clearInterval(interval);
  }, [num2]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (num3 < 10000) {
        setNum3((prevCount) => prevCount + 10);
      } else {
        clearInterval(interval); // Stop the interval when num1 reaches 40
      }
    }, 0.001); // Adjust the interval delay as needed, e.g., 100 milliseconds

    return () => clearInterval(interval);
  }, [num3]);
  return (
    <div className="home-for-login" ref={contianer}>
      <DashboardSlide />
      <div className="counter">
<div className="counter-card">
  <img src={trading} alt="" />
  <h2>{num1} +</h2>
  <h4>متداول ومحلل في مجتمعنا</h4>
</div>
<div className="counter-card">
  <img src={training} alt="" />
  <h2> {num2} + </h2>
  <h4>متدرب في مستوياتنا الثلاث</h4>
</div>
<div className="counter-card">
  <img src={teamwork} alt="" />
  <h2>{num3} +</h2>
  <h4>مشترك مھتم</h4>
</div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-[100%] p-4">
          <div>
            {posts?.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })}
          </div>
          {pagesNumber > 1 && (
            <div className="bg-blackGold p-4 rounded-xl">
              <h2 className="text-xl text-center">هناك {pagesNumber} صفحات</h2>
              <div className="flex w-fit items-center justify-center border mx-auto border-lightGray rounded-xl">
                <button
                  className={`rounded-r-xl p-3 text-center disabled:cursor-not-allowed w-[90px] bg-gold text-dark disabled:bg-gray`}
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                    contianer.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  السابق
                </button>

                <div className=" p-3 text-center w-[90px]">{currentPage}</div>

                <button
                  className={`rounded-l-xl p-3 text-center disabled:cursor-not-allowed w-[90px] bg-gold text-dark disabled:bg-gray`}
                  disabled={pagesNumber <= currentPage}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                    contianer.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  التالي
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-[450px] xl:w-[650px]   px-2 md:px-4 rounded-xls mt-8">
          {/* <div className="bg-blackGold p-6 rounded-2xl mb-4">
            <div className=" max-w-[100%] overflow-auto">
              <EconomicCalendar />
            </div>
          </div> */}
          <div className="bg-main p-6 rounded-2xl">
            {ads?.map((ad) => (
              <a key={ad._id} target="_blank" rel="noreferrer" href={ad.link}>
                <img src={ad.image} className="my-4 w-full" alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Faqs />
    </div>
  );
};

export default Dashboard;
