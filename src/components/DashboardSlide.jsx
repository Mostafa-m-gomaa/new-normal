import './dash.css'
import one from "../assets/panars/screen.png";
const DashboardSlide = () => {
  return (
    <div className="img-cont">
      <img src={one} className=" md:m-0 aspect-[3/1]" alt="" />
      {/* <button>ابدأ معنا</button> */}
    </div>
  );
};

export default DashboardSlide;

// max-w-[100vw]  md:m-6 rounded-lg