import { useContext, useEffect, useRef, useState } from "react";
import DashboardSlide from "../components/DashboardSlide";
import PostCard from "../components/PostCard";
import { AppContext, route } from "../App";
import { useNavigate } from "react-router-dom";
import EconomicCalendar from "../components/EconomicCalendar";

const Weakly = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(0);
  const { setLoading } = useContext(AppContext);
  const contianer = useRef();
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);

    fetch(
      `${route}analytic/posts?sort=-createdAt&sharedTo=weeklyWithdraw&page=${currentPage}
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setPosts(data.data);
        } else {
          setPosts([]);
        }
        setPagesNumber(data.paginationResult.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="home-for-login">
      <div className="w-[100%] p-4">
        <div>
          {posts?.map((post) => {
            return <PostCard post={post} key={post._id} date={true} />;
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
    </div>
  );
};

export default Weakly;
