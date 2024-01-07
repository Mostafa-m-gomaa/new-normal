import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import placeHolder from "../../assets/userPlaceHolder.jpg";
import { route } from "../../App";
import { FaEye } from "react-icons/fa";

const TreeMember = ({ data, level }) => {
  // const [show, setShow] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const [children, setChildren] = useState([]);
  // const token = localStorage.getItem("token");

  // const getData = function () {
  //   setIsLoading(true);
  //   fetch(`${route}marketing/getMyChildren/${data?._id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.data) setChildren(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // };
  return (
    <li>
      <div>
        <img
          src={data?.profileImg ? data?.profileImg : placeHolder}
          onError={(e) => {
            e.target.src = placeHolder;
          }}
        />
        <span>{data?.name}</span>
        {data?.mediator?.email && (
          <span>
            <b className="text-mainText">الوسيط :</b> {data?.mediator?.email}
          </span>
        )}
      </div>
    </li>
  );
};

export default TreeMember;
