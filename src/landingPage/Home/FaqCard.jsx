import { useState } from "react";

const FaqCatd = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      className="py-4 text-start flex gap-4 border-b w-full justify-between border-b-mainBorders"
    >
      <div>
        <h4 className="mb-2 font-semibold text-lg">{title} </h4>
        <p
          style={{ maxHeight: isOpen ? "1000px" : "0px" }}
          className={`text-sm mx-4 overflow-hidden transition-all duration-1000 ease-in-out`}
        >
          {answer}
        </p>
      </div>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

export default FaqCatd;
