import { useEffect, useState } from "react";
import { route } from "../App";
import axios from "axios";
import DashboardSlide from "../components/DashboardSlide";
import LoadingSpinner from "../landingPage/components/LoadingSpinner";
import PackageCard from "../components/PackageCard";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}education/packages?sort=-price`)
      .then((res) => setPackages(res.data.data));
  }, []);

  return (
    <div>
      <DashboardSlide />
      {packages.length === 0 && <LoadingSpinner />}
      <div className="grid  justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <>
          {packages?.map((item, ind) => (
            <PackageCard key={item._id} ind={ind} data={item} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Packages;
